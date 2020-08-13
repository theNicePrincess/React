import React from 'react'
import ReactDOM from 'react-dom'

let  a= 10
let str ="你好，中国"
ReactDOM.render(<div><p>{str}</p><p>{a+2}</p></div>,document.getElementById('app'))