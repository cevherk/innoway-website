/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/innoway-website',
  assetPrefix: '/innoway-website/',
  trailingSlash: true,
};

module.exports = nextConfig; 