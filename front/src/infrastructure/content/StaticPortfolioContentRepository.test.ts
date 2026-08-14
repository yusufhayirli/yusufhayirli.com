import { describe, expect, it } from "vitest";
import { StaticPortfolioContentRepository } from "./StaticPortfolioContentRepository";

describe("StaticPortfolioContentRepository", () => {
  const repository = new StaticPortfolioContentRepository();

  it("serves English as a complete portfolio", () => {
    const content = repository.get("en");

    expect(content.navigation).toHaveLength(4);
    expect(content.experience.items).toHaveLength(3);
    expect(content.projects.items).toHaveLength(3);
    expect(content.skillGroups.flatMap((group) => group.items)).toContain(
      "EF Core"
    );
  });

  it("serves a Turkish translation with matching structure", () => {
    const english = repository.get("en");
    const turkish = repository.get("tr");

    expect(turkish.pageTitle).toContain("Yazılım Mühendisi");
    expect(turkish.navigation).toHaveLength(english.navigation.length);
    expect(turkish.projects.items).toHaveLength(english.projects.items.length);
  });
});
