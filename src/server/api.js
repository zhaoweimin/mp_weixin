import WXrequest from './WXrequest'

export default {
  // base action
  get: function (obj) {
    return WXrequest.request(obj.url, 'GET', obj.data)
  },
  post: function (obj) {
    return WXrequest.request(obj.url, 'POST', obj.data)
  },
  put: function (obj) {
    return WXrequest.request(obj.url, 'PUT', obj.data)
  },
  del: function (obj) {
    return WXrequest.request(obj.url, 'DELETE', obj.data)
  },

  // test
  test: function () {
    // 测试接口
    let obj = {
      url: '/ashx/mobile/MoblieLogin.ashx?service=userlogin',
      data: {
        userName: 'admin',
        passWord: ''
      }
    }
    return this.post(obj)
  }
}
