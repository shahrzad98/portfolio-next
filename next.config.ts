import type { NextConfig } from 'next';

const isProduction = process.env.NODE_ENV === 'production';
const nextConfig: NextConfig = {
  basePath: isProduction ? '/portfolio-next' : '',
  assetPrefix: isProduction ? '/portfolio-next/' : '',
  images: {
    unoptimized: true, // Necessary for static export to work with Next.js
  },
};

export default nextConfig;
