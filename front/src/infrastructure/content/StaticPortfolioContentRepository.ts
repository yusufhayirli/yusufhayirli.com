import type { Locale } from "@/domain/preferences/types";
import type {
  PortfolioContent,
  PortfolioContentRepository
} from "@/domain/portfolio/types";
import { portfolioContent } from "@/infrastructure/content/portfolioContent";

export class StaticPortfolioContentRepository
  implements PortfolioContentRepository
{
  get(locale: Locale): PortfolioContent {
    return portfolioContent[locale];
  }
}
