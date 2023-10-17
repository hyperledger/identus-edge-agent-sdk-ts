import Base from "./base.mjs";

export default Base("node", [
  {
    name: "inject-crypto-global",
    banner() {
      return `
        const crypto = require("crypto");
        global.crypto = crypto;
      `;
    },
  },
]);
