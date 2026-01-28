import createMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";
import { routing } from "@/lib/i18n/routing";
import {
  defaultLocale,
  locales,
  getLocaleFromCountry,
  type Locale,
} from "@/lib/i18n/config";

function detectBrowserLocale(acceptLanguage: string | null): Locale | null {
  if (!acceptLanguage) return null;

  const languages = acceptLanguage
    .split(",")
    .map((lang) => lang.split(";")[0].trim().toLowerCase());

  for (const lang of languages) {
    if (locales.includes(lang as Locale)) return lang as Locale;
    const baseLang = lang.split("-")[0];
    if (locales.includes(baseLang as Locale)) return baseLang as Locale;
  }

  return null;
}

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  // 1. Check if user has a preferred locale in cookie
  const preferredLocale = request.cookies.get("NEXT_LOCALE")?.value as
    | Locale
    | undefined;

  if (preferredLocale && locales.includes(preferredLocale)) {
    return intlMiddleware(request);
  }

  // 2. Detect from Accept-Language header
  const acceptLanguage = request.headers.get("accept-language");
  const browserLocale = detectBrowserLocale(acceptLanguage);

  // 3. Detect from GeoIP (Vercel provides x-vercel-ip-country header)
  const country = request.headers.get("x-vercel-ip-country") || "";
  const geoLocale = getLocaleFromCountry(country);

  // Priority: Browser locale > Geo locale > Default
  const detectedLocale = browserLocale || geoLocale || defaultLocale;

  // Set the detected locale in cookie
  const response = intlMiddleware(request);
  response.cookies.set("NEXT_LOCALE", detectedLocale, {
    maxAge: 60 * 60 * 24 * 365, // 1 year
    path: "/",
  });

  return response;
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
