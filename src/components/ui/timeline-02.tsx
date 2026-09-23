import { BriefcaseBusiness, Building2, Calendar, type LucideIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { TimelineEnd, TimelineIcon, TimelineLine } from "@/components/ui/timeline-decoration";
import { ScrollReveal } from "@/components/portfolio/scroll-reveal";
import { cn } from "@/lib/utils";

export type TimelineExperience = {
  title: string;
  company: string;
  logo?: string;
  period: string;
  description?: string;
  items?: string[];
  technologies?: string[];
  icon?: LucideIcon;
};

export default function Timeline({
  experiences,
  className,
}: {
  experiences: TimelineExperience[];
  className?: string;
}) {
  return (
    <div className={cn("w-full", className)}>
      <ol className="relative ms-5">
        {experiences.map(({ company, logo, description, period, technologies, title, items, icon: Icon = BriefcaseBusiness }, index) => (
          <li className="relative pb-12" key={`${company}-${title}-${period}`}>
            <TimelineLine delay={index * 70} />
            <TimelineIcon delay={index * 70}>
              <Icon aria-hidden="true" className="h-5 w-5" />
            </TimelineIcon>
            <ScrollReveal className="relative ps-10" direction="up" delay={index * 70}>
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-accent">
                  {logo ? (
                    <img src={logo} alt="" width={36} height={36} className="h-full w-full object-contain" />
                  ) : (
                    <Building2 aria-hidden="true" className="h-5 w-5 text-muted-foreground" />
                  )}
                </div>
                <span className="text-base font-medium">{company}</span>
              </div>
              <div>
                <h3 className="text-xl font-medium tracking-normal">{title}</h3>
                <div className="mt-2 flex items-center gap-2 text-sm">
                  <Calendar aria-hidden="true" className="h-4 w-4 shrink-0" />
                  <span>{period}</span>
                </div>
              </div>
              {description && <p className="text-pretty text-sm text-muted-foreground sm:text-base">{description}</p>}
              {!!items?.length && (
                <ul className="space-y-2 ps-5 text-pretty text-sm text-muted-foreground sm:text-base">
                  {items.map((item) => <li className="list-disc" key={item}>{item}</li>)}
                </ul>
              )}
              {!!technologies?.length && (
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => <Badge className="rounded-full bg-muted text-foreground hover:bg-muted" key={tech} variant="secondary"><bdi>{tech}</bdi></Badge>)}
                </div>
              )}
            </div>
            </ScrollReveal>
          </li>
        ))}
      </ol>
      {experiences.length > 0 && <TimelineEnd />}
    </div>
  );
}
