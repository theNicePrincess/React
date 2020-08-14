//1、导入包
import React from 'react'
import ReactDOM from 'react-dom'

// 第一种创建组件的方式 ,构造函数
function Hello(props) {
  // 如果在一个组件中 return 一个 null 表示这个组件是空的  return null
  // 在组件中，必须返回一个 合法的JSX 虚拟DOM元素
  // vue 和 react 中的props 永远都是只读的，不能重新赋值
  console.log(props)
  return <div>这是一个hello组件 ----- {props.name}</div>
}


//3、调用 render 函数渲染 jsx XML 比 HTML 严格多了
ReactDOM.render(<div>
  123
   {/* 直接把 组件名称，以标签形式，丢到页面上即可*/}
  <Hello name="aaa"></Hello>
</div>, document.getElementById('app'))

