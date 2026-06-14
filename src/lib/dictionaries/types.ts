/**
 * Shared TypeScript types for locales, dictionaries, and projects.
 */
import type { LucideIcon } from "lucide-react";

export type Locale = "en" | "ar";
export type Direction = "ltr" | "rtl";
export type ProjectLinkKind = "open" | "website" | "github";
export type ProjectId = "sh3bh" | "ejad" | "moqraraty" | "neyam" | "edualizer" | "stemref" | "lagpsy";

export type SharedProject = {
  id: ProjectId;
  url: string;
  label: string;
  logo?: string;
  links?: Array<{
    kind: ProjectLinkKind;
    url: string;
  }>;
  secondary?: boolean;
  disabledExternal?: boolean;
};

export type LocalizedProject = SharedProject & {
  title: string;
  description: string;
};

export type Experience = {
  title: string;
  company: string;
  period: string;
  items: string[];
};

export type Certification = {
  title: string;
  provider: string;
  description: string;
  url: string;
};

export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    localeLabel: string;
    localeHref: string;
  };
  hero: {
    eyebrow: string;
    name: string;
    arabicName?: string;
    summary: string;
    primaryAction: string;
    secondaryAction: string;
  };
  contact: Record<"email" | "phone" | "website" | "linkedin" | "github" | "cyberhub", string>;
  sections: Record<
    "info" | "experience" | "credentials" | "achievements" | "projects" | "skills" | "education" | "languages",
    string
  >;
  experience: Experience[];
  certificationAction: string;
  certifications: Certification[];
  achievements: Array<[string, string]>;
  projectText: Record<ProjectId, [string, string]> &
    Record<"preview" | "open" | "website" | "github" | "seeMore" | "modalDescription", string>;
  skills: Array<[string, string]>;
  education: Array<[string, string, string]>;
  languages: Array<[string, string]>;
};

export type SectionHeadingIcon = LucideIcon;
