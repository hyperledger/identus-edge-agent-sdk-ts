import typescript from "rollup-plugin-typescript2";

import cleanup from "rollup-plugin-cleanup";
import ignore from "rollup-plugin-ignore";
import json from "@rollup/plugin-json";

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
];

export default (output, plugins = []) => {
  if (output === "browser") {
    return [
      // {
      //   input: "src/index.ts",
      //   output: {
      //     sourcemap: false,
      //     file: `build/browser/index.js`,
      //     format: "iife",
      //     //This line makes umd work, as it uses dynamic imports which support esm and commonjs
      //     inlineDynamicImports: true,
      //     name: "prism"
      //   },
      //   plugins: [
      //     nodePolyfills(),
      //     ...plugins,
      //     ignore(externals),
      //     json(),
      //     typescript({
      //       useTsconfigDeclarationDir: false,
      //       tsconfigOverride: {
      //         compilerOptions: {
      //           emitDeclarationOnly: false,
      //         },
      //       },
      //     }),
      //     cleanup(),
      //     commonjs(),
      //   ],
      //   external: externals,
      // },
      {
        input: "src/index.ts",
        output: {
          sourcemap: true,
          dir: `build/browser`,
          format: "es",
          entryFileNames: "[name].js"
        },
        plugins: [
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
          cleanup(),
        ],
        external: externals,
      },
      // {
      //   input: "src/index.ts",
      //   output: {
      //     sourcemap: true,
      //     dir: `build/browser-cjs`,
      //     format: "cjs",
      //     entryFileNames: "[name].cjs"
      //   },
      //   plugins: [
      //     ...plugins,
      //     ignore(externals),
      //     json(),
      //     typescript({
      //       useTsconfigDeclarationDir: false,
      //       tsconfigOverride: {
      //         compilerOptions: {
      //           emitDeclarationOnly: false,
      //         },
      //       },
      //     }),
      //     cleanup(),
      //   ],
      //   external: externals,
      // }

    ]
  } else {
    return [
      {
        input: "src/index.ts",
        output: {
          sourcemap: false,
          dir: `build/node-esm`,
          format: "es",
          entryFileNames: "[name].mjs"
        },
        plugins: [
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
          cleanup(),
        ],
        external: externals,
      },
      {
        input: "src/index.ts",
        output: {
          sourcemap: false,
          dir: `build/node-cjs`,
          format: "cjs",
          entryFileNames: "[name].cjs"
        },
        plugins: [

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
          cleanup(),
        ],
        external: externals,
      }
    ]
  }
};
