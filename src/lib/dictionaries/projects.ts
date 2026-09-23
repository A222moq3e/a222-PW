/**
 * Shared project URLs, labels, and preview metadata.
 */
import type { SharedProject } from "./types";

export const sharedProjects: SharedProject[] = [
  {
    id: "moqraraty",
    url: "https://moqraraty.com/",
    label: "moqraraty.com",
    logo: "/imgs/moqraraty/Moqraraty_logo.png",
  },
  {
    id: "ejad",
    url: "https://ejad.sh3bh.com/",
    label: "ejad.sh3bh.com",
    logo: "/imgs/ejad/Ejad_Sh3bh_logo.svg",
  },
  {
    id: "sh3bh",
    url: "https://sh3bh.com/",
    label: "sh3bh.com",
    logo: "/imgs/sh3bh/sh3bh_logo.png",
  },
  {
    id: "neyam",
    url: "#",
    label: "Neyam Website",
    logo: "/imgs/neyam/Neyam_Qubes_logo.jpg",
    disabledExternal: true,
  },
  {
    id: "edualizer",
    url: "https://edualizer.video/",
    label: "edualizer.video",
    logo: "/imgs/edualizer/Edualizer.svg",
  },
  {
    id: "stemref",
    url: "https://stemref.askardesign.com/",
    label: "stemref.askardesign.com",
    logo: "/imgs/stemref/STEMREF_logo.svg",
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
    logo: "/imgs/lagpsy/lagpsy_logo.svg",
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
