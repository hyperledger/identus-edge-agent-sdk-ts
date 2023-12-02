import nodePolyfills from "rollup-plugin-polyfill-node";
import { wasm } from "@rollup/plugin-wasm";
import Base from "./base.mjs";
import modify from "rollup-plugin-modify";
import nodeResolve from "@rollup/plugin-node-resolve";

export default Base({ mode: "browser" }, [
  modify({
    find: '"didcomm-node"',
    replace: '"didcomm"',
  }),
  modify({
    find: "'didcomm-node'",
    replace: "'didcomm'",
  }),
  nodePolyfills(),
  nodeResolve({
    resolveOnly: ["didcomm", "anoncreds-wasm"],
  }),
  wasm({
    targetEnv: "browser",
    fileName: "[name][extname]",
    publicPath: "/",
    // maxFileSize: 10000000
  }),
]);
