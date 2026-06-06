import type { Dictionary } from "../../types";

export const certificationAction: Dictionary["certificationAction"] = "Verify credential";

export const certifications: Dictionary["certifications"] = [
  {
    title: "eJPT",
    provider: "INE / eLearnSecurity",
    description: "eLearnSecurity Junior Penetration Tester with entry-level red team skills and real-world style labs.",
    url: "https://certs.ine.com/578a0663-0b3a-4f8d-9afa-b1d34329de2c",
  },
  {
    title: "eWPT",
    provider: "INE / eLearnSecurity",
    description: "eLearnSecurity Web Application Penetration Tester focused on web vulnerabilities and methodology.",
    url: "https://my.ine.com/certificate/be3f3e16-8ef2-412d-9295-77d02558604e",
  },
  {
    title: "eCPPT",
    provider: "INE / eLearnSecurity",
    description: "eLearnSecurity Certified Professional Penetration Tester covering network, web, AD, and reporting.",
    url: "https://certs.ine.com/128e9d38-0810-4604-b8ad-affb03b063b5",
  },
];

export const achievements: Dictionary["achievements"] = [
  ["Top 10", "CyberHub university ranking"],
  ["Top 300", "FlagYard global ranking"],
  ["Top 100", "BlackHat MEA CTF 2024 global event team"],
  ["Top 2%", "TryHackMe global ranking"],
];
