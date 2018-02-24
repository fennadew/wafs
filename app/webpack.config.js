const path = require('path');

module.exports = {
    entry: ["babel-polyfill", "./static/js/script.js"],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /node-modules/,
            loader: 'babel-loader',
            query: {
                presets: ['env']
            }
        }]
    }
}