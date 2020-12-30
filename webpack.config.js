const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },
    resolve: {
        extensions: ['.js'],
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',

                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin([
            {
                inject: true,
                template: './public/index.html',
                filename: './index.html'
            }
        ])
    ]
}