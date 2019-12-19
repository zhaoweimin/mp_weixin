const config = {
  host: 'http://218.17.210.74:8011', // 接口域名 测试域名
  pageSize: 0,
  version: '' // 接口版本
}

function request (url, method, data, header = {}) {
  // 有index的查询接口才去加页码
  if (typeof data.index !== 'undefined') {
    data.pageIndex = data.index
    data.pageSize = data.isGetAll?0:config.pageSize
    data.size = data.isGetAll?0:config.pageSize
  }
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
