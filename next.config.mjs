/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'backgroundimages.withfloats.com',
      },
      {
        protocol: 'https',
        hostname: 'fpimages.withfloats.com',
      },
      {
        protocol: 'https',
        hostname: 'fplogoimages.withfloats.com',
      },
    ],
  },
};

export default nextConfig;
