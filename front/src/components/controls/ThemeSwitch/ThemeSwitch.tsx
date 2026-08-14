import type { Theme } from "@/domain/preferences/types";

interface ThemeSwitchProps {
  readonly theme: Theme;
  readonly labels: Readonly<Record<Theme, string>>;
  readonly ariaLabel: string;
  readonly onChange: (theme: Theme) => void;
}

export function ThemeSwitch({
  theme,
  labels,
  ariaLabel,
  onChange
}: ThemeSwitchProps) {
  const nextTheme: Theme = theme === "light" ? "dark" : "light";

  return (
    <button
      className="group relative grid h-[34px] w-[150px] cursor-pointer grid-cols-2 items-center rounded-full border border-line-strong bg-transparent p-[3px] text-[11px] leading-none text-ink before:pointer-events-none before:absolute before:left-[3px] before:top-[3px] before:z-0 before:h-[26px] before:w-[calc(50%_-_3px)] before:rounded-full before:bg-ink before:content-[''] before:[transition:transform_350ms_cubic-bezier(0.2,0.8,0.2,1),background_220ms_ease] data-[theme=dark]:before:translate-x-full max-[580px]:h-8 max-[580px]:w-32 max-[580px]:text-[10px] max-[580px]:before:h-6"
      data-theme={theme}
      type="button"
      role="switch"
      aria-checked={theme === "dark"}
      aria-label={ariaLabel}
      onClick={() => onChange(nextTheme)}
    >
      <span className="relative z-[1] flex items-center justify-center gap-[5px] text-muted transition-colors duration-[220ms] group-data-[theme=light]:text-paper [&>span]:text-[13px]">
        <span aria-hidden="true">☀</span>
        {labels.light}
      </span>
      <span className="relative z-[1] flex items-center justify-center gap-[5px] text-muted transition-colors duration-[220ms] group-data-[theme=dark]:text-paper [&>span]:text-[13px]">
        <span aria-hidden="true">☾</span>
        {labels.dark}
      </span>
    </button>
  );
}
