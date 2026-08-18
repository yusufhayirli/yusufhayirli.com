import type { Locale } from "@/domain/preferences/types";
import type { PortfolioContent } from "@/domain/portfolio/types";

const sharedSkillGroups = [
  {
    title: "Interface",
    items: [
      "React",
      "Next.js",
      "Vite",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "React Native",
      "Expo"
    ]
  },
  {
    title: "Services + Data",
    items: [
      "Node.js",
      "Express.js",
      "NestJS",
      "Fastify",
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
      "Drizzle ORM",
      "MongoDB",
      "Firebase",
      "Supabase",
      "Gemini API",
      "Groq"
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
      "pnpm",
      "Turborepo",
      "GitHub Actions",
      "CI/CD",
      "Postman",
      "Unit Testing",
      "Integration Testing",
      "Playwright",
      "ESLint",
      "Accessibility / WCAG",
      "Core Web Vitals",
      "SOLID"
    ]
  }
] as const;

export const portfolioContent = {
  en: {
    pageTitle: "Yusuf Hayirli - Full-Stack Software Engineer",
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
        "Product engineering, global commerce and independent delivery-each role added new systems, responsibilities and operating contexts.",
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
          period: "2022-2024 ↗",
          featured: true
        },
        {
          eyebrow: "03 · DELIVER END TO END",
          company: "Freelance",
          description:
            "Requirements, architecture, full-stack implementation, Docker and remote delivery.",
          period: "2024-NOW ↗"
        }
      ]
    },
    commerce: {
      eyebrow: "SELECTED DEPTH - OSF DIGITAL",
      title: ["GLOBAL", "COMMERCE."],
      description:
        "Storefront delivery, measurement systems and certified platform work-shown as three connected outcomes rather than a list of responsibilities.",
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
          status: "CASE STUDY 01 · LIVE",
          title: "Lorearn",
          summary:
            "Zero to production: a multi-AI-provider learning platform, built solo across web, mobile and backend - live, with real users.",
          detail:
            "An AI-powered daily learning platform I designed, built and shipped solo end to end, across web, mobile and backend.",
          tags: ["React", "React Native", "NestJS", "Supabase", "Gemini / Groq AI"],
          link: "https://lorearn.com",
          linkLabel: "See it live +",
          accent: "coral",
          brand: "lorearn"
        },
        {
          status: "CASE STUDY 02 · IN PREPARATION",
          title: "Customer Behavior Tracker",
          summary: "Commerce analytics and experimentation foundations.",
          detail:
            "GTM DataLayer architecture, event taxonomy, GA4 QA, A/B testing workflows and TypeScript/React refactoring.",
          tags: ["GTM", "GA4", "TypeScript", "Testing", "PostgreSQL", "Docker"]
        },
        {
          status: "CASE STUDY 03 · DRAFTING",
          title: "Headless Commerce R&D",
          summary: "Modern storefront prototypes and migration paths.",
          detail:
            "React and Node.js prototypes with Contentful, then migration paths toward Next.js and GraphQL.",
          tags: ["React", "Next.js", "GraphQL", ".NET", "C#", "EF Core"]
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
    pageTitle: "Yusuf Hayırlı - Full-Stack Yazılım Mühendisi",
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
        "E-ticaret ürünleri, web platformları ve bunları destekleyen sistemler geliştiren full-stack yazılım mühendisi.",
      linkLabel: "Çalışmaları keşfet ↓",
      location: "5+ yıl · Adana, Türkiye",
      fanClosedLabel: "ÜZERİNE GEL VEYA DOKUN",
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
      title: ["Deneyimden", "uzmanlığa."],
      description:
        "Ürün geliştirmeden global e-ticarete, bağımsız projelerden uçtan uca teslimata uzanan deneyim.",
      items: [
        {
          eyebrow: "01 · ÜRÜN GELİŞTİRME",
          company: "Jotform",
          description:
            "Ürün odaklı özellikler için React entegrasyonları, REST API’leri ve MVC servisleri geliştirdim.",
          period: "2021 ↗"
        },
        {
          eyebrow: "02 · GLOBAL ÖLÇEKTE GELİŞTİR",
          company: "OSF Digital",
          description:
            "Global e-ticaret projelerinde geliştirme, analitik, erişilebilirlik, performans ve sertifikalı Salesforce cartridge çalışmaları.",
          period: "2022-2024 ↗",
          featured: true
        },
        {
          eyebrow: "03 · UÇTAN UCA TESLİM",
          company: "Freelance",
          description:
            "Gereksinim analizinden mimari tasarıma, full-stack geliştirmeden teslimata kadar tüm proje sorumluluğu.",
          period: "2024-GÜNÜMÜZ ↗"
        }
      ]
    },
    commerce: {
      eyebrow: "UZMANLIK ALANI - OSF DIGITAL",
      title: ["GLOBAL", "E-TİCARET."],
      description:
        "Storefront geliştirme, kullanıcı davranışı analitiği ve Salesforce Commerce Cloud çalışmalarını üç temel uzmanlık alanında bir araya getiriyorum.",
      impacts: [
        {
          eyebrow: "01 / GELİŞTİRME",
          title: "Müşteri odaklı e-ticaret",
          description:
            "React, TypeScript, Node.js, REST API’leri ve Salesforce Commerce Cloud."
        },
        {
          eyebrow: "02 / ANALİZ",
          title: "Kullanıcı davranışı analitiği",
          description:
            "DataLayer mimarisi, event taxonomy, GTM Preview, GA4 DebugView ve A/B test süreçleri."
        },
        {
          eyebrow: "03 / MODERNİZE ET",
          title: "Headless e-ticaret Ar-Ge",
          description:
            "Contentful, React ve Node.js ile geliştirilen prototipler, Next.js ve GraphQL’e geçiş için teknik yaklaşım ve dokümantasyon."
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
      title: ["Projeler."],
      description:
        "Gerçek profesyonel deneyimlerden seçilen çalışmalar, detaylı vaka çalışmalarına dönüştürülüyor.",
      inspectLabel: "Kapsamı incele +",
      closeLabel: "Kapsamı kapat −",
      items: [
        {
          status: "VAKA ÇALIŞMASI 01 · YAYINDA",
          title: "Lorearn",
          summary:
            "Sıfırdan production'a: çoklu AI sağlayıcılı, web+mobile+backend tam entegre bir öğrenme platformu - canlıda, gerçek kullanıcılarla.",
          detail:
            "Tek başıma uçtan uca tasarlayıp geliştirdiğim ve canlıya aldığım, AI destekli günlük öğrenme platformu.",
          tags: ["React", "React Native", "NestJS", "Supabase", "Gemini / Groq AI"],
          link: "https://lorearn.com",
          linkLabel: "Canlıyı gör +",
          accent: "coral",
          brand: "lorearn"
        },
        {
          status: "VAKA ÇALIŞMASI 02 · HAZIRLANIYOR",
          title: "Customer Behavior Tracker",
          summary: "E-ticaret analitiği, kullanıcı davranışı ve deney optimizasyonu.",
          detail:
            "GTM DataLayer mimarisi, event taxonomy, GA4 kalite kontrolü, A/B test süreçleri ve TypeScript/React refactor çalışması.",
          tags: ["GTM", "GA4", "TypeScript", "Testing", "PostgreSQL", "Docker"]
        },
        {
          status: "VAKA ÇALIŞMASI 03 · TASLAK",
          title: "Headless E-ticaret Ar-Ge",
          summary: "Modern storefront mimarileri, prototipler ve headless geçiş süreçleri.",
          detail:
            "Contentful ile React ve Node.js prototipleri; ardından Next.js ve GraphQL yönünde belgelenmiş geçiş yolları.",
          tags: ["React", "Next.js", "GraphQL", ".NET", "C#", "EF Core"]
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
      linkLabel: "İletişime geç ↗",
      linkAriaLabel: "Yusuf Hayırlı’ya e-posta gönder"
    }
  }
} as const satisfies Readonly<Record<Locale, PortfolioContent>>;
