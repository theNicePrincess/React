//1、导入包
// import React,{Component} from 'react'
import React from 'react'
import ReactDOM from 'react-dom'

// import Counter from '@/components/Counter'
// import TestProps from '@/components/TestReceiveProps'
// import BindThis from '@/components/BindThis'
// import CmtList from '@/components/CmtList'
import Context from '@/components/Context'

//3、调用 render 函数渲染 jsx XML 比 HTML 严格多了
ReactDOM.render(<div>
  {/* <Counter initCount={3}></Counter> */}
  {/* <hr /> */}
  {/* <TestProps></TestProps> */}
  {/* <BindThis></BindThis> */}
  {/* <CmtList></CmtList> */}
  <Context></Context>
</div>, document.getElementById('app'))

