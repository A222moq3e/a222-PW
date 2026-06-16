/**
 * Renders education history and language proficiency.
 */
import { GraduationCap } from "lucide-react";

import { ScrollReveal } from "@/components/portfolio/scroll-reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function EducationLanguagesSection({ dictionary }) {
  return (
    <section
      id="education"
      className="scroll-mt-20 px-4 py-10 pb-16"
      data-nav-id="education"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-6 lg:grid-cols-2">
        <ScrollReveal direction="left">
          <Card className="h-full">
            <CardHeader>
              <div className="flex items-center gap-3">
                <GraduationCap className="h-5 w-5 text-primary" />
                <CardTitle>{dictionary.sections.education}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="grid gap-4">
              {dictionary.education.map(([school, period, detail], index) => (
                <div key={school}>
                  {index > 0 && <Separator className="mb-4" />}
                  <div className="flex flex-wrap justify-between gap-2">
                    <strong>{school}</strong>
                    <span className="text-sm text-muted-foreground">{period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{detail}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </ScrollReveal>

        <ScrollReveal direction="right" delay={120}>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>{dictionary.sections.languages}</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              {dictionary.languages.map(([language, level], index) => (
                <div key={language}>
                  {index > 0 && <Separator className="mb-4" />}
                  <div className="flex flex-wrap justify-between gap-2">
                    <strong>{language}</strong>
                    <span className="text-sm text-muted-foreground">{level}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
}
