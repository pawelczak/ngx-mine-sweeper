const webpack = require('webpack'),
    webpackMerge = require('webpack-merge'),
    commonConfig = require('./webpack.common.js'),
    DefinePlugin = require('webpack/lib/DefinePlugin'),
    LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

const config = webpackMerge(commonConfig, {

    devtool: 'source-map',

    plugins: [
        new webpack.NoErrorsPlugin(),

        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            output: {
                comments: false
            },
            mangle: {
                screw_ie8: true
            },
            compress: {
                screw_ie8: true,
                warnings: false,
                conditionals: true,
                unused: true,
                comparisons: true,
                sequences: true,
                dead_code: true,
                evaluate: true,
                if_return: true,
                join_vars: true,
                negate_iife: false // we need this for lazy v8
            }
        }),
        new DefinePlugin({
            'ENV': JSON.stringify(ENV)
        }),
        new LoaderOptionsPlugin({
            minimize: true,
            debug: false,
            options: {
            }
        })
    ]

});

module.exports = config;
