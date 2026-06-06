import { CredentialsSection } from "@/components/portfolio/credentials-section";
import { EducationLanguagesSection } from "@/components/portfolio/education-languages-section";
import { ExperienceSection } from "@/components/portfolio/experience-section";
import { HeroSection } from "@/components/portfolio/hero-section";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { SiteFooter } from "@/components/portfolio/site-footer";
import { SiteHeader } from "@/components/portfolio/site-header";
import { SkillsSection } from "@/components/portfolio/skills-section";

export function PortfolioPage({ dictionary, locale }) {
  return (
    <main className="min-h-screen">
      <SiteHeader dictionary={dictionary} locale={locale} />
      <HeroSection dictionary={dictionary} />
      <ExperienceSection dictionary={dictionary} />
      <CredentialsSection dictionary={dictionary} />
      <ProjectsSection dictionary={dictionary} />
      <SkillsSection dictionary={dictionary} />
      <EducationLanguagesSection dictionary={dictionary} />
      <SiteFooter />
    </main>
  );
}
