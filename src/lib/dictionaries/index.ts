/**
 * Public dictionary exports and localized project composition helpers.
 */
import { ar } from "./ar";
import { en } from "./en";
import { sharedProjects } from "./projects";
import type { Dictionary, Locale, LocalizedProject } from "./types";

export const dictionaries: Record<Locale, Dictionary> = {
  en,
  ar,
};

export { sharedProjects };
export type {
  Certification,
  Dictionary,
  Direction,
  Experience,
  Locale,
  LocalizedProject,
  ProjectId,
  ProjectLinkKind,
  SectionHeadingIcon,
  SharedProject,
} from "./types";

export function getProjects(dictionary: Dictionary): LocalizedProject[] {
  return sharedProjects.map((project) => {
    const [title, description] = dictionary.projectText[project.id];

    return {
      ...project,
      title,
      description,
    };
  });
}
