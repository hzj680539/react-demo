import 'whatwg-fetch'
import 'es6-promise'

class fetchAPI {
  // const baseUrl = 
  post (params) {
    return fetch('http://api.isesoldev.com/cgi', {
      method: 'post',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, 
      body: JSON.stringify(params)
    })
  }
}

export default new fetchAPI()
