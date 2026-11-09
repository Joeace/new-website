import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  /*
   * Files named `page.dev.tsx` are routes only in `npm run dev`, so internal
   * tools such as /design-system are never built into the live site.
   */
  pageExtensions: isDev ? ["dev.tsx", "tsx", "ts", "jsx", "js"] : ["tsx", "ts", "jsx", "js"],
  /*
   * Static export: `npm run build` writes a plain HTML/CSS/JS site to `out/`,
   * which Cloudflare serves from its CDN. Server-only features (Server Actions,
   * route handlers, on-demand image optimisation) are unavailable in this mode;
   * the contact form will post to a Cloudflare Function when it is built.
   */
  output: "export",
  trailingSlash: true,
  images: {
    // No image server in a static export; images are optimised before commit.
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
