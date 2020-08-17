import React from 'react'
// 这个包里面 prop-types 职能很单一，只提供了常见的数据类型进行数据校验
import ReactTypes from 'prop-types'

// 封装组件的目的，是为了团队协作开发更加方便，有的人只负责开发组件，有的人只负责调用别人开发好的组件
// 最好在封装组件的时候为组建中的必要数据进行类型校验，如果类型不合法可以在控制台报警告
export default class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: '啦啦啦',
      count: props.initCount  // 把外界传递过来的initCount赋值给count，这样就可以将count值改成可读可写的。
    }
  }

  // 在封装一个组件的时候，组件内部肯定有一些数据是必须的，哪怕用户没有传递一些相关的启动参数，组件内部尽量给提供默认值。
  // 在React中使用static defaultProps属性来设置组件的默认属性值
  static defaultProps = {
    initCount: 0     // 如果外界没有传递initCount，那么组件内部设置默认的初始值 0 
  }
  //创建一个静态的propTypes对象，在这个对象中可以把外界传递过来的属性做类型校验
  // 注意：如果要为传递过来的属性进行类型校验，必须安装react提供的第三方包，叫做 prop-types
  // prop-types 大概在react v.15.X之前并没有抽离出来，那时候还和react包在一起，后来从版本后，官方把类型校验的模块单独抽离一个包叫 prop-types
  static propTypes = {
    initCount: ReactTypes.number  // 使用prop-types包定义initCount为number类型
  }

  // 在组建即将挂载到页面上的时候执行，此时，组件上未挂载到页面中
  // 此时虚拟内存中的虚拟DOM还没有创建
  componentWillMount() {  // 这个函数等同于vueJs中的 created 钩子函数
    // 此时无法获取到页面上的任何元素，因为虚拟DOM和页面都还没有开始渲染，在这个钩子函数中不能操作DOM元素
    // console.log(this.props.initCount)
    // console.log(this.state.msg)
    // this.mySelfFunc();



  }

  mySelfFunc() {
    console.log('自己定义的函数，和生命周期函数无关')
  }


  //当执行到这个生命周期函数的时候，即将渲染内存中的虚拟DOM了，执行完后，内存中就有一个渲染好的虚拟DOM树了，但是页面上还没显示DOM
  render() {
    // 在组件运行阶段中，每当调用 render 函数的时候，页面上的dom元素还是旧的
    // console.log(this.refs.h3 && this.refs.h3.innerHTML)
    return <div>
      <h1>这是一个计数器</h1>
      <input type="button" id="btn" onClick={this.increment} value="+1" />
      <hr />
      <h3 id="myh3" ref="h3">当前的数量是：{this.state.count}</h3>
    </div>
  }
  // 当组件挂载到页面上后会进入这个钩子函数，只要进入这个钩子函数必然说明页面上已经有可见的DOM元素了
  // 当组件执行完componentDidMount 就进入运行中状态，这个钩子函数是创建阶段中的最后一个钩子函数
  componentDidMount() {
    // 在这个函数中，我们可以放心的操作页面上需要使用的dom元素
    // 如果我们想操作dom元素，最早只能在componentDidMount钩子函数
    // 相当于 vue中的 mounted 钩子函数
    // console.log(document.getElementById('myh3'))
  }

  //从这里开始进入组件运行中状态
  // 判断组件是否需要更新了
  shouldComponentUpdate(nextProps, nextState) {
    // 1、在 shouldComponentUpdate 钩子函数中要求必须返回一个boolearn值
    // 2、如果返回 false 则不会继续执行以下的钩子函数，而是退回运行中的状态。组件状态被修改，但是没有执行render()所以页面没有更新dom
    // 需求：如果count值为偶数则更新页面，如果为奇数则不更新页面
    // 经过打印测试发现，在该钩子函数中 this.state.count 拿到的值是上一次的旧数据
    // console.log(this.state.count + "-------------" + nextState.count)
    // return nextState.count % 2 === 0 ? true : false
    return true
  }

  //组件将要更新，此时尚未更新，在进入这个生命周期函数的时候，内存中的虚拟DOM是旧的，页面上的DOM元素也是旧的。
  componentWillUpdate() {
    // 经过打印分析操作页面上的dom元素是旧的，应该慎重操作，因为有可能操作的是旧的DOM
    // console.log(this.refs.h3.innerHTML)
  }
  // state ,虚拟dom ，页面dom都是最新的，可以大胆操作
  componentDidUpdate() {
    console.log(this.refs.h3.innerHTML)
  }


  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }


}