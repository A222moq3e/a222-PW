"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Award, BriefcaseBusiness, FolderCode, GraduationCap, LayoutGrid, Sparkles, UserRound, Wrench } from "lucide-react";
import { useReducedMotion } from "motion/react";
import { LocaleSwitcher } from "@/components/portfolio/locale-switcher";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";
import { cn } from "@/lib/utils";

/** A desktop taskbar: visited sections remain open and the current app is active. */
export function SiteHeader({ dictionary, locale }) {
  const reduced = useReducedMotion();
  const navItems = useMemo(() => [
    { id: "hero", label: dictionary.sections.info, icon: UserRound },
    { id: "experience", label: dictionary.sections.experience, icon: BriefcaseBusiness },
    { id: "credentials", label: dictionary.sections.credentials, icon: Award },
    { id: "achievements", label: dictionary.sections.achievements, icon: Sparkles },
    { id: "projects", label: dictionary.sections.projects, icon: FolderCode },
    { id: "skills", label: dictionary.sections.skills, icon: Wrench },
    { id: "education", label: dictionary.sections.educationLanguages, icon: GraduationCap },
  ], [dictionary]);
  const [active, setActive] = useState("hero");
  const [opened, setOpened] = useState(["hero"]);
  const strip = useRef<HTMLDivElement>(null);
  const requested = useRef<string | null>(null);
  const activate = (id: string) => {
    setActive(id);
    setOpened((current) => current.includes(id) ? current : [...current, id]);
  };

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-nav-id]"));
      if (!sections.length) return;
      const line = window.innerHeight * 0.3;
      let id = "hero";
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= line) id = section.dataset.navId ?? id;
      }
      if (window.scrollY > 0 && window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) {
        id = sections.at(-1)?.dataset.navId ?? id;
      }
      const reached = sections.filter((section) => section.getBoundingClientRect().top <= line)
        .map((section) => section.dataset.navId).filter(Boolean) as string[];
      setOpened((current) => reached.every((item) => current.includes(item)) ? current : [...new Set([...current, ...reached])]);
      // Side-by-side apps can share the same top edge. Keep the explicitly
      // opened app active while its section is on screen.
      if (requested.current) {
        const target = document.getElementById(requested.current);
        const rect = target?.getBoundingClientRect();
        if (rect && rect.top <= line && rect.bottom > line) id = requested.current;
        else if (rect && rect.bottom <= 0) requested.current = null;
      }
      activate(id);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  useEffect(() => {
    const container = strip.current;
    const button = container?.querySelector<HTMLElement>(`[data-app="${active}"]`);
    if (!container || !button) return;
    const a = container.getBoundingClientRect();
    const b = button.getBoundingClientRect();
    if (b.left < a.left) container.scrollBy({ left: b.left - a.left - 8, behavior: reduced ? "instant" : "smooth" });
    else if (b.right > a.right) container.scrollBy({ left: b.right - a.right + 8, behavior: reduced ? "instant" : "smooth" });
  }, [active, opened, reduced]);

  const openApp = (id: string) => {
    requested.current = id;
    activate(id);
    const target = document.getElementById(id);
    if (target) window.scrollTo({ top: window.scrollY + target.getBoundingClientRect().top - 80, behavior: reduced ? "instant" : "smooth" });
    window.dispatchEvent(new CustomEvent("portfolio:launch-section", { detail: id }));
  };
  const label = locale === "ar" ? "?????????" : "Apps";

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 shadow-[0_8px_24px_rgba(0,0,0,0.2)] backdrop-blur-xl">
      <nav aria-label={locale === "ar" ? "???? ??????? ?????? ???????" : "CV app taskbar"}
        className="mx-auto flex h-16 w-full max-w-6xl items-center gap-2 px-3 md:gap-3 md:px-4">
        <Select value={active} onValueChange={openApp} dir={locale === "ar" ? "rtl" : "ltr"}>
          <SelectTrigger aria-label={label} className="h-11 w-11 shrink-0 justify-center border-border bg-card p-0 [&>svg:last-child]:hidden">
            <LayoutGrid aria-hidden="true" className="size-5 text-secondary" />
          </SelectTrigger>
          <SelectContent align="start">
            {navItems.map(({ id, label, icon: Icon }) => (
              <SelectItem key={id} value={id}>
                <span className="flex items-center gap-2"><Icon aria-hidden="true" className="size-4 text-secondary" />{label}</span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="h-7 w-px shrink-0 bg-border" aria-hidden="true" />
        <div ref={strip} className="flex min-w-0 flex-1 items-center gap-1 overflow-x-auto py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {navItems.filter((item) => opened.includes(item.id)).map(({ id, label, icon: Icon }) => (
            <button key={id} type="button" data-app={id} onClick={() => openApp(id)}
              aria-label={label} aria-current={active === id ? "location" : undefined} title={label}
              className={cn("relative flex h-11 shrink-0 items-center justify-center gap-2 rounded-md border px-3 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-ring motion-reduce:transition-none",
                active === id ? "border-border bg-accent text-foreground" : "border-transparent bg-card/50 text-muted-foreground hover:bg-muted hover:text-foreground")}>
              <Icon aria-hidden="true" className={cn("size-5 shrink-0", active === id ? "text-secondary" : "text-primary")} />
              <span className={cn("max-w-44 truncate", active === id ? "max-w-28 md:max-w-44" : "hidden lg:inline")}>{label}</span>
              <span aria-hidden="true" className={cn("absolute bottom-0.5 left-1/2 h-0.5 -translate-x-1/2 rounded-full", active === id ? "w-5 bg-secondary" : "w-1 bg-muted-foreground")} />
            </button>
          ))}
        </div>
        <div className="shrink-0"><LocaleSwitcher dictionary={dictionary} /></div>
      </nav>
    </header>
  );
}
