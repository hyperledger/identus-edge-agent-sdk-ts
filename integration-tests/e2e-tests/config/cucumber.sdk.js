module.exports = {
  default: [
    `--format '@serenity-js/cucumber'`,
    `--require=tests/sdk/steps/**/*.ts`,
    `--require=config/serenity.config.ts`,
    `--require-module=ts-node/register`,
    '--backtrace'
  ].join(' '),
  glue: [
    "tests/sdk/src/**/*.ts"
  ]
}
