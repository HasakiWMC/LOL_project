const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: __dirname + "/src/index.js", //已多次提及的唯一入口文件
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "bundle.js"
    },
    devServer: {
        contentBase: "./dist", //本地服务器所加载的页面所在的目录
        historyApiFallback: true, //不跳转
        port:9000
    },
    optimization: {
        minimize: true
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
            },
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.(gif|png|jpg|woff|svg|ttf|eot)$/,//图片的处理
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 500,//当图片小于这个值他会生成一个图片的url 如果是一个大于的他会生成一个base64的图片在js里展示
                    outputPath: 'assets/',// 指定打包后的图片位置
                    name: '[name].[ext]?[hash]',//name:'[path][name].[ext]
                    //publicPath:output,

                }
            }]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new CopyWebpackPlugin([
            // {
            // from:__dirname+'/public/index.html',//打包的静态资源目录地址
            // to:'./index.html' //打包到dist下面的public
            // },
            // {
            //     from:__dirname+'/src/assets/favicon.ico',//打包的静态资源目录地址
            //     to:'./assets/favicon.ico' //打包到dist下面的public
            // },
            {
                from:__dirname+'/src/assets/logo.svg',//打包的静态资源目录地址
                to:'./assets/logo.svg' //打包到dist下面的public
            },
            {
                from:__dirname+'/public/manifest.json',//打包的静态资源目录地址
                to:'./config/manifest.json' //打包到dist下面的public
            }
        ]),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'public/index.html',
            inject: true,
            favicon:'src/assets/favicon.ico'
        }),
    ],

};
