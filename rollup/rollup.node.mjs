import { nodeResolve } from "@rollup/plugin-node-resolve";

import Base from "./base.mjs";
export default Base("node", [
  nodeResolve({
    exportConditions: ["node"],
    preferBuiltins: false,
  }),
]);
