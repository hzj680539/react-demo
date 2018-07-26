import * as login from './action-type'

let defaultState = {
  username: '13564431002',
  password: '',
  verifyKey: '',
  verifyValue: '',
  captcha: '',
  token: ''
}

export const loginForm = (state = defaultState, action = {}) => {
  // console.log('loginForm')
  switch (action.type) {
    case login.GET_CAPTCHA:
      return {...state, verifyKey: action.verifyKey, captcha: action.captcha}
    case login.LOGIN:
      sessionStorage.setItem('token', action.token)
      return {...state, token: action.token}
    case login.SAVE_FORM_DATA:
      return {...state, [action.input_type]: action.value}
    default:
      return state
  }
}
