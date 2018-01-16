const webpack = require('webpack');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');

module.exports = Merge.strategy()(CommonConfig, {
    devtool: 'cheap-module-eval-source-map',

    devServer: {
        host: 'localhost',
        port: 5579,
        publicPath: '/',
        contentBase: 'public',
        historyApiFallback: true,
        hot: false,
        inline: true,
        quiet: false,
        noInfo: false,
        compress: true,
        stats: {
            assets: false,
            colors: true,
            version: false,
            hash: false,
            timings: false,
            chunks: false,
            chunkModules: false
        }
    }
});
