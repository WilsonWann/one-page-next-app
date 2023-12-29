/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.1shop.tw',
        port: '',
        pathname: '/storefront/**',
      },
    ]
  },
}

module.exports = nextConfig
