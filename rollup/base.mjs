import typescript from "rollup-plugin-typescript2";

import terser from "@rollup/plugin-terser";
import cleanup from "rollup-plugin-cleanup";
import ignore from "rollup-plugin-ignore";
import json from "@rollup/plugin-json";
import commonjs from "@rollup/plugin-commonjs";
import jsccPlugin from "rollup-plugin-jscc";

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
  "@stablelib/x25519",
  "@stablelib/uuid",
  "bn.js",
  "did-jwt",
  "axios",
  "didcomm",
  "didcomm-node",
  "didcomm-browser",
  "anoncreds-browser",
  "anoncreds-node",
];

export default (output, plugins = []) => {
  return {
    input: ["src/index.ts"],
    output: {
      sourcemap: true,
      dir: `build/${output.mode}`,
      format: output.format ?? "esm",
      name: "prism",
      paths: output.paths
    },
    plugins: [
      jsccPlugin({ values: { _ANONCREDS: true } }),
      ignore(externals),
      json(),
      typescript({
        useTsconfigDeclarationDir: true,
        tsconfigOverride: {
          compilerOptions: {
            emitDeclarationOnly: false,
          },
        },
      }),
      ...plugins,
      commonjs(),
      cleanup(),
    ],
    external: externals,
  };
};
