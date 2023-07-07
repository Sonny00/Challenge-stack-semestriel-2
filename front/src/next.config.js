const nextConfig = require("next-pwa")({
  dest: "src/public",
  register: true,
  skipWaiting: true,
  reactStrictMode: true,
  webpack: (config) => {
    config.watchOptions.poll = 300;
    return config;
  },
  images: {
    domains: ['images.unsplash.com']
  },
});
 
module.exports = nextConfig;