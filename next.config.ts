import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      { source: "/ddmc", destination: "/military/ddmc", permanent: true },
      { source: "/ddnf", destination: "/military/ddnf", permanent: true },
    ];
  },
};

export default nextConfig;
