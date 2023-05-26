

module.exports = {
  webpack: {
    configure: (webpackConfig) => {

    //   const wasmLoader = {
    //     test: /\.wasm$/,
    //     type: "webassembly/async",
    //   };

    //   webpackConfig.module.rules = [
    //     ...webpackConfig.module.rules,
    //     wasmLoader
    //   ]

    //   webpackConfig.experiments = {
    //     asyncWebAssembly: true,
    //     syncWebAssembly: true,
    //   }

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