import React, { Component } from 'react';
import './login.less';

class Login extends Component {
  render() {
    return (
      <div>
        <h1>登录页面</h1>
        <div className="line">
          <input type="text" placeholder="请输入用户名"/>
        </div>
        <div className="line">
          <input type="text" placeholder="请输入密码"/>
        </div>
        <div className="line">
          <input type="button" value="登录"/>
        </div>
      </div>
    )
  }
}

export default Login
