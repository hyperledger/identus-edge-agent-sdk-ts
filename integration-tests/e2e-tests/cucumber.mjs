import { execSync } from "child_process"

execSync("rm -rf allure-results")

export default {
  format: [
    ["html", "target/sdk-ts-e2e-results.html"],
    ["./src/configuration/allure-reporter.mjs", "notes"],
    ["@serenity-js/cucumber"]
  ],
  formatOptions: {
    junit: {
      suiteName: "E2E: Edge Agent SDK TS"
    }
  },
  requireModule: ["ts-node/register"],
  require: [
    "src/**/*.ts"
  ],
  retry: 1,
  tags: "not @disabled",
}
