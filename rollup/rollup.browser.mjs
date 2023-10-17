import nodePolyfills from "rollup-plugin-polyfill-node";
import { wasm } from "@rollup/plugin-wasm";
import Base from "./base.mjs";
import modify from "rollup-plugin-modify";
import nodeResolve from "@rollup/plugin-node-resolve";

export default Base("browser", [
  modify({
    find: '"didcomm-node"',
    replace: '"didcomm-browser"',
  }),
  nodePolyfills(),
  nodeResolve({
    resolveOnly: ["anoncreds-browser", "didcomm-browser"],
  }),
  wasm({
    targetEnv: "browser",
    fileName: "[name][extname]",
    publicPath: "/",
    // maxFileSize: 10000000
  }),
]);
