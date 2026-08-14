import type { PreferenceStore } from "@/domain/preferences/types";
import type { PortfolioContentRepository } from "@/domain/portfolio/types";
import { StaticPortfolioContentRepository } from "@/infrastructure/content/StaticPortfolioContentRepository";
import { BrowserPreferenceStore } from "@/infrastructure/preferences/BrowserPreferenceStore";

export interface PortfolioDependencies {
  readonly contentRepository: PortfolioContentRepository;
  readonly preferenceStore: PreferenceStore;
}

export const portfolioDependencies: PortfolioDependencies = {
  contentRepository: new StaticPortfolioContentRepository(),
  preferenceStore: new BrowserPreferenceStore()
};
