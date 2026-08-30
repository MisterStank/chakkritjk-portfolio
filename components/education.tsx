"use client";

import React from "react";
import SectionHeading from "./section-heading";
import Timeline from "./timeline";
import { educationData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Education() {
  const { ref } = useSectionInView("Education");

  return (
    <section
      id="education"
      ref={ref}
      className="mb-24 w-full max-w-4xl scroll-mt-28 sm:mb-32"
    >
      <SectionHeading index="05" kicker="study">
        Education
      </SectionHeading>

      <Timeline items={educationData} />
    </section>
  );
}
