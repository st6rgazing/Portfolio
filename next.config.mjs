/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports for GitHub Pages
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // Required for static export
  },
  // For GitHub Pages deployment
  basePath: '/Portfolio', // This should match your repository name
  assetPrefix: '/Portfolio/', // This helps with asset loading
  trailingSlash: true, // Recommended for static exports
};

export default nextConfig;
