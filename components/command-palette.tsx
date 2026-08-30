"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import copy from "copy-to-clipboard";
import toast from "react-hot-toast";
import { useTheme } from "@/context/theme-context";
import { links, contact } from "@/lib/data";

type Command = {
  id: string;
  label: string;
  hint?: string;
  run: () => void;
};

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const { theme, toggleTheme } = useTheme();

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
  }, []);

  const commands = useMemo<Command[]>(() => {
    const go = (hash: string) => () => {
      close();
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    };
    return [
      ...links.map((l) => ({
        id: `nav-${l.hash}`,
        label: `Go to ${l.name}`,
        hint: "section",
        run: go(l.hash),
      })),
      {
        id: "theme",
        label: `Switch to ${theme === "dark" ? "light" : "dark"} mode`,
        hint: "theme",
        run: () => {
          toggleTheme();
          close();
        },
      },
      {
        id: "resume",
        label: "Download résumé",
        hint: "file",
        run: () => {
          window.open(contact.resume, "_blank");
          close();
        },
      },
      {
        id: "email",
        label: "Copy email address",
        hint: "contact",
        run: () => {
          copy(contact.email);
          toast.success("Email copied to clipboard.");
          close();
        },
      },
      {
        id: "github",
        label: "Open GitHub profile",
        hint: "link",
        run: () => {
          window.open(contact.github, "_blank");
          close();
        },
      },
      {
        id: "linkedin",
        label: "Open LinkedIn profile",
        hint: "link",
        run: () => {
          window.open(contact.linkedin, "_blank");
          close();
        },
      },
    ];
  }, [theme, toggleTheme, close]);

  const filtered = commands.filter((c) =>
    c.label.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") close();
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-command-palette", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-command-palette", onOpen);
    };
  }, [close]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[1000] flex items-start justify-center bg-black/50 px-4 pt-[20vh] backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={close}
        >
          <motion.div
            className="w-full max-w-lg overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl"
            initial={{ opacity: 0, scale: 0.97, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -8 }}
            onClick={(e) => e.stopPropagation()}
          >
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type a command..."
              className="w-full border-b border-border bg-transparent px-4 py-3.5 text-sm text-fg outline-none placeholder:text-fg-subtle"
              onKeyDown={(e) => {
                if (e.key === "Enter" && filtered[0]) filtered[0].run();
              }}
            />
            <ul className="max-h-72 overflow-y-auto p-2">
              {filtered.length === 0 && (
                <li className="px-3 py-6 text-center text-sm text-fg-subtle">
                  No commands
                </li>
              )}
              {filtered.map((c) => (
                <li key={c.id}>
                  <button
                    type="button"
                    onClick={c.run}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm text-fg transition-colors hover:bg-surface-2"
                  >
                    {c.label}
                    {c.hint && (
                      <span className="font-mono text-xs text-fg-subtle">
                        {c.hint}
                      </span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
