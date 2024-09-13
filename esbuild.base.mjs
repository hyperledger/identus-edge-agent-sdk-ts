import fs from 'fs';

export const getWasmJSContent = (file) => {
    const wasmBinary = fs.readFileSync(file);
    const base64 = Buffer.from(wasmBinary).toString('base64');
    return `export default Buffer.from("${base64}", "base64");`;
}

export const bufferShim = `
if (typeof Buffer === 'undefined') {
  global.Buffer = require('buffer').Buffer;
}`;