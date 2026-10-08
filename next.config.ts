import type { NextConfig } from "next";

/**
 * Dual build modes (controlled by env `NEXT_OUTPUT`):
 *
 * - Default / empty  → Node app for Vercel (`next build` + `next start`)
 * - `NEXT_OUTPUT=export` → static HTML in `out/` (SPA-like, any static host)
 *
 * Static export cannot use server redirects, so branch short-URLs are handled
 * by client redirect pages under `src/app/{ddmc,ddnf,ddid,ddmd}/`.
 */
const isStaticExport = process.env.NEXT_OUTPUT === "export";

const branchRedirects = [
  { source: "/ddmc", destination: "/military/ddmc", permanent: true },
  { source: "/ddnf", destination: "/military/ddnf", permanent: true },
  { source: "/ddid", destination: "/industry/ddid", permanent: true },
  { source: "/ddmd", destination: "/industry/ddmd", permanent: true },
] as const;

const nextConfig: NextConfig = {
  /* config options here */
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
        // next/image optimizer needs a server — disable for pure static hosts
        images: { unoptimized: true },
        // Useful for hosts that map /about → /about/index.html
        trailingSlash: true,
      }
    : {
        async redirects() {
          return [...branchRedirects];
        },
      }),
};

export default nextConfig;
