const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
  async rewrites() {
    return [
      {
        source: '/admin',
        destination: '/admin/index.html',
      },
    ]
  },
  webpack: (config, { isServer }) => {
    // For client-side only, include the polyfills
    if (!isServer) {
      config.plugins.push(new NodePolyfillPlugin());
    }
    return config;
  },
};
