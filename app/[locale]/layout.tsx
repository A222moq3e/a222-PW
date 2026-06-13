/**
 * Applies locale direction and metadata for localized pages.
 */
import { notFound } from "next/navigation";

import { dictionaries } from "@/lib/dictionaries";
import { getDirection, isLocale, locales } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const dictionary = dictionaries[locale];

  return {
    title: dictionary.meta.title,
    description: dictionary.meta.description,
    icons: {
      icon: "/imgs/sword_chieldV2.jpg",
    },
    alternates: {
      languages: {
        en: "/en",
        ar: "/ar",
      },
    },
  };
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <div lang={locale} dir={getDirection(locale)} className={locale === "ar" ? "font-arabic" : undefined}>
      {children}
    </div>
  );
}
