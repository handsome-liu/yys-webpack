const { path, HtmlWebpackPlugin, ExtractTextPlugin, Webpack, outPath } = {
    path: require('path'),
    HtmlWebpackPlugin: require('html-webpack-plugin'),
    ExtractTextPlugin: require('extract-text-webpack-plugin'),
    Webpack: require('webpack'),
    outPath: '' //设置生成路径
};

class Html {
    constructor(title = 'undefind', filename = 'index') {
        return new HtmlWebpackPlugin({
            title: title,
            //设置创建文件名
            filename: `${filename}.html`,
            //按照此模板创建
            template: `./client/${filename}.html`,
            // 设置favicon.ico
            favicon: './client/icon/favicon.ico'
        });
    }
}

module.exports = {
    // 打包模式  development   production
    mode: 'development',
    // 入口文件
    entry: {
        'index.bundle': './client/js/index.js'
    },
    output: {
        // 输出目录
        path: path.resolve(__dirname, `dist${outPath}`),
        //输出文件名
<<<<<<< HEAD
        filename: 'js/[name].js'
=======
        filename: `${outPath}source/[name].js`
>>>>>>> 8cbae04a5bb91b138a1e65b49d870efa45fa667c
    },
    plugins: [
        //HTML文件的创建
        new Html('321123', 'index'),
        //生成目标css文件名
<<<<<<< HEAD
        new ExtractTextPlugin('[name].css'),
=======
        new ExtractTextPlugin(`${outPath}source/yys.css`),
>>>>>>> 8cbae04a5bb91b138a1e65b49d870efa45fa667c
        //热加载名字
        new Webpack.NamedModulesPlugin(),
        //热加载模块
        new Webpack.HotModuleReplacementPlugin()
    ],
    module: {
        //正则筛选文件
        rules: [
            //ES6转ES5，兼容IE
            {
                test: /\.js$/,
                use: ['babel-loader'],
                //exclude 排除，不需要编译的目录，提高编译速度（node_modules是模块安装位置，不需要编译）
                exclude: /^node_modules$/
            },
            // scss样式的打包导入
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            // style中的url图片引入打包
            {
                test: /\.(png|jpg|gif|svg|swf|ico)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
<<<<<<< HEAD
                            name: 'images/[name].[ext]'
=======
                            //文件名
                            name: '[name].[ext]',
                            //存放路径
                            outputPath: `${outPath}source/`
>>>>>>> 8cbae04a5bb91b138a1e65b49d870efa45fa667c
                        }
                    }
                ]
            },
<<<<<<< HEAD
            // 打包视频，flash资源
            {
                test: /\.swf$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'flash/[name].[ext]'
                        }
                    }
                ]
            },
            // html中的img图片引入打包
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        //开启压缩
                        minimize: true
                    }
                }
=======
            // html中的img图片引入打包
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader'
                }
            },
            //ES6转ES5，兼容IE
            {
                test: /\.js$/,
                use: ['babel-loader'],
                //exclude 排除，不需要编译的目录，提高编译速度（node_modules是模块安装位置，不需要编译）
                exclude: /^node_modules$/
>>>>>>> 8cbae04a5bb91b138a1e65b49d870efa45fa667c
            }
        ]
    },
    //webpack-dev-server配置参数
    devServer: {
        //设置监听端口
        port: 3000,
        //自动打开浏览器
        open: true,
        //热更新
        hot: true
    }
};
