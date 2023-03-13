/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.alias["assets"] = path.resolve(__dirname, "./src/assets/");
    config.resolve.alias["components"] = path.resolve(
      __dirname,
      "./src/components/"
    );
    config.resolve.alias["layouts"] = path.resolve(__dirname, "./src/layouts/");
    config.resolve.alias["pages"] = path.resolve(__dirname, "./src/pages/");
    config.resolve.alias["styles"] = path.resolve(__dirname, "./src/styles/");
    config.resolve.alias["utils"] = path.resolve(__dirname, "./src/utils/");
    return config;
  },
};

module.exports = nextConfig;
