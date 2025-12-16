import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/devcarlosGM-portfolio',
  assetPrefix: '/devcarlosGM-portfolio/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
