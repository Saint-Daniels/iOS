/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'],
    // Enable automatic image optimization
    unoptimized: false,
  },
  // Enable automatic static optimization
  experimental: {
    optimizeCss: true,
    // Enable modern JavaScript features
    modern: true
  },
  // Enable compression
  compress: true,
  // Enable powered by header
  poweredByHeader: false,
};

module.exports = nextConfig; 