# Dagger Defense Industries (DDI) — Site

Official website (prototype) for **Dagger Defense Industries**, a gaming organization dedicated to the [Star Citizen](https://robertsspaceindustries.com/) universe.

Exploration, conquest, and community across the stars.

**Live site (Netlify):** [https://ddi-site-next.netlify.app/](https://ddi-site-next.netlify.app/)

---

## Project description

This project is a modern web application built with **Next.js** that presents the DDI organization: its mission, branch structure (military and industry), values, rules, and recruitment process.

### Main sections

| Route | Description |
|-------|-------------|
| `/` | Home — organization overview and join CTA |
| `/about` | About DDI — leadership, values, and rules |
| `/join` | How to join — onboarding steps (RSI + Discord) |
| `/military` | Military branch (DDMC, DDNF) |
| `/industry` | Industry branch (DDID, DDMD) |
| `/ddmc`, `/ddnf`, `/ddid`, `/ddmd` | Shortcuts / redirects to sub-branches |

### Organization structure (site content)
- **Home**
- **About**
- **Military**
  - **DDMC** — Dagger Defense Military Combat
  - **DDNF** — Dagger Defense Naval Fleet
- **Industry**
  - **DDID** — Dagger Defense Industry Division
  - **DDMD** — Dagger Defense Medical Division
- **Join**

---

## Tech stack

| Technology | Purpose |
|------------|---------|
| [Next.js](https://nextjs.org/) 16 | React framework (App Router) |
| [React](https://react.dev/) 19 | UI |
| [TypeScript](https://www.typescriptlang.org/) | Static typing |
| [Tailwind CSS](https://tailwindcss.com/) 4 | Styling (with Turbopack) |
| [next-themes](https://github.com/pacocoursey/next-themes) | Light / dark theme |
| [lucide-react](https://lucide.dev/) | Icons |
| [clsx](https://github.com/lukeed/clsx) + [tailwind-merge](https://github.com/dcastil/tailwind-merge) | CSS class utilities |
| Google Fonts (next/font) | Rajdhani, Chakra Petch, Space Mono |

### Key technical features

- **Dual build mode**: deploy as a Node app (Vercel or similar) or as a **static export** (`out/`) for static hosts such as Netlify.
- Dark theme by default with toggle.
- Branch shortcut redirects (`/ddmc` → `/military/ddmc`, etc.): server-side in Node mode; client-side in static export.
- Responsive design and optimized typography via `next/font`.

---

## Prerequisites

- **Node.js** 18.18+ (20 LTS or newer recommended)
- **npm**, **yarn**, **pnpm**, or **bun**

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/vicrodri/ddi-site-next.git
cd ddi-site-next
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

---

## Local development

Start the development server:

```bash
npm run dev
# or yarn dev / pnpm dev / bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. Changes hot-reload automatically.

---

## Available scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Development server (hot reload) |
| `npm run build` | Production build (Node / Vercel mode) |
| `npm run build:vercel` | Alias for the Node build |
| `npm run build:static` | Static build (`NEXT_OUTPUT=export`) → `out/` folder |
| `npm run start` | Serve the production build (Node mode) |
| `npm run start:static` | Serve the `out/` folder with a static server |

### Static build (for Netlify or other static hosts)

```bash
npm run build:static
```

This generates the `out/` folder ready for deployment. To preview it locally:

```bash
npm run start:static
```

---

## Deployment

### Netlify (current live site)

The project is deployed at:

**🔗 [https://ddi-site-next.netlify.app/](https://ddi-site-next.netlify.app/)**

For a static deployment on Netlify:

1. Build command: `npm run build:static`
2. Publish directory: `out`
3. (Optional) Configure environment variables if you add any in the future.

Static mode disables Next.js image optimization and enables `trailingSlash` for static-host compatibility. Branch redirects are handled on the client.

### Vercel (Node mode)

```bash
npm run build
# then deploy with Vercel (it detects Next.js automatically)
```

In Node mode, server-side redirects defined in `next.config.ts` are used.

---

## Repository structure

```
ddi-site-next/
├── public/                 # Static assets (favicon, icons, etc.)
├── src/
│   ├── app/                # App Router (pages and layouts)
│   │   ├── about/
│   │   ├── join/
│   │   ├── military/       # DDMC, DDNF
│   │   ├── industry/       # DDID, DDMD
│   │   ├── ddmc|ddnf|ddid|ddmd/  # Shortcuts (client redirect in static)
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/         # Header, Footer, Logo, Theme*, etc.
│   └── lib/                # Utilities
├── next.config.ts          # Dual config (Node vs static export)
├── package.json
├── tsconfig.json
└── README.md
```

---

## Organization links

- **Website (Netlify):** [https://ddi-site-next.netlify.app/](https://ddi-site-next.netlify.app/)
- **RSI Org:** [https://robertsspaceindustries.com/en/orgs/DAGGERORG](https://robertsspaceindustries.com/en/orgs/DAGGERORG)
- **Discord:** [https://discord.gg/sRP3PEVgJn](https://discord.gg/sRP3PEVgJn)

---

## License

Private project (`"private": true` in `package.json`). All rights reserved unless otherwise stated by the author.

---

## Credits

Prototype site for **Dagger Defense Industries** — a Star Citizen organization.  
Built with Next.js.
