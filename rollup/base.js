import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import cleanup from "rollup-plugin-cleanup";
import ignore from "rollup-plugin-ignore";
import json from "@rollup/plugin-json";
import commonjs from "@rollup/plugin-commonjs";
import dts from "rollup-plugin-dts";
import nodePolyfills from "rollup-plugin-polyfill-node";
import multiInput from "rollup-plugin-multi-input";
const externals = [
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
];
const plugins = [
  multiInput(),
  commonjs(),
  ignore(externals),
  nodePolyfills(),
  json(),
  nodeResolve({
    //used to resolve NPM module reading from packages.json those entrypoint (ES6 - Main or Browser specific)
    jsnext: true,
    main: true,
    browser: true,
    preferBuiltins: true,
  }),
  cleanup(),
  terser(),
];

export default [
  {
    input: "index.ts",
    output: [{ file: "build/index.d.ts", format: "cjs" }],
    plugins: [typescript({ emitDeclarationOnly: true })],
  },
  {
    input: ["index.ts"],
    output: [
      {
        sourcemap: true,
        dir: `build/es`,
        format: `es`,
      },
      {
        sourcemap: true,
        dir: `build/cjs`,
        format: `cjs`,
      },
    ],
    plugins: [...plugins, typescript({ tsconfig: "tsconfig.json" })],
    external: externals,
  },
  {
    input: ["index.ts", "tests/**/*.ts"],
    output: [
      {
        sourcemap: true,
        dir: `build/tests`,
        format: `cjs`,
      },
    ],
    plugins: [...plugins, typescript({ tsconfig: "tsconfig.json" })],
    external: externals,
  },
];
