import type {
  Locale,
  PreferenceStore,
  Theme
} from "@/domain/preferences/types";

const LANGUAGE_KEY = "studio-lang";
const THEME_KEY = "studio-theme";

export class BrowserPreferenceStore implements PreferenceStore {
  private readonly listeners = new Set<() => void>();

  private readonly handleStorage = (event: StorageEvent): void => {
    if (event.key === LANGUAGE_KEY || event.key === THEME_KEY) {
      this.emit();
    }
  };

  subscribe(listener: () => void): () => void {
    this.listeners.add(listener);

    if (typeof window !== "undefined" && this.listeners.size === 1) {
      window.addEventListener("storage", this.handleStorage);
    }

    return () => {
      this.listeners.delete(listener);

      if (typeof window !== "undefined" && this.listeners.size === 0) {
        window.removeEventListener("storage", this.handleStorage);
      }
    };
  }

  getLocale(): Locale {
    if (typeof window === "undefined") {
      return "en";
    }

    return window.localStorage.getItem(LANGUAGE_KEY) === "tr" ? "tr" : "en";
  }

  setLocale(locale: Locale): void {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(LANGUAGE_KEY, locale);
      this.emit();
    }
  }

  getTheme(): Theme {
    if (typeof window === "undefined") {
      return "light";
    }

    return window.localStorage.getItem(THEME_KEY) === "dark" ? "dark" : "light";
  }

  setTheme(theme: Theme): void {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(THEME_KEY, theme);
      this.emit();
    }
  }

  private emit(): void {
    this.listeners.forEach((listener) => listener());
  }
}
