/**
 * Renders the hero introduction and contact information card.
 */
import { BootSequence, BootReveal } from "@/components/portfolio/boot-sequence";
import { AnimatedName } from "@/components/portfolio/animated-name";
import { DraggableInfoCard } from "@/components/portfolio/draggable-info-card";
import { ScrollReveal } from "@/components/portfolio/scroll-reveal";
import { Button } from "@/components/ui/button";

export function HeroSection({ dictionary }) {
  const nameDelay = 800;
  const detailsDelay = nameDelay + Array.from(dictionary.hero.name).length * 58 + 150;
  return (
    <section id="hero" className="scroll-mt-20 px-4 py-16 md:py-24" data-nav-id="hero">
      <div className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-[1.4fr_0.6fr]">
        <div className="flex flex-col justify-center">
          <BootSequence />
          <BootReveal>
          <ScrollReveal direction="up" delay={400}>
          <div className="mb-4 inline-flex max-w-full overflow-hidden rounded-[3px] border border-border font-mono text-[11px] leading-5 shadow-sm">
            <span dir="ltr" className="flex shrink-0 items-center bg-muted px-2 text-secondary">|</span>
            <span className="bg-primary/15 px-2 text-center text-foreground">{dictionary.hero.eyebrow}</span>
          </div>
          </ScrollReveal>
          <AnimatedName name={dictionary.hero.name} delay={nameDelay} />
          <ScrollReveal direction="up" delay={detailsDelay}>
          {dictionary.hero.arabicName && (
            <p className="mt-4 text-xl font-bold text-primary" lang="ar" dir="rtl">
              {dictionary.hero.arabicName}
            </p>
          )}
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{dictionary.hero.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="!text-white hover:!text-white">
              <a href="#projects">{dictionary.hero.primaryAction}</a>
            </Button>
            <Button asChild variant="outline">
              <a href="mailto:moq3e2000@gmail.com">{dictionary.hero.secondaryAction}</a>
            </Button>
          </div>
          </ScrollReveal>
          </BootReveal>
        </div>

        <BootReveal><DraggableInfoCard dictionary={dictionary} delay={detailsDelay + 150} /></BootReveal>
      </div>
    </section>
  );
}
