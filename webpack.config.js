const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devServerHost = 'localhost',
      devServerPort = 4000;

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        host: devServerHost,
        port: devServerPort,
        historyApiFallback: true,
        open: false,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /(s?)css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    },
                    {
                        loader: 'postcss-loader',
                        options: { sourceMap: true }
                    },
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: true }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'public', 'template', 'index.html'),
            hash: false,
            inject: 'body',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                html5: true
            }
        })
    ]
}