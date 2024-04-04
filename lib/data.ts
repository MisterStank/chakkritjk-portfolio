import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import bodydoughImg from "@/public/bodydough.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  /* {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },*/
] as const;

export const experiencesData = [
  {
    title: "M company",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
] as const;

export const projectsData = [
  {
    title: "Bodydough",
    description: "A website to calculate your BMI and WHR.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: bodydoughImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "Git",
  "Git Hub",
  "Tailwind",
  "MongoDB",
  "Postman",
  "Python",
  "MUI",
  "VScode",
  "Figma",
  "C",
  "C++",
] as const;

export const iconData = [
  "html",
  "css",
  "javascript",
  "typescript",
  "react",
  "nextjs",
  "nodejs",
  "express",
  "git",
  "github",
  "tailwind",
  "mongodb",
  "postman",
  "python",
  "mui",
  "vscode",
  "figma",
  "c",
  "cpp",
] as const;
