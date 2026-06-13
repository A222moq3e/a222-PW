/**
 * Renders the sticky portfolio header and language switcher.
 */
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { LocaleSwitcher } from "@/components/portfolio/locale-switcher";
import { cn } from "@/lib/utils";

export function SiteHeader({ dictionary, locale }) {
  const [activeTitle, setActiveTitle] = useState(dictionary.hero.name);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-nav-title]"));

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
          const section = visibleEntry.target as HTMLElement;

          setActiveTitle(section.dataset.navTitle ?? dictionary.hero.name);
        }
      },
      {
        rootMargin: "-28% 0px -58% 0px",
        threshold: [0.08, 0.18, 0.32, 0.48],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [dictionary.hero.name]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b border-transparent bg-background/60 transition-all duration-300",
        isScrolled && "border-border/80 bg-background/86 shadow-[0_14px_46px_rgba(0,0,0,0.26)] backdrop-blur-xl"
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
        <Link href={`/${locale}`} className="min-w-0 font-bold text-foreground transition hover:text-primary">
          <span className="block truncate">{activeTitle}</span>
        </Link>
        <LocaleSwitcher dictionary={dictionary} />
      </div>
    </header>
  );
}
