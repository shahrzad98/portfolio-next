import type { NextConfig } from 'next';

const isProduction = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProduction ? '/portfolio-static' : '',
  assetPrefix: isProduction ? '/portfolio-static/' : '',
};

export default nextConfig;
