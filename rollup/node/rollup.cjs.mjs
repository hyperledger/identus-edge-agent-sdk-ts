import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import cleanup from "rollup-plugin-cleanup";
import ignore from "rollup-plugin-ignore";
import json from "@rollup/plugin-json";

export function Base(mode, type) {
  return {
    input: ["src/index.ts"],
    output: {
      sourcemap: true,
      dir: `build`,
      format: `${type}`,
    },
    plugins: [
      ignore(["@input-output-hk/atala-prism-sdk", "elliptic"]),
      json(),
      typescript({
        compilerOptions: {
          declaration: true,
          declarationMap: true,
        },
      }),
      // terser(),
      nodeResolve({
        exportConditions: ["node"],
      }),
      cleanup(),
    ],
    external: [
      "@scure/bip39/wordlists/english",

      "@input-output-hk/atala-prism-sdk",
      "antlr4ts",
      "elliptic",
      "antlr4ts/Lexer",
      "antlr4ts/VocabularyImpl",
      "antlr4ts/atn/LexerATNSimulator",
      "antlr4ts/atn/ATNDeserializer",
      "antlr4ts/Parser",
      "antlr4ts/FailedPredicateException",
      "antlr4ts/atn/ParserATNSimulator",
      "antlr4ts/RecognitionException",
      "antlr4ts/Token",
      "antlr4ts/ParserRuleContext",
      "antlr4ts/DefaultErrorStrategy",
      "antlr4ts/tree/ParseTreeWalker",
      "antlr4ts/misc/Utils",
      "loadSync",
      "google-protobuf",
      "protobufjs",
      "@scure/bip39",

      "google-protobuf/google/protobuf/timestamp_pb",
      "@stablelib/sha256",
      "Buffer",
      "castor/protos/_generated/node_models_pb.js",
      "didcomm",
      "didcomm-node",
      "@stablelib/x25519",
      "@stablelib/uuid",
      "bn.js",
      "bip32",
      "typeorm",
      "did-jwt",
      "antlr4ts/atn/ATN",
      "axios",
    ],
  };
}

export default Base("node", "cjs");
