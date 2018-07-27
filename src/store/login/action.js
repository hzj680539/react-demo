import * as login from './action-type'
import axiosAPI from '@/api/axios.js'
// import fetchAPI from '@/api/fetch.js'

/* 获取验证码 */
export const getCaptcha = () => {
  let verifyKey = Math.random().toString().substr(2)
  return async dispatch => {
    let params = {
      cmd: 'memberCenter/verifyImage/getImage',
      parameters: {verifyKey}
    }
    let result = await axiosAPI.post(params)
    dispatch({
      type: login.GET_CAPTCHA,
      captcha: result,
      verifyKey
    })
  }
}

/* 实时保存input数据 */
export const saveLoginForm = (input_type, value) => {
  return dispatch => {
    dispatch({
      type: login.SAVE_FORM_DATA,
      input_type,
      value
    })
  }
}
