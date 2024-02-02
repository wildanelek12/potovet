/** @type {import('next').NextConfig} */
const nextConfig = {
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: process.env.API_BASE_URL + '/api/:path*',
			},
		]
	},
	images: {
		domains: [
			'picsum.photos',
			'st3.depositphotos.com',
			'lh5.googleusercontent.com',
			'cdn.dribbble.com',
			'i.pinimg.com',
			'img.freepik.com',
			'plus.unsplash.com',
			'flowbite.s3.amazonaws.com',
			'static.vecteezy.com',
		],
	},
}

module.exports = nextConfig
