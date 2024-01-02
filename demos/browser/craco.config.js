module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.resolve.fallback = {
        fs: false,
        crypto: false,
        stream: false,
        path: false,
      };
      return webpackConfig;
    },
  },
};
