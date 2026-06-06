import { BriefcaseBusiness } from "lucide-react";

import { SectionHeading } from "@/components/portfolio/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function ExperienceSection({ dictionary }) {
  return (
    <section className="px-4 py-10">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          eyebrow={dictionary.sections.experience}
          title={dictionary.sections.experience}
          icon={BriefcaseBusiness}
        />
        <div className="grid gap-4">
          {dictionary.experience.map((job) => (
            <Card key={`${job.title}-${job.period}`}>
              <CardHeader className="md:flex-row md:items-start md:justify-between md:space-y-0">
                <div>
                  <CardTitle>{job.title}</CardTitle>
                  <CardDescription>{job.company}</CardDescription>
                </div>
                <Badge variant="secondary">{job.period}</Badge>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-2 ps-5 text-sm text-muted-foreground">
                  {job.items.map((item) => (
                    <li className="list-disc" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
