
// 1、这两个导入时候，接收的成员名称 必须这么写
import React from 'react'  //创建组件 虚拟dom元素 生命周期
import ReactDOM from 'react-dom' // 把创建好的 组件和虚拟dom放到页面展示的

// 2、创建虚拟DOM元素
// 参数1：创建元素的类型，字符串，表示元素的名称
// 参数2：是一个对象或null，表示 当前DOM元素的属性
// 参数3：子节点（包括 其他 虚拟DOM 获取文本子节点）
// 参数n：其他子节点
// <h1 id="myh1">这是一个h1标签</h1>
// const myh1 = React.createElement('h1', null, '这是一个h1标签')
const myh1 = React.createElement('h1', { id: 'myh1', title: 'this is a h1' }, '这是一个h1标签111111')
// 3.使用ReactDOM 把虚拟DOM 渲染到页面上
// 参数1：要渲染的那个虚拟DOM元素
// 参数2：指定页面上一个容器
ReactDOM.render(myh1, document.getElementById('app'))



