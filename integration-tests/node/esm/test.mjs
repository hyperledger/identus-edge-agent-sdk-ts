/* eslint-disable n/no-unsupported-features/node-builtins */
import { describe, test } from 'node:test';
import assert from 'node:assert';
import SDK from "sdk";
import assertions from "../assertions.cjs";

describe('ESM Integration', () => {
  assertions.runTests(describe, test, assert, SDK);
});
