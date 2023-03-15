module.exports = {
    presets: [
        "@babel/preset-typescript",
        [
            "@babel/preset-env",
            {
                useBuiltIns: "usage",
                corejs: 3,
            },
        ],
        "@babel/preset-react",
    ],
    plugins: [
        ["@babel/plugin-proposal-class-properties"],
        ["@babel/plugin-transform-typescript"],
        ["@babel/plugin-proposal-decorators", {
            decoratorsBeforeExport: true,
        }]
    ],
};
