import React from "react";
import SectionHeading from "./section-heading";
import { BsArrowUpRight, BsStar } from "react-icons/bs";
import { githubUsername, contact } from "@/lib/data";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
  archived: boolean;
};

type ContribDay = { date: string; count: number; level: number };

const ghHeaders: Record<string, string> = {
  Accept: "application/vnd.github+json",
  ...(process.env.GITHUB_TOKEN
    ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
    : {}),
};

async function getRepos(): Promise<Repo[] | null> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=100`,
      {
        headers: ghHeaders,
        next: { revalidate: 3600 },
      }
    );
    if (!res.ok) return null;
    const data: Repo[] = await res.json();
    return data
      .filter((r) => !r.fork && !r.archived)
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 4);
  } catch {
    return null;
  }
}

async function getContributions(): Promise<{
  total: number;
  days: ContribDay[];
} | null> {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.dev/v4/${githubUsername}?y=last`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return null;
    const data = await res.json();
    const days: ContribDay[] = data.contributions ?? [];
    const total = days.reduce((sum, d) => sum + d.count, 0);
    return { total, days: days.slice(-182) };
  } catch {
    return null;
  }
}

const levelColor = [
  "bg-surface-2",
  "bg-[rgba(52,211,153,0.25)]",
  "bg-[rgba(52,211,153,0.45)]",
  "bg-[rgba(52,211,153,0.70)]",
  "bg-[rgb(52,211,153)]",
];

export default async function GithubActivity() {
  const [repos, contrib] = await Promise.all([getRepos(), getContributions()]);

  return (
    <section id="github" className="mb-24 w-full max-w-4xl scroll-mt-28 sm:mb-32">
      <SectionHeading index="06" kicker="live">
        GitHub activity
      </SectionHeading>

      <div className="card p-5 sm:p-6">
        {contrib ? (
          <>
            <div className="flex items-baseline justify-between">
              <p className="text-sm text-fg-muted">
                <span className="font-semibold text-fg">{contrib.total}</span>{" "}
                contributions in the last year
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
            Couldn&apos;t load the contribution graph right now —{" "}
            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              className="text-accent hover:opacity-80"
            >
              view it on GitHub
            </a>
            .
          </p>
        )}
      </div>

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
                {repo.description ?? "No description"}
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
    </section>
  );
}
