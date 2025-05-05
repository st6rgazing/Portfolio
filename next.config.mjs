/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // This is critical for GitHub Pages to work correctly
  basePath: '/Portfolio',
  assetPrefix: '/Portfolio/',
  trailingSlash: true,
};

export default nextConfig;
