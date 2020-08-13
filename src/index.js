import React from 'react'
import ReactDOM from 'react-dom'

// HTML 是最优秀的标记语言
// const mydiv = React.createElement('div',{id:'mydiv','title':'this is a div'},'这是一个div元素')

// 可以用babel来转换这些js中的标签
// 注意：这种在js中混合写入类似于 HTML 的语法 叫做 JSX 语法； 符合xml规范的js；

// 注意：JSX 语法的本质，还是 在运行的时候，被转成了 React.createElement 形式
const mydiv = <div id="mydiv" title="this is a div">这是一个div元素</div>


ReactDOM.render(mydiv,document.getElementById('app'))