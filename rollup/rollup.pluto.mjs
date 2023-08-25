import nodePolyfills from "rollup-plugin-polyfill-node";
import inject from "@rollup/plugin-inject";
import Base from "./base.mjs";

export default Base({
  mode: "pluto",
  entryPoint: "src/pluto/Pluto.ts",
  outputDir: "build/pluto-sqljs",
  plugins: [
    inject({
      SQL: "sql.js/dist/sql-wasm.js",
      localforage: "localforage/dist/localforage.js",
    }),
    nodePolyfills(),
  ],
});
