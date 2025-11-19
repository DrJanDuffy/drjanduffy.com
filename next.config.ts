import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  // Output file tracing for better performance
  outputFileTracingRoot: process.cwd(),
  // Redirects for old neighborhood pages
  async redirects() {
    return [
      // Redirect old neighborhood pages
      {
        source: '/neighborhoods',
        destination: '/',
        permanent: true,
      },
      {
        source: '/neighborhoods/:path*',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
