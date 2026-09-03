"use client";

import React from "react";
import SectionHeading from "./section-heading";
import Timeline from "./timeline";
import { educationMeta } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useLocale } from "@/context/locale-context";

export default function Education() {
  const { ref } = useSectionInView("Education");
  const { t } = useLocale();

  const items = t.education.items.map((entry, i) => ({
    ...entry,
    icon: educationMeta[i]?.icon,
    logo: educationMeta[i]?.logo,
  }));

  return (
    <section
      id="education"
      ref={ref}
      className="mb-24 w-full max-w-4xl scroll-mt-28 sm:mb-32"
    >
      <SectionHeading index="05" kicker={t.education.kicker}>
        {t.education.heading}
      </SectionHeading>

      <Timeline items={items} />
    </section>
  );
}
