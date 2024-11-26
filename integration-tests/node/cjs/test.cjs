/* eslint-disable n/no-unsupported-features/node-builtins */
const { describe, test } = require('node:test');
const assert = require('node:assert');
const SDK = require("sdk");
const assertions = require("../assertions.cjs");

describe('CommonJS Integration', () => {
  assertions.runTests(describe, test, assert, SDK);
});
