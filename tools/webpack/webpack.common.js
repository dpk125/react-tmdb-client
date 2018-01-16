const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const extractSass = new ExtractTextPlugin({
    filename: 'client.css',
    disable: process.env.NODE_ENV === 'development'
});

module.exports = {
    name: 'client',

    context: path.resolve(__dirname, '../../client'),

    entry: './index.js',

    output: {
        path: path.resolve(__dirname, '../../public'),
        publicPath: '/',
        filename: 'client.min.js',
        sourceMapFilename: '[name].map'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: [path.resolve(__dirname, '../../client')],
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['es2015', {loose: true, modules: false}],
                            'react'
                        ]
                    }
                }]
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [
                        'css-loader',
                        'sass-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: function () {
                                    return [autoprefixer]
                                }
                            }
                        }
                    ],
                    fallback: 'style-loader'
                }),
            }
        ]
    },

    plugins: [
        extractSass,
        new HtmlWebpackPlugin({
            template: 'index.html',
            inject: 'body',
            filename: 'index.html'
        })
    ],

    resolve: {
        modules: [path.join(process.cwd(), '../../client'), 'node_modules'],
        extensions: ['.js', '.json']
    }
};
