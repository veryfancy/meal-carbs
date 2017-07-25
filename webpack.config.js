var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        'promise-polyfill',
        'whatwg-fetch',
        './src/app.js'
    ],
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            }
        ]
    }
}
