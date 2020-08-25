const path = require('path');
const HTMLWebpack = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js',
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HTMLWebpack({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin(),
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    resolve: {
        extensions: [
            '.js',
            '.jsx'
        ],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpeg|gif|svg|jpg)$/,
                loader: 'file-loader',
                options: {
                  name: 'assets/img/[name].[ext]',
                },
            },
            {
                test: /\.(mp3)$/,
                loader: 'file-loader',
                options: {
                  name: 'assets/aud/[name].[ext]',
                },
            },
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader',
                options: {
                  name: 'assets/fonts/[name].[ext]',
                },
            }
        ]
    }
}