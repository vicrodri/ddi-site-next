# Building the DDI Site from Scratch

A step-by-step guide to recreate **Dagger Defense Industries** (a Star Citizen organization site) with the same architecture as [vicrodri/ddi-site-next](https://github.com/vicrodri/ddi-site-next).

**Live reference:** [https://ddi-site-next.netlify.app/](https://ddi-site-next.netlify.app/)

This guide covers prerequisites, project bootstrap, Next.js concepts used in the project, dual build (Node + static export), best practices, and how to build, test, and deploy.

---

## Table of contents

1. [What you will build](#1-what-you-will-build)
2. [Prerequisites](#2-prerequisites)
3. [Bootstrap the project](#3-bootstrap-the-project)
4. [Project structure](#4-project-structure)
5. [Next.js concepts used in this project](#5-nextjs-concepts-used-in-this-project)
6. [Styling: Tailwind CSS v4 + design tokens](#6-styling-tailwind-css-v4--design-tokens)
7. [Theme (dark / light)](#7-theme-dark--light)
8. [Shared components](#8-shared-components)
9. [Pages and routes](#9-pages-and-routes)
10. [Dual build explained](#10-dual-build-explained)
11. [Configuring `next.config.ts`](#11-configuring-nextconfigts)
12. [Client redirects for static export](#12-client-redirects-for-static-export)
13. [Best practices applied here](#13-best-practices-applied-here)
14. [Build, test, and run locally](#14-build-test-and-run-locally)
15. [Deploy](#15-deploy)
16. [Checklist](#16-checklist)

---

## 1. What you will build

A multi-page marketing / org site with:

| Route | Purpose |
|-------|---------|
| `/` | Home (hero, features, CTA) |
| `/about` | Leadership, values, rules |
| `/join` | Recruitment steps |
| `/military` | Military overview + sub-branches |
| `/military/ddmc`, `/military/ddnf` | Combat & Naval Fleet |
| `/industry` | Industry overview + sub-branches |
| `/industry/ddid`, `/industry/ddmd` | Industry & Medical |
| `/ddmc`, `/ddnf`, `/ddid`, `/ddmd` | Short URLs that redirect to the real pages |

Stack: **Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · next-themes · lucide-react**.

---

## 2. Prerequisites

Install and verify:

```bash
node -v   # 18.18+ (20 LTS recommended)
npm -v    # or yarn / pnpm / bun
```

Optional but useful:

- **Git**
- A code editor (VS Code / Cursor) with the ESLint and Tailwind extensions
- Accounts for later deploy: [Netlify](https://netlify.com) and/or [Vercel](https://vercel.com)

No database or backend is required for this site; it is mostly static content.

---

## 3. Bootstrap the project

### Option A — Start from the official template (recommended for learning)

```bash
npx create-next-app@latest ddi-site-next \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*" \
  --turbopack
```

When prompted, accept defaults that match the list above (App Router, `src/`, `@/*`).

Then move into the folder and install the extra dependencies used by DDI:

```bash
cd ddi-site-next
npm install next-themes lucide-react clsx tailwind-merge
npm install -D cross-env
```

> **Note:** The real repo uses Next `16.4.0`, React `19.3.0`, and Tailwind `4` with `@tailwindcss/turbopack`. Version numbers may differ slightly depending on when you scaffold; align them with `package.json` from the reference repo if you need an exact match.

### Option B — Clone the reference repo

```bash
git clone https://github.com/vicrodri/ddi-site-next.git
cd ddi-site-next
npm install
```

Use this when you want to study or extend the finished project rather than rebuild every file by hand.

### Scripts to add to `package.json`

Ensure you have at least:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "build:vercel": "next build",
    "build:static": "cross-env NEXT_OUTPUT=export next build",
    "start": "next start",
    "start:static": "npx --yes serve out"
  }
}
```

`cross-env` makes `NEXT_OUTPUT=export` work the same on Windows, macOS, and Linux.

---

## 4. Project structure

Target layout (same idea as the reference repo):

```
ddi-site-next/
├── public/                      # Static assets (logo, favicons)
│   └── ddi-logo-nobg.png
├── src/
│   ├── app/                     # App Router
│   │   ├── layout.tsx           # Root layout (fonts, theme, header/footer)
│   │   ├── page.tsx             # Home
│   │   ├── globals.css          # Tailwind + design tokens
│   │   ├── about/page.tsx
│   │   ├── join/page.tsx
│   │   ├── military/
│   │   │   ├── page.tsx
│   │   │   ├── ddmc/page.tsx
│   │   │   └── ddnf/page.tsx
│   │   ├── industry/
│   │   │   ├── page.tsx
│   │   │   ├── ddid/page.tsx
│   │   │   └── ddmd/page.tsx
│   │   ├── ddmc/page.tsx        # Short URL → client redirect
│   │   ├── ddnf/page.tsx
│   │   ├── ddid/page.tsx
│   │   └── ddmd/page.tsx
│   ├── components/
│   │   ├── Header.tsx           # Client: nav + mobile menu
│   │   ├── Footer.tsx
│   │   ├── Logo.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── ThemeProvider.tsx    # Optional thin wrapper
│   │   └── ClientRedirect.tsx
│   └── lib/
│       ├── utils.ts             # cn() helper
│       └── types.ts             # Shared types (if any)
├── next.config.ts
├── tsconfig.json
├── eslint.config.mjs
├── package.json
└── README.md
```

Path alias `@/*` → `./src/*` is configured in `tsconfig.json` so imports look like `@/components/Header`.

---

## 5. Next.js concepts used in this project

### 5.1 App Router (`src/app`)

- Each folder under `app/` is a **route segment**.
- `page.tsx` is the UI for that route.
- `layout.tsx` wraps nested routes and does not remount on navigation.

The root layout owns global chrome (fonts, theme provider, header, footer). Pages only render their section content.

### 5.2 Server Components vs Client Components

By default, files in `app/` are **Server Components** (no `"use client"`). They:

- Run on the server (or at build time for static export)
- Can export `metadata`
- Cannot use hooks, browser APIs, or event handlers

Anything that needs interactivity must opt in:

```tsx
"use client";
```

In this project, **Client Components** include:

| Component | Why client? |
|-----------|-------------|
| `Header` | `useState` (mobile menu), `usePathname` (active link) |
| `ThemeToggle` | `useTheme`, mount gate to avoid hydration mismatch |
| `Footer` | Current year via `useEffect` / `useState` |
| `ClientRedirect` | `useRouter().replace()` in `useEffect` |

**Best practice:** Keep pages as Server Components and push interactivity into small client leaf components. That keeps bundles smaller and metadata easier.

### 5.3 Metadata API

Per-page SEO without a separate head library:

```tsx
// src/app/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Home · Dagger Defense Industries" },
  description: "Dagger Defense Industries — a premier Star Citizen gaming organization...",
};
```

Root layout sets defaults and a title template:

```tsx
export const metadata: Metadata = {
  title: {
    default: "Dagger Defense Industries",
    template: "%s · Dagger Defense Industries",
  },
  description: "...",
  metadataBase: new URL("https://www.daggerdefenseindustry.com"),
  openGraph: { /* ... */ },
  twitter: { /* ... */ },
  icons: { /* favicon set */ },
};
```

Child pages that only set `title: "About"` become **About · Dagger Defense Industries**. Use `title: { absolute: "..." }` when you want to skip the template (as on the home page).

### 5.4 `next/font` (Google fonts)

Fonts are loaded in the root layout with zero layout shift:

```tsx
import { Chakra_Petch, Rajdhani, Space_Mono } from "next/font/google";

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
// same pattern for Chakra_Petch and Space_Mono

<html className={`${rajdhani.variable} ${chakraPetch.variable} ${spaceMono.variable} dark`}>
```

CSS then maps those variables to design tokens (see Tailwind section). Prefer `next/font` over manual `<link>` tags.

### 5.5 `next/link` and `next/image`

- **`Link`**: client-side navigation, prefetching. Use for internal routes (`/join`, `/about`). External URLs stay as plain `<a target="_blank" rel="noopener noreferrer">`.
- **`Image`**: optimized images. On **static export**, the built-in optimizer is disabled (`images.unoptimized: true`), so `Image` still works but serves the file as-is. Always set `width` / `height` (or use `fill` with a sized parent).

Logo example:

```tsx
import Image from "next/image";

<Image
  src="/ddi-logo-nobg.png"
  alt="Dagger Defense Industries"
  width={width}
  height={size}
  priority  // above-the-fold
/>
```

### 5.6 `usePathname` (active navigation)

In the header:

```tsx
"use client";
import { usePathname } from "next/navigation";

const pathName = usePathname();
const active = pathName === item.href;
```

Highlight the current section without manual route state.

### 5.7 Path alias `@/`

Configured in `tsconfig.json`:

```json
"paths": { "@/*": ["./src/*"] }
```

Import as `@/components/Header`, `@/lib/utils`, etc. Avoid deep relative paths (`../../../`).

---

## 6. Styling: Tailwind CSS v4 + design tokens

This project uses **Tailwind v4** with an `@import "tailwindcss"` entry and an `@theme` block in `globals.css` (not a classic `tailwind.config.js` for tokens).

### Design tokens (`@theme`)

```css
@import "tailwindcss";

@theme {
  --font-display: var(--font-rajdhani), ui-sans-serif, system-ui, sans-serif;
  --font-body: var(--font-chakra-petch), ui-sans-serif, system-ui, sans-serif;
  --font-mono: var(--font-space-mono), ui-monospace, monospace;

  --color-background: hsl(var(--background));
  --color-primary: hsl(var(--primary));
  /* ... other semantic colors */
  --radius-md: 0.35rem;
}
```

Semantic HSL variables switch between dark and light:

```css
:root,
.dark {
  --background: 0 0% 4%;
  --primary: 43 77% 48%; /* gold */
  /* ... */
}

.light {
  --background: 40 20% 97%;
  --primary: 43 77% 42%;
  /* ... */
}
```

Utility classes like `bg-background`, `text-primary`, `border-border` then work in both themes.

### Custom utilities

```css
@layer utilities {
  .glow-gold { box-shadow: 0 0 20px hsl(43 77% 48% / 0.25), ...; }
  .bg-grid { background-image: linear-gradient(...); }
  .section-padding-sm { padding-block: var(--spacing-section-sm); }
}
```

### Class merging helper

```ts
// src/lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

Use `cn("base", active && "text-primary")` in components so Tailwind classes do not conflict.

### Turbopack + Tailwind

`next.config.ts` wires the Turbopack CSS loader for Tailwind v4:

```ts
turbopack: {
  rules: {
    "*.css": {
      loaders: ["@tailwindcss/turbopack"],
      as: "*.css",
    },
  },
},
```

---

## 7. Theme (dark / light)

### Provider in the root layout

```tsx
import { ThemeProvider } from "next-themes";

<body>
  <ThemeProvider
    attribute="class"
    defaultTheme="dark"
    enableSystem={false}
    storageKey="ddi-theme"
    disableTransitionOnChange
  >
    <Header />
    <main className="flex-1">{children}</main>
    <Footer />
  </ThemeProvider>
</body>
```

- `attribute="class"` toggles `.dark` / `.light` on `<html>`.
- `enableSystem={false}` keeps the org’s default look (dark).
- `storageKey` isolates preference from other apps on the same domain.

Add `suppressHydrationWarning` on `<html>` because the theme class may differ between server HTML and the first client paint.

### Theme toggle (hydration-safe)

```tsx
"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <span className="..." aria-hidden />; // placeholder same size as button
  }

  const isDark = resolvedTheme === "dark";
  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      {isDark ? <Sun /> : <Moon />}
    </button>
  );
};
```

**Why the mount gate?** `next-themes` reads `localStorage` only on the client. Rendering the real icon before mount causes a React hydration mismatch. Show a neutral placeholder until `mounted` is true.

---

## 8. Shared components

### Header

- Sticky, blurred bar
- Desktop nav + “Members Only” external link
- Mobile hamburger + sheet menu
- Active route via `usePathname`
- Theme toggle

Mark the file `"use client"`.

### Footer

- Logo, short blurb, internal links, external (RSI, Discord, Members)
- Social (YouTube, Twitch)
- Copyright year set on the client to avoid SSR/client year drift at New Year

### Logo

Server-friendly component wrapping `next/image` with aspect-ratio-aware width from a `size` prop.

### `cn` utility

Already described; use it everywhere conditional classes appear.

---

## 9. Pages and routes

Implement content pages as **Server Components** that export `metadata` and pure JSX. Example pattern for home:

1. Hero (logo, title, embedded video, CTAs)
2. “Who we are” text block
3. Feature grid (map over a const array of icon + title + description)
4. Final CTA linking to `/join`

Reuse the same section spacing utilities (`section-padding-sm`, `max-w-7xl`, etc.) for consistency.

Military / industry overview pages link down to sub-branch pages (`/military/ddmc`, etc.). Short paths under `src/app/ddmc` etc. only exist for redirects (next section).

---

## 10. Dual build explained

The same codebase supports two outputs, controlled by the env var **`NEXT_OUTPUT`**:

| Mode | When | Command | Output | Typical host |
|------|------|---------|--------|--------------|
| **Node (default)** | `NEXT_OUTPUT` unset | `npm run build` | `.next/` | Vercel, Node server |
| **Static export** | `NEXT_OUTPUT=export` | `npm run build:static` | `out/` | Netlify, S3, any static CDN |

### Why two modes?

- **Static export** is ideal for a content site: cheap hosting, CDN edge, no Node process. Netlify’s current deploy uses this.
- **Node mode** keeps full Next features: server redirects, image optimizer, incremental features, optional server logic later.

### Trade-offs of static export (`output: "export"`)

| Feature | Node mode | Static export |
|---------|-----------|---------------|
| `redirects()` in `next.config` | Yes | **No** — use client redirects |
| `next/image` optimizer | Yes | Disabled (`unoptimized: true`) |
| Server Components at request time | Yes | Pre-rendered at build time |
| API routes / server actions | Yes | Not available |
| Trailing slash | Optional | Often enabled for static hosts |

The dual config in this project encodes exactly those differences.

---

## 11. Configuring `next.config.ts`

Core idea from the reference repo:

```ts
import type { NextConfig } from "next";

const isStaticExport = process.env.NEXT_OUTPUT === "export";

const branchRedirects = [
  { source: "/ddmc", destination: "/military/ddmc", permanent: true },
  { source: "/ddnf", destination: "/military/ddnf", permanent: true },
  { source: "/ddid", destination: "/industry/ddid", permanent: true },
  { source: "/ddmd", destination: "/industry/ddmd", permanent: true },
] as const;

const nextConfig: NextConfig = {
  cacheComponents: !isStaticExport,
  partialPrefetching: !isStaticExport,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  ...(isStaticExport
    ? {
        output: "export" as const,
        images: { unoptimized: true },
        trailingSlash: true,
      }
    : {
        async redirects() {
          return [...branchRedirects];
        },
      }),
};

export default nextConfig;
```

- **Static branch:** sets `output: "export"`, disables image optimization, enables trailing slashes (`/about/` → `about/index.html`).
- **Node branch:** registers HTTP redirects so `/ddmc` is a real 301/308 to `/military/ddmc`.

`build:static` sets the env var:

```bash
cross-env NEXT_OUTPUT=export next build
```

---

## 12. Client redirects for static export

Because static hosts cannot run `redirects()` from `next.config`, each short URL is a real page that redirects in the browser:

```tsx
// src/components/ClientRedirect.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function ClientRedirect({ href }: { href: string }) {
  const router = useRouter();

  useEffect(() => {
    router.replace(href);
  }, [href, router]);

  return (
    <p className="p-8 text-center font-mono text-xs text-muted-foreground">
      Redirecting…
    </p>
  );
}
```

```tsx
// src/app/ddmc/page.tsx
import { ClientRedirect } from "@/components/ClientRedirect";

export default function DdmcRedirectPage() {
  return <ClientRedirect href="/military/ddmc" />;
}
```

Repeat for `ddnf`, `ddid`, `ddmd`. In Node mode the server redirects still win for first request; the client pages remain harmless fallbacks.

**Best practice:** Prefer server redirects when you control the runtime; keep client redirects only for static compatibility.

---

## 13. Best practices applied here

1. **Server by default, client by necessity** — only Header, Footer (year), ThemeToggle, and ClientRedirect are client components.
2. **Colocate routes** — each feature lives under `app/<segment>/page.tsx`.
3. **Semantic design tokens** — colors and radii are CSS variables; themes swap values, not class names everywhere.
4. **Hydration safety** — theme toggle and any `localStorage` / `Date` usage wait for mount.
5. **Accessible UI** — `aria-label` on icon buttons, `aria-expanded` on the menu, meaningful `alt` on the logo.
6. **External links** — always `rel="noopener noreferrer"` with `target="_blank"`.
7. **Metadata everywhere** — every public page should export `metadata` or inherit a sensible default.
8. **Path alias** — `@/` only; no deep `../` chains.
9. **Dual-build awareness** — never rely on APIs that break under `output: "export"` without a fallback (redirects → ClientRedirect; images → unoptimized).
10. **ESLint** — use `eslint-config-next` (core-web-vitals + TypeScript) and ignore `.next/`, `out/`.
11. **Content as data** — feature cards, nav items, and footer links are `as const` arrays mapped in JSX (easy to edit, type-safe).
12. **No secrets in the client** — this site has none; if you add forms or APIs later, keep keys on the server.

---

## 14. Build, test, and run locally

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Edit files under `src/`; the page updates via Fast Refresh.

### Production build (Node mode)

```bash
npm run build
npm run start
```

Serves the app like a Node host (e.g. Vercel). Test redirects: visit `/ddmc` and confirm you land on `/military/ddmc`.

### Production build (static mode)

```bash
npm run build:static
npm run start:static
```

- `build:static` writes HTML/CSS/JS into `out/`.
- `start:static` uses `serve` to host that folder locally.

Verify:

- Home, About, Join, Military, Industry all load.
- Short URLs show “Redirecting…” then navigate to the long path.
- Theme toggle persists after refresh (`ddi-theme` in localStorage).
- Logo and images appear (with `unoptimized` images).

### Quick smoke checklist

- [ ] `/` hero + video + CTAs  
- [ ] `/about`, `/join`, `/military`, `/industry`  
- [ ] Sub-branches under military/industry  
- [ ] `/ddmc` → `/military/ddmc` (and siblings)  
- [ ] Dark/light toggle  
- [ ] Mobile menu  
- [ ] External links (RSI, Discord, Members) open in a new tab  

---

## 15. Deploy

### Netlify (static — matches the live site)

1. Connect the GitHub repo in Netlify (or drag-and-drop `out/` for a manual deploy).
2. Build settings:
   - **Build command:** `npm run build:static`
   - **Publish directory:** `out`
3. Deploy.

Site URL example: [https://ddi-site-next.netlify.app/](https://ddi-site-next.netlify.app/)

Optional `netlify.toml` in the repo root:

```toml
[build]
  command = "npm run build:static"
  publish = "out"
```

Because the export uses `trailingSlash: true`, Netlify will serve `/about/` as `about/index.html` without extra redirects.

### Vercel (Node mode)

1. Import the repo in Vercel.
2. Framework preset: **Next.js** (auto-detected).
3. Build command: `npm run build` (default).
4. Do **not** set `NEXT_OUTPUT=export` unless you intentionally want a static Vercel deployment.

Server `redirects()` in `next.config.ts` will apply automatically.

### Manual static host (S3, Cloudflare Pages, etc.)

```bash
npm run build:static
# upload the contents of out/ to your bucket / Pages project
```

Ensure the host maps clean URLs to `index.html` inside each folder (trailing slash helps).

---

## 16. Checklist

Use this when rebuilding from zero:

- [ ] Node 18.18+ installed  
- [ ] `create-next-app` with App Router, TypeScript, Tailwind, `src/`, `@/*`  
- [ ] Dependencies: `next-themes`, `lucide-react`, `clsx`, `tailwind-merge`, `cross-env`  
- [ ] `globals.css` with `@theme`, dark/light tokens, utilities  
- [ ] Root `layout.tsx`: fonts, metadata, ThemeProvider, Header, Footer  
- [ ] `cn()` in `src/lib/utils.ts`  
- [ ] Shared components: Logo, Header, Footer, ThemeToggle, ClientRedirect  
- [ ] Pages: home, about, join, military (+ ddmc/ddnf), industry (+ ddid/ddmd)  
- [ ] Short routes: `app/ddmc|ddnf|ddid|ddmd/page.tsx` using ClientRedirect  
- [ ] `next.config.ts` dual mode (`NEXT_OUTPUT=export` vs redirects)  
- [ ] Scripts: `dev`, `build`, `build:static`, `start`, `start:static`  
- [ ] Assets in `public/` (logo, favicons)  
- [ ] Local test: `dev` + both production builds  
- [ ] Deploy: Netlify static and/or Vercel Node  

---

## Further reading

- [Next.js App Router](https://nextjs.org/docs/app)
- [Static export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [Metadata](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [next/font](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
- [next-themes](https://github.com/pacocoursey/next-themes)
- [Tailwind CSS v4](https://tailwindcss.com/docs)

---

*Guide aligned with the architecture of [vicrodri/ddi-site-next](https://github.com/vicrodri/ddi-site-next) and the live deploy at [ddi-site-next.netlify.app](https://ddi-site-next.netlify.app/).*
