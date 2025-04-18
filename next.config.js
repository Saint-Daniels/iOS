/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'],
    // Enable automatic image optimization
    unoptimized: false,
  },
  // Enable compression
  compress: true,
  // Disable powered by header
  poweredByHeader: false,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': __dirname,
    };
    return config;
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig; 