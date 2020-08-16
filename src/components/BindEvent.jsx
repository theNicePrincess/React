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
      <button onClick={ () => this.show()}>按钮</button>
      {/* 如果我们只是把文本框的value属性绑定到state状态，但是没有提供 onChange 处理函数的话，得到的文本框将会是一个只读的文本框 */}
      {/* 当为文本框绑定value至以后，要么同事提供一个 readonly 属性，要么提供一个 onChange 函数 */}
      <input type="text" ref="text1" style={{width:'100%'}} value={this.state.msg} onChange={(e) => this.txtChanged(e)}/>
    </div>
  }

  show = () => {
    this.setState({
      msg:'我改变啦'
    })
  }

  txtChanged = (e) => {
    // console.log('变化了')

    // 在onChange中获取文本框的值，有两种方案
    // 1、通过参数e 来获取
    // console.log(e.target.value)
    // 2、通过给元素设置 ref 属性 ，通过 this.refs.*** 拿到DOM元素
    // console.log(this.refs.text1.value)
    const newVal = this.refs.text1.value;
    this.setState({
      msg:newVal
    })
  }

}

