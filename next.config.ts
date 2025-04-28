/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Required for static export
  trailingSlash: true, // Helps with GitHub Pages routing
  images: {
    unoptimized: true, // Disable image optimization (GitHub Pages can't optimize)
  },
  // Optional: Only needed if deploying to subfolder (e.g., repo name)
  // basePath: '/your-repo-name',
};

module.exports = nextConfig;

// import type { NextConfig } from 'next';
//
// const isProduction = process.env.NODE_ENV === 'production';
// const nextConfig: NextConfig = {
//   basePath: isProduction ? process.env.NEXT_PUBLIC_BASE_PATH || '' : '',
//   assetPrefix: isProduction ? '/portfolio-next/' : '',
//   images: {
//     unoptimized: true, // Necessary for static export to work with Next.js
//   },
//   output: 'export', // Enables static site export
//   distDir: 'out', // Output directory
//   trailingSlash: true, // Ensures correct routing
// };
//
// export default nextConfig;
