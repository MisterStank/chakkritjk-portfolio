"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import ContactForm from "./contact-form";
import { useSectionInView } from "@/lib/hooks";
import { contact } from "@/lib/data";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-24 w-full max-w-4xl scroll-mt-28 sm:mb-32"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <SectionHeading index="06" kicker="say hi">
        Get in touch
      </SectionHeading>

      <p className="max-w-xl text-base leading-relaxed text-fg-muted">
        I&apos;m open to software engineer and frontend roles, freelance work and
        interesting collaborations. Drop a message below or email me directly at{" "}
        <a
          href={`mailto:${contact.email}`}
          className="text-accent hover:opacity-80"
        >
          {contact.email}
        </a>
        .
      </p>

      <ContactForm />
    </motion.section>
  );
}
