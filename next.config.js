/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/innoway-website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/innoway-website/' : '',
};

module.exports = nextConfig; 