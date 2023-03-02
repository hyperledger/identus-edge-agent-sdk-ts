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
      "apollo/**/*.ts",
      "castor/**/*.ts",
      "config/**/*.ts",
      "domain/**/*.ts",
      "mercury/**/*.ts",
      "peer-did/**/*.ts",
      "pluto/**/*.ts",
      "pollux/**/*.ts",
      "prism-agent/**/*.ts",
      "tests/**/*.ts",
      "tests/**/*.test.ts",
    ],

    // Preprocess matching files before serving them to the browser
    preprocessors: {
      "apollo/**/*.ts": ["karma-typescript", "sourcemap"],
      "castor/**/*.ts": ["karma-typescript", "sourcemap"],
      "config/**/*.ts": ["karma-typescript", "sourcemap"],
      "domain/**/*.ts": ["karma-typescript", "sourcemap"],
      "mercury/**/*.ts": ["karma-typescript", "sourcemap"],
      "peer-did/**/*.ts": ["karma-typescript", "sourcemap"],
      "pluto/**/*.ts": ["karma-typescript", "sourcemap"],
      "pollux/**/*.ts": ["karma-typescript", "sourcemap"],
      "prism-agent/**/*.ts": ["karma-typescript", "sourcemap"],
      "tests/**/*.ts": ["karma-typescript", "sourcemap"],
      "tests/**/*.test.ts": ["karma-typescript", "sourcemap"],
    },

    // Test results reporter to use
    // Possible values: 'dots', 'progress'
    reporters: ["mocha"],

    // TypeScript configuration
    karmaTypescriptConfig: {
      coverageOptions: {
        instrumentation: false,
      },

      compilerOptions: {
        module: "commonjs",
        target: "ES2020",
      },
    },

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
