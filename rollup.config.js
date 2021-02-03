import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import copy from 'rollup-plugin-copy';
import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';
import vue from 'rollup-plugin-vue';
import common from 'rollup-plugin-commonjs'

const port = 8080;

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/bundle.js',
        format: 'iife'
    },
    plugins: [
        common(),
        vue(),
        nodeResolve(),
        copy({
            targets: [{ src: 'src/index.html', dest: 'dist/' }]
        }),
        serve({
            contentBase: 'dist/',
            port: port
        }),
        livereload(),
    ],
    watch: {
        include: 'src/**',
        exclude: 'node_modules/**'
    }
};