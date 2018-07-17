import jsonp from 'jsonp'

class API {
  getData (url) {
    return new Promise((resolve, reject) => {
      jsonp(`https://api.douban.com${url}`, null, (err, data) => {
        if (err) {
          console.error(err);
        } else {
          console.log('resolve data', data)
          resolve(data);
        }
      });
    })
  }
}

export default new API()
