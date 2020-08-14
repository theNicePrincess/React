//1、导入包
import React from 'react'
import ReactDOM from 'react-dom'

import '@/06-class基本使用'


//3、调用 render 函数渲染 jsx XML 比 HTML 严格多了
ReactDOM.render(<div>
  123
</div>, document.getElementById('app'))

