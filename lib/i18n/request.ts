import { getRequestConfig } from "next-intl/server";
import { cookies, headers } from "next/headers";
import { defaultLocale, locales, type Locale } from "./config";

function detectBrowserLocale(acceptLanguage: string | null): Locale | null {
  if (!acceptLanguage) return null;

  const languages = acceptLanguage
    .split(",")
    .map((lang) => lang.split(";")[0].trim().toLowerCase());

  for (const lang of languages) {
    // Exact match (ko, en)
    if (locales.includes(lang as Locale)) return lang as Locale;
    // Partial match (ko-KR → ko, en-US → en)
    const baseLang = lang.split("-")[0];
    if (locales.includes(baseLang as Locale)) return baseLang as Locale;
  }

  return null;
}

export default getRequestConfig(async () => {
  // 1. Check user preference in cookie
  const cookieStore = await cookies();
  const preferredLocale = cookieStore.get("NEXT_LOCALE")?.value as
    | Locale
    | undefined;

  if (preferredLocale && locales.includes(preferredLocale)) {
    return {
      locale: preferredLocale,
      messages: (await import(`@/messages/${preferredLocale}.json`)).default,
    };
  }

  // 2. Detect from Accept-Language header
  const headerStore = await headers();
  const acceptLanguage = headerStore.get("accept-language");
  const browserLocale = detectBrowserLocale(acceptLanguage);

  const locale = browserLocale || defaultLocale;

  return {
    locale,
    messages: (await import(`@/messages/${locale}.json`)).default,
  };
});
