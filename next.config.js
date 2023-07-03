/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['picsum.photos', "st3.depositphotos.com", "lh5.googleusercontent.com","cdn.dribbble.com","i.pinimg.com","img.freepik.com"],
  },
}

module.exports = nextConfig
