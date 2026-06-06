import { notFound } from "next/navigation";

import { PortfolioPage } from "@/components/portfolio/portfolio-page";
import { dictionaries } from "@/lib/dictionaries";
import { isLocale } from "@/lib/i18n";

export default async function LocalePage({ params }) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <PortfolioPage dictionary={dictionaries[locale]} locale={locale} />;
}
