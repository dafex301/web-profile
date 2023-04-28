/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["storage.googleapis.com"],
  },
  distDir: "build",
};

module.exports = nextConfig;
