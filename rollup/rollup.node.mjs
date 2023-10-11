import { wasm } from "@rollup/plugin-wasm";
import nodeResolve from "@rollup/plugin-node-resolve";

import Base from "./base.mjs";
export default Base("node", [
  nodeResolve({
    resolveOnly: ["anoncreds-node", "didcomm"],
  }),
  wasm({
    targetEnv: "node",
    fileName: "[name][extname]",
    publicPath: "/",
    // maxFileSize: 10000000
  }),
]);
