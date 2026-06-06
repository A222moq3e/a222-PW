/**
 * Arabic credentials section content for the portfolio dictionary.
 */
import type { Dictionary } from "../../types";

export const certificationAction: Dictionary["certificationAction"] = "تحقق من الشهادة";

export const certifications: Dictionary["certifications"] = [
  {
    title: "eJPT",
    provider: "INE / eLearnSecurity",
    description: "شهادة eLearnSecurity Junior Penetration Tester بمهارات Red Team تأسيسية ومختبرات عملية.",
    url: "https://certs.ine.com/578a0663-0b3a-4f8d-9afa-b1d34329de2c",
  },
  {
    title: "eWPT",
    provider: "INE / eLearnSecurity",
    description: "شهادة eLearnSecurity Web Application Penetration Tester تركز على ثغرات الويب والمنهجية.",
    url: "https://my.ine.com/certificate/be3f3e16-8ef2-412d-9295-77d02558604e",
  },
  {
    title: "eCPPT",
    provider: "INE / eLearnSecurity",
    description: "شهادة eLearnSecurity Certified Professional Penetration Tester تشمل الشبكات والويب وAD والتقارير.",
    url: "https://certs.ine.com/128e9d38-0810-4604-b8ad-affb03b063b5",
  },
];

export const achievements: Dictionary["achievements"] = [
  ["Top 10", "ترتيب CyberHub الجامعي"],
  ["Top 300", "ترتيب FlagYard العالمي"],
  ["Top 100", "فريق فعالية BlackHat MEA CTF 2024 العالمية"],
  ["Top 2%", "ترتيب TryHackMe العالمي"],
];
