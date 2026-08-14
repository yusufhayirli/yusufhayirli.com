import type { Locale } from "@/domain/preferences/types";

export interface NavigationItem {
  readonly href: string;
  readonly label: string;
}

export interface HeroStackItem {
  readonly eyebrow: string;
  readonly title: readonly string[];
  readonly details: readonly string[];
  readonly variant: "circle" | "square" | "ring" | "card";
}

export interface HeroContent {
  readonly title: readonly [string, string, string];
  readonly description: string;
  readonly linkLabel: string;
  readonly location: string;
  readonly fanClosedLabel: string;
  readonly fanOpenLabel: string;
  readonly stacks: readonly HeroStackItem[];
}

export interface ExperienceItem {
  readonly eyebrow: string;
  readonly company: string;
  readonly description: string;
  readonly period: string;
  readonly featured?: boolean;
}

export interface SectionIntro {
  readonly title: readonly string[];
  readonly description: string;
}

export interface ImpactItem {
  readonly eyebrow: string;
  readonly title: string;
  readonly description: string;
}

export interface CommerceContent extends SectionIntro {
  readonly eyebrow: string;
  readonly impacts: readonly ImpactItem[];
  readonly clients: readonly string[];
}

export interface ProjectItem {
  readonly status: string;
  readonly title: string;
  readonly summary: string;
  readonly detail: string;
  readonly tags: readonly string[];
}

export interface ProjectsContent extends SectionIntro {
  readonly inspectLabel: string;
  readonly closeLabel: string;
  readonly items: readonly ProjectItem[];
}

export interface SkillGroup {
  readonly title: string;
  readonly items: readonly string[];
}

export interface ContactContent {
  readonly eyebrow: string;
  readonly title: readonly [string, string];
  readonly description: string;
  readonly linkLabel: string;
  readonly linkAriaLabel: string;
}

export interface PortfolioContent {
  readonly pageTitle: string;
  readonly navigation: readonly NavigationItem[];
  readonly languageLabel: string;
  readonly themeAriaLabel: string;
  readonly themeLabels: Readonly<Record<"light" | "dark", string>>;
  readonly hero: HeroContent;
  readonly marquee: readonly string[];
  readonly experience: SectionIntro & { readonly items: readonly ExperienceItem[] };
  readonly commerce: CommerceContent;
  readonly projects: ProjectsContent;
  readonly toolkitTitle: string;
  readonly skillGroups: readonly SkillGroup[];
  readonly contact: ContactContent;
}

export interface PortfolioContentRepository {
  get(locale: Locale): PortfolioContent;
}
