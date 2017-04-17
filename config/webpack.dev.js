const webpackMerge = require('webpack-merge'),
    path = require('path'),
    rootDir = path.join(__dirname, '..'),
    commonConfig = require('./webpack.common.js'),
    DefinePlugin = require('webpack/lib/DefinePlugin'),
    LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');

const ENV = process.env.NODE_ENV = process.env.ENV = 'development';

const config = webpackMerge(commonConfig, {

    devtool: 'cheap-module-eval-source-map',

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'tslint-loader',
                        options: {
                            configFile: path.resolve(rootDir, 'tslint.json'),
                            emitErrors: false,
                            failOnHint: false
                        }
                    }
                ],
                enforce: 'pre',
                exclude: [/\.(spec|e2e)\.ts$/]
            }
        ]
    },

    plugins: [
        new DefinePlugin({
            'ENV': JSON.stringify(ENV)
        }),
        new LoaderOptionsPlugin({
            debug: true,
            options: {}
        })
    ]
});

module.exports = config;
