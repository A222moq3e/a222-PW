/**
 * Renders the sticky portfolio header and section selector.
 */
"use client";

import { useEffect, useMemo, useState } from "react";

import { LocaleSwitcher } from "@/components/portfolio/locale-switcher";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

export function SiteHeader({ dictionary, locale }) {
  const navItems = useMemo(() => {
    const pairedSeparator = locale === "ar" ? " و " : " & ";

    return [
      {
        id: "hero",
        label: dictionary.hero.name,
      },
      {
        id: "experience",
        label: dictionary.sections.experience,
      },
      {
        id: "credentials",
        label: `${dictionary.sections.credentials}${pairedSeparator}${dictionary.sections.achievements}`,
      },
      {
        id: "projects",
        label: dictionary.sections.projects,
      },
      {
        id: "skills",
        label: dictionary.sections.skills,
      },
      {
        id: "education",
        label: `${dictionary.sections.education}${pairedSeparator}${dictionary.sections.languages}`,
      },
    ];
  }, [dictionary, locale]);
  const [activeSectionId, setActiveSectionId] = useState(navItems[0].id);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeTitle = navItems.find((item) => item.id === activeSectionId)?.label ?? dictionary.hero.name;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-nav-id]"));

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

          setActiveSectionId(section.dataset.navId ?? navItems[0].id);
        }
      },
      {
        rootMargin: "-28% 0px -58% 0px",
        threshold: [0.08, 0.18, 0.32, 0.48],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [navItems]);

  const handleSectionChange = (sectionId: string) => {
    setActiveSectionId(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b border-transparent bg-background/60 transition-all duration-300",
        isScrolled && "border-border/80 bg-background/86 shadow-[0_14px_46px_rgba(0,0,0,0.26)] backdrop-blur-xl"
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <div className="min-w-0 max-w-[68vw]">
          <Select
            value={activeSectionId}
            onValueChange={handleSectionChange}
          >
            <SelectTrigger aria-label="Jump to section" className="w-full max-w-[68vw]">
              <SelectValue>{activeTitle}</SelectValue>
            </SelectTrigger>
            <SelectContent align="start">
              {navItems.map((item) => (
                <SelectItem value={item.id} key={item.id}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <LocaleSwitcher dictionary={dictionary} />
      </div>
    </header>
  );
}
