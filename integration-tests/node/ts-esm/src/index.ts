import { describe, test } from 'node:test';
import assert from 'node:assert';
import SDK from "sdk";
import * as SDKRoot from "sdk";
import assertions = require("../../assertions.cjs");

describe("SDK default export", () => {
  assertions.runTests(describe, test, assert, SDK);
});

describe("SDK root export", () => {
  test("SDK root only has default export", () => {
    const keys = Object.keys(SDKRoot);
    assert(keys.length === 1);
    assert(keys[0] === "default");
  });

  assertions.runTests(describe, test, assert, SDKRoot.default);
});
