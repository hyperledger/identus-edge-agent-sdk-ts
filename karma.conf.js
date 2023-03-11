const sucrase = require("@rollup/plugin-sucrase");
const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const builtins = require("rollup-plugin-node-builtins");
const globals = require("rollup-plugin-node-globals");
const json = require("@rollup/plugin-json");
process.env.CHROME_BIN = require("puppeteer").executablePath();

module.exports = function (config) {
  config.set({
    basePath: "",
    frameworks: ["jasmine"],

    files: ["tests/**/*.test.ts"],

    preprocessors: {
      "**/*.ts": ["rollup"],
    },

    rollupPreprocessor: {
      external: ["antlr4ts", "chai"],
      plugins: [
        json(),
        globals(),
        builtins(),
        resolve(),
        commonjs(),
        sucrase({
          exclude: [],
          transforms: ["typescript"],
        }),
      ],
      output: {
        format: "iife",
        name: "postoffice",
        sourcemap: "inline",
      },
    },

    browsers: ["ChromeHeadless"],

    reporters: ["progress"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    singleRun: true,
    concurrency: Infinity,

    client: {
      captureConsole: true,
    },
  });
};
