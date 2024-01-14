/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: [
    //   'tikaraja.com',
    //   'source.unsplash.com',
    //   'cdn.pixabay.com',
    //   'pixabay.com'
    // ]
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tikaraja.com',
        pathname: '**'
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        pathname: '**'
      },
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
        pathname: '**'
      },
      {
        protocol: 'https',
        hostname: 'pixabay.com',
        pathname: '**'
      }
    ]
  }
};

module.exports = nextConfig;
