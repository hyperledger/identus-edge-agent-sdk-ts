import typescript from 'rollup-plugin-typescript2';
import {terser} from "rollup-plugin-terser";
import { nodeResolve } from '@rollup/plugin-node-resolve';
import cleanup from 'rollup-plugin-cleanup';
import ignore from "rollup-plugin-ignore"

export default (mode, type) => {
    return {
        input: [
            'index.ts', 
        ],
        output: {
            dir: `build/${mode}/${type}`,
            format: `${type}`
        },
        plugins: [
            ignore(["@input-output-hk/atala-prism-sdk"]),
            typescript({
                typescript: require('typescript'),
                objectHashIgnoreUnknownHack: true,
            }),
            terser(),
            nodeResolve({browser: mode === 'browser'}),
            cleanup()
        ],
        external: [ '@input-output-hk/atala-prism-sdk'  ],
    
        
    }
};
