import { unlinkSync } from 'fs';

import typescript from '@rollup/plugin-typescript';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import styles from 'rollup-plugin-styles';
import { nodeResolve } from '@rollup/plugin-node-resolve';


const isProduction = process.env.PRODUCTION === 'true';
const isServe = process.env.SERVE === 'true';


export default [{
    input: './src/ts/main.ts',
    output: {
        dir: 'public/js/',
        format: 'esm',
        entryFileNames: '[name].js',
        sourcemap: !isProduction,
        compact: isProduction,
        minifyInternalExports: isProduction,
    },
    plugins: [
        nodeResolve(),
        typescript(),
        isProduction && terser(),
        isServe && serve({
            contentBase: './public/',
            port: 8080,
        }),
        isServe && livereload(),
    ]
}, {
    input: './src/css/style.css',
    output: {
        file: 'public/css/style-delete-me.css',
        format: 'esm',
        assetFileNames: '[name][extname]',
    },
    watch: !isProduction,
    plugins: [
        styles({
            include: ['./src/css/style.css'],
            mode: ['extract', 'style.css'],
            minimize: isProduction,
        }),
        {
            writeBundle(options) {
                unlinkSync(options.file);
            },
        },
    ],
}];