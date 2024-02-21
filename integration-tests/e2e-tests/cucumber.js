module.exports = {
  default: {
    format: [
      "@serenity-js/cucumber",
      ["html", "target/sdk-ts-e2e-results.html"],
    ],
    formatOptions: {
      junit: {
        suiteName: "E2E: Prism Wallet SDK - TS"
      }
    },
    requireModule: ["ts-node/register"],
    require: [
      "src/**/*.ts"
    ],
    retry: 1
  }
}
