module.exports = {
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  root: true,
  ignorePatterns: [
    ".eslintrc.js",
    "node_modules",
    "castor/protos",
    "index.js",
    "castor/parser",
    "build",
    "examples",
  ],
};
