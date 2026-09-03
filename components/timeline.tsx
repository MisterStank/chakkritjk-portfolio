"use client";

import React from "react";
import { motion } from "framer-motion";

export type TimelineItem = {
  title: string;
  location: string;
  description: string;
  icon: React.ReactNode;
  date: string;
  logo?: string;
};

export default function Timeline({ items }: { items: readonly TimelineItem[] }) {
  return (
    <ol className="relative border-l border-border">
      {items.map((item, i) => (
        <motion.li
          key={item.title + item.date}
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="mb-10 ml-6 last:mb-0"
        >
          <span className="absolute -left-[13px] flex h-6 w-6 items-center justify-center rounded-full border border-border bg-surface text-xs text-accent">
            {item.icon}
          </span>
          <p className="mono-label">{item.date}</p>
          <div className="mt-1 flex items-start gap-3">
            {item.logo && (
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-md border border-border bg-white p-1.5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.logo}
                  alt=""
                  aria-hidden
                  className="h-full w-full object-contain"
                />
              </span>
            )}
            <div>
              <h3 className="text-base font-semibold text-fg">{item.title}</h3>
              <p className="text-[0.9375rem] text-fg">{item.location}</p>
            </div>
          </div>
          <p className="mt-2 max-w-xl text-[0.9375rem] leading-[1.65] text-fg-muted">
            {item.description}
          </p>
        </motion.li>
      ))}
    </ol>
  );
}
