# Chakkrit Jongkraijak — Personal Portfolio

A single-page developer portfolio built with the Next.js App Router.

## Stack

- **Next.js 14** (App Router) · **React 18** · **TypeScript**
- **Tailwind CSS** with a CSS-variable design-token system (`app/globals.css`)
- **Framer Motion** for animation
- Live **GitHub activity** section (public GitHub REST API + contributions API)
- Lightweight ⌘K **command palette**

## Getting started

```bash
npm install
cp .env.example .env.local   # optional: GITHUB_TOKEN for a higher API rate limit
npm run dev
```

## Editing content

Almost everything lives in **`lib/data.ts`** — intro copy, about text, quick
facts, highlights, projects, skill groups, experience, education, and contact
links. Project screenshots are in `public/`.

## Design system

Colors, surfaces, borders and typography are CSS variables defined on
`:root` / `html.dark` in `app/globals.css` and exposed to Tailwind as
`bg-bg`, `text-fg`, `border-border`, `text-accent`, etc. in
`tailwind.config.ts`. Light is the primary theme; dark is a full override
and respects the visitor's system preference.

## Deploy

Zero-config on Vercel.
