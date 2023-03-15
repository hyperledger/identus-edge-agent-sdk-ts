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
    plugins.push(
      new HtmlWebpackPlugin({
        templateContent: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Webpack App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"><script defer src="index.js"></script></head>
        <body>
        <div id="root"></div>
        </body>
      </html>`,
      })
    );
  }

  const minimizer = [];
  if (isProduction) {
    minimizer.push(new TerserPlugin({ extractComments: true }));
  }

  return {
    target: "web",
    mode: isProduction ? "production" : "development",
    devtool: "source-map",
    entry: isProduction ? "./index.ts" : "./demos/test-browser.tsx",
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
          test: /\.(sa|sc|c)ss$/,
          use: [{ loader: "css-loader", options: { sourceMap: true } }],
        },
        {
          test: /\.wasm$/,
          type: "webassembly/async",
        },
        { test: /\.json$/, type: "json" },
        {
          test: /(\.(m|j|t)s)|(\.tsx)$/,
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
      extensions: [".ts", ".tsx", ".jsx", ".js", ".json"],
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
