import React from 'react'

// 导入列表组件需要的样式表
import cssobj from '@/css/cmtlist.scss'

// 如果在引用某个包的时候，这个包被安装到了 node_modules 目录中
// 则可以省略 node_modules 这层目录，可以直接以包名开始引入自己的模块或样式表
import 'bootstrap/dist/css/bootstrap.css'


// 自己规定 第三方样式表 都是以 .css 结尾  ，这样我们不要为普通的.css文件启用模块化
//         自己写的样式表，都要以 .scss 或 .less 结尾 只为 .scss 或 .less 文件启用模块化

// 导入 评论项 子组件
import CmtItems from '@/components/CmtItem2'

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
      <h1 className={cssobj.title+" test"}>这是评论列表组件</h1>

      {this.state.CommentList.map( item => <CmtItems {...item} key={item.id}></CmtItems> )}

      <button className="btn btn-primary">按钮</button>
      <div className="panel panel-primary"></div>
    </div>
  }
}