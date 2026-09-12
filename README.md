# Joy Sutradhar — Portfolio

A responsive, modular portfolio built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000. (First run needs internet access once, to fetch the Google Fonts used — Space Grotesk, Inter, JetBrains Mono.)

To build for production:

```bash
npm run build
npm start
```

## Project structure

```
app/
  layout.tsx      → fonts, metadata, global <html>/<body>
  page.tsx         → assembles all sections
  globals.css      → design tokens, focus states, reduced-motion rules
components/
  Header.tsx       → sticky nav with responsive mobile menu
  Hero.tsx         → intro + code-editor visual panel
  About.tsx
  Experience.tsx   → timeline, one entry per job
  Projects.tsx      → project cards with stack tags
  Skills.tsx        → skills groups + education
  Contact.tsx        → contact CTA + footer links
data/
  resume.ts         → every piece of content lives here
```

## Editing content

Everything text-based — name, summary, jobs, projects, skills, education,
contact links — lives in `data/resume.ts`. Update that file and every
component picks up the change automatically; you shouldn't need to touch
component files just to update content.

## Adding a project

Add an entry to the `projects` array in `data/resume.ts`:

```ts
{
  name: "Project Name",
  subtitle: "One-line description",
  stack: ["Next.js", "TypeScript"],
  points: ["What you built", "What you improved"],
  href: "https://github.com/you/project", // optional
}
```

## Deploying

The project is a standard Next.js app, so it deploys as-is to Vercel
(recommended — connect the GitHub repo and it auto-detects Next.js),
Netlify, or any Node host. No environment variables are required.

## Design notes

- Dark "editor" theme (near-black navy, amber accent) rather than a generic
  light SaaS template — chosen to fit a React/frontend developer's world.
- JetBrains Mono is used only for section labels and code, to keep it
  purposeful rather than decorative.
- Fully responsive: single-column mobile layout, hamburger nav below `md`,
  fluid type scale, and a two-column layout from tablet width up.
