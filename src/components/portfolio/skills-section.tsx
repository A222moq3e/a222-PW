/**
 * Renders grouped technical and soft skills.
 */
import { Wrench } from "lucide-react";

import { ScrollReveal } from "@/components/portfolio/scroll-reveal";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function SkillsSection({ dictionary }) {
  return (
    <section className="px-4 py-10" data-nav-title={dictionary.sections.skills}>
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading eyebrow={dictionary.sections.skills} title={dictionary.sections.skills} icon={Wrench} />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {dictionary.skills.map(([title, details], index) => (
            <ScrollReveal key={title} delay={index * 45} direction="up">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>{title}</CardTitle>
                  <CardDescription>{details}</CardDescription>
                </CardHeader>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
