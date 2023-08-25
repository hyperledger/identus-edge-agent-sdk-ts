import nodePolyfills from "rollup-plugin-polyfill-node";
import inject from "@rollup/plugin-inject";
import { wasm } from "@rollup/plugin-wasm";
import Base from "./base.mjs";
import modify from "rollup-plugin-modify";

export default Base({
  mode: "browser",
  plugins: [
    modify({
      find: '"didcomm-node"',
      replace: '"didcomm"',
    }),
    nodePolyfills(),
    wasm({
      targetEnv: "browser",
      fileName: "didcomm_js_bg.wasm",
      publicPath: "/",
    }),
  ],
});
