const sharedProjects = [
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

export const dictionaries = {
  en: {
    meta: {
      title: "Abdullah bin Ammar",
      description:
        "Cybersecurity enthusiast, full-stack developer, and vulnerability researcher based in Riyadh.",
    },
    nav: {
      localeLabel: "العربية",
      localeHref: "/ar",
    },
    hero: {
      eyebrow: "Cybersecurity Enthusiast & Full-Stack Developer",
      name: "Abdullah bin Ammar",
      arabicName: "عبدالله خالد بن عبدالله بن عمار",
      summary:
        "Security-focused developer building practical web systems, testing real attack surfaces, and hardening the infrastructure behind them.",
      primaryAction: "View projects",
      secondaryAction: "Contact",
    },
    contact: {
      email: "moq3e2000@gmail.com",
      phone: "+966 50 748 5316",
      location: "Riyadh 13521, Saudi Arabia",
      website: "a222ghoul.com",
      linkedin: "linkedin.com/in/a222web",
      github: "github.com/A222moq3e",
      cyberhub: "cyberhub.sa/profile/a222_a222",
    },
    sections: {
      info: "Info",
      experience: "Experience",
      credentials: "Credentials",
      achievements: "Achievements",
      projects: "Projects",
      skills: "Skills",
      education: "Education",
      languages: "Languages",
    },
    experience: [
      {
        title: "Software Engineer",
        company: "SITE",
        period: "2025 - Present",
        items: ["..."],
      },
      {
        title: "Backend Developer & Security Tester",
        company: "Moqraraty | Riyadh (Remote/Hybrid)",
        period: "2024 - Present",
        items: [
          "Built and maintained backend services with validation, authorization, and secure data-flow practices.",
          "Performed targeted web/API penetration testing and identified misconfigurations and input validation gaps.",
          "Improved deployment reliability and hardening across Docker, Nginx, logs, and metrics.",
          "Supported a growing education platform serving more than 30,000 users.",
        ],
      },
      {
        title: "Vulnerability Researcher",
        company: "Bugbounty.sa",
        period: "2024 - Present",
        items: [
          "Researches and reports web security vulnerabilities through responsible disclosure workflows.",
          "Applies practical testing methodology across common web and API attack surfaces.",
        ],
      },
      {
        title: "Volunteer Security Researcher",
        company: "Information Security Club (infosecclub) | University Community",
        period: "2024 - Present",
        items: [
          "Conducted vulnerability research, knowledge sharing, and CTF challenge development.",
          "Participated with CCISinfosecclub in research writing and building web CTF challenges.",
        ],
      },
      {
        title: "Part-Time Developer",
        company: "Qubes | Riyadh (Remote/Hybrid)",
        period: "2024 - 2025",
        items: [
          "Contributed to Neyam Salla Theme and Shopify theme development for e-commerce.",
          "Collaborated on the Neyam Data Warehouse initiative.",
        ],
      },
      {
        title: "Volunteer Full-Stack Developer",
        company: "Ejad Club | University",
        period: "2024 - 2025",
        items: ["Helped build Ejad Sh3bh, a class and group management website, as a full-stack contributor."],
      },
    ],
    certificationAction: "Verify credential",
    certifications: [
      {
        title: "eJPT",
        description:
          "eLearnSecurity Junior Penetration Tester with entry-level red team skills and real-world style labs.",
        url: "https://certs.ine.com/578a0663-0b3a-4f8d-9afa-b1d34329de2c",
      },
      {
        title: "eWPT",
        description: "eLearnSecurity Web Application Penetration Tester focused on web vulnerabilities and methodology.",
        url: "https://my.ine.com/certificate/be3f3e16-8ef2-412d-9295-77d02558604e",
      },
      {
        title: "eCPPT",
        description: "eLearnSecurity Certified Professional Penetration Tester covering network, web, AD, and reporting.",
        url: "https://certs.ine.com/128e9d38-0810-4604-b8ad-affb03b063b5",
      },
    ],
    achievements: [
      ["Top 10", "CyberHub university ranking"],
      ["Top 300", "FlagYard global ranking"],
      ["Top 100", "BlackHat MEA CTF 2024 global event team"],
      ["Top 2%", "TryHackMe global ranking"],
    ],
    projectText: {
      preview: "Preview",
      open: "Open site",
      website: "Website",
      github: "GitHub",
      modalDescription: "Live website preview. Some external sites may block iframe embedding.",
      sh3bh: ["Sh3bh", "Class and group management platform"],
      ejad: ["Ejad Sh3bh", "Volunteer full-stack contribution for Ejad Club"],
      moqraraty: ["Moqraraty", "Education platform serving 30,000+ users"],
      neyam: ["Neyam", "Salla and Shopify theme work, plus data warehouse collaboration"],
      stemref: ["STEMREF", "Open-source project"],
      lagpsy: ["Lagpsy", "Web application"],
    },
    skills: [
      ["Web/App Security", "XSS, SQLi, CSRF, CORS, SSRF, XXE, SSTI, API security testing"],
      ["Pentest Tooling", "Nmap, Gobuster, SQLMap, Burp Suite, ffuf, Caido"],
      ["Platforms & OS", "Linux, Nginx, Docker"],
      ["Programming", "HTML, CSS, JavaScript/TypeScript, Node.js, Express.js"],
      ["Databases", "SQL, SQLite, MongoDB"],
      ["Version Control & CI/CD", "Git, GitHub"],
      ["MarTech/Tech", "Liquid, Braze, Twilight"],
      ["Networking", "Fundamentals, AD/Pentest basics"],
      ["Soft Skills", "Teamwork, collaboration, positive attitude, strong communication"],
    ],
    education: [
      ["Imam Mohammad Ibn Saud Islamic University (Imamu)", "2021 - 2026", "GPA: 4.81 / 5"],
      ["Motaqademh School", "2016 - 2019", "Score: 98.95"],
    ],
    languages: [
      ["Arabic", "Native"],
      ["English", "Professional working proficiency"],
    ],
  },
  ar: {
    meta: {
      title: "عبدالله بن عمار",
      description: "مهتم بالأمن السيبراني، مطور Full-Stack، وباحث ثغرات في الرياض.",
    },
    nav: {
      localeLabel: "English",
      localeHref: "/en",
    },
    hero: {
      eyebrow: "مهتم بالأمن السيبراني ومطور Full-Stack",
      name: "عبدالله بن عمار",
      arabicName: "عبدالله خالد بن عبدالله بن عمار",
      summary:
        "مطور يركز على الأمن، يبني أنظمة ويب عملية، يختبر أسطح الهجوم الواقعية، ويهتم بتحسين موثوقية البنية التحتية.",
      primaryAction: "عرض المشاريع",
      secondaryAction: "تواصل",
    },
    contact: {
      email: "moq3e2000@gmail.com",
      phone: "+966 50 748 5316",
      location: "الرياض 13521، المملكة العربية السعودية",
      website: "a222ghoul.com",
      linkedin: "linkedin.com/in/a222web",
      github: "github.com/A222moq3e",
      cyberhub: "cyberhub.sa/profile/a222_a222",
    },
    sections: {
      info: "المعلومات",
      experience: "الخبرات",
      credentials: "الشهادات",
      achievements: "الإنجازات",
      projects: "المشاريع",
      skills: "المهارات",
      education: "التعليم",
      languages: "اللغات",
    },
    experience: [
      {
        title: "مهندس برمجيات",
        company: "SITE",
        period: "2025 - الآن",
        items: ["..."],
      },
      {
        title: "مطور Backend ومختبر أمني",
        company: "مقرراتي | الرياض (عن بعد/هجين)",
        period: "2024 - الآن",
        items: [
          "بناء وصيانة خدمات Backend مع التحقق من المدخلات والصلاحيات وتدفق بيانات آمن.",
          "تنفيذ اختبارات اختراق مركزة لتطبيقات الويب وواجهات API واكتشاف أخطاء الإعداد والتحقق.",
          "تحسين موثوقية النشر والتقوية عبر Docker وNginx والسجلات والمقاييس.",
          "دعم منصة تعليمية متنامية تخدم أكثر من 30,000 مستخدم.",
        ],
      },
      {
        title: "باحث ثغرات",
        company: "Bugbounty.sa",
        period: "2024 - الآن",
        items: [
          "البحث عن ثغرات أمنية في الويب ورفع التقارير عبر مسارات الإفصاح المسؤول.",
          "تطبيق منهجية اختبار عملية على أسطح هجوم الويب وواجهات API الشائعة.",
        ],
      },
      {
        title: "باحث أمني متطوع",
        company: "نادي أمن المعلومات | مجتمع جامعي",
        period: "2024 - الآن",
        items: [
          "المشاركة في أبحاث الثغرات ونقل المعرفة وبناء تحديات CTF.",
          "المساهمة مع CCISinfosecclub في الكتابة البحثية وبناء تحديات ويب CTF.",
        ],
      },
      {
        title: "مطور بدوام جزئي",
        company: "Qubes | الرياض (عن بعد/هجين)",
        period: "2024 - 2025",
        items: [
          "المساهمة في تطوير ثيم Neyam على سلة وثيمات Shopify للتجارة الإلكترونية.",
          "المشاركة في مبادرة Neyam Data Warehouse.",
        ],
      },
      {
        title: "مطور Full-Stack متطوع",
        company: "نادي إيجاد | الجامعة",
        period: "2024 - 2025",
        items: ["المساهمة في بناء Ejad Sh3bh، موقع لإدارة الشعب والمجموعات، كمطور Full-Stack."],
      },
    ],
    certificationAction: "تحقق من الشهادة",
    certifications: [
      {
        title: "eJPT",
        description: "شهادة eLearnSecurity Junior Penetration Tester بمهارات Red Team تأسيسية ومختبرات عملية.",
        url: "https://certs.ine.com/578a0663-0b3a-4f8d-9afa-b1d34329de2c",
      },
      {
        title: "eWPT",
        description: "شهادة eLearnSecurity Web Application Penetration Tester تركز على ثغرات الويب والمنهجية.",
        url: "https://my.ine.com/certificate/be3f3e16-8ef2-412d-9295-77d02558604e",
      },
      {
        title: "eCPPT",
        description: "شهادة eLearnSecurity Certified Professional Penetration Tester تشمل الشبكات والويب وAD والتقارير.",
        url: "https://certs.ine.com/128e9d38-0810-4604-b8ad-affb03b063b5",
      },
    ],
    achievements: [
      ["Top 10", "ترتيب CyberHub الجامعي"],
      ["Top 300", "ترتيب FlagYard العالمي"],
      ["Top 100", "فريق فعالية BlackHat MEA CTF 2024 العالمية"],
      ["Top 2%", "ترتيب TryHackMe العالمي"],
    ],
    projectText: {
      preview: "معاينة",
      open: "فتح الموقع",
      website: "الموقع",
      github: "GitHub",
      modalDescription: "معاينة مباشرة للموقع. بعض المواقع الخارجية قد تمنع التضمين داخل iframe.",
      sh3bh: ["Sh3bh", "منصة لإدارة الشعب والمجموعات"],
      ejad: ["Ejad Sh3bh", "مساهمة Full-Stack تطوعية لنادي إيجاد"],
      moqraraty: ["Moqraraty", "منصة تعليمية تخدم أكثر من 30,000 مستخدم"],
      neyam: ["Neyam", "عمل على ثيمات سلة وShopify ومساهمة في مستودع البيانات"],
      stemref: ["STEMREF", "مشروع مفتوح المصدر"],
      lagpsy: ["Lagpsy", "تطبيق ويب"],
    },
    skills: [
      ["أمن الويب والتطبيقات", "XSS, SQLi, CSRF, CORS, SSRF, XXE, SSTI, API security testing"],
      ["أدوات الاختبار", "Nmap, Gobuster, SQLMap, Burp Suite, ffuf, Caido"],
      ["المنصات والأنظمة", "Linux, Nginx, Docker"],
      ["البرمجة", "HTML, CSS, JavaScript/TypeScript, Node.js, Express.js"],
      ["قواعد البيانات", "SQL, SQLite, MongoDB"],
      ["التحكم بالإصدارات وCI/CD", "Git, GitHub"],
      ["MarTech/Tech", "Liquid, Braze, Twilight"],
      ["الشبكات", "أساسيات الشبكات وAD/Pentest"],
      ["المهارات الشخصية", "العمل الجماعي، التعاون، التواصل، والسلوك الإيجابي"],
    ],
    education: [
      ["جامعة الإمام محمد بن سعود الإسلامية", "2021 - 2026", "المعدل: 4.81 / 5"],
      ["مدارس المتقدمة", "2016 - 2019", "النسبة: 98.95"],
    ],
    languages: [
      ["العربية", "اللغة الأم"],
      ["الإنجليزية", "إجادة مهنية"],
    ],
  },
};

export function getProjects(dictionary) {
  return sharedProjects.map((project) => {
    const [title, description] = dictionary.projectText[project.id];
    return {
      ...project,
      title,
      description,
    };
  });
}
