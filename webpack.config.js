import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { VueLoaderPlugin } from 'vue-loader';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
    entry: './src/index.js',

    mode: 'development',

    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'dist')
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ '@babel/preset-env' ]
                    }
                }
            }
        ],
    },

    plugins: [
        new VueLoaderPlugin(),

        new HtmlWebpackPlugin({
            title: 'Cherrry',
            filename: 'index.html',
            template: resolve(__dirname, 'src/index.html')
        })
    ]
}