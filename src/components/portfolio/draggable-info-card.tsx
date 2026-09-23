"use client";

/**
 * Draggable contact info card.
 */
import { motion, useDragControls, useReducedMotion } from "motion/react";
import { Globe, Mail, Phone, ShieldCheck } from "lucide-react";

import { GithubIcon } from "@/components/icons/github-icon";
import { LinkedinIcon } from "@/components/icons/linkedin-icon";
import Safari_01 from "@/components/ui/safari-01";

export function DraggableInfoCard({ dictionary }) {
  const shouldReduceMotion = useReducedMotion();
  const dragControls = useDragControls();

  return (
    <motion.div
      className="relative min-w-0"
      drag={!shouldReduceMotion}
      dragControls={dragControls}
      dragListener={false}
      dragMomentum={false}
      whileDrag={{ scale: 1.02, zIndex: 30 }}
    >
      <Safari_01
        title={dictionary.sections.info}
        onTitlePointerDown={(event) => {
          if (!shouldReduceMotion) dragControls.start(event);
        }}
      >
        <div className="grid gap-1">
          {[
            [Mail, dictionary.contact.email, "mailto:moq3e2000@gmail.com"],
            [Phone, dictionary.contact.phone, "tel:+966507485316"],
            [Globe, dictionary.contact.website, "https://a222ghoul.com"],
            [LinkedinIcon, dictionary.contact.linkedin, "https://linkedin.com/in/a222web"],
            [GithubIcon, dictionary.contact.github, "https://github.com/A222moq3e"],
            [ShieldCheck, dictionary.contact.cyberhub, "https://cyberhub.sa/profile/a222_a222"],
          ].map(([Icon, label, href]) => (
            <a
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="flex min-h-11 min-w-0 items-center gap-3 rounded-sm text-sm text-muted-foreground transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-ring"
              key={label}
            >
              <Icon className="h-4 w-4 shrink-0 text-secondary" />
              <span dir="ltr" className="truncate">{label}</span>
            </a>
          ))}
        </div>
      </Safari_01>
    </motion.div>
  );
}
