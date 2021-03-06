/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/", destination: "/rides/nearest", permanent: false },
      { source: "/rides", destination: "/rides/nearest", permanent: false },
    ];
  },
  images: {
    domains: ["picsum.photos"],
  },
};

module.exports = nextConfig;
