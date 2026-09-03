"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { BsGithub, BsArrowUpRight } from "react-icons/bs";
import clsx from "clsx";

type ProjectProps = (typeof projectsData)[number] & {
  index: number;
  featured?: boolean;
};

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  github,
  demo,
  featured,
  index,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.15 1"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.96, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.article
      ref={ref}
      style={{ scale, opacity }}
      className="card group flex flex-col overflow-hidden"
    >
      <div className="relative aspect-[3/2] w-full overflow-hidden border-b border-border bg-surface-2">
        <Image
          src={imageUrl}
          alt=""
          aria-hidden
          fill
          quality={20}
          sizes="(max-width: 640px) 100vw, 50vw"
          className="scale-125 object-cover blur-2xl brightness-75"
        />
        <Image
          src={imageUrl}
          alt={`${title} screenshot`}
          fill
          quality={90}
          sizes="(max-width: 640px) 100vw, 50vw"
          className="object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-2">
          {featured && (
            <span className="mono-label text-accent">featured</span>
          )}
          <h3 className="text-lg font-semibold text-fg">{title}</h3>
        </div>

        <p className="mt-2 flex-1 text-[0.9375rem] leading-[1.65] text-fg-muted">
          {description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-md border border-border bg-surface-2 px-2 py-0.5 font-mono text-[0.7rem] text-fg-subtle"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex items-center gap-4 text-sm">
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-fg-muted transition-colors hover:text-fg"
          >
            <BsGithub /> Code
          </a>
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-accent transition-colors hover:opacity-80"
            >
              Live demo <BsArrowUpRight />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
