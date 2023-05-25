import typescript from "rollup-plugin-typescript2";

import terser from "@rollup/plugin-terser";
import cleanup from "rollup-plugin-cleanup";
import ignore from "rollup-plugin-ignore";
import json from "@rollup/plugin-json";
import commonjs from "@rollup/plugin-commonjs";

export default (mode, plugins = []) => {
  return {
    input: ["src/index.ts"],
    output: {
      sourcemap: true,
      dir: `build/${mode}`,
      format: mode === "node" ? "cjs" : "umd",
      name: "prism",
    },
    plugins: [
      ignore(["@input-output-hk/atala-prism-sdk", "elliptic"]),
      json(),

      typescript({
        useTsconfigDeclarationDir: true,
      }),
      //terser(),

      ...plugins,
      commonjs(),
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
      "typeorm",
      "sql.js",
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
      "antlr4ts/atn/ATN",
      "axios",
      "stream",
    ],
  };
};
