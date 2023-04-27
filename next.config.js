/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'i.ytimg.com',
				pathname: '/**'
			},
			{
				protocol: 'https',
				hostname: 'yt3.googleusercontent.com',
				pathname: '/**'
			}
		]
	}
};

module.exports = nextConfig;
