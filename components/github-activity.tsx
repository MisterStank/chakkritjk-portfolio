import React from "react";
import GithubHeading from "./github-heading";
import GithubActivityView, {
  type RepoCard,
  type ContribDay,
} from "./github-activity-view";
import { githubUsername } from "@/lib/data";

type Repo = RepoCard & {
  fork: boolean;
  archived: boolean;
  pushed_at: string;
};

const ghHeaders: Record<string, string> = {
  Accept: "application/vnd.github+json",
  ...(process.env.GITHUB_TOKEN
    ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
    : {}),
};

async function getRepos(): Promise<RepoCard[] | null> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${githubUsername}/repos?sort=pushed&per_page=100`,
      {
        headers: ghHeaders,
        next: { revalidate: 3600 },
      }
    );
    if (!res.ok) return null;
    const data: Repo[] = await res.json();
    return data
      .filter((r) => !r.fork && !r.archived)
      .sort(
        (a, b) =>
          new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
      )
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
    // GitHub's own contributions calendar (last ~12 months). No API key needed.
    const res = await fetch(
      `https://github.com/users/${githubUsername}/contributions`,
      {
        headers: { "User-Agent": "portfolio-site" },
        next: { revalidate: 3600 },
      }
    );
    if (!res.ok) return null;
    const html = await res.text();

    const counts: Record<string, number> = {};
    const tipRe =
      /<tool-tip[^>]*for="(contribution-day-component-\d+-\d+)"[^>]*>([^<]*)<\/tool-tip>/g;
    let tip: RegExpExecArray | null;
    while ((tip = tipRe.exec(html)) !== null) {
      counts[tip[1]] = /^\d/.test(tip[2]) ? parseInt(tip[2], 10) : 0;
    }

    const cellRe =
      /data-date="(\d{4}-\d{2}-\d{2})"[^>]*id="(contribution-day-component-\d+-\d+)"[^>]*data-level="(\d)"/g;
    const days: ContribDay[] = [];
    let cell: RegExpExecArray | null;
    while ((cell = cellRe.exec(html)) !== null) {
      days.push({
        date: cell[1],
        count: counts[cell[2]] ?? 0,
        level: Number(cell[3]),
      });
    }
    if (days.length === 0) return null;

    days.sort((a, b) => a.date.localeCompare(b.date));
    const total = days.reduce((sum, d) => sum + d.count, 0);
    return { total, days };
  } catch {
    return null;
  }
}

export default async function GithubActivity() {
  const [repos, contrib] = await Promise.all([getRepos(), getContributions()]);

  return (
    <section id="github" className="mb-24 w-full max-w-4xl scroll-mt-28 sm:mb-32">
      <GithubHeading index="06" />
      <GithubActivityView repos={repos} contrib={contrib} />
    </section>
  );
}
