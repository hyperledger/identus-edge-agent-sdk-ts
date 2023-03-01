const typescriptConfig = require("./tsconfig.json");

module.exports = function (config) {
  config.set({
    // Base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: ".",

    // Frameworks to use
    frameworks: ["mocha", "karma-typescript"],

    // List of files / patterns to load in the browser
    files: [
      // Your test files go here
      "tests/**/*.ts",
    ],

    // Preprocess matching files before serving them to the browser
    preprocessors: {
      // Your test files will be processed with these loaders
      "tests/**/*.ts": ["karma-typescript", "sourcemap"],
    },

    // Test results reporter to use
    // Possible values: 'dots', 'progress'
    reporters: ["mocha"],

    // TypeScript configuration
    karmaTypescriptConfig: typescriptConfig,

    // Plugins to use
    plugins: [
      require("karma-mocha"),
      require("karma-mocha-reporter"),
      require("karma-chrome-launcher"),
      require("karma-sourcemap-loader"),
      require("karma-typescript"),
    ],

    // Browser launcher
    browsers: ["ChromeHeadless"],

    // Continuous Integration mode
    // If true, Karma captures browsers, runs the tests and exits
    singleRun: true,
  });
};
