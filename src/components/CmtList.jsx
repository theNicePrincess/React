import React from 'react'

// 导入 评论项 子组件
import CmtItem from '@/components/CmtItem'

// 使用 class 关键字定义父组件
export default class CmtList extends React.Component {
  constructor(){
    super()
    this.state = {
      CommentList:[
        {id:1,user:'张三',content:'呵呵，张三'},
        {id:2,user:'李四',content:'呵呵，李四'},
        {id:3,user:'王五',content:'呵呵，王五'},
        {id:4,user:'赵六',content:'呵呵，赵六'},
        {id:5,user:'田七',content:'呵呵，田七'},
      ]
    }
  }
  
  render() {
    return <div>
      {/* 注意 在 JSX 中如果想使用行内样式，不能为style设置字符串的值 */}
      {/* 这么写 style={{color:'red',textAlign:'center'}} */}
      <h1 style={{color:'blue',textAlign:'center',fontWeight:200}}>这是评论列表组件</h1>

      {this.state.CommentList.map( item => <CmtItem {...item} key={item.id}></CmtItem> )}
    </div>
  }
}