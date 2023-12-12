import Base from "./base.mjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import { wasm } from "@rollup/plugin-wasm";
import stripCode from "rollup-plugin-strip-code"
import copy from 'rollup-plugin-copy';
import commonjs from "@rollup/plugin-commonjs";

export default Base(
  "node",
  [
    nodeResolve({
      browser: false,
      preferBuiltins: true,
      resolveOnly: ['anoncreds-node', 'didcomm-node'],
    }),
    copy({
      targets: [
        { src: "./generated/anoncreds-wasm-node/anoncreds_bg.wasm", dest: "build/node-cjs" },
        { src: "./generated/didcomm-wasm-node/didcomm_js_bg.wasm", dest: "build/node-cjs" },
        { src: "./generated/anoncreds-wasm-node/anoncreds_bg.wasm", dest: "build/node-esm" },
        { src: "./generated/didcomm-wasm-node/didcomm_js_bg.wasm", dest: "build/node-esm" },
      ],
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
