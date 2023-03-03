let sdk = require("@input-output-hk/atala-prism-wallet-sdk");
const apollo = new sdk.Apollo();
console.log('HELLO', apollo.createRandomSeed());
