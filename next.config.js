/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['picsum.photos', "st3.depositphotos.com"],
  },
}

module.exports = nextConfig
