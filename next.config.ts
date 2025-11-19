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
}

export default nextConfig
