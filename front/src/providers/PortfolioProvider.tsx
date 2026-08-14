"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode
} from "react";
import type { Locale, Theme } from "@/domain/preferences/types";
import type { PortfolioContent } from "@/domain/portfolio/types";
import {
  portfolioDependencies,
  type PortfolioDependencies
} from "@/composition/portfolioDependencies";

interface PortfolioContextValue {
  readonly content: PortfolioContent;
  readonly locale: Locale;
  readonly theme: Theme;
  readonly toggleLocale: () => void;
  readonly setTheme: (theme: Theme) => void;
}

const PortfolioContext = createContext<PortfolioContextValue | null>(null);

interface PortfolioProviderProps {
  readonly children: ReactNode;
  readonly dependencies?: PortfolioDependencies;
}

export function PortfolioProvider({
  children,
  dependencies = portfolioDependencies
}: PortfolioProviderProps) {
  const { preferenceStore } = dependencies;
  const subscribe = useCallback(
    (listener: () => void) => preferenceStore.subscribe(listener),
    [preferenceStore]
  );
  const getLocale = useCallback(
    () => preferenceStore.getLocale(),
    [preferenceStore]
  );
  const getTheme = useCallback(
    () => preferenceStore.getTheme(),
    [preferenceStore]
  );
  const getServerLocale = useCallback((): Locale => "en", []);
  const getServerTheme = useCallback((): Theme => "light", []);
  const locale = useSyncExternalStore<Locale>(
    subscribe,
    getLocale,
    getServerLocale
  );
  const theme = useSyncExternalStore<Theme>(
    subscribe,
    getTheme,
    getServerTheme
  );

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dataset.theme = theme;
    document.title = dependencies.contentRepository.get(locale).pageTitle;
  }, [dependencies, locale, theme]);

  const value = useMemo<PortfolioContextValue>(() => {
    const toggleLocale = () => {
      const nextLocale: Locale = locale === "en" ? "tr" : "en";
      preferenceStore.setLocale(nextLocale);
    };

    const setTheme = (nextTheme: Theme) => {
      preferenceStore.setTheme(nextTheme);
    };

    return {
      content: dependencies.contentRepository.get(locale),
      locale,
      theme,
      toggleLocale,
      setTheme
    };
  }, [dependencies, locale, preferenceStore, theme]);

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio(): PortfolioContextValue {
  const context = useContext(PortfolioContext);

  if (!context) {
    throw new Error("usePortfolio must be used inside PortfolioProvider.");
  }

  return context;
}
