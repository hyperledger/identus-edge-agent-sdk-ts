const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const TerserPlugin = require("terser-webpack-plugin");

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";
  const providePlutin = {
    Buffer: ["buffer", "Buffer"],
  };
  if (!isProduction) {
    providePlutin.process = "process/browser";
  }

  const plugins = [
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin(providePlutin),
  ];

  if (!isProduction) {
    plugins.push(new HtmlWebpackPlugin());
  }

  const minimizer = [];
  if (isProduction) {
    minimizer.push(new TerserPlugin({ extractComments: true }));
  }

  return {
    target: "web",
    mode: isProduction ? "production" : "development",
    devtool: "source-map",
    entry: isProduction ? "./index.ts" : "./demos/test-browser.ts",
    devServer: {
      static: {
        directory: path.join(__dirname, "../build/browser"),
      },
      open: true,
      hot: true,
      host: "localhost",
      port: 9000,
    },
    output: {
      filename: "index.js",
      path: path.resolve(
        __dirname,
        `../build/browser${isProduction ? "" : "-test"}`
      ),
      chunkFormat: "commonjs",
    },
    optimization: {
      // splitChunks: {
      //   chunks: 'vendor',
      //   minSize: 10000,
      //   maxSize: 250000,
      // },
      minimize: isProduction,
      minimizer: minimizer,
    },
    module: {
      rules: [
        {
          test: /\.wasm$/,
          type: "webassembly/async",
        },
        { test: /\.json$/, type: "json" },
        {
          test: /\.(m|j|t)s$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: "babel-loader",
          },
        },
      ],
    },
    plugins: plugins,
    experiments: {
      asyncWebAssembly: true,
      syncWebAssembly: true,
    },
    resolve: {
      extensions: [".ts", ".js", ".json"],
      fallback: {
        fs: false,
        crypto: require.resolve("crypto-browserify"),
        assert: require.resolve("assert/"),
        url: require.resolve("url/"),
        buffer: require.resolve("buffer/"),
        stream: require.resolve("stream-browserify"),
        path: require.resolve("path-browserify"),
        util: require.resolve("util/"),
      },
    },
  };
};
