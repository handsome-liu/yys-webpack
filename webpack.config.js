const { path, HtmlWebpackPlugin, ExtractTextPlugin, Webpack, outPath } = {
    path: require('path'),
    HtmlWebpackPlugin: require('html-webpack-plugin'),
    ExtractTextPlugin: require('extract-text-webpack-plugin'),
    Webpack: require('webpack'),
    outPath: '' //设置生成路径
};

module.exports = {
    // 打包模式
    mode: 'development',
    // 入口文件
    entry: {
        'index.bundle': './client/js/index.js'
    },
    output: {
        // 输出目录
        path: path.resolve(__dirname, `dist${outPath}`),
        //输出文件名
        filename: 'js/[name].js'
    },
    plugins: [
        //HTML文件的创建
        new HtmlWebpackPlugin({
            title: '123',
            //设置创建文件名
            filename: 'index.html',
            //按照此模板创建
            template: './client/index.html',
            // 设置favicon.ico
            favicon: './client/favicon.ico'
        }),
        //生成目标css文件名
        new ExtractTextPlugin('[name].css'),
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
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[name].[ext]'
                        }
                    }
                ]
            },
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
            // {
            //     test: /\.(html)$/,
            //     use: {
            //         loader: 'html-loader'
            //     }
            // },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        name: 'html/[name].[ext]'
                    }
                }
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
