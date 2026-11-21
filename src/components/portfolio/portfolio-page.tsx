import { BootProvider, BootReveal } from "@/components/portfolio/boot-sequence";
/**
 * Composes all portfolio sections into the localized page.
 */
import { CredentialsSection } from "@/components/portfolio/credentials-section";
import { CursorSpark } from "@/components/portfolio/cursor-spark";
import { EducationLanguagesSection } from "@/components/portfolio/education-languages-section";
import { ExperienceSection } from "@/components/portfolio/experience-section";
import { HeroSection } from "@/components/portfolio/hero-section";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { SiteFooter } from "@/components/portfolio/site-footer";
import { SiteHeader } from "@/components/portfolio/site-header";
import { PeekCursors } from "@/components/portfolio/peek-cursors";
import { ScrollHint } from "@/components/portfolio/scroll-hint";
import { SkillsSection } from "@/components/portfolio/skills-section";

export function PortfolioPage({ dictionary, locale }) {
  return (
    <main className="relative isolate min-h-screen overflow-x-clip">
      <BootProvider>
      <BootReveal><CursorSpark /></BootReveal>
      <div className="relative">
        <BootReveal><SiteHeader dictionary={dictionary} locale={locale} /></BootReveal>
        <HeroSection dictionary={dictionary} />
        <BootReveal>
        <ExperienceSection dictionary={dictionary} />
        <CredentialsSection dictionary={dictionary} />
        <ProjectsSection dictionary={dictionary} />
        <SkillsSection dictionary={dictionary} />
        <EducationLanguagesSection dictionary={dictionary} />
        <SiteFooter />
        <ScrollHint label={dictionary.hero.scrollHint} />
        <PeekCursors />
        </BootReveal>
      </div>
      </BootProvider>
    </main>
  );
}
