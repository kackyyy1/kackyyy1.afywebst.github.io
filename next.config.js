/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: process.env.GITHUB_ACTIONS && "/kackyyy1.afywebst.github.io",
  trailingSlash: true, 
  experimental: {
    images: {
      unoptimized: true,
    }
  }
}
module.exports = nextConfig
