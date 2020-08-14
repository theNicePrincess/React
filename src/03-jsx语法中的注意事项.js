import React from 'react'
import ReactDOM from 'react-dom'

let a = 10
let str = "你好，中国"

const arr = [
  <h2>这是h2</h2>,
  <h3>这是h3</h3>
]

const arrStr = ['苹果', '香蕉', '葡萄', '西瓜', '李子']

const nameArr = [];
// 注意：react中需要把 key 添加给 forEach 或map 或for 循环直接控制元素
arrStr.forEach(item => {
  const name = <h5 key={item}>{item}</h5>
  nameArr.push(name)
})

// 数组的 map 方法
// const g = arrStr.map(item => {
//   return item + "222"
// })
// console.log(g)


ReactDOM.render(
  <div>
    <p>{str}</p><p>{a + 2}</p>
    <hr />
    {arr}
    <hr />
    {nameArr}
    <hr />
    {arrStr.map(item => <h4 key={item}>{item}</h4>)}
  </div>
  , document.getElementById('app'))