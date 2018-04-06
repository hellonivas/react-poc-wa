/* Required Plugins will Come Here */
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
/* Required Plugins  will Come Here */

/* Directory Paths will Come Here*/
const BUILD_DIR = path.resolve(__dirname, 'build');
const SRC_DIR = path.resolve(__dirname, 'src');
const PUBLIC_DIR = path.resolve(__dirname, 'public');
/* Directory Paths  will Come Here*/

/* Plugin Const  will Come Here */
const extractCSS = new ExtractTextPlugin('static/css/styles.css');
//const extractSCSS = new ExtractTextPlugin('static/css/[name].styles.css');
/* Plugin Const  will Come Here */

/* Display Paths */
console.log(' ');
console.log('---------------------------------------------------------------------------');
console.log('| SRC_DIR: ', SRC_DIR);
console.log('---------------------------------------------------------------------------');
console.log('| BUILD_DIR: ', BUILD_DIR);
console.log('---------------------------------------------------------------------------');
console.log(' ');
/* Display Paths */


module.exports = {
    devtool: 'source-map',
    entry: {
        index: [SRC_DIR + '/index.js']
    },
    output: {
        path: BUILD_DIR,
        filename: 'static/js/bundle.js',
        publicPath: '/'
    },
    stats: {
        colors: true,
        modules: true,
        reasons: true,
        errorDetails: true
    },
    watch: true,
    devServer: {
        contentBase: SRC_DIR,
        compress: false,
        port: 3000,
        hot: true,
        historyApiFallback: true,
        inline: true,
        noInfo: true,
        open: true,
        https: false,
        quiet: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        cacheDirectory: true,
                        presets: ['env', 'react', 'es2015', 'stage-2']
                    }
                }
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.css$/,
                use: extractCSS.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            {
                test: /\.(png|jpg|jpeg|gif|.ico)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'static/media/'
                        }
                    }
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader',
                options: {
                    name: './fonts/[name].[ext]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: PUBLIC_DIR + '/index.html' }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        extractCSS,
        new HtmlWebpackPlugin(
            {
                inject: true,
                template: './public/index.html'
            }
        ),
        new CopyWebpackPlugin([
            { from: './public', to: './' }
        ],
            { copyUnmodified: false }
        )
    ]
};