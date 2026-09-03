"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FiCopy, FiCheck } from "react-icons/fi";
import copy from "copy-to-clipboard";
import toast from "react-hot-toast";
import { useSectionInView } from "@/lib/hooks";
import { useLocale } from "@/context/locale-context";
import profileImg from "@/public/luffy.jpg";
import { intro, contact } from "@/lib/data";

const techChips = ["React", "Next.js", "TypeScript", "Node.js", "Tailwind", "PostgreSQL"];

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { t } = useLocale();
  const [copied, setCopied] = useState(false);
  const [hovered, setHovered] = useState(false);

  const copyEmail = () => {
    if (copy(contact.email)) {
      setCopied(true);
      toast.success(t.hero.emailToast);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section
      ref={ref}
      id="home"
      className="mb-24 w-full max-w-4xl scroll-mt-28 sm:mb-32"
    >
      <div className="flex flex-col-reverse items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex-1">
          <motion.p
            className="mono-label mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {t.hero.kicker}
          </motion.p>

          <motion.h1
            className="text-4xl font-semibold leading-[1.1] tracking-tight text-fg sm:text-6xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
          >
            {t.hero.greeting} {intro.name.split(" ")[0]}
            <span className="text-accent">.</span>
            <br />
            <span className="text-fg-muted">{t.hero.headline}</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl text-[1.0625rem] leading-[1.7] text-fg-muted sm:text-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {t.hero.sub}
          </motion.p>

          <motion.div
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-fg-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {t.hero.status}
          </motion.div>

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <button
              type="button"
              onClick={copyEmail}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="btn-primary min-w-[13rem] justify-center"
              aria-label={`Copy email address ${contact.email}`}
            >
              {copied ? (
                <>
                  <FiCheck /> {t.hero.copied}
                </>
              ) : hovered ? (
                <>
                  <FiCopy /> {contact.email}
                </>
              ) : (
                <>
                  <FiCopy /> {t.hero.copyEmail}
                </>
              )}
            </button>
            <a href={contact.resume} download className="btn-ghost">
              {t.hero.resume} <HiDownload className="opacity-70" />
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="icon-btn"
            >
              <BsGithub />
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="icon-btn"
            >
              <BsLinkedin />
            </a>
          </motion.div>

          <motion.ul
            className="mt-8 flex flex-wrap gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
          >
            {techChips.map((chip) => (
              <li
                key={chip}
                className="rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-xs text-fg-subtle"
              >
                {chip}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 180, damping: 18 }}
          className="relative shrink-0"
        >
          <Image
            src={profileImg}
            alt="Chakkrit Jongkraijak"
            width={160}
            height={160}
            quality={95}
            priority
            className="h-28 w-28 rounded-2xl border border-border object-cover shadow-glow sm:h-40 sm:w-40"
          />
        </motion.div>
      </div>
    </section>
  );
}
