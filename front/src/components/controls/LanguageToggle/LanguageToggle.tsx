interface LanguageToggleProps {
  readonly label: string;
  readonly ariaLabel: string;
  readonly onToggle: () => void;
}

export function LanguageToggle({
  label,
  ariaLabel,
  onToggle
}: LanguageToggleProps) {
  return (
    <button
      className="h-[34px] min-w-[42px] cursor-pointer border-0 border-l border-line bg-transparent py-px pl-4 text-xs font-extrabold leading-none text-ink transition-colors duration-[180ms] hover:text-teal max-[580px]:h-8 max-[580px]:min-w-8 max-[580px]:pl-2.5 max-[580px]:text-[10px]"
      type="button"
      aria-label={ariaLabel}
      onClick={onToggle}
    >
      {label}
    </button>
  );
}
