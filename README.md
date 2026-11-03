# Mota Content Media

Website for Mota Content Media, a creative technology and digital marketing agency.

> Ideas into influence. Content into growth.

## Stack

| Concern | Choice |
| --- | --- |
| Framework | Next.js 16 (App Router), React 19, TypeScript |
| Styling | Tailwind CSS v4, with design tokens in `src/app/globals.css` |
| Motion | Motion for React (`motion/react`) |
| Fonts | Geist and Instrument Serif, self-hosted at build time via `next/font` |
| Hosting | Cloudflare, served as a static export from `out/` |

Libraries are added only when a feature needs them. GSAP, Three.js / React Three Fiber and Lucide are planned but not yet installed.

## Getting started

Requires Node 22 (see `.nvmrc`).

```bash
npm install
npm run dev        # http://localhost:3000
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Local development server |
| `npm run build` | Static production build into `out/` |
| `npm run lint` | ESLint |
| `npm run typecheck` | Route types plus TypeScript |
| `npm run check` | Lint, type-check and build: run before pushing |

## Deployment (Cloudflare)

Pushing to `main` triggers a Cloudflare build. The project must use:

- **Build command:** `npm run build`
- **Build output directory:** `out`
- **Node version:** 22 (read from `.nvmrc`; or set `NODE_VERSION=22`)

Because the site is a static export, server-only Next.js features (Server Actions, route handlers, `next/image` optimisation, redirects and headers in `next.config.ts`) are unavailable. Optimise images before committing them, and use a Cloudflare Function for anything that needs a server, such as the contact form.

## Project structure

```
src/
  app/                  Routes, root layout, global styles and tokens
  components/
    ui/                 Button, Container, Section, Heading (Accent, Eyebrow)
    motion/             Reveal and future motion primitives
  content/              Typed site content and brand facts
  lib/                  Fonts and utilities
public/                 Static assets (brand files, optimised images)
```

## Design system

Colours (Tailwind utilities such as `bg-deep`, `text-slate`):

| Token | Hex | Use |
| --- | --- | --- |
| `white` | `#FFFFFF` | Dominant background |
| `ice` | `#F4F7FB` | Alternate sections, subtle surfaces |
| `silver` | `#DCE2EA` | Dividers and depth, decorative only |
| `electric` | `#2F80ED` | Accents, icons, focus rings, large text only |
| `deep` | `#123B70` | Primary buttons, links, highlighted type |
| `midnight` | `#17243A` | Body text, dark sections |
| `slate` | `#4A5872` | Secondary text |

**Accessibility rule:** electric blue on white is 3.9:1, below the WCAG AA minimum of 4.5:1 for normal text. Never use it for body copy, small links or button labels. Deep blue (11.1:1) and slate (7.2:1) are safe for any text.

Type sizes `text-display`, `text-h1`, `text-h2`, `text-h3`, `text-lead` and `text-eyebrow` are fluid. Spacing tokens `px-gutter`, `py-section` and `py-section-sm` keep layout rhythm consistent.

All animation respects `prefers-reduced-motion`.

## Content rules

Never add invented testimonials, statistics, clients, awards or credentials, and never ship UI that looks functional but does nothing.
