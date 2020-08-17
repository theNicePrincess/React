import React from 'react'

export default class BindThis extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: '我是消息'
    }

    // 在构造函数中绑定this并传参
    // 注意：当为一个函数，调用bind改变this指向后，bind函数调用的结果，有一个返回值，这个值就是被改变this指向后的函数的引用
    // 注意：bind不会修改原函数的this指向
    this.changeMsg2 = this.changeMsg2.bind(this, '参数1', '参数2')

  }

  render() {
    return <div>
      <h1>绑定this ，并传参的几种方式</h1>
      {/* bind 的作用为前边的函数修改内部 this 的指向，让函数内部的this指向 bind 参数列表中的第一个参数 */}
      {/* bind 和 call/apply 区别：call/apply 修改完this指向后会立即调用前面的函数，bind只会修改this的指向，不会立即调用 */}
      {/* <input type="button" onClick={this.changeMsg1.bind(this)} value="绑定this并传参的方式1" /> */}
      {/* bind 中的第一个参数是用来修改this指向的，第一个参数后面的所有参数都当做将来调用前面函数的参数传递进去 */}
      <input type="button" onClick={this.changeMsg1.bind(this, '参数1', '参数2')} value="绑定this并传参的方式1" />
      <input type="button" onClick={this.changeMsg2} value="绑定this并传参的方式2" />
      <input type="button" onClick={() => this.changeMsg3()} value="绑定this并传参的方式3" />
      {/* 如果为表单元素提供了value属性绑定，那么必须同时提供为表单元素绑定 readonly 属性 或者提供一个 onChange 事件，如果提供了readOnly 表示这个元素是只读的，不能被修改。提供onChange 表示这个值可以被修改，但是需要自己提供修改逻辑 */}
      <input type="text" ref="name" style={{ width: '100%' }} value={this.state.msg} onChange={this.txtChange} />
    </div>
  }

  // 这里定义的是一个普通方法，所以this打印出来是undefined
  changeMsg1 = function (arg1, arg2) {
    console.log(arg1, arg2)
  }

  changeMsg2 = function (arg1, arg2) {
    console.log(arg1, arg2)
  }

  changeMsg3 = function () {
    console.log('第三种绑定方式')
  }

  // 为文本框绑定 TXTChange 事件
  txtChange = (e) => {
    //拿到input 的值的方式
    // 1、document.getElementId('name')
    // 2、使用ref来拿值 this.refs.name.value
    // 3、使用参数对象 e来得到值，e.target.value   e.target 表示触发事件的事件源对象，得到的是一个原生的js DOM对象
    this.setState({
      msg: e.target.value
    })
  }


}



// 方式1：在事件处理函数中，直接使用 bind 绑定 this并传参
// 方式2：在构造器中为函数绑定bind，并将绑定后的函数赋值给原函数
// 方式3：在事件处理函数中，使用箭头函数来解决this的指向


// react 为单向数据流，只能把数据绑定到页面元素