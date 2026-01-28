export const locales = ["en", "ko"] as const;
export const defaultLocale = "en" as const;

export type Locale = (typeof locales)[number];

// Country to locale mapping
export const countryToLocale: Record<string, Locale> = {
  KR: "ko", // South Korea
};

// Get locale from country code
export function getLocaleFromCountry(country: string): Locale {
  return countryToLocale[country] || defaultLocale;
}
