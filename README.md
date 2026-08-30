# Chakkrit Jongkraijak — Personal Portfolio

A single-page developer portfolio built with the Next.js App Router.

## Stack

- **Next.js 13** (App Router, Server Actions) · **React 18** · **TypeScript**
- **Tailwind CSS** with a CSS-variable design-token system (`app/globals.css`)
- **Framer Motion** for animation
- **Resend** for the contact form
- Live **GitHub activity** section (public GitHub REST API + contributions API)
- Lightweight ⌘K **command palette**

## Getting started

```bash
npm install
cp .env.example .env.local   # add RESEND_API_KEY (and optionally GITHUB_TOKEN)
npm run dev
```

## Editing content

Almost everything lives in **`lib/data.ts`** — intro copy, about text, quick
facts, highlights, projects, skill groups, experience, and social links.
Project screenshots are in `public/`.

## Design system

Colors, surfaces, borders and typography are CSS variables defined on
`:root` / `html.dark` in `app/globals.css` and exposed to Tailwind as
`bg-bg`, `text-fg`, `border-border`, `text-accent`, etc. in
`tailwind.config.ts`. Dark is the primary theme; light is a full override.

## Deploy

Zero-config on Vercel. Set `RESEND_API_KEY` in the project's environment
variables so the contact form works in production.
