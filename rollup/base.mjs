import typescript from "rollup-plugin-typescript2";

import terser from "@rollup/plugin-terser";
import cleanup from "rollup-plugin-cleanup";
import ignore from "rollup-plugin-ignore";
import json from "@rollup/plugin-json";
import commonjs from "@rollup/plugin-commonjs";
const externals = [
  "@scure/bip39/wordlists/english",
  "elliptic",
  "loadSync",
  "google-protobuf",
  "protobufjs",
  "@scure/bip39",
  "typeorm",
  "google-protobuf/google/protobuf/timestamp_pb",
  "@stablelib/sha256",
  "Buffer",
  "castor/protos/_generated/node_models_pb.js",
  "didcomm",
  "didcomm-node",
  "@stablelib/x25519",
  "@stablelib/uuid",
  "bn.js",
  "did-jwt",
  "axios",
];
export default (mode, plugins = []) => {
  return {
    input: ["src/index.ts"],
    output: {
      sourcemap: true,
      dir: `build/${mode}`,
      format: mode === "node" ? "cjs" : "esm",
      name: "prism",
    },
    plugins: [
      ignore(externals),
      json(),
      typescript({
        useTsconfigDeclarationDir: true,
      }),
      terser(),
      ...plugins,
      commonjs(),
      cleanup(),
    ],
    external: externals,
  };
};
