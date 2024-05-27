/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	i18n: {
		defaultLocale: "default",
		locales: ["uz", "ru", "default"],
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**",
				port: "",
				pathname: "**",
			},
		],
		minimumCacheTTL: 1500000,
	},
	output: "standalone",
	async rewrites() {
		return [
			{
				source: "/robots.txt",
				destination: "/api/robots",
			},
		];
	},
};

module.exports = nextConfig;
