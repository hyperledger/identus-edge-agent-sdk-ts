const sdk = require('./build/index.js')
// patch default for builders expecting it downstream
module.exports = {
  ...sdk,
  default: sdk.default ?? sdk
};
