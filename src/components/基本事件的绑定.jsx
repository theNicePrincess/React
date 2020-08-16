import React from 'react'


export default class BindEvent extends React.Component{
  constructor(){
    super()
    //私有数据
    this.state ={

    }
  }

  render(){
    return <div>
      <p>BindEvent 组件</p>
      <hr/>
      {/* 在 React 中有一套自己的时间绑定机制，事件名 是小驼峰命名 */}
      {/* <button onClick={function(){console.log('ok')}}>按钮</button> */}
      {/* <button onClick={this.myclickHander}>按钮</button> */}
      {/* 注意1：onClick 只接受函数形式 */}
      {/* 注意2：箭头函数本身就是一个匿名 function  函数 */}
      <button onClick={ () => { this.myclickHander() }}>按钮</button>
    </div>
  }
  // 这是一个实例方法
  myclickHander(){
    console.log('点击了')
  }



}

