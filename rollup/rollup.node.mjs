import copy from "rollup-plugin-copy";
import Base from "./base.mjs";

export default Base(
  {
    name: "inject-crypto-global",
    banner() {
      return `
        const crypto = require("crypto");
        global.crypto = crypto;
      `;
    },
    mode: "node",
    format: "cjs",
    // overwrite anoncreds import to target copied file (below)
    paths: {
      "anoncreds-node": "./anoncreds.js",
    },
  },
  [
    // copy anoncreds as is, so rollup doesn't break it
    copy({
      targets: [
        { src: "./anoncreds-rust/node/anoncreds.js", dest: "build/node" },
        { src: "./anoncreds-rust/node/anoncreds_bg.wasm", dest: "build/node" },
      ],
    }),
  ]
);
