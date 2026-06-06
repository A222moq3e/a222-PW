/**
 * Renders the sticky portfolio header and language switcher.
 */
import Link from "next/link";

import { LocaleSwitcher } from "@/components/portfolio/locale-switcher";

export function SiteHeader({ dictionary, locale }) {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/88 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
        <Link href={`/${locale}`} className="font-bold text-foreground">
          {dictionary.hero.name}
        </Link>
        <LocaleSwitcher dictionary={dictionary} />
      </div>
    </header>
  );
}
