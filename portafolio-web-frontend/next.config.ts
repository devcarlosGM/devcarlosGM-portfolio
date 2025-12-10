import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/devcarlosGM-portfolio',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
