const { IgnorePlugin } = require("webpack");

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.plugins.push(
        new IgnorePlugin({ resourceRegExp: /(anoncreds_bg|didcomm_js_bg)\.wasm/ })
      );

      webpackConfig.resolve.fallback = {
        fs: false,
        crypto: false,
        // assert: require.resolve("assert/"),
        // url: require.resolve("url/"),
        // buffer: require.resolve("buffer/"),
        stream: require.resolve("stream-browserify"),
        path: require.resolve("path-browserify"),
        //util: require.resolve("util/"),
      }

      return webpackConfig;
    },
  },
};
