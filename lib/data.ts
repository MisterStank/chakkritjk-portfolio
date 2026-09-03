import React from "react";
import { LuGraduationCap, LuBriefcase } from "react-icons/lu";
import bodydoughImg from "@/public/bodydough.png";
import bookstoreImg from "@/public/bookstore.png";
import animehubImg from "@/public/animehub.png";
import productstoreImg from "@/public/productstore.png";
import gymonImg from "@/public/gymon.png";
import eatraiImg from "@/public/eatrai.png";

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
  { name: "Education", hash: "#education" },
  { name: "GitHub", hash: "#github" },
] as const;

/* -------------------------------------------------------------------------- */
/*  Hero / about                                                               */
/* -------------------------------------------------------------------------- */

export const intro = {
  name: "Chakkrit Jongkraijak",
};

/* -------------------------------------------------------------------------- */
/*  Experience                                                                 */
/* -------------------------------------------------------------------------- */

/* Non-translatable per-entry metadata; parallel to the `experience.items`
   and `education.items` arrays in lib/i18n.ts (matched by index). */

export const experienceMeta = [
  { icon: React.createElement(LuBriefcase), logo: "/logos/agoda.svg" },
  { icon: React.createElement(LuBriefcase), logo: "/logos/gosoft.png" },
] as const;

/* -------------------------------------------------------------------------- */
/*  Education                                                                  */
/* -------------------------------------------------------------------------- */

export const educationMeta = [
  { icon: React.createElement(LuGraduationCap), logo: "/logos/chula.webp" },
] as const;

/* -------------------------------------------------------------------------- */
/*  Projects                                                                   */
/* -------------------------------------------------------------------------- */

export const projectsData = [
  {
    title: "Gymon",
    description:
      "A workout tracker with a Tamagotchi-style twist: a virtual companion hatches on your first workout and evolves as you keep a streak. Offline-first logging, adaptive program generation and live analytics. Flutter client, Go/GraphQL backend, Postgres and Redis.",
    tags: ["Flutter", "Go", "GraphQL", "PostgreSQL", "Redis", "Riverpod"],
    imageUrl: gymonImg,
    github: "https://github.com/MisterStank/WorkoutTracker",
    demo: "https://gymon-web.chakkritchongkraichak.workers.dev/",
    featured: true,
  },
  {
    title: "EatRai",
    description:
      "A restaurant finder with a Tinder-style swipe deck — point it at your location, filter by cuisine, swipe through nearby places and open the ones you like in Maps. No accounts: right-swipes are saved on-device. React Native (Expo) app over a thin stateless Go proxy on Google Places.",
    tags: ["React Native", "Expo", "TypeScript", "Go", "Zustand", "Reanimated"],
    imageUrl: eatraiImg,
    github: "https://github.com/MisterStank/EatRai",
    demo: "https://eatrai.help",
  },
  {
    title: "Products Store",
    description:
      "A full-stack product catalogue with CRUD, image handling and a REST API on the PERN stack (PostgreSQL, Express, React, Node).",
    tags: ["PostgreSQL", "React", "JavaScript", "Tailwind", "Express", "Node.js"],
    imageUrl: productstoreImg,
    github: "https://github.com/MisterStank/product-store-pern",
    demo: "https://m-product-store.onrender.com/",
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
