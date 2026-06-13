/**
 * Renders portfolio project cards and project actions.
 */
import { Globe } from "lucide-react";

import { ProjectPreviewDialog } from "@/components/portfolio/project-preview-dialog";
import { ScrollReveal } from "@/components/portfolio/scroll-reveal";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getProjects } from "@/lib/dictionaries";
import { cn } from "@/lib/utils";

function ProjectLogo({ project }) {
  const initials = project.title
    .split(/\s+/)
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  if (project.logo) {
    return (
      <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card p-1.5 shadow-sm">
        <img src={project.logo} alt={`${project.title} logo`} className="max-h-full max-w-full object-contain" />
      </span>
    );
  }

  return (
    <span
      aria-label={`${project.title} logo placeholder`}
      className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-muted text-xs font-bold text-primary shadow-sm"
    >
      {initials}
    </span>
  );
}

export function ProjectsSection({ dictionary }) {
  const projects = getProjects(dictionary);

  return (
    <section id="projects" className="px-4 py-10" data-nav-title={dictionary.sections.projects}>
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading eyebrow={dictionary.sections.projects} title={dictionary.sections.projects} icon={Globe} />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 70} direction="scale">
              <Card
                className={cn("h-full transition hover:-translate-y-1 hover:border-primary", project.secondary && "opacity-90")}
              >
                <CardHeader>
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <ProjectLogo project={project} />
                    <Badge variant={project.secondary ? "outline" : "secondary"}>{project.label}</Badge>
                  </div>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {!project.disabledExternal && (
                    <>
                      {(project.links ?? [{ kind: "open", url: project.url }]).map((link) => (
                        <Button asChild variant="ghost" size="sm" key={`${project.id}-${link.kind}`}>
                          <a href={link.url} target="_blank" rel="noreferrer">
                            {dictionary.projectText[link.kind] ?? dictionary.projectText.open}
                          </a>
                        </Button>
                      ))}
                      <ProjectPreviewDialog project={project} labels={dictionary.projectText} />
                    </>
                  )}
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal className="mt-6 flex justify-center" direction="up">
          <Button asChild variant="outline" className="bg-white hover:bg-slate-100">
            <a href="https://github.com/A222moq3e" target="_blank" rel="noreferrer" className="!text-slate-950 hover:!text-slate-950">
              {dictionary.projectText.seeMore}
            </a>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
