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
  // Uncomment and modify this if you're not deploying to the root of your GitHub Pages domain
  // basePath: '/your-repo-name',
  // assetPrefix: '/your-repo-name/',
  trailingSlash: true,
};

export default nextConfig;
