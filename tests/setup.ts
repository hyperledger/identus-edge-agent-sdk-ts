const cryptoPkgh = require("crypto");
const util = require('util')
global.crypto = cryptoPkgh;
global.TextEncoder = util.TextEncoder;
global.TextDecoder = util.TextDecoder;