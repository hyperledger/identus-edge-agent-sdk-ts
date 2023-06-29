// jest requires this for scoping in mock fns
import mockfs from "fs";

jest.mock(
  "anoncreds/anoncreds_bg.wasm",
  () => () => mockfs.readFileSync(`${process.cwd()}/../anoncreds-rs/pkg/anoncreds_bg.wasm`)
);
