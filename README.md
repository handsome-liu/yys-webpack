# yys

阴阳师练习-webpack 打包

## description

home: <https://handsome-liu.github.io/yys-webpack/dist/home.html>

index: <https://handsome-liu.github.io/yys-webpack/dist/index.html>

## file explain

.babelrc ------ ES6 转 ES5，兼容 IE

.gitignore ------ 忽略 git 版本提交的文件

package.json ------ 管理你本地安装的 npm 包

webpack.config.js ------ 管理 webpack 的参数设置

client ------ 项目文件

dist ------ webpack 打包生成目录

## command

npm i ------ 加载所有依赖包

webpack ------ 打包创建 dist 目录下的文件

npm run start ------ 以开发者模式运行webpack服务器, 并打开默认浏览器

npm run build ------ 以生产者环境打包文件到dist目录中
