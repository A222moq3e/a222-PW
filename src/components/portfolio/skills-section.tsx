import { SortableCards } from "@/components/portfolio/sortable-cards";
/**
 * Renders grouped technical and soft skills.
 */
import { Wrench } from "lucide-react";

import { AppLaunch, AppLaunchContent, AppLaunchItem } from "@/components/portfolio/app-launch";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function SkillsSection({ dictionary }) {
  return (
    <section id="skills" className="scroll-mt-20 px-4 py-10" data-nav-id="skills">
      <AppLaunch className="mx-auto w-full max-w-6xl">
        <SectionHeading eyebrow={dictionary.sections.skills} title={dictionary.sections.skills} icon={Wrench} />
        <AppLaunchContent><SortableCards className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {dictionary.skills.map(([title, details], index) => (
            <AppLaunchItem key={title} index={index}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>{title}</CardTitle>
                  <CardDescription>{details}</CardDescription>
                </CardHeader>
              </Card>
            </AppLaunchItem>
          ))}
        </SortableCards></AppLaunchContent>
      </AppLaunch>
    </section>
  );
}
