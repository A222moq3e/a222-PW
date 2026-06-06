export const locales = ["en", "ar"];
export const defaultLocale = "en";

export function isLocale(value) {
  return locales.includes(value);
}

export function getDirection(locale) {
  return locale === "ar" ? "rtl" : "ltr";
}
