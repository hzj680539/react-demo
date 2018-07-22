import React, { Component } from 'react';
import './login.less';

class Login extends Component {
  render() {
    return (
      <div>
        <h2>用户登录</h2>
        <div className="line">
          <label>用户名</label>
          <input type="text" placeholder="请输入用户名"/>
        </div>
        <div className="line">
          <label>密码</label>
          <input type="text" placeholder="请输入密码"/>
        </div>
        <div className="line">
          <button>登录</button>
        </div>
      </div>
    )
  }
}

export default Login
