# Mota Content Media

Website for Mota Content Media, a creative technology and digital marketing agency.

> Ideas into influence. Content into growth.

## Stack

| Concern | Choice |
| --- | --- |
| Framework | Next.js 16 (App Router), React 19, TypeScript |
| Styling | Tailwind CSS v4, with design tokens in `src/app/globals.css` |
| Motion | Motion for React (`motion/react`) |
| Fonts | Manrope (headings) and Inter (body), self-hosted at build time via `next/font` |
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

`main` is the only branch. Every push to it triggers a Cloudflare Pages production build.

- **Build command:** `npm run build` (set in the Cloudflare dashboard under Settings → Build)
- **Build output directory:** `out` (set in `wrangler.toml`, which overrides the dashboard)
- **Node version:** 22 (read from `.nvmrc`; or set `NODE_VERSION=22`)
- **Production branch:** `main`

If a deploy finishes in seconds and the site is blank, the build command is missing: Cloudflare uploaded the repository instead of the built site.

Because the site is a static export, server-only Next.js features (Server Actions, route handlers, `next/image` optimisation, redirects and headers in `next.config.ts`) are unavailable. Optimise images before committing them, and use a Cloudflare Function for anything that needs a server, such as the contact form.

## Project structure

```
src/
  app/
    globals.css         Design tokens and visual utilities (single source of truth)
    layout.tsx          Fonts, metadata, MotionProvider
    design-system/      page.dev.tsx: internal preview, `npm run dev` only
  components/
    navigation/         Header, DesktopNavigation, ServicesMegaMenu, MobileNavigation,
                        NavigationLink, Logo
    sections/           PageIntro (shared inner-page opening)
    home/               HomeHero, CreativeUniverse, universe/Illustrations
    ui/                 Heading, Accent, Eyebrow, Text, Button, Card, Chip, Container,
                        Section, SectionHeading, Grid, Divider, MediaFrame, IconFrame
    cards/              Service, Feature, Portfolio, Testimonial, Industry, Article
    motion/             MotionProvider, Reveal
  content/              Typed site content: site.ts, navigation.ts, services.ts
  lib/                  Fonts, motion tokens for JS, utilities
public/
  brand/                mcm-logo-source.png (original, unaltered) and mcm-logo.webp (web copy)
```

## Routes

| Route | Status |
| --- | --- |
| `/` | Homepage: "The Mota Creative Universe" hero (further sections to follow) |
| `/services/` | Six service cards |
| `/services/[slug]/` | One page per service, generated from `content/services.ts` |
| `/contact/` | Email contact (address set in `src/content/site.ts`) |
| `/about/`, `/work/`, `/insights/`, `/create-your-service/` | Planned pages showing an "in development" notice |

Navigation items and services are defined once in `src/content/` and shared by the header, mega menu, mobile menu and pages.

Run `npm run dev` and open `/design-system/` to see every token and component. Files ending in `.dev.tsx` are routes only in development and are never built into the live site.

## Design system

All tokens live in `src/app/globals.css` and become Tailwind utilities. Motion timings are mirrored in `src/lib/motion.ts` for Motion for React; change both together.

### Colour

| Token | Hex | Use | Contrast on white |
| --- | --- | --- | --- |
| `white` | `#FFFFFF` | Dominant background | |
| `ice` / `surface` | `#F4F7FB` | Alternate sections, card fills | |
| `silver` / `line` | `#DCE2EA` | Borders, dividers (decorative) | 1.3 |
| `mist` | `#EAF2FD` | Faint highlight fill | |
| `electric` | `#2F80ED` | Accents, icons, focus ring, glows, large text | 3.9 |
| `interactive` | `#1C6AD4` | Buttons and links | 5.2 |
| `deep` | `#123B70` | Emphasis and highlighted headings | 11.1 |
| `midnight` / `ink` | `#17243A` | Body text, rare dark bands | 15.6 |
| `slate` | `#4A5872` | Secondary text | 7.2 |
| `muted` | `#5F6C85` | Captions and meta | 5.3 |
| `line-strong` | `#8592A8` | Form-field borders | 3.2 |

**Accessibility rule:** brand electric blue is 3.9:1 on white, below the 4.5:1 needed for normal text, so white button labels and small links use `interactive` blue instead. Electric blue is for large text, icons, focus rings and glows.

### Typography

Headings use Manrope (`font-display`); everything else uses Inter (`font-sans`). Sizes are fluid between 360px and 1440px viewports.

| Utility | Phone → desktop | Use |
| --- | --- | --- |
| `text-display` | 44 → 88px, 800 | Hero statements |
| `text-h1` | 36 → 64px, 800 | Page titles |
| `text-h2` | 30 → 48px, 700 | Section titles |
| `text-h3` | 22 → 28px, 700 | Sub-sections, large cards |
| `text-h4` | 18 → 20px, 700 | Cards and lists |
| `text-body-lg` | 18 → 21px | Introductions |
| `text-body` | 16 → 17px | Body copy |
| `text-body-sm` | 14px | Captions, meta, card text |
| `text-label` | 12px, 600, uppercase | Eyebrows and labels |
| `text-button` | 15px, 600 | Buttons |
| `text-nav` | 15px, 500 | Navigation |

### Layout and spacing

- **Breakpoints:** `sm` 640, `md` 768 (tablet), `lg` 1024 (desktop), `xl` 1280, `2xl` 1536.
- **Containers:** `max-w-prose` 672, `max-w-narrow` 832, `max-w-content` 1280, `max-w-wide` 1440, all with the fluid `px-gutter` (20 → 48px).
- **Section padding:** `py-section-sm`, `py-section`, `py-section-lg`.
- **Grid gaps:** `gap-layout-sm`, `gap-layout`, `gap-layout-lg`. The `Grid` component provides 2, 3, 4 and 12-column presets.
- **Card padding:** `p-card-sm`, `p-card`, `p-card-lg`.
- **Text rhythm:** `gap-stack-xs`, `gap-stack-sm`, `gap-stack`, `gap-stack-lg`.
- **Navigation:** `h-nav` (64 → 80px) and `gap-nav-gap`.
- **Icons:** `size-icon-sm` 16, `size-icon` 20, `size-icon-lg` 24, `size-icon-xl` 32.

### Components

- **Buttons:** `primary`, `secondary` and `text` variants; `sm`, `md` and `lg` sizes; optional sliding arrow; hover, focus, active and disabled states.
- **Cards:** a base `Card` with `raised`, `outline`, `ice`, `glass`, `inverse` and `plain` surfaces, plus the six card types. Linked cards use one stretched link, so the whole card is clickable and announced once.
- **Section backgrounds:** `white`, `ice`, `fade`, `glow` (optional `grid` overlay) and `midnight`. White should carry most of the site.
- **Media:** `MediaFrame` for consistent ratios, radius, cover cropping, hover zoom and text scrims.

### Motion

CSS transitions handle hover and focus: 150ms colour, 250ms buttons and links, 500ms cards and 800ms reveals, using `ease-standard` and `ease-out-expo`. `Reveal` handles entrance animation. `MotionProvider` and a global CSS rule both honour `prefers-reduced-motion`.

## Content rules

Never add invented testimonials, statistics, clients, awards or credentials, and never ship UI that looks functional but does nothing.
