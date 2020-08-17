import React from 'react'

export default class CmtBox extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return <div>
      <label>评论人：</label>
      <input type="text" ref="user" /><br />
      <label>评论内容：</label>
      <textarea cols="30" ref="txt" rows="3"></textarea>
      <input type="button" onClick={this.postCommoned} value="发表评论" />
    </div>
  }

  postCommoned = () => {
    var cmtInfo = { user: this.refs.user.value, content: this.refs.txt.value }
    var list = JSON.parse(localStorage.getItem('cmts') || '[]')
    list.unshift(cmtInfo)
    localStorage.setItem('cmts', JSON.stringify(list))

    this.refs.user.value = this.refs.txt.value = ""

    this.props.reload();
  }


}