import type { NextConfig } from 'next';

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value:
      "base-uri 'self'; frame-ancestors 'self'; form-action 'self'; object-src 'none'; upgrade-insecure-requests",
  },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), geolocation=(), microphone=()',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains',
  },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/index.php',
        has: [{ type: 'host', value: 'www.abdelhamid.co' }],
        destination: 'https://abdelhamid.co/',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.abdelhamid.co' }],
        destination: 'https://abdelhamid.co/:path*',
        permanent: true,
      },
      {
        source: '/index.php',
        destination: '/',
        permanent: true,
      },
    ];
  },
  experimental: {
    staleTimes: {
      dynamic: 3600,
      static: 86400,
    },
  },
};

export default nextConfig;
