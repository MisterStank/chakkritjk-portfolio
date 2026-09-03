"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLocale } from "@/context/locale-context";

export default function Highlights() {
  const { t } = useLocale();

  return (
    <section className="mb-24 w-full max-w-4xl sm:mb-32">
      <div className="grid gap-4 sm:grid-cols-3">
        {t.highlights.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="card glow-hover p-5"
          >
            <p className="mono-label mb-2">{item.label}</p>
            <p className="text-[0.9375rem] leading-[1.6] text-fg">{item.value}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
