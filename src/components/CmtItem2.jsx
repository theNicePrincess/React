import React from 'react'

import cmtitem2 from '@/css/cmtitem2.scss'
console.log(cmtitem2)
export default function CmtItem(item){
  return <div className={cmtitem2.itemdiv}>
  <h3 className={cmtitem2.h3}>评论人：{item.user}</h3>
  <p>评论内容：{item.content}</p>
  </div>
}
