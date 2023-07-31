/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: process.env.API_BASE_URL + "/api/:path*",
      },
    ]
  },

  images: {
    domains: ['picsum.photos', "st3.depositphotos.com", "lh5.googleusercontent.com","cdn.dribbble.com","i.pinimg.com","img.freepik.com"],
  },
}

module.exports = nextConfig
