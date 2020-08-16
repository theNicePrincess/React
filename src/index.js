//1、导入包
// import React,{Component} from 'react'
import React from 'react'
import ReactDOM from 'react-dom'

import BindEvent from '@/components/BindEvent'
  

//3、调用 render 函数渲染 jsx XML 比 HTML 严格多了
ReactDOM.render(<div>
  <BindEvent></BindEvent>
</div>, document.getElementById('app'))

