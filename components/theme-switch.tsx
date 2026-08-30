"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      onClick={toggleTheme}
      className="fixed bottom-5 right-5 z-[999] flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface text-fg-muted shadow-lg backdrop-blur-md transition-all hover:scale-110 hover:text-fg active:scale-105"
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
