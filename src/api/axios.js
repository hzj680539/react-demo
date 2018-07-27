import axios from 'axios'

class axiosAPI {
  post (params) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url: 'http://api.isesoldev.com/cgi',
        data: params
      }).then(res => {
        let resData = res.data
        if (!resData.error) {
          resolve(resData.response)
        } else {
          reject(resData.error)
        }
      }, rej => {
        reject(rej.data.error)
      }).catch(e => {
        let error = {
          errorCode: '1000',
          errorInfo: '服务器开小差了~~'
        }
        reject(error)
      })
    })
  }
}

export default new axiosAPI()
