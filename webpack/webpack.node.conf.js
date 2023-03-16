const webpack = require("webpack");
const path = require("path");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const exec = require("child_process").exec;
const TerserPlugin = require("terser-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const nodeExternals = require('webpack-node-externals');
module.exports = (env, argv) => {
    const isProduction = argv.mode === "production";
    const copyPluginPatterns = [
        {from: "./node_modules/didcomm-node/index_bg.wasm"},
    ];

    const plugins = [
        new CleanWebpackPlugin(),
        new webpack.ProvidePlugin({
            Buffer: ["buffer", "Buffer"],
        }),
        new CopyPlugin({
            patterns: copyPluginPatterns,
        }),
    ];
    const minimizer = [];
    if (isProduction) {
        // Important: disable mangle, so it does not break Pluto's insert queries 🙂
        minimizer.push(new TerserPlugin({extractComments: true, terserOptions: {mangle: false}}));
    }

    return {
        target: "node",
        externals: [nodeExternals()],
        mode: isProduction ? "production" : "development",
        devtool: "source-map",
        entry: {
            entry: isProduction ? "./index.ts" : "./demos/test-node.ts",
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
            noParse: /sql.js/,
            rules: [
                {
                    test: /\.wasm$/,
                    type: "webassembly/async",
                },
                {test: /\.json$/, type: "json"},
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
            alias: {
                didcomm: "didcomm-node",
            },
            extensions: [".ts", ".js", ".json"],
            fallback: {
                url: require.resolve("url/"),
            },
        },
    };
};
