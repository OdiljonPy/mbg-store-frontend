/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    i18n: {
        defaultLocale: "default",
        locales: ["uz", "ru", "default"]
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
                port: '',
                pathname: '**',
            },
        ],
        minimumCacheTTL:1500000
    },
    output: "standalone"
}

module.exports = nextConfig
