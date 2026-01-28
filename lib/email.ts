import { Resend } from "resend";

function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }
  return new Resend(apiKey);
}

// Escape HTML to prevent XSS attacks in email content
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export interface ContactEmailData {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  type: string;
  message: string;
}

const inquiryTypeLabels: Record<string, string> = {
  general: "General Inquiry",
  partnership: "Partnership",
  support: "Technical Support",
  other: "Other",
};

export async function sendContactEmail(data: ContactEmailData) {
  const { name, company, email, phone, type, message } = data;

  // Escape user inputs for HTML content
  const safeName = escapeHtml(name);
  const safeCompany = escapeHtml(company || "Not provided");
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone || "Not provided");
  const safeMessage = escapeHtml(message);

  const emailContent = `
New Contact Form Submission

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CONTACT INFORMATION
• Name: ${name}
• Company: ${company || "Not provided"}
• Email: ${email}
• Phone: ${phone || "Not provided"}

INQUIRY DETAILS
• Type: ${inquiryTypeLabels[type] || type}

MESSAGE
${message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Sent from Xapika Website Contact Form
  `.trim();

  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      background: linear-gradient(135deg, #0A1628 0%, #0066CC 100%);
      color: white;
      padding: 30px;
      border-radius: 8px 8px 0 0;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
    }
    .content {
      background: #f9fafb;
      padding: 30px;
      border: 1px solid #e5e7eb;
      border-top: none;
      border-radius: 0 0 8px 8px;
    }
    .section {
      margin-bottom: 24px;
    }
    .section-title {
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: #6b7280;
      margin-bottom: 12px;
      padding-bottom: 8px;
      border-bottom: 1px solid #e5e7eb;
    }
    .field {
      margin-bottom: 8px;
    }
    .label {
      font-weight: 600;
      color: #374151;
    }
    .value {
      color: #4b5563;
    }
    .message-box {
      background: white;
      padding: 16px;
      border-radius: 6px;
      border: 1px solid #e5e7eb;
      white-space: pre-wrap;
    }
    .footer {
      text-align: center;
      margin-top: 24px;
      font-size: 12px;
      color: #9ca3af;
    }
    .reply-button {
      display: inline-block;
      background: #0066CC;
      color: white;
      padding: 12px 24px;
      border-radius: 6px;
      text-decoration: none;
      font-weight: 600;
      margin-top: 16px;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>New Contact Form Submission</h1>
  </div>
  <div class="content">
    <div class="section">
      <div class="section-title">Contact Information</div>
      <div class="field">
        <span class="label">Name:</span>
        <span class="value">${safeName}</span>
      </div>
      <div class="field">
        <span class="label">Company:</span>
        <span class="value">${safeCompany}</span>
      </div>
      <div class="field">
        <span class="label">Email:</span>
        <span class="value"><a href="mailto:${safeEmail}">${safeEmail}</a></span>
      </div>
      <div class="field">
        <span class="label">Phone:</span>
        <span class="value">${safePhone}</span>
      </div>
    </div>

    <div class="section">
      <div class="section-title">Inquiry Details</div>
      <div class="field">
        <span class="label">Type:</span>
        <span class="value">${inquiryTypeLabels[type] || type}</span>
      </div>
    </div>

    <div class="section">
      <div class="section-title">Message</div>
      <div class="message-box">${safeMessage.replace(/\n/g, "<br>")}</div>
    </div>

    <div style="text-align: center;">
      <a href="mailto:${safeEmail}?subject=Re: Your inquiry to Xapika" class="reply-button">
        Reply to ${safeName}
      </a>
    </div>
  </div>
  <div class="footer">
    This email was sent from the Xapika website contact form.
  </div>
</body>
</html>
  `.trim();

  const resend = getResend();
  const { data: result, error } = await resend.emails.send({
    from: "Xapika Website <noreply@xapika.com>",
    to: ["contact@xapika.com"],
    replyTo: email,
    subject: `[Website Inquiry] ${inquiryTypeLabels[type] || type} - ${name}`,
    text: emailContent,
    html: htmlContent,
  });

  if (error) {
    console.error("Failed to send email:", error);
    throw new Error("Failed to send email");
  }

  return result;
}

export async function sendConfirmationEmail(data: ContactEmailData) {
  const { name, email } = data;
  const safeName = escapeHtml(name);

  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      background: linear-gradient(135deg, #0A1628 0%, #0066CC 100%);
      color: white;
      padding: 40px 30px;
      border-radius: 8px 8px 0 0;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      font-size: 28px;
    }
    .content {
      background: #ffffff;
      padding: 40px 30px;
      border: 1px solid #e5e7eb;
      border-top: none;
      border-radius: 0 0 8px 8px;
    }
    .greeting {
      font-size: 18px;
      margin-bottom: 20px;
    }
    p {
      color: #4b5563;
      margin-bottom: 16px;
    }
    .footer {
      text-align: center;
      margin-top: 32px;
      padding-top: 24px;
      border-top: 1px solid #e5e7eb;
      font-size: 14px;
      color: #6b7280;
    }
    .company-info {
      margin-top: 16px;
      font-size: 12px;
      color: #9ca3af;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>Thank You for Contacting Us</h1>
  </div>
  <div class="content">
    <p class="greeting">Dear ${safeName},</p>

    <p>Thank you for reaching out to Xapika. We have received your inquiry and our team will review it promptly.</p>

    <p>You can expect a response from us within 1-2 business days. If your matter is urgent, please don't hesitate to call us directly.</p>

    <p>We appreciate your interest in our railway vehicle maintenance services.</p>

    <p>Best regards,<br><strong>The Xapika Team</strong></p>

    <div class="footer">
      <p><strong>Xapika Sp. z o.o.</strong></p>
      <div class="company-info">
        ul. Kolejowa 1, 00-001 Warsaw, Poland<br>
        Phone: +48 22 123 4567 | Email: contact@xapika.com
      </div>
    </div>
  </div>
</body>
</html>
  `.trim();

  const resend = getResend();
  const { data: result, error } = await resend.emails.send({
    from: "Xapika <noreply@xapika.com>",
    to: [email],
    subject: "Thank you for contacting Xapika",
    html: htmlContent,
  });

  if (error) {
    console.error("Failed to send confirmation email:", error);
    // Don't throw - confirmation email failure shouldn't break the flow
  }

  return result;
}
