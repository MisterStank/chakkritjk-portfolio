"use client";

import React from "react";
import { motion } from "framer-motion";

export type TimelineItem = {
  title: string;
  location: string;
  description: string;
  icon: React.ReactNode;
  date: string;
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
          <h3 className="mt-1 text-base font-semibold text-fg">{item.title}</h3>
          <p className="text-[0.9375rem] text-fg">{item.location}</p>
          <p className="mt-2 max-w-xl text-[0.9375rem] leading-[1.65] text-fg-muted">
            {item.description}
          </p>
        </motion.li>
      ))}
    </ol>
  );
}
