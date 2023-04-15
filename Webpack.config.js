const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry : './source/index.jsx',
    mode: 'development',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: '[name][fullhash].js',
        clean: true,
        publicPath: '/',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './source/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name][fullhash].css'
        }),
        new CopyPlugin({
            patterns: [
                { from: "source/img", to: "distImg" },
            ],
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        port:5555,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.m?jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ]
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: 'sass-loader',
                        options: {
                            sassOptions: {
                                includePath: ['node_modules'],
                            },
                        },
                    },
                ]
            }
        ]
    }
};