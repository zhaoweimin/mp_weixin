const config = {
  host: 'https://rmall.ukelink.net', // 接口域名
  version: '' // 接口版本
}

function request (url, method, data, header = {}) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: config.host + config.version + url,
      method: method,
      data: data,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        resolve(res.data)
      },
      fail: function () {
        // reject(false)
      }
    })
  })
}

export default {
  request
}