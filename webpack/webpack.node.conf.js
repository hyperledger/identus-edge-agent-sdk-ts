const webpack = require("webpack");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const exec = require("child_process").exec;
const TerserPlugin = require("terser-webpack-plugin");

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";

  const plugins = [
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
    }),
  ];
  const minimizer = [];
  if (isProduction) {
    minimizer.push(new TerserPlugin({ extractComments: true }));
  }

  if (!isProduction) {
    plugins.push({
      apply: (compiler) => {
        compiler.hooks.afterEmit.tap("AfterEmitPlugin", () => {
          exec("node build/node-test/index.js", (err, stdout, stderr) => {
            if (stdout) process.stdout.write(stdout);
            if (stderr) process.stderr.write(stderr);
          });
        });
      },
    });
  }

  return {
    target: "node",
    mode: isProduction ? "production" : "development",
    devtool: "source-map",
    entry: {
      entry: isProduction ? "./index.ts" : "./test-node.ts",
    },
    output: {
      filename: "index.js",
      path: path.resolve(
        __dirname,
        `../build/node${isProduction ? "" : "-test"}`
      ),
      libraryTarget: "commonjs2",
    },
    optimization: {
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
        url: require.resolve("url/"),
      },
    },
  };
};
