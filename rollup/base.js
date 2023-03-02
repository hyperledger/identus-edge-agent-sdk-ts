import terser from "@rollup/plugin-terser";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import cleanup from "rollup-plugin-cleanup";
import ignore from "rollup-plugin-ignore";
import json from "@rollup/plugin-json";
import esbuild from "rollup-plugin-esbuild";

export default (mode, type) => {
  return {
    input: ["index.ts"],
    output: {
      sourcemap: true,
      dir: `build/${mode}/${type}`,
      format: `${type}`,
    },
    plugins: [
      ignore(["@input-output-hk/atala-prism-sdk"]),
      json(),
      esbuild(),
      terser(),
      nodeResolve({
        //used to resolve NPM module reading from packages.json those entrypoint (ES6 - Main or Browser specific)
        jsnext: true,
        main: true,
        browser: true,
        preferBuiltins: true,
      }),
      cleanup(),
    ],
    external: [
      "antlr4ts",
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
      "axios",
      "google-protobuf",
      "protobufjs",
      "@scure/bip39",
      "elliptic",
      "@scure/bip39/wordlists/english",
      "google-protobuf/google/protobuf/timestamp_pb",
      "@stablelib/sha256",
      "Buffer",
    ],
  };
};
