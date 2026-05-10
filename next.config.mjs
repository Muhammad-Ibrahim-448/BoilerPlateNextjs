/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {},
  },
  images: {
    domains: ['localhost'],
  },
}

export default nextConfig