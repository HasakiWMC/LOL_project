const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //打包环境： 生产
    mode: 'development',
    devtool: 'source-map',
    entry: {
        main: "./src/index.js"
    },
    //出口：有且只能有一个
    output: {
        filename: "[name]-bundle.js",
        path: path.resolve(__dirname, '../dist'),
        publicPath: "/"
    },
    optimization: {
        minimize: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            }, {
                test: /\.css$/,
                use: [
                    {
                        //将当前css写入html中
                        loader: "style-loader"
                    }, {
                        //将样式放到main-bundle.js中
                        loader: "css-loader"
                    }
                ]
            }, {
                test: /\.(gif|png|jpg|woff|svg|ttf|eot)$/,//图片的处理
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192,//当图片小于这个值他会生成一个图片的url 如果是一个大于的他会生成一个base64的图片在js里展示
                        outputPath: 'assets/',// 指定打包后的图片位置
                        name: '[hash:8][name].[ext]',//name:'[path][name].[ext]
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
            {   //nginx需要放到dist/assets目录下，仅放dist目录不能显示图标
                from: __dirname + '/../src/assets/favicon.ico',//打包的静态资源目录地址
                to: './assets/favicon.ico' //打包到dist下面的assets
            },
            // {
            //     from: __dirname + '/public/index.html',//打包的静态资源目录地址
            //     to: './index.html' //打包到dist下面的public
            // },
            // {
            //     from: __dirname + '/../src/assets/logo.svg',//打包的静态资源目录地址
            //     to: './assets/logo.svg' //打包到dist下面的public
            // },
            // {
            //     from: __dirname + '/../public/manifest.json',//打包的静态资源目录地址
            //     to: './config/manifest.json' //打包到dist下面的public
            // }
        ]),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'public/index.html',
            inject: true,
            // //开发过程中指定的favicon
            // favicon: 'src/assets/favicon.ico'
        }),
    ],

};
