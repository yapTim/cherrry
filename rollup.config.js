import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import vuePlugin from 'rollup-plugin-vue';

const port = 8080;

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/bundle.js',
        format: 'iife'
    },
    plugins: [
        vuePlugin(),
        serve({
            port: port
        }),
        livereload(),
    ],
};