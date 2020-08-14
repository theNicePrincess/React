//1、导入包
import React from 'react'
import ReactDOM from 'react-dom'

// 导入组件
// 如果不做单独的配置，是需要加入后缀名的 jsx 的
import Hello from '@/components/Hello'


//3、调用 render 函数渲染 jsx XML 比 HTML 严格多了
ReactDOM.render(<div>
  123
   {/* 直接把 组件名称，以标签形式，丢到页面上即可*/}
  <Hello name="aaa"></Hello>
</div>, document.getElementById('app'))

