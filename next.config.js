module.exports = {
  // basePath: '/website',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.tina.io"
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: '/admin',
        destination: '/admin/index.html',
      },
    ]
  },
}
