import type { Locale, Theme } from "@/domain/preferences/types";
import type { NavigationItem } from "@/domain/portfolio/types";
import { LanguageToggle } from "@/components/controls/LanguageToggle/LanguageToggle";
import { ThemeSwitch } from "@/components/controls/ThemeSwitch/ThemeSwitch";
import { Container } from "@/components/ui/Container/Container";

interface HeaderProps {
  readonly navigation: readonly NavigationItem[];
  readonly locale: Locale;
  readonly languageLabel: string;
  readonly theme: Theme;
  readonly themeLabels: Readonly<Record<Theme, string>>;
  readonly themeAriaLabel: string;
  readonly onToggleLocale: () => void;
  readonly onThemeChange: (theme: Theme) => void;
}

export function Header({
  navigation,
  locale,
  languageLabel,
  theme,
  themeLabels,
  themeAriaLabel,
  onToggleLocale,
  onThemeChange
}: HeaderProps) {
  const languageAriaLabel =
    locale === "en" ? "Türkçe sürüme geç" : "Switch to English";

  return (
    <Container
      as="header"
      className="flex h-[74px] items-center justify-between border-b border-line max-[580px]:h-[62px]"
    >
      <a
        className="flex items-center gap-[11px] text-[15px] font-black leading-none tracking-[0.055em] text-ink no-underline before:block before:size-[10px] before:shrink-0 before:rotate-[-4deg] before:bg-teal before:shadow-[3px_3px_0_var(--coral)] before:content-[''] max-[580px]:gap-2 max-[580px]:text-xs max-[580px]:tracking-[0.035em] max-[580px]:before:size-2"
        href="#top"
        aria-label="Yusuf Hayirli — home"
      >
        YUSUF HAYIRLI
      </a>
      <nav
        className="flex items-center gap-[22px] text-[13px] max-[580px]:gap-2.5"
        aria-label="Primary navigation"
      >
        <div className="flex items-center gap-[27px] max-[900px]:hidden">
          {navigation.map((item) => (
            <a
              className="leading-[34px] text-ink no-underline transition-colors duration-[180ms] hover:text-teal"
              key={item.href}
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>
        <LanguageToggle
          label={languageLabel}
          ariaLabel={languageAriaLabel}
          onToggle={onToggleLocale}
        />
        <ThemeSwitch
          theme={theme}
          labels={themeLabels}
          ariaLabel={themeAriaLabel}
          onChange={onThemeChange}
        />
      </nav>
    </Container>
  );
}
