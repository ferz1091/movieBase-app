const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HTMLWebpackPlugin({ template: './public/index.html', minify: { collapseWhitespace: isProd, removeComments: isProd}}),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, './public/favicon.ico'),
                    to: path.resolve(__dirname, 'dist/public')
                },
                {
                    from: path.resolve(__dirname, './public/manifest.json'),
                    to: path.resolve(__dirname, 'dist/public')
                }
            ]
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.png', '.jpg', '.svg', '.ttf']
    },
    module: {
        rules: [
            {
                test: /\.(jpg|svg)$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'assets'
                }
            },
            {
                test: /\.png$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'icons'
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: 'assets'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    }
}
