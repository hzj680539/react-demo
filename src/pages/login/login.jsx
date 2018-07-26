import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getCaptcha, saveLoginForm } from '@/store/login/action'
import axiosAPI from '@/api/axios'
import './login.styl';

class Login extends Component {
  componentDidMount () {
    console.log('Login componentDidMount')
    this.props.getCaptcha()
  }

  // 监听input输入
  handleInput = (type, event) => {
    this.props.saveLoginForm(type, event.target.value)
  }

  // 监听回车事件，默认是登陆事件
  handleKeyUp = e => {
    if (e.keyCode === 13) {
      this.login()
    }
  }

  // 登陆
  login = () => {
    console.log('login clicked')
    let params = this.props.loginForm
    console.log('params', params)
    let postData = {
      cmd: 'memberCenter/member/login',
      parameters: {
        memberName: params.username,
        memberPassword: params.password,
        verifyKey: params.verifyKey,
        verifyValue: params.verifyValue,
        sourceSystem: 'oncall'
      }
    }
    axiosAPI.post(postData).then(res => {
      console.log('res', res)
      if (res.success) {
        this.props.history.push('/douban/movie/list')
      }
    }, rej => {
      alert(rej.errorInfo)
    })
  }

  render() {
    return (
      <div className="login-form" onKeyUp={this.handleKeyUp.bind(this)}>
        <div className="line">
          <label>用户名</label>
          <input type="text" onChange={this.handleInput.bind(this, 'username')} value={this.props.loginForm.username} placeholder="请输入用户名"/>
        </div>
        <div className="line">
          <label>密码</label>
          <input type="text" onChange={this.handleInput.bind(this, 'password')} placeholder="请输入密码"/>
        </div>
        <div className="line">
          <label>验证码</label>
          <input type="text" onChange={this.handleInput.bind(this, 'verifyValue')} className="captcha" placeholder="验证码"/>
          <img src={`data:image/jpg;base64,${this.props.loginForm.captcha}`} onClick={this.props.getCaptcha} alt="" />
        </div>
        <div className="line mt-20px">
          <div className="btn btn-middle" onClick={this.login}>登录</div>
        </div>
      </div>
    )
  }
}

export default withRouter(connect(state => ({loginForm: state.loginForm}), {getCaptcha, saveLoginForm})(Login))
