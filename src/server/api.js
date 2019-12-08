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
  },

  // 在售产品接口
  getProductList (page) {
    let obj = {
      url: '/ashx/UIFramework/UploadServerice.ashx?service=GetGridData',
      data: {
        id: '438a4934-0715-5104-a95e-39eb821771d2',
        pageIndex: page - 1,
        pageSize: 10,
        Parameter: 'escontain=true&deptid=1',
        filter: '{}',
        rightvalueid: '438a4934-0715-5104-a95e-39eb821771d2'
      }
    }
    return this.post(obj)
  }
}
