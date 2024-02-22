/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost","codex-ui.vercel.app"],
  },
};

module.exports = nextConfig;
