/**
 * Shared project URLs, labels, and preview metadata.
 */
import type { SharedProject } from "./types";

export const sharedProjects: SharedProject[] = [
  {
    id: "sh3bh",
    url: "https://sh3bh.com/",
    label: "sh3bh.com",
  },
  {
    id: "ejad",
    url: "https://ejad.sh3bh.com/",
    label: "ejad.sh3bh.com",
  },
  {
    id: "moqraraty",
    url: "https://moqraraty.com/",
    label: "moqraraty.com",
  },
  {
    id: "neyam",
    url: "#",
    label: "Neyam Website",
    disabledExternal: true,
  },
  {
    id: "stemref",
    url: "https://stemref.askardesign.com/",
    label: "stemref.askardesign.com",
    links: [
      {
        kind: "website",
        url: "https://stemref.askardesign.com/",
      },
      {
        kind: "github",
        url: "https://github.com/A222moq3e/STEMREF",
      },
    ],
    secondary: true,
  },
  {
    id: "lagpsy",
    url: "https://lagpsy.vercel.app/",
    label: "lagpsy.vercel.app",
    links: [
      {
        kind: "website",
        url: "https://lagpsy.vercel.app/",
      },
      {
        kind: "github",
        url: "https://github.com/A222moq3e/LAG_Website",
      },
    ],
    secondary: true,
  },
];
