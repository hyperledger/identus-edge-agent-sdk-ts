import modify from "rollup-plugin-modify";
import { wasm } from "@rollup/plugin-wasm";

import Base from "./base.mjs";
export default Base("node", [
  wasm({
    targetEnv: "node",
    fileName: "didcomm_js_bg.wasm",
    publicPath: "/",
  }),
]);
