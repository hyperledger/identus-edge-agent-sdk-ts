module.exports = function (api /*: ApiType */) /*: * */ {
  api.cache(false);

  return {
    presets: [
      [
        "@babel/preset-env",
        {
          loose: false,
          modules: false,
        },
      ],
      "@babel/preset-typescript",
    ],
    plugins: [
      "@babel/plugin-transform-typescript",
      "@babel/plugin-proposal-nullish-coalescing-operator",
      "@babel/plugin-proposal-optional-chaining",
      "@babel/plugin-syntax-top-level-await",
      "nameof-js",
      [
        "@babel/plugin-proposal-decorators",
        {
          legacy: true,
        },
      ],
      [
        "@babel/plugin-transform-runtime",
        {
          // CoreJS breaks Jest mocks for some reason
          corejs: 3,
          helpers: true,
          regenerator: true,
        },
      ],
      "@babel/plugin-syntax-dynamic-import",
      "@babel/plugin-transform-modules-commonjs",
      "add-module-exports",
      "@babel/plugin-proposal-class-properties",
      "@babel/plugin-proposal-private-methods",
      "@babel/plugin-proposal-export-default-from",
      "@babel/plugin-proposal-export-namespace-from",
    ],
  };
};
