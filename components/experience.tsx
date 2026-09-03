"use client";

import React from "react";
import SectionHeading from "./section-heading";
import Timeline from "./timeline";
import { experienceMeta } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useLocale } from "@/context/locale-context";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { t } = useLocale();

  const items = t.experience.items.map((entry, i) => ({
    ...entry,
    icon: experienceMeta[i]?.icon,
    logo: experienceMeta[i]?.logo,
  }));

  return (
    <section
      id="experience"
      ref={ref}
      className="mb-24 w-full max-w-4xl scroll-mt-28 sm:mb-32"
    >
      <SectionHeading index="04" kicker={t.experience.kicker}>
        {t.experience.heading}
      </SectionHeading>

      <Timeline items={items} />
    </section>
  );
}
