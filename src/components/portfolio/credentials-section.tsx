import { SortableCards } from "@/components/portfolio/sortable-cards";
/**
 * Renders certifications and achievement highlights.
 */
import { Award, Sparkles } from "lucide-react";

import { AchievementNumber } from "@/components/portfolio/achievement-number";
import { AppLaunch, AppLaunchContent, AppLaunchItem } from "@/components/portfolio/app-launch";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function CredentialsSection({ dictionary }) {
  return (
    <section
      id="credentials"
      className="scroll-mt-20 px-4 py-10"
      data-nav-id="credentials"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-6 lg:grid-cols-2">
        <AppLaunch>
          <SectionHeading
            eyebrow={dictionary.sections.credentials}
            title={dictionary.sections.credentials}
            icon={Award}
          />
          <AppLaunchContent><SortableCards className="grid gap-4">
            {dictionary.certifications.map((certification, index) => (
              <AppLaunchItem key={certification.title} index={index}>
                <Card>
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
              </AppLaunchItem>
            ))}
          </SortableCards></AppLaunchContent>
        </AppLaunch>

        <div id="achievements" data-nav-id="achievements" className="scroll-mt-20">
        <AppLaunch>
          <SectionHeading
            eyebrow={dictionary.sections.achievements}
            title={dictionary.sections.achievements}
            icon={Sparkles}
          />
          <AppLaunchContent><SortableCards className="grid grid-cols-2 gap-4">
            {dictionary.achievements.map(([value, label], index) => (
              <AppLaunchItem key={label} index={index}>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-3xl text-secondary">
                      <AchievementNumber value={value} />
                    </CardTitle>
                    <CardDescription>{label}</CardDescription>
                  </CardHeader>
                </Card>
              </AppLaunchItem>
            ))}
          </SortableCards></AppLaunchContent>
        </AppLaunch>
        </div>
      </div>
    </section>
  );
}
