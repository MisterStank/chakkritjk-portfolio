import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import bodydoughImg from "@/public/bodydough.png";
import bookstoreImg from "@/public/bookstore.png";
import animehubImg from "@/public/animehub.png";

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
  {
    name: "Experience",
    hash: "#experience",
  },
  /*{
    name: "Contact",
    hash: "#contact",
  },*/
] as const;

export const experiencesData = [
  {
    title: "Gosoft (Thailand) Co., Ltd.",
    location: "Software Engineer Intern",
    description:
      "Summer Internship in Online Unit of Gosoft company (under CPALL)",
    icon: React.createElement(LuGraduationCap),
    date: "June 2024 - July 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Book Store",
    description: "A book store website using MERN stack",
    tags: ["React", "JavaScript", "Tailwind", "Express" ,"NodeJS" ,"MongoDB"],
    imageUrl: bookstoreImg,
    github: "https://github.com/MisterStank/BookStore-MERN",
    demo: "https://m-book-store.vercel.app"
  },
  {
    title: "Anime Hub",
    description: "A website that fetch data from Anime API",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Framer Motion"],
    imageUrl: animehubImg,
    github: "https://github.com/MisterStank/Anime-Hub",
    demo: "https://m-anime-hub.vercel.app"
  },
  {
    title: "Bodydough",
    description: "A website to calculate your BMI and WHR.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: bodydoughImg,
    github: "https://github.com/MisterStank/bodydough-project",
    demo: "https://bodydough-project.vercel.app"
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
  "AWS"
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
  "aws"
] as const;
