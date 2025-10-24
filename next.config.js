/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'etesam.nyc3.cdn.digitaloceanspaces.com',
      },
    ],
  },
}

module.exports = nextConfig
