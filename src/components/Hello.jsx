import React from 'react'

export default function Hello(props) {
  // 如果在一个组件中 return 一个 null 表示这个组件是空的  return null
  // 在组件中，必须返回一个 合法的JSX 虚拟DOM元素
  // vue 和 react 中的props 永远都是只读的，不能重新赋值
  console.log(props)
  return <div>这是一个hello组件 ----- {props.name}</div>
}
