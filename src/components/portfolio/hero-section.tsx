/**
 * Renders the hero introduction and contact information card.
 */
import { Sparkles } from "lucide-react";

import { AnimatedName } from "@/components/portfolio/animated-name";
import { DraggableInfoCard } from "@/components/portfolio/draggable-info-card";
import { ScrollReveal } from "@/components/portfolio/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function HeroSection({ dictionary }) {
  return (
    <section className="px-4 py-16 md:py-24" data-nav-title={dictionary.hero.name}>
      <div className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-[1.4fr_0.6fr]">
        <ScrollReveal className="flex flex-col justify-center" direction="left">
          <Badge variant="outline" className="mb-4 w-fit bg-card">
            <Sparkles className="me-1 h-3.5 w-3.5" />
            {dictionary.hero.eyebrow}
          </Badge>
          <AnimatedName name={dictionary.hero.name} />
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

        <ScrollReveal direction="right" delay={120}>
          <DraggableInfoCard dictionary={dictionary} />
        </ScrollReveal>
      </div>
    </section>
  );
}
