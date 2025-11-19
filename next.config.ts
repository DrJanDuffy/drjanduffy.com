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
  // Redirects for old neighborhood pages and www domain
  async redirects() {
    return [
      // Redirect non-www to www
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'drjanduffy.com',
          },
        ],
        destination: 'https://www.drjanduffy.com/:path*',
        permanent: true,
      },
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
