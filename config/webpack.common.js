const webpack = require('webpack'),
    path = require('path'),
    rootDir = path.join(__dirname, '..'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    precss = require('precss'),
    autoprefixer = require('autoprefixer'),
    CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin'),
    LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');

module.exports = {

    entry: {
        'polyfills': './src/polyfills.browser.ts',
        'vendor': './src/vendor.browser.ts',
        'main': './src/main.browser.ts'
    },

    output: {
        filename: '[name].bundle.js',
        path: path.join(rootDir, 'dist')
    },

    resolve: {
        extensions: ['.js', '.ts', '.scss', '.css', '.json'],
        modules: [
            path.join(rootDir, 'node_modules'),
            path.join(rootDir, 'src')
        ]
    },

    resolveLoader: {
        moduleExtensions: ['-loader']
    },

    module: {

        rules: [
            {
                test: /\.ts$/,
                loaders: [
                    'awesome-typescript-loader',
                    'angular2-template-loader'
                ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loaders: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                exclude: /\.ngx.scss$/,
                loaders: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.ngx.scss$/,
                loaders: [
                    'to-string-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(jpg|png)$/,
                loader: 'url-loader?limit=10000000'
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=image/svg+xml'
            }
        ]

    },

    plugins: [
        // new webpack.optimize.OccurenceOrderPlugin(true),
        new CommonsChunkPlugin({
            name: ['main', 'vendor', 'polyfills'],
            minChunks: Infinity
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            chunksSortMode: 'dependency'
        }),
        // new webpack.ProvidePlugin({
        //     jQuery: 'jquery',
        //     $: 'jquery',
        //     jquery: 'jquery'
        // }),
        new CopyWebpackPlugin([{
            from: path.join(rootDir, 'src/assets'),
            to: path.join(rootDir, 'dist/assets')
        }]),
        new LoaderOptionsPlugin({
            options: {

                postcss: function () {
                    return [
                        precss,
                        autoprefixer
                    ];
                }
            }
        })
    ]

};
