require('require-esm-in-cjs')
const webpack = require('webpack');
const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const prod_Path = 'cdn';
const src_Path = 'src';

module.exports = (env) => ({
  mode: 'development',
  externals: {
    sql: 'sql.js'
  },
  performance: {
    hints: false
  },
  stats:  'errors-only',
  devtool: false,
  entry:{
    index:['./src/index.ts'],
  },
  output: {
    path: path.resolve(__dirname, prod_Path),
    filename: '[name].js',
    libraryTarget: 'var',
    library: 'cryptribo',
    publicPath:'./'
  },
  module: {
    rules: [
      {
        test: /\.ts|\.js|\.wasm$/,
        loader: 'babel-loader',
        include:[
          path.resolve(__dirname, src_Path)
        ]
      },
    ]
  },
  experiments:{
    syncWebAssembly: true,
    topLevelAwait: true,
    asyncWebAssembly: true
  },
  resolve:{
    extensions: ['.ts', '.js','.wasm'],
    fallback: {
      "util": require.resolve('util/'),
      "crypto": require.resolve("crypto-browserify"),
      "stream": require.resolve("stream-browserify"),
      "buffer": require.resolve('buffer'),
      "cardano-crypto.js": require.resolve("cardano-crypto.js"),
      "path": require.resolve("path-browserify"),
      "fs": require.resolve('fs'),
      "process":"process/browser"
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new webpack.NormalModuleReplacementPlugin(
      /@emurgo\/cardano-serialization-lib-nodejs/,
      (resource) => {
        resource.request = "@emurgo/cardano-serialization-lib-browser"
      }
    ),
    new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer'],
    }),
    new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
    }),
    new webpack.IgnorePlugin({contextRegExp:/^\.\/wordlists\/(?!english)/, resourceRegExp:/bip39\/src$/}),
  ]
});