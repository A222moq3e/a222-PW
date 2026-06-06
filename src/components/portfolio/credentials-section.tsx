import { Award, Sparkles } from "lucide-react";

import { SectionHeading } from "@/components/portfolio/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function CredentialsSection({ dictionary }) {
  return (
    <section className="px-4 py-10">
      <div className="mx-auto grid w-full max-w-6xl gap-6 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow={dictionary.sections.credentials}
            title={dictionary.sections.credentials}
            icon={Award}
          />
          <div className="grid gap-4">
            {dictionary.certifications.map((certification) => (
              <Card key={certification.title}>
                <CardHeader>
                  <CardTitle>{certification.title}</CardTitle>
                  <p className="text-sm font-medium text-primary">{certification.provider}</p>
                  <CardDescription>{certification.description}</CardDescription>
                  <Button asChild variant="outline" size="sm" className="mt-3 w-fit">
                    <a href={certification.url} target="_blank" rel="noreferrer">
                      {dictionary.certificationAction}
                    </a>
                  </Button>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow={dictionary.sections.achievements}
            title={dictionary.sections.achievements}
            icon={Sparkles}
          />
          <div className="grid grid-cols-2 gap-4">
            {dictionary.achievements.map(([value, label]) => (
              <Card key={label}>
                <CardHeader>
                  <CardTitle className="text-3xl text-secondary">{value}</CardTitle>
                  <CardDescription>{label}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
