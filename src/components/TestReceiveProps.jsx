import React from 'react'

// 父组件
export default class Parent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: 'aaaa'
    }
  }

  render() {
    return <div>
      <h1>这是父组件</h1>
      <button onClick={this.changMsg}>点击修改msg的值</button>
      <hr />
      <Son pmsg={this.state.msg}></Son>
    </div>
  }

  changMsg = () => {
    this.setState({
      msg: '哇哈哈哈'
    })
  }

}



// 子组件
class Son extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: 'bbbb'
    }
  }

  render() {
    return <div>
      <h3>这是子组件 ------ {this.props.pmsg}</h3>
    </div>
  }

  // 组件将要接收外界传递过来的新的props属性值
  // 当子组件第一次被渲染到页面上的时候不会触发这个钩子函数
  // 只有当父组件通过某些事件重新修改了传递给子组件的props的值，才会触发这个钩子函数
  // 注意：在函数被触发的时候，如果我们通过 this.props.**** 获取属性值，这是旧的的属性值
  // 如果想要获取最新的 数据还是要通过 nextProps 参数获取
  componentWillReceiveProps(nextProps) {
    // console.log('componentWillReceiveProps 被触发了')
    // console.log(this.props.pmsg)
    // console.log(nextProps.pmsg)
  }

}