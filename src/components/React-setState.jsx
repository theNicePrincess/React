import React from 'react'


export default class BindEvent extends React.Component{
  constructor(){
    super()
    //私有数据
    this.state ={
      msg:'哈哈'
    }
  }

  render(){
    return <div>
      {/* 需求：点击按钮修改 msg 的值 */}
      <button onClick={    () => this.show('aaa','参数二')    }>按钮</button>
      <h3>{this.state.msg}</h3>
    </div>
  }
 
  show = (arg1,arg2) => {
    // console.log('show的方法调用了' + arg1 + arg2)
    // 注意：React 中 ，如果想为 state 中的数据，重新复制，不要使用 this.state.*** = 'aaa'
    // 应该使用 React 提供的 this.setState({msg:'234'})
  

    //注意： setState 方法执行是异步执行 
    // this.setState({},function(){})
    this.setState({
      // 在 setState 中只会把对应的state状态更新，而不会覆盖其他的状态
      msg:'呵呵'
    },function(){
      console.log(this.state.msg)
    })
  }
}

