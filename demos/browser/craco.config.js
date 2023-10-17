const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.resolve.extensions.push(".wasm"); // To resolve .wasm extensions

      webpackConfig.plugins = [
        new CopyPlugin({
          patterns: [
            {
              context:
                "node_modules/@input-output-hk/atala-prism-wallet-sdk/build/browser/",
              from: path.resolve(
                __dirname,
                "node_modules/@input-output-hk/atala-prism-wallet-sdk/build/browser/*.wasm"
              ),
              to: path.resolve(__dirname, "public"),
            },
          ],
        }),
        ...(webpackConfig.plugins || []),
      ];
      webpackConfig.resolve.fallback = {
        fs: false,
        crypto: false,
        // assert: require.resolve("assert/"),
        // url: require.resolve("url/"),
        // buffer: require.resolve("buffer/"),
        stream: require.resolve("stream-browserify"),
        path: require.resolve("path-browserify"),
        //util: require.resolve("util/"),
      };

      return webpackConfig;
    },
  },
};
