/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.1shop.tw',
        port: '',
        pathname: '/storefront/**',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/WilsonWann/**',
      },
    ]
  },
  compiler: {
    emotion: {
      sourceMap: true,
      autoLabel: 'dev-only',
      labelFormat: '[filename]__[local]',
    }
  }
}

export default nextConfig
