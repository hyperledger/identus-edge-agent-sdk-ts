import nodePolyfills from "rollup-plugin-polyfill-node";
import { wasm } from "@rollup/plugin-wasm";
import Base from "./base.mjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import stripCode from "rollup-plugin-strip-code"
import copy from 'rollup-plugin-copy'
import commonjs from "@rollup/plugin-commonjs";
export default Base({ mode: "browser" }, [
  nodeResolve({
    resolveOnly: ["didcomm-browser", "anoncreds-browser"],
  }),
  copy({
    targets: [
      { src: "./generated/anoncreds-wasm-browser/anoncreds_bg.wasm", dest: "build/browser" },
      { src: "./generated/didcomm-wasm-browser/didcomm_js_bg.wasm", dest: "build/browser" },
    ],
  }),
  wasm({
    targetEnv: "browser",
    fileName: "[name][extname]",
    publicPath: "/",
    // maxFileSize: 10000000
  }),
  commonjs(),
  stripCode({
    start_comment: 'START.NODE_ONLY',
    end_comment: 'END.NODE_ONLY'
  }),
]);
