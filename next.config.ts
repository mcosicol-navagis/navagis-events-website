import type { NextConfig } from "next";

const isStaticExport = process.env.STATIC_EXPORT === "true";

const nextConfig: NextConfig = {
  // Static export mode for GCS deployment (STATIC_EXPORT=true yarn build)
  // Server mode for `yarn start` (default, no env var needed)
  output: isStaticExport ? "export" : undefined,
  turbopack: {
    root: process.cwd(),
  },
  images: {
    unoptimized: isStaticExport,
  },
  trailingSlash: isStaticExport,
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
