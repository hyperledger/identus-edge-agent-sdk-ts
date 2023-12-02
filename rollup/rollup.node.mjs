import Base from "./base.mjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import { wasm } from "@rollup/plugin-wasm";

export default Base(
  {
    name: "inject-crypto-global",
    banner() {
      return `
        const crypto = require("crypto");
        global.crypto = crypto;
      `;
    },
    mode: "node",
    format: "cjs",
  },
  [
    nodeResolve({
      exportConditions: ["node"],
      preferBuiltins: true,
      resolveOnly: ['anoncreds-wasm'],
    }),
    wasm({
      targetEnv: "node",
      fileName: "[name][extname]",
      publicPath: "/",
    }),
  ]
);
