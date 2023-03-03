# AtalaPrism - Typescript SDK

## Getting started - using SDK in browser

* To follow `exports` in `package.json`, set `moduleResolution` to either 
`node16` or `nodenext` in app's `tsconfig`.
* Install `assert` and `util` packages: `npm install assert util`
  * `antlr4ts` uses some Node.js standard library modules, which are not available 
  in browser. To use SDK in browser, you need to provide polyfills. Detailed 
  instructions how to polyfill could be found [here](https://sanchit3b.medium.com/how-to-polyfill-node-core-modules-in-webpack-5-905c1f5504a0).
* Vite specific setup
  * Vite does not support `process.env`, which is needed in order to use this SDK.
  * To fix this, you need to add `define` option to `vite.config`:
    ```js
    export default defineConfig({
      define: {
        'process.env': {
            NODE_ENV: process.env.NODE_ENV,
            NODE_DEBUG: process.env.NODE_DEBUG,
        }
      }
    })
    ```
* Install SDK: `npm install @input-output-hk/atala-prism-wallet-sdk`
* Import/require one of:
  * `@input-output-hk/atala-prism-wallet-sdk/node`
  * `@input-output-hk/atala-prism-wallet-sdk/browser`
