/**
 * Shared section title component with an icon marker.
 */
import { ScrollReveal } from "@/components/portfolio/scroll-reveal";

export function SectionHeading({ eyebrow, title, icon: Icon }) {
  return (
    <ScrollReveal className="mb-5 flex items-center gap-3" direction="left">
      <button type="button" aria-label={title} data-launch-icon className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-lg border border-border bg-card text-primary shadow-sm transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-ring">
        <Icon className="h-5 w-5" />
      </button>
      <div>
        <p className="text-xs font-semibold uppercase tracking-normal text-primary">{eyebrow}</p>
        <h2 className="text-2xl font-bold tracking-normal text-foreground">{title}</h2>
      </div>
    </ScrollReveal>
  );
}
