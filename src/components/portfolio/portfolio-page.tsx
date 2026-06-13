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
import { SkillsSection } from "@/components/portfolio/skills-section";

export function PortfolioPage({ dictionary, locale }) {
  return (
    <main className="relative isolate min-h-screen">
      <CursorSpark />
      <div className="relative z-10">
        <SiteHeader dictionary={dictionary} locale={locale} />
        <HeroSection dictionary={dictionary} />
        <ExperienceSection dictionary={dictionary} />
        <CredentialsSection dictionary={dictionary} />
        <ProjectsSection dictionary={dictionary} />
        <SkillsSection dictionary={dictionary} />
        <EducationLanguagesSection dictionary={dictionary} />
        <SiteFooter />
      </div>
    </main>
  );
}
