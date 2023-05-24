import { nodeResolve } from "@rollup/plugin-node-resolve";
import nodePolyfills from "rollup-plugin-polyfill-node";

import Base from "./base.mjs";
import replace from "@rollup/plugin-replace";

export default Base("browser", [
  nodePolyfills({ exclude: ["crypto"], include: ["stream"] }),
  nodeResolve({ preferBuiltins: false, browser: true }),
  replace({
    preventAssignment: true,
    "didcomm-node": "didcomm",
    stream: "stream-browserify",
  }),
]);
