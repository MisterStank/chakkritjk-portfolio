"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <section
      id="experience"
      ref={ref}
      className="mb-24 w-full max-w-4xl scroll-mt-28 sm:mb-32"
    >
      <SectionHeading index="04" kicker="path">
        Experience &amp; education
      </SectionHeading>

      <ol className="relative border-l border-border">
        {experiencesData.map((item, i) => (
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
            <p className="text-sm text-fg-muted">{item.location}</p>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-fg-muted">
              {item.description}
            </p>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
