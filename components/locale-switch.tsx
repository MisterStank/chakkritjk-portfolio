"use client";

import React from "react";
import clsx from "clsx";
import { locales } from "@/lib/i18n";
import { useLocale } from "@/context/locale-context";

export default function LocaleSwitch() {
  const { locale, setLocale } = useLocale();

  return (
    <div
      role="group"
      aria-label="Language"
      className="ml-1 flex items-center gap-0.5 rounded-full border border-border p-0.5 font-mono text-xs"
    >
      {locales.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLocale(l)}
          aria-pressed={locale === l}
          className={clsx(
            "rounded-full px-2 py-1 uppercase transition-colors",
            locale === l
              ? "bg-surface-2 text-fg"
              : "text-fg-subtle hover:text-fg"
          )}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
