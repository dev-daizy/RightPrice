
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      enabled: true, 
    },
   
  },
  images: {
    domains: ['m.media-amazon.com'],
  },
};

module.exports = nextConfig;