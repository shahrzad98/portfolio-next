import type { NextConfig } from 'next';

const isProduction = process.env.NODE_ENV === 'production';
const nextConfig: NextConfig = {
  basePath: isProduction ? process.env.NEXT_PUBLIC_BASE_PATH || '' : '',
  assetPrefix: isProduction ? '/portfolio-next/' : '',
  images: {
    unoptimized: true, // Necessary for static export to work with Next.js
  },
  output: 'export', // Enables static site export
  trailingSlash: true, // Ensures correct routing
};

export default nextConfig;
