"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useLocale } from "@/context/locale-context";

export default function GithubHeading({ index }: { index: string }) {
  const { t } = useLocale();

  return (
    <SectionHeading index={index} kicker={t.github.kicker}>
      {t.github.heading}
    </SectionHeading>
  );
}
