import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";
import { sendContactEmail, sendConfirmationEmail } from "@/lib/email";

const ALLOWED_ORIGINS = [
  "https://xapika.com",
  "https://www.xapika.com",
  "http://localhost:3000",
];

const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 5; // 5 requests per minute

// Note: In-memory rate limiting has limitations in serverless environments.
// For production, consider using Upstash Redis or Vercel KV.
// This implementation provides basic protection for moderate traffic.
const rateLimit = new Map<string, { count: number; timestamp: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimit.get(ip);

  // Clean up old entries on each request (serverless-friendly approach)
  rateLimit.forEach((value, key) => {
    if (now - value.timestamp > RATE_LIMIT_WINDOW * 2) {
      rateLimit.delete(key);
    }
  });

  if (!record) {
    rateLimit.set(ip, { count: 1, timestamp: now });
    return true;
  }

  if (now - record.timestamp > RATE_LIMIT_WINDOW) {
    rateLimit.set(ip, { count: 1, timestamp: now });
    return true;
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return false;
  }

  record.count++;
  return true;
}

function getCorsHeaders(request: NextRequest) {
  const origin = request.headers.get("origin");
  const allowedOrigin =
    origin && ALLOWED_ORIGINS.includes(origin)
      ? origin
      : ALLOWED_ORIGINS[0];

  return {
    "Access-Control-Allow-Origin": allowedOrigin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

export async function POST(request: NextRequest) {
  const corsHeaders = getCorsHeaders(request);

  try {
    // Rate limiting
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0] ||
      request.headers.get("x-real-ip") ||
      "anonymous";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429, headers: corsHeaders }
      );
    }

    // Parse request body
    const body = await request.json();

    // Server-side validation
    const validationResult = contactFormSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: "Validation failed",
          details: validationResult.error.flatten().fieldErrors,
        },
        { status: 400, headers: corsHeaders }
      );
    }

    const data = validationResult.data;

    // Honeypot check - if website field has value, it's likely a bot
    if (data.website && data.website.length > 0) {
      // Silently reject but return success to not tip off bots
      console.log("Honeypot triggered, rejecting submission");
      return NextResponse.json({ success: true }, { headers: corsHeaders });
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      // In development, log the form data instead
      if (process.env.NODE_ENV === "development") {
        console.log("Contact form submission (dev mode):", {
          name: data.name,
          email: data.email,
          company: data.company,
          phone: data.phone,
          type: data.type,
          message: data.message,
        });
        return NextResponse.json({ success: true }, { headers: corsHeaders });
      }
      return NextResponse.json(
        { error: "Email service is not configured" },
        { status: 500, headers: corsHeaders }
      );
    }

    // Send emails
    await sendContactEmail({
      name: data.name,
      company: data.company,
      email: data.email,
      phone: data.phone,
      type: data.type,
      message: data.message,
    });

    // Send confirmation email to the user (non-blocking)
    sendConfirmationEmail({
      name: data.name,
      company: data.company,
      email: data.email,
      phone: data.phone,
      type: data.type,
      message: data.message,
    }).catch((err) => {
      console.error("Failed to send confirmation email:", err);
    });

    return NextResponse.json({ success: true }, { headers: corsHeaders });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process your request. Please try again later." },
      { status: 500, headers: corsHeaders }
    );
  }
}

// Handle OPTIONS for CORS preflight
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: getCorsHeaders(request),
  });
}
