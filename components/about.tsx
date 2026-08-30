"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { aboutData } from "@/lib/data";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      id="about"
      className="mb-24 w-full max-w-4xl scroll-mt-28 sm:mb-32"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <SectionHeading index="01" kicker="about">
        A bit about me
      </SectionHeading>

      <div className="grid gap-10 sm:grid-cols-[1.6fr_1fr]">
        <div className="space-y-4 text-base leading-relaxed text-fg-muted">
          {aboutData.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <ul className="space-y-4">
          {aboutData.quickFacts.map((fact) => (
            <li key={fact.label} className="border-l border-border pl-4">
              <p className="mono-label">{fact.label}</p>
              <p className="mt-1 text-sm text-fg">{fact.value}</p>
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}
