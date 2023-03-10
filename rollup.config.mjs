import glob from "glob";
import path from "node:path";
import { fileURLToPath, URL } from "node:url";
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { wasm } from '@rollup/plugin-wasm';

export default {
  input: Object.fromEntries(
    glob.sync(`tests/**/*.test.ts`).map(file => [
      path.relative("", file.slice(0, file.length - path.extname(file).length)),
      fileURLToPath(new URL(file, import.meta.url))
    ])
  ),
  output: {
    dir: './build/tests/',
    format: 'cjs',
    preserveModules: true
  },
  plugins: [
    typescript(),
    nodeResolve({ resolveOnly: ["didcomm"] }),
    commonjs(),
    wasm(),
  ],
};
