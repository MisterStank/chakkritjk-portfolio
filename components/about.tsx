"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        My name is Chakkrit Jongkraijak. I am a fourth-year computer engineering
        student at Chulalongkorn University. With a strong interest in
        technology and software development, I am eager to explore chances in
        this field. Throughout my academic career, I have received experience in
        a variety of programming languages, including JavaScript, TypeScript,
        HTML, CSS, Python, SQL, C, and C++, as well as numerous frameworks and
        tools. I have also gained hands-on experience in software development
        through personal projects and coursework.
      </p>
    </motion.section>
  );
}