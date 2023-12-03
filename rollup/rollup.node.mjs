import Base from "./base.mjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import { wasm } from "@rollup/plugin-wasm";
import stripCode from "rollup-plugin-strip-code"
import copy from 'rollup-plugin-copy'
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
    copy({
      targets: [
        { src: "./generated/anoncreds-wasm-node/anoncreds_bg.wasm", dest: "build/node" },
        { src: "./generated/didcomm-wasm-node/didcomm_js_bg.wasm", dest: "build/node" },
      ],
    }),
    nodeResolve({
      preferBuiltins: true,
      resolveOnly: ['anoncreds-node', 'didcomm-node'],
    }),
    wasm({
      targetEnv: "node",
      fileName: "[name][extname]",
      publicPath: "/",
    }),
    stripCode({
      start_comment: 'START.BROWSER_ONLY',
      end_comment: 'END.BROWSER_ONLY'
    }),
  ]
);
