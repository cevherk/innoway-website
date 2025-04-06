/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // This works for GitHub Pages
  basePath: '/innoway-website',
  // Disable assetPrefix as it's handled by basePath
  // assetPrefix: '/innoway-website/',
};

module.exports = nextConfig; 