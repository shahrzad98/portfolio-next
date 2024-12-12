import type { NextConfig } from 'next';

const isProduction = process.env.NODE_ENV === 'production';
const nextConfig: NextConfig = {
  basePath: isProduction ? process.env.NEXT_PUBLIC_BASE_PATH || '' : '',
  assetPrefix: isProduction ? process.env.NEXT_PUBLIC_BASE_PATH || '' : '',
  images: {
    unoptimized: true, // Necessary for static export to work with Next.js
  },
};

export default nextConfig;
