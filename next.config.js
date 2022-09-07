/** @type {import('next').NextConfig} */
const urlPrefix = process.env.GITHUB_ACTIONS && "/kackyyy1.afywebst.github.io"
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: urlPrefix,
  trailingSlash: true, 
  experimental: {
    images: {
      unoptimized: true,
    },
    publicRuntimeConfig: { urlPrefix },
  }
}
module.exports = nextConfig
