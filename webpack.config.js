const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    mode: 'none',
    entry: [ // order here is relevant
        path.resolve(__dirname, 'src/index.js'), // entry point for react app
        path.resolve(__dirname, 'src/global/explore.js'), // independent js file
        path.resolve(__dirname, 'src/global/home.js'), // independent js file

        path.resolve(__dirname, 'css/style.scss'), // css file
    ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    // watch: true,
    resolve: {
        extensions: ['.js', '.jsx', '.scss']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.(s*)css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'style-bundle.css',
        }),
        new HtmlWebpackPlugin({
            hash: true,
            template: 'src/index.html'
        }),
    ],
};

