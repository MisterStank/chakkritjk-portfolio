"use client";

import React from "react";
import { BsArrowUpRight, BsStar } from "react-icons/bs";
import { githubUsername, contact } from "@/lib/data";
import { useLocale } from "@/context/locale-context";

export type RepoCard = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
};

export type ContribDay = { date: string; count: number; level: number };

const levelColor = [
  "bg-surface-2",
  "bg-[rgba(52,211,153,0.25)]",
  "bg-[rgba(52,211,153,0.45)]",
  "bg-[rgba(52,211,153,0.70)]",
  "bg-[rgb(52,211,153)]",
];

export default function GithubActivityView({
  repos,
  contrib,
}: {
  repos: RepoCard[] | null;
  contrib: { total: number; days: ContribDay[] } | null;
}) {
  const { t } = useLocale();

  return (
    <div className="card p-5 sm:p-6">
      {contrib ? (
        <>
          <div className="flex items-baseline justify-between">
            <p className="text-sm text-fg-muted">
              <span className="font-semibold text-fg">{contrib.total}</span>{" "}
              {t.github.contributions}
              <span className="ml-2 text-xs text-fg-subtle">
                · {t.github.publicActivity}
              </span>
            </p>
            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-xs text-accent hover:opacity-80"
            >
              @{githubUsername} <BsArrowUpRight />
            </a>
          </div>
          <div className="mt-4 grid grid-flow-col grid-rows-[repeat(7,minmax(0,1fr))] gap-[3px] overflow-x-auto pb-1">
            {contrib.days.map((d) => (
              <span
                key={d.date}
                title={`${d.date}: ${d.count}`}
                className={`h-[10px] w-[10px] rounded-[2px] ${
                  levelColor[d.level] ?? levelColor[0]
                }`}
              />
            ))}
          </div>
        </>
      ) : (
        <p className="text-sm text-fg-muted">
          {t.github.graphErrorPrefix}
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            className="text-accent hover:opacity-80"
          >
            {t.github.viewOnGithub}
          </a>
          .
        </p>
      )}

      {repos && repos.length > 0 && (
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              className="card glow-hover flex flex-col p-4"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-medium text-fg">
                  {repo.name}
                </span>
                {repo.stargazers_count > 0 && (
                  <span className="inline-flex items-center gap-1 text-xs text-fg-subtle">
                    <BsStar /> {repo.stargazers_count}
                  </span>
                )}
              </div>
              <p className="mt-2 flex-1 text-[0.85rem] leading-[1.6] text-fg-muted">
                {repo.description ?? t.github.noDescription}
              </p>
              {repo.language && (
                <span className="mt-3 inline-flex items-center gap-1.5 text-xs text-fg-subtle">
                  <span className="h-2 w-2 rounded-full bg-accent-2" />
                  {repo.language}
                </span>
              )}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
