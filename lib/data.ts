import React from "react";
import { LuGraduationCap, LuBriefcase } from "react-icons/lu";
import bodydoughImg from "@/public/bodydough.png";
import bookstoreImg from "@/public/bookstore.png";
import animehubImg from "@/public/animehub.png";
import productstoreImg from "@/public/productstore.png";

/* -------------------------------------------------------------------------- */
/*  Identity / contact                                                         */
/* -------------------------------------------------------------------------- */

export const githubUsername = "MisterStank";

export const contact = {
  email: "mchakkrit2002@gmail.com",
  github: `https://github.com/${githubUsername}`,
  linkedin: "https://www.linkedin.com/in/chakkrit-jongkraijak/",
  resume: "/resume.pdf",
};

/* -------------------------------------------------------------------------- */
/*  Navigation                                                                 */
/* -------------------------------------------------------------------------- */

export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Projects", hash: "#projects" },
  { name: "Skills", hash: "#skills" },
  { name: "Experience", hash: "#experience" },
  { name: "GitHub", hash: "#github" },
  { name: "Contact", hash: "#contact" },
] as const;

/* -------------------------------------------------------------------------- */
/*  Hero / about                                                               */
/* -------------------------------------------------------------------------- */

export const intro = {
  kicker: "Computer Engineering · Bangkok, Thailand",
  name: "Chakkrit Jongkraijak",
  headline: "Full-stack web developer",
  sub: "Fresh Computer Engineering graduate from Chulalongkorn University. I build fast, accessible web apps with React, Next.js and TypeScript.",
  status: "Open to software engineer / frontend roles",
};

export const aboutData = {
  paragraphs: [
    "I'm a fresh graduate in Computer Engineering from Chulalongkorn University with a strong interest in technology and software development. My focus is full-stack web development — turning ideas into products that are fast, accessible and pleasant to use.",
    "Across coursework and personal projects I've worked with JavaScript, TypeScript, Python, SQL, C and C++, plus frameworks and tooling around the React ecosystem. During my internship at Gosoft (Thailand) I contributed to production software in the online unit under CPALL.",
  ],
  quickFacts: [
    { label: "Location", value: "Bangkok, Thailand" },
    { label: "Education", value: "B.Eng. Computer Engineering, Chulalongkorn" },
    { label: "Focus", value: "Full-stack web · React / Next.js" },
    { label: "Status", value: "Open to work" },
  ],
};

export const highlightsData = [
  { label: "Currently", value: "Building side projects & studying system design" },
  { label: "Favourite stack", value: "Next.js · TypeScript · Tailwind · Postgres" },
  { label: "Also into", value: "Clean UI, DX tooling, and a good keyboard" },
];

/* -------------------------------------------------------------------------- */
/*  Experience                                                                 */
/* -------------------------------------------------------------------------- */

export const experiencesData = [
  {
    title: "Software Engineer Intern",
    location: "Gosoft (Thailand) Co., Ltd. — Online Unit (CPALL)",
    description:
      "Summer internship on the online unit. Worked alongside the engineering team on internal web tooling and feature work.",
    icon: React.createElement(LuBriefcase),
    date: "Jun 2024 – Jul 2024",
  },
  {
    title: "B.Eng. Computer Engineering",
    location: "Chulalongkorn University",
    description:
      "Coursework across data structures & algorithms, databases, operating systems, computer networks and software engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "Graduated 2024",
  },
] as const;

/* -------------------------------------------------------------------------- */
/*  Projects                                                                   */
/* -------------------------------------------------------------------------- */

export const projectsData = [
  {
    title: "Products Store",
    description:
      "A full-stack product catalogue with CRUD, image handling and a REST API on the PERN stack (PostgreSQL, Express, React, Node).",
    tags: ["PostgreSQL", "React", "JavaScript", "Tailwind", "Express", "Node.js"],
    imageUrl: productstoreImg,
    github: "https://github.com/MisterStank/product-store-pern",
    demo: "https://m-product-store.onrender.com/",
    featured: true,
  },
  {
    title: "Book Store",
    description:
      "A MERN book store with a Node/Express API, MongoDB persistence and a React front end for browsing and managing titles.",
    tags: ["React", "JavaScript", "Tailwind", "Express", "Node.js", "MongoDB"],
    imageUrl: bookstoreImg,
    github: "https://github.com/MisterStank/BookStore-MERN",
    demo: "https://m-book-store.vercel.app",
  },
  {
    title: "Anime Hub",
    description:
      "A Next.js app that consumes a public anime API with client-side search, filtering and Framer Motion transitions.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Framer Motion"],
    imageUrl: animehubImg,
    github: "https://github.com/MisterStank/Anime-Hub",
    demo: "https://m-anime-hub.vercel.app",
  },
  {
    title: "Bodydough",
    description:
      "A health calculator for BMI and waist-to-hip ratio with Redux-managed state and a responsive Next.js UI.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: bodydoughImg,
    github: "https://github.com/MisterStank/bodydough-project",
    demo: "https://bodydough-project.vercel.app",
  },
] as const;

/* -------------------------------------------------------------------------- */
/*  Skills (grouped)                                                           */
/* -------------------------------------------------------------------------- */

export const skillGroups = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "C", "C++", "SQL"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "MUI", "HTML", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "MySQL", "MongoDB", "PostgreSQL"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Postman", "VS Code", "Figma", "AWS"],
  },
] as const;
