/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
        pathname: '/**', // Para permitir qualquer caminho
      },
      {
        protocol: 'https',
        hostname: 'svgrepo.com',
        pathname: '/**', // Para permitir qualquer caminho
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        pathname: '/**', // Para permitir qualquer caminho
      },
    ],
  },
};

module.exports = nextConfig;
