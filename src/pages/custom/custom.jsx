import React, { Component } from 'react';
import './custom.less';

class Custom extends Component {
  render() {
    return (
      <div>
        <h2>客户信息管理</h2>
        <div className="line">
          <label>客户名称</label>
          <input type="text" placeholder="请输入客户名称"/>
        </div>
        <div className="line">
          <label>服务区域</label>
          <select></select>
        </div>
      </div>
    )
  }
}

export default Custom
