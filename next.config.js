/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'images.unsplash.com'],
    // Enable automatic image optimization
    unoptimized: false,
  },
  // Enable compression
  compress: true,
  // Disable powered by header
  poweredByHeader: false,
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000', 'saintdanielshealthcare.com'],
    },
  },
};

module.exports = nextConfig; 