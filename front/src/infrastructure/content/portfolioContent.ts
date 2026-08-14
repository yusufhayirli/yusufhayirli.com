import type { Locale } from "@/domain/preferences/types";
import type { PortfolioContent } from "@/domain/portfolio/types";

const sharedSkillGroups = [
  {
    title: "Interface",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "React Native",
      "Expo"
    ]
  },
  {
    title: "Services + Data",
    items: [
      "Node.js",
      "Express.js",
      ".NET",
      "C#",
      "Java",
      "REST APIs",
      "GraphQL",
      "MVC",
      "WebSockets",
      "PostgreSQL",
      "EF Core",
      "Prisma",
      "MongoDB",
      "Firebase"
    ]
  },
  {
    title: "Commerce + Growth",
    items: [
      "Salesforce Commerce Cloud",
      "SFRA",
      "PWA Kit",
      "GTM / GA4",
      "DataLayer",
      "A/B Testing"
    ]
  },
  {
    title: "Delivery + Quality",
    items: [
      "Docker",
      "Docker Compose",
      "GitHub Actions",
      "CI/CD",
      "Postman",
      "Unit Testing",
      "Integration Testing",
      "Accessibility / WCAG",
      "Core Web Vitals",
      "SOLID"
    ]
  }
] as const;

export const portfolioContent = {
  en: {
    pageTitle: "Yusuf Hayirli — Full-Stack Software Engineer",
    navigation: [
      { href: "#work", label: "Work" },
      { href: "#commerce", label: "Commerce" },
      { href: "#projects", label: "Projects" },
      { href: "#contact", label: "Contact" }
    ],
    languageLabel: "TR",
    themeAriaLabel: "Switch color theme",
    themeLabels: { light: "Light", dark: "Dark" },
    hero: {
      title: [
        "MASTER THE DETAIL.",
        "DESIGN THE SYSTEM.",
        "BUILD WHAT MATTERS."
      ],
      description:
        "Full-stack software engineer for commerce products, web platforms and the systems that keep them moving.",
      linkLabel: "Explore the work ↓",
      location: "5+ years · Adana, Türkiye",
      fanClosedLabel: "HOVER / TAP TO EXPAND",
      fanOpenLabel: "TAP TO COLLAPSE",
      stacks: [
        {
          eyebrow: "FRONTEND + MOBILE",
          title: ["React · Next.js"],
          details: ["TypeScript · React Native · Expo"],
          variant: "card"
        },
        {
          eyebrow: "COMMERCE + DATA",
          title: ["SFCC"],
          details: ["PWA Kit · Headless", "GTM · GA4"],
          variant: "circle"
        },
        {
          eyebrow: "SERVICES + DATA",
          title: [".NET", "Node.js"],
          details: ["C# · Java · REST", "PostgreSQL · Prisma"],
          variant: "square"
        },
        {
          eyebrow: "DELIVERY",
          title: ["Docker"],
          details: ["GitHub Actions", "CI/CD · Testing"],
          variant: "ring"
        }
      ]
    },
    marquee: [
      "PRODUCT THINKING",
      "FULL-STACK DELIVERY",
      "COMMERCE DEPTH"
    ],
    experience: {
      title: ["Experience that", "compounds."],
      description:
        "Product engineering, global commerce and independent delivery—each role added new systems, responsibilities and operating contexts.",
      items: [
        {
          eyebrow: "01 · LEARN THE PRODUCT",
          company: "Jotform",
          description:
            "React integrations, REST APIs and MVC services for product-facing features.",
          period: "2021 ↗"
        },
        {
          eyebrow: "02 · BUILD AT SCALE",
          company: "OSF Digital",
          description:
            "Global commerce, analytics, accessibility, performance and certified Salesforce cartridge work.",
          period: "2022—2024 ↗",
          featured: true
        },
        {
          eyebrow: "03 · DELIVER END TO END",
          company: "Independent",
          description:
            "Requirements, architecture, full-stack implementation, Docker and remote delivery.",
          period: "2024—NOW ↗"
        }
      ]
    },
    commerce: {
      eyebrow: "SELECTED DEPTH — OSF DIGITAL",
      title: ["GLOBAL", "COMMERCE."],
      description:
        "Storefront delivery, measurement systems and certified platform work—shown as three connected outcomes rather than a list of responsibilities.",
      impacts: [
        {
          eyebrow: "01 / BUILD",
          title: "Customer-facing commerce",
          description:
            "React, TypeScript, Node.js, REST APIs and Salesforce Commerce Cloud."
        },
        {
          eyebrow: "02 / MEASURE",
          title: "Behavior intelligence",
          description:
            "DataLayer architecture, event taxonomy, GTM Preview, GA4 DebugView and A/B testing workflows."
        },
        {
          eyebrow: "03 / MODERNIZE",
          title: "Headless commerce R&D",
          description:
            "React and Node.js prototypes with Contentful, followed by documented migration paths to Next.js and GraphQL."
        }
      ],
      clients: [
        "BROOKS RUNNING",
        "SEPHORA",
        "KAL TIRE",
        "FARMACIAS AHUMADA"
      ]
    },
    projects: {
      title: ["Work worth", "unpacking."],
      description:
        "Verified professional scope, being shaped into public case studies. No invented side projects.",
      inspectLabel: "Inspect scope +",
      closeLabel: "Close scope −",
      items: [
        {
          status: "CASE STUDY 01 · IN PREPARATION",
          title: "Customer Behavior Tracker",
          summary: "Commerce analytics and experimentation foundations.",
          detail:
            "GTM DataLayer architecture, event taxonomy, GA4 QA, A/B testing workflows and TypeScript/React refactoring.",
          tags: ["GTM", "GA4", "TypeScript", "Testing"]
        },
        {
          status: "CASE STUDY 02 · DRAFTING",
          title: "Headless Commerce R&D",
          summary: "Modern storefront prototypes and migration paths.",
          detail:
            "React and Node.js prototypes with Contentful, then migration paths toward Next.js and GraphQL.",
          tags: ["React", "Next.js", "GraphQL"]
        },
        {
          status: "CASE STUDY 03 · COLLECTING",
          title: "Independent Builds",
          summary: "Full-stack patterns from current client delivery.",
          detail:
            "Next.js interfaces, .NET and Node.js services, PostgreSQL persistence with EF Core, and Dockerized delivery.",
          tags: [".NET", "C#", "EF Core", "PostgreSQL", "Docker"]
        }
      ]
    },
    toolkitTitle: "The toolkit.",
    skillGroups: sharedSkillGroups,
    contact: {
      eyebrow: "OPEN TO THOUGHTFUL TEAMS",
      title: ["LET’S", "SHIP."],
      description:
        "Good engineering starts with a useful problem and a clear conversation.",
      linkLabel: "Start a conversation ↗",
      linkAriaLabel: "Send Yusuf Hayirli an email"
    }
  },
  tr: {
    pageTitle: "Yusuf Hayırlı — Full-Stack Yazılım Mühendisi",
    navigation: [
      { href: "#work", label: "Deneyim" },
      { href: "#commerce", label: "E-ticaret" },
      { href: "#projects", label: "Çalışmalar" },
      { href: "#contact", label: "İletişim" }
    ],
    languageLabel: "EN",
    themeAriaLabel: "Renk temasını değiştir",
    themeLabels: { light: "Açık", dark: "Koyu" },
    hero: {
      title: ["DETAYA HÂKİM OL.", "SİSTEMİ TASARLA.", "DEĞER ÜRET."],
      description:
        "E-ticaret ürünleri, web platformları ve onları ayakta tutan sistemler geliştiren full-stack yazılım mühendisi.",
      linkLabel: "Çalışmaları keşfet ↓",
      location: "5+ yıl · Adana, Türkiye",
      fanClosedLabel: "ÜZERİNE GEL / DOKUNARAK AÇ",
      fanOpenLabel: "DARALTMAK İÇİN DOKUN",
      stacks: [
        {
          eyebrow: "FRONTEND + MOBİL",
          title: ["React · Next.js"],
          details: ["TypeScript · React Native · Expo"],
          variant: "card"
        },
        {
          eyebrow: "E-TİCARET + VERİ",
          title: ["SFCC"],
          details: ["PWA Kit · Headless", "GTM · GA4"],
          variant: "circle"
        },
        {
          eyebrow: "SERVİSLER + VERİ",
          title: [".NET", "Node.js"],
          details: ["C# · Java · REST", "PostgreSQL · Prisma"],
          variant: "square"
        },
        {
          eyebrow: "TESLİMAT",
          title: ["Docker"],
          details: ["GitHub Actions", "CI/CD · Testing"],
          variant: "ring"
        }
      ]
    },
    marquee: [
      "ÜRÜN ODAKLI DÜŞÜNCE",
      "FULL-STACK GELİŞTİRME",
      "E-TİCARET DENEYİMİ"
    ],
    experience: {
      title: ["Derinleşen", "deneyim."],
      description:
        "Ürün mühendisliği, global e-ticaret ve bağımsız teslimat; her rol yeni sistemler, sorumluluklar ve çalışma bağlamları ekledi.",
      items: [
        {
          eyebrow: "01 · ÜRÜNÜ ÖĞREN",
          company: "Jotform",
          description:
            "Ürüne dönük özellikler için React entegrasyonları, REST API’leri ve MVC servisleri geliştirdim.",
          period: "2021 ↗"
        },
        {
          eyebrow: "02 · ÖLÇEKLİ GELİŞTİR",
          company: "OSF Digital",
          description:
            "Global e-ticaret, analitik, erişilebilirlik, performans ve sertifikalı Salesforce cartridge çalışmaları.",
          period: "2022—2024 ↗",
          featured: true
        },
        {
          eyebrow: "03 · UÇTAN UCA TESLİM",
          company: "Bağımsız",
          description:
            "Gereksinim analizi, mimari, full-stack geliştirme, Docker ve uzaktan teslimat.",
          period: "2024—GÜNÜMÜZ ↗"
        }
      ]
    },
    commerce: {
      eyebrow: "UZMANLIK ALANI — OSF DIGITAL",
      title: ["GLOBAL", "E-TİCARET."],
      description:
        "Storefront geliştirme, ölçüm sistemleri ve sertifikalı platform çalışmaları; sorumluluk listesi yerine birbirine bağlı üç sonuç olarak sunuluyor.",
      impacts: [
        {
          eyebrow: "01 / GELİŞTİR",
          title: "Müşteriye dönük e-ticaret",
          description:
            "React, TypeScript, Node.js, REST API’leri ve Salesforce Commerce Cloud."
        },
        {
          eyebrow: "02 / ÖLÇÜMLE",
          title: "Davranış analitiği",
          description:
            "DataLayer mimarisi, event taxonomy, GTM Preview, GA4 DebugView ve A/B test süreçleri."
        },
        {
          eyebrow: "03 / MODERNİZE ET",
          title: "Headless e-ticaret Ar-Ge",
          description:
            "Contentful ile React ve Node.js prototipleri; ardından Next.js ve GraphQL için dokümante edilmiş geçiş yolları."
        }
      ],
      clients: [
        "BROOKS RUNNING",
        "SEPHORA",
        "KAL TIRE",
        "FARMACIAS AHUMADA"
      ]
    },
    projects: {
      title: ["İncelemeye", "değer işler."],
      description:
        "Doğrulanmış profesyonel çalışmalar, herkese açık vaka çalışmalarına dönüştürülüyor. Kurgusal yan proje yok.",
      inspectLabel: "Kapsamı incele +",
      closeLabel: "Kapsamı kapat −",
      items: [
        {
          status: "VAKA ÇALIŞMASI 01 · HAZIRLANIYOR",
          title: "Customer Behavior Tracker",
          summary: "E-ticaret analitiği ve deney süreçlerinin temelleri.",
          detail:
            "GTM DataLayer mimarisi, event taxonomy, GA4 kalite kontrolü, A/B test süreçleri ve TypeScript/React refactor çalışması.",
          tags: ["GTM", "GA4", "TypeScript", "Testing"]
        },
        {
          status: "VAKA ÇALIŞMASI 02 · TASLAK",
          title: "Headless E-ticaret Ar-Ge",
          summary: "Modern storefront prototipleri ve geçiş yolları.",
          detail:
            "Contentful ile React ve Node.js prototipleri; ardından Next.js ve GraphQL yönünde belgelenmiş geçiş yolları.",
          tags: ["React", "Next.js", "GraphQL"]
        },
        {
          status: "VAKA ÇALIŞMASI 03 · DERLENİYOR",
          title: "Bağımsız Projeler",
          summary: "Güncel müşteri çalışmalarından full-stack geliştirme kalıpları.",
          detail:
            "Next.js arayüzleri, .NET ve Node.js servisleri, EF Core ile PostgreSQL veri katmanı ve Docker tabanlı teslimat.",
          tags: [".NET", "C#", "EF Core", "PostgreSQL", "Docker"]
        }
      ]
    },
    toolkitTitle: "Teknoloji seti.",
    skillGroups: [
      { ...sharedSkillGroups[0], title: "Arayüz" },
      { ...sharedSkillGroups[1], title: "Servisler + Veri" },
      { ...sharedSkillGroups[2], title: "E-ticaret + Büyüme" },
      { ...sharedSkillGroups[3], title: "Teslimat + Kalite" }
    ],
    contact: {
      eyebrow: "ÖZENLİ EKİPLERLE ÇALIŞMAYA AÇIK",
      title: ["BİRLİKTE", "ÜRETELİM."],
      description:
        "İyi mühendislik, faydalı bir problem ve açık bir konuşmayla başlar.",
      linkLabel: "Bir konuşma başlat ↗",
      linkAriaLabel: "Yusuf Hayırlı’ya e-posta gönder"
    }
  }
} as const satisfies Readonly<Record<Locale, PortfolioContent>>;
