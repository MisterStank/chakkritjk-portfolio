"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import {
  translations,
  type Dictionary,
  type Locale,
} from "@/lib/i18n";

type LocaleContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dictionary;
};

const LocaleContext = createContext<LocaleContextType | null>(null);

export default function LocaleContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get("lang");
    if (param === "en" || param === "th") {
      setLocale(param);
      return;
    }
    try {
      const stored = window.localStorage.getItem("locale");
      if (stored === "en" || stored === "th") {
        setLocaleState(stored);
        document.documentElement.lang = stored;
      }
    } catch {
      /* localStorage unavailable — stay on default */
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    document.documentElement.lang = next;
    try {
      window.localStorage.setItem("locale", next);
    } catch {
      /* ignore */
    }
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t: translations[locale] }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);

  if (context === null) {
    throw new Error("useLocale must be used within a LocaleContextProvider");
  }

  return context;
}
