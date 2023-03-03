module.exports = function (config) {
  config.set({
    // Base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: ".",

    // Frameworks to use
    frameworks: ["browserify", "mocha"],

    // List of files / patterns to load in the browser
    files: [
      {
        pattern: "build/tests/**/**/*.js",
        watched: true,
        type: "js",
      },
    ],
    preprocessors: {
      "build/tests/**/**/*.js": ["browserify", "sourcemap"],
    },
    browserify: {
      debug: true,
      transform: [],
    },
    // Test results reporter to use
    // Possible values: 'dots', 'progress'
    reporters: ["mocha"],
    // Plugins to use
    plugins: [
      require("karma-mocha"),
      require("karma-mocha-reporter"),
      require("karma-chrome-launcher"),
      require("karma-sourcemap-loader"),
      require("karma-browserify"),
    ],

    // Browser launcher
    browsers: ["ChromeHeadless"],

    // Continuous Integration mode
    // If true, Karma captures browsers, runs the tests and exits
    singleRun: true,
  });
};
