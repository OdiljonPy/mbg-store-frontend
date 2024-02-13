/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    i18n: {
        defaultLocale: "uz",
        locales: ["uz", "ru"]
    },
    output: "standalone"
}

module.exports = nextConfig
