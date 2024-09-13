
import esbuild from 'esbuild';
import fs from 'fs';
import path from 'path';
import { NodeResolvePlugin } from '@esbuild-plugins/node-resolve';
import { getWasmJSContent, bufferShim } from './esbuild.base.mjs';

const wasmPlugin = {
    name: 'wasm',
    setup(build) {
        build.onResolve({ filter: /\.wasm$/ }, args => {
            if (fs.existsSync(path.resolve("externals/generated", args.path))) {
                return { path: path.resolve("externals/generated", args.path), namespace: 'wasm' };
            }
            return { path: path.resolve(args.resolveDir, args.path), namespace: 'wasm' };
        });
        build.onLoad({ filter: /.*/, namespace: 'wasm' }, (args) => (
            {
                contents: getWasmJSContent(args.path),
                loader: 'js',
            }
        ));
    },
};

const plugins = [
    wasmPlugin,
    NodeResolvePlugin({
        extensions: ['.ts', '.js', '.wasm'],
        onResolved: (resolved) => {
            if (resolved.includes('node_modules')) {
                return {
                    external: true,
                }
            }
            return resolved
        },
    }),
]

const generic = {
    chunkNames: "[name]",
    assetNames: "[name]",
    entryPoints: ['src/index.ts'],
    sourcemap: false,
    bundle: true,
    platform: 'neutral',
    splitting: false,
    resolveExtensions: ['.ts', '.js', '.wasm'],
    inject: ['anoncreds-wasm', 'didcomm-wasm', 'jwe-wasm'],
    mainFields: ['module', 'main'],
    banner: {
        js: bufferShim,
    },
    define: {
        'global.Buffer': 'Buffer',
    },
    external: ['buffer']
};

(async () => {
    await esbuild.build({
        ...generic,
        outfile: "build/index.mjs",
        target: ['esnext'],
        format: 'esm',
        plugins
    })
    await esbuild.build({
        ...generic,
        entryPoints: ['./build/index.mjs'],
        outfile: "build/index.cjs",
        target: ['es6'],
        format: 'cjs',
        plugins
    })
})()
