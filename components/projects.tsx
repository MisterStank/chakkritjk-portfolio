"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.3);

  return (
    <section
      ref={ref}
      id="projects"
      className="mb-24 w-full max-w-4xl scroll-mt-28 sm:mb-32"
    >
      <SectionHeading index="02" kicker="work">
        Selected projects
      </SectionHeading>

      <div className="grid gap-5 sm:grid-cols-2">
        {projectsData.map((project, index) => (
          <Project key={project.title} {...project} index={index} />
        ))}
      </div>
    </section>
  );
}
