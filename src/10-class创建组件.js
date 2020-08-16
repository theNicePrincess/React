//1、导入包
// import React,{Component} from 'react'
import React from 'react'
import ReactDOM from 'react-dom'

// import '@/09-class继承-公共方法'

// class 关键字创建组件
class Movie extends React.Component{

  // 构造器
  constructor(){
    // 由于 Movie 继承了 React.Component 这个父类，所以自定义的构造器中，必须调用 super（）
    
    super();
    
    // 只有调用了 super（） 以后，才能使用 this 关键字
    // 这个 this.state = {} 就相当于 Vue 中的data(){return {}}
    this.state = {
      msg:'大家好，我是movie组件的msg'
    } 
  }


  // render() 作用：渲染当前组件所对应的虚拟DOM元素
  // 在class关键字创建的组件中，如果想使用外界传过来的props参数，不需要接收，this.props.*** 访问就可以
  // 在 class 组件内部 this 表示当前组件的实例对象
  // 在class 关键字创建的组件中，this.state 中的数据是可读可写的
  render() {

    //this.state.msg = "msg的值被我修改了"

    return <div>movie组件-------
      {this.props.name}------
      {this.props.age}-------
      {this.props.gender}
      <h3>{this.state.msg}</h3>
      </div>
  }
}

const user = {
  name:'zd',
  age:23,
  gender:'女'
}


//3、调用 render 函数渲染 jsx XML 比 HTML 严格多了
ReactDOM.render(<div>
  123
  {/* 这里的 Movie 标签，就是 Movie 类的实例对象 */}
  <Movie {...user}></Movie>
</div>, document.getElementById('app'))

