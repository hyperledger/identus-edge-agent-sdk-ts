import nodePolyfills from "rollup-plugin-polyfill-node";
import inject from "@rollup/plugin-inject";
import { wasm } from "@rollup/plugin-wasm";
import Base from "./base.mjs";

export default Base("browser", [
  inject({
    SQL: "sql.js/dist/sql-wasm.js",
    localforage: "localforage/dist/localforage.js",
  }),
  nodePolyfills(),
  wasm({
    targetEnv: "browser",
    fileName: "didcomm_js_bg.wasm",
    publicPath: "/",
  }),
]);
