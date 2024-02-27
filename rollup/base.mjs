import typescript from "rollup-plugin-typescript2";

import cleanup from "rollup-plugin-cleanup";
import ignore from "rollup-plugin-ignore";
import json from "@rollup/plugin-json";

const isDev = process.env.NODE_ENV === "development";

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
  "apollo",

  "rxjs",
  "rxdb/plugins/storage-dexie",
  "rxdb/plugins/encryption-crypto-js",
  "rxdb",
  "rxdb/plugins/migration",
  "rxdb/plugins/query-builder",
  "rxdb/plugins/json-dump",
];

export default (outputs, plugins = []) => {
  const commonPlugins = [
    ...plugins,
    ignore(externals),
    json(),
    typescript({
      useTsconfigDeclarationDir: false,
      tsconfigOverride: {
        compilerOptions: {
          emitDeclarationOnly: false,
        },
      },
    }),
    // commonjs({ transformMixedEsModules: true }),
    cleanup(),
  ]
  return outputs.map((output) => {
    return {
      input: "src/index.ts",
      output: {
        sourcemap: isDev,
        ...output
      },
      plugins: commonPlugins,
      external: externals,
    }
  })
};
