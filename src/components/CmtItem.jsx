import React from 'react'

// 使用function 构造函数定义普通的无状态组件

// const itemStyle = {border:'1px dashed #ccc',margin:'10px',padding:'10px',boxShadow:'0 0 10px #ccc'}
// const h3Style = {marginTop:'10px',fontSize:'16px'}
// const pStyle = {fontSize:'14px'}

import styles from '@/components/styles.js'


export default function CmtItem(item){
  return <div style={styles.item}>
  <h3 style={styles.user}>评论人：{item.user}</h3>
  <p style={styles.content}>评论内容：{item.content}</p>
  </div>
}
