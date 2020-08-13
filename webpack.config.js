//将index.html 页面也放到浏览器内存中
const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin') // 导入 在内存中 自动生成index 页面的插件

// 创建一个插件的实例对象
const htmlPlugin = new HtmlWebPackPlugin({
    template: path.join(__dirname, './src/index.html'), // 源文件
    filename: 'index.html' // 生成的内存中首页的名称
})


// 向外暴露一个打包的配置对象； node 语法，webpack是基于node构建，支持所有node API 和语法

module.exports = {
    mode: 'production',  // development开发环境  production打包环境

    // 在webpack 4.x 中，有yi8ge很大的特性就是约定大于配置 约定默认的打包入口路径是 src ->index.js

    plugins: [
        htmlPlugin
    ],
    module:{
        // 所有第三方 模块的配置规则
        rules:[
            { test :/\.js|.jsx$/,use:'babel-loader',exclude:/node_modules/}
        ]
    }

}


// export default 是ES6中 向外导出模块的API 与之对应的是 import  from 导入