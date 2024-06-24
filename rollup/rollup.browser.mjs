import { wasm } from "@rollup/plugin-wasm";
import Base from "./base.mjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import stripCode from "rollup-plugin-strip-code"

const browserPlugins = [
  nodeResolve({
    browser: true,
    preferBuiltins: false,
    resolveOnly: ["jwe-browser", "didcomm-browser", "anoncreds-browser"],
  }),
  wasm({
    targetEnv: "browser",
    fileName: "[name][extname]",
    maxFileSize: 10000000
  }),
  stripCode({
    start_comment: 'START.NODE_ONLY',
    end_comment: 'END.NODE_ONLY'
  }),
]

const outputs = [
  {
    dir: `build/browser`,
    format: "cjs",
    entryFileNames: "[name].cjs"
  },
  {
    dir: `build/browser`,
    format: "es",
    entryFileNames: "[name].mjs"
  }
]

export default Base(outputs, browserPlugins);
