/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/solivra-website',
  assetPrefix: '/solivra-website/',
  trailingSlash: true,
};

module.exports = nextConfig; 