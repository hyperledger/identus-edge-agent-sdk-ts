import { describe, test } from 'node:test';
import assert from 'node:assert';
import SDK from "sdk";
import * as SDKRoot from "sdk";
import assertions = require("../../assertions.cjs");

describe("SDK default export", () => {
  assertions.runTests(describe, test, assert, SDK);
});

describe("SDK root export", () => {
  assertions.runTests(describe, test, assert, SDKRoot.default);
});
