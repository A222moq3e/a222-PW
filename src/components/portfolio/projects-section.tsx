/**
 * Renders portfolio project cards and project actions.
 */
import { Globe } from "lucide-react";

import { ProjectPreviewDialog } from "@/components/portfolio/project-preview-dialog";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getProjects } from "@/lib/dictionaries";
import { cn } from "@/lib/utils";

export function ProjectsSection({ dictionary }) {
  const projects = getProjects(dictionary);

  return (
    <section id="projects" className="px-4 py-10">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading eyebrow={dictionary.sections.projects} title={dictionary.sections.projects} icon={Globe} />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.id}
              className={cn("transition hover:-translate-y-1 hover:border-primary", project.secondary && "opacity-90")}
            >
              <CardHeader>
                <div className="mb-3 flex items-center justify-between gap-3">
                  <img
                    src={
                      project.disabledExternal
                        ? "/imgs/logo.png"
                        : `https://s2.googleusercontent.com/s2/favicons?domain_url=${project.url}`
                    }
                    alt=""
                    className="h-8 w-8 rounded-md border border-border bg-card p-1"
                  />
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
          ))}
        </div>
      </div>
    </section>
  );
}
