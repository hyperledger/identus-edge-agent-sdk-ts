import Base from "./base.mjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import { wasm } from "@rollup/plugin-wasm";
import stripCode from "rollup-plugin-strip-code"
import copy from 'rollup-plugin-copy';
import replace from '@rollup/plugin-replace';

const nodePlugins = [
  nodeResolve({
    browser: false,
    preferBuiltins: true,
    resolveOnly: ['anoncreds-node', 'didcomm-node'],
  }),
  replace({
    preventAssignment: true,
    values: {
      'didcomm_js_bg.wasm': "../node-wasm/didcomm.wasm",
      'anoncreds_bg.wasm': "../node-wasm/anoncreds.wasm",
    }
  }),
  copy({
    targets: [
      { src: "./externals/generated/anoncreds-wasm-node/anoncreds_bg.wasm", dest: "build/node-wasm", rename: "anoncreds.wasm" },
      { src: "./externals/generated/didcomm-wasm-node/didcomm_js_bg.wasm", dest: "build/node-wasm", rename: 'didcomm.wasm' },
    ],
  }),
  wasm({
    targetEnv: "node",
    fileName: "[name][extname]",
    maxFileSize: 0
  }),
  stripCode({
    start_comment: 'START.BROWSER_ONLY',
    end_comment: 'END.BROWSER_ONLY'
  }),
]

const outputs = [
  {
    dir: `build/node`,
    format: "es",
    entryFileNames: "[name].mjs"
  },
  {
    dir: `build/node`,
    format: "cjs",
    entryFileNames: "[name].cjs"
  }
]
export default Base(
  outputs,
  nodePlugins
);
