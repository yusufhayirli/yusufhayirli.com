"use client";

import { usePortfolio } from "@/providers/PortfolioProvider";
import { Header } from "@/components/layout/Header/Header";
import { HeroSection } from "@/components/sections/HeroSection/HeroSection";
import { ManifestoMarquee } from "@/components/sections/ManifestoMarquee/ManifestoMarquee";
import { ExperienceSection } from "@/components/sections/ExperienceSection/ExperienceSection";
import { CommerceSection } from "@/components/sections/CommerceSection/CommerceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection/ProjectsSection";
import { ToolkitSection } from "@/components/sections/ToolkitSection/ToolkitSection";
import { ContactFooter } from "@/components/layout/ContactFooter/ContactFooter";
import { StructuredData } from "@/components/system/StructuredData/StructuredData";

export function PortfolioPage() {
  const {
    content,
    locale,
    theme,
    toggleLocale,
    setTheme
  } = usePortfolio();

  return (
    <div id="top">
      <StructuredData />
      <Header
        navigation={content.navigation}
        locale={locale}
        languageLabel={content.languageLabel}
        theme={theme}
        themeLabels={content.themeLabels}
        themeAriaLabel={content.themeAriaLabel}
        onToggleLocale={toggleLocale}
        onThemeChange={setTheme}
      />
      <main>
        <HeroSection hero={content.hero} />
        <ManifestoMarquee items={content.marquee} />
        <ExperienceSection experience={content.experience} />
        <CommerceSection commerce={content.commerce} />
        <ProjectsSection projects={content.projects} />
        <ToolkitSection
          title={content.toolkitTitle}
          groups={content.skillGroups}
        />
      </main>
      <ContactFooter contact={content.contact} />
    </div>
  );
}
