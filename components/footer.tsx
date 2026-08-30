import React from "react";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { contact } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 mx-auto mt-24 w-full max-w-5xl border-t border-border px-4 py-10">
      <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-sm text-fg-muted">
          &copy; {year} Chakkrit Jongkraijak
        </p>

        <div className="flex items-center gap-3">
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="icon-btn h-9 w-9"
          >
            <BsGithub />
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="icon-btn h-9 w-9"
          >
            <BsLinkedin />
          </a>
          <Link href="#home" className="text-sm text-fg-muted hover:text-fg">
            Back to top
          </Link>
        </div>
      </div>

      <p className="mt-6 font-mono text-xs text-fg-subtle">
        Built with Next.js, TypeScript, Tailwind CSS, Framer Motion & Resend.
        Deployed on Vercel.
      </p>
    </footer>
  );
}
