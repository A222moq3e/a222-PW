/**
 * Renders localized professional and volunteer experience as a timeline.
 */
import { BriefcaseBusiness } from "lucide-react";

import { SectionHeading } from "@/components/portfolio/section-heading";
import Timeline from "@/components/ui/timeline-02";
import type { Dictionary } from "@/lib/dictionaries/types";

export function ExperienceSection({ dictionary }: { dictionary: Dictionary }) {
  return (
    <section id="experience" className="scroll-mt-20 px-4 py-10" data-nav-id="experience">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          eyebrow={dictionary.sections.experience}
          title={dictionary.sections.experience}
          icon={BriefcaseBusiness}
        />
        <Timeline experiences={dictionary.experience} />
      </div>
    </section>
  );
}
