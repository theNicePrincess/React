import React from 'react'
import PropTypes from 'prop-types'
/* export default class Com1 extends React.Component {
  constructor() {
    super()
    this.state = {
      color: 'blue'
    }
  }
  render() {
    return <div>
      <h1>这是父组件</h1>
      <Com2 color={this.state.color}></Com2>
    </div>
  }
}

class Com2 extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return <div>
      <h2>这是子组件</h2>
      <Com3 color={this.props.color}></Com3>
    </div>
  }
}

class Com3 extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return <div>
      <h3 style={{ color: this.props.color }}>这是孙子组件</h3>
    </div>
  }
} */


// 使用 context特性进行 父传子或孙
// 1、在父组件中定义一个function，这个函数有一个固定的名称，叫做 getChildContext,内部必须返回一个对象，这个对象就是要功效给所有子孙组件的数据
// 2、使用竖向校验，规定一下传递给子组件的数据类型，需要定义一个静态 static 的 childContextTypes (固定名称，不要改)

export default class Com1 extends React.Component {
  constructor() {
    super()
    this.state = {
      color: 'blue'
    }
  }
  render() {
    return <div>
      <h1>这是父组件</h1>
      <Com2></Com2>
    </div>
  }

  getChildContext() {
    return {
      color: this.state.color
    }
  }

  static childContextTypes = {
    color: PropTypes.string  // 规定传递给子组件的数据类型为字符型
  }

}

class Com2 extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return <div>
      <h2>这是子组件</h2>
      <Com3></Com3>
    </div>
  }
}

class Com3 extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }

  // 3、先属性校验，校验父组件传递过来的参数类型是否正确
  static contextTypes = {
    color: PropTypes.string  // 如果子组件想要使用父组件通过 context共享的数据，那么在使用之前一定要先做一些属性数据类型校验
  }

  render() {
    return <div>
      <h3 style={{ color: this.context.color }}>这是孙子组件 ------ {this.context.color}</h3>
    </div>
  }
}