/**
 * Locale constants and direction helpers.
 */
import type { Direction, Locale } from "@/lib/dictionaries";

export const locales = ["en", "ar"] as const;
export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getDirection(locale: Locale): Direction {
  return locale === "ar" ? "rtl" : "ltr";
}
