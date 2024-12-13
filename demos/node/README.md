# TS-Node Demo

A simple CLI app to demonstrate SDK capabilities.

Purposefully designed to keep the app framework as minimal as possible,
so the focus can be on the SDK integration.


## Commands
- `npm run build` - transpile the typescript into ./build folder
- `npm start` - run the built code in node
- `npm run dev` - run the `build` and `start` commands together

## Structure
Noteworthy files and directories are:

- `./src` - Typescript source code
  - `./src/cli` - framework
    - `./src/cli/routing.ts` - default menu structure
    - `./src/cli/state.ts` - define shareable variables
  - `./src/sdkFns` - SDK integration code
