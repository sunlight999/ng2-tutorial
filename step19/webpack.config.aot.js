const ngtools = require('@ngtools/webpack');
const webpack = require('webpack');
var helpers = require('./config/helpers');

module.exports = {
    devtool: 'source-map',
    entry: {
        main: helpers.root('src/main-aot.ts')
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    target: 'node',
    output: {
        path: helpers.root('src/dist'),
        filename: 'build.js'
    },
    plugins: [
        new ngtools.AotPlugin({
            tsConfigPath: helpers.root('tsconfig-aot.json')
        }),
        new webpack.optimize.UglifyJsPlugin({ sourceMap: true })
    ],
    module: {
        rules: [
            { test: /\.css$/, loader: 'raw-loader' },
            { test: /\.html$/, loader: 'raw-loader' },
            { test: /\.ts$/, loader: '@ngtools/webpack' }
        ]
    }
}