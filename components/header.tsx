"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useLocale } from "@/context/locale-context";
import LocaleSwitch from "./locale-switch";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const { t } = useLocale();

  return (
    <header className="fixed inset-x-0 top-0 z-[999] flex justify-center px-4">
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="mt-4 flex max-w-full items-center gap-1 rounded-full border border-border bg-surface px-2 py-1.5 shadow-lg shadow-black/[0.04] backdrop-blur-md sm:mt-6"
      >
        <nav className="flex flex-wrap items-center justify-center">
          <ul className="flex flex-wrap items-center justify-center gap-0.5 text-sm font-medium text-fg-muted">
            {links.map((link) => (
              <li key={link.hash} className="relative">
                <Link
                  href={link.hash}
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                  }}
                  className={clsx(
                    "relative z-10 block rounded-full px-3 py-1.5 transition-colors hover:text-fg",
                    { "text-fg": activeSection === link.name }
                  )}
                >
                  {t.nav[link.name]}
                  {link.name === activeSection && (
                    <motion.span
                      layoutId="activeSection"
                      className="absolute inset-0 -z-10 rounded-full bg-surface-2"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          aria-label="Open command palette"
          onClick={() =>
            window.dispatchEvent(new Event("open-command-palette"))
          }
          className="ml-1 hidden items-center gap-1.5 rounded-full border border-border px-2.5 py-1.5 font-mono text-xs text-fg-subtle transition-colors hover:text-fg sm:flex"
        >
          <span className="rounded bg-surface-2 px-1">⌘</span>K
        </button>

        <LocaleSwitch />
      </motion.div>
    </header>
  );
}
