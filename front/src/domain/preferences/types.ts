export type Locale = "en" | "tr";
export type Theme = "light" | "dark";

export interface PreferenceStore {
  subscribe(listener: () => void): () => void;
  getLocale(): Locale;
  setLocale(locale: Locale): void;
  getTheme(): Theme;
  setTheme(theme: Theme): void;
}
