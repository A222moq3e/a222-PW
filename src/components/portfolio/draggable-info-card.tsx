"use client";

/**
 * Draggable contact info card.
 */
import { motion, useReducedMotion } from "motion/react";
import { Globe, Mail, Phone, ShieldCheck } from "lucide-react";

import { GithubIcon } from "@/components/icons/github-icon";
import { LinkedinIcon } from "@/components/icons/linkedin-icon";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function DraggableInfoCard({ dictionary }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="group relative cursor-grab active:cursor-grabbing"
      drag={!shouldReduceMotion}
      dragMomentum={false}
      whileDrag={{ scale: 1.02, zIndex: 30 }}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -end-6 -top-8 z-0 rotate-12 select-none text-7xl font-black leading-none text-primary/10 transition group-hover:text-primary/16"
      >
        :)
      </span>
      <Card className="h-fit cursor-grab border-dashed transition group-hover:-translate-y-1 group-hover:border-primary group-hover:shadow-[0_22px_70px_rgba(59,130,246,0.22)] group-active:cursor-grabbing">
        <CardHeader>
          <CardTitle>{dictionary.sections.info}</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3">
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
              className="flex min-w-0 items-center gap-3 text-sm text-muted-foreground transition hover:text-primary"
              key={label}
            >
              <Icon className="h-4 w-4 shrink-0 text-secondary" />
              <span className="truncate">{label}</span>
            </a>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
}
