const test = process.env.NODE_ENV === "test";

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
    "@babel/plugin-transform-typescript",
    "babel-plugin-transform-typescript-metadata",
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose": false }],
    ...(test ? ['babel-plugin-transform-import-meta'] : []),
  ],
};
