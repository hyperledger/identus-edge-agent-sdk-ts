import nodePolyfills from "rollup-plugin-polyfill-node";
import inject from '@rollup/plugin-inject';

import Base from "./base.mjs";
import replace from "@rollup/plugin-replace";

export default Base("browser", [
  inject({
    SQL: "sql.js/dist/sql-wasm.js",
    localforage: "localforage/dist/localforage.js",
  }),
  nodePolyfills(),
  replace({
    preventAssignment: true,
    "didcomm-node": "didcomm",
  }),
]);
