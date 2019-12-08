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
  getDiscoverProductList (page) {
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
  },

  // 合同管理
  getContractList (page) {
    let obj = {
      url: '/ashx/UIFramework/UploadServerice.ashx?service=GetGridData',
      data: {
        id: '14e54990-f1eb-e911-b38f-39f0cbb5fe1f',
        pageIndex: page - 1,
        pageSize: 10,
        Parameter: 'escontain=true&deptid=1',
        filter: '{}',
        rightvalueid: '14e54990-f1eb-e911-b38f-39f0cbb5fe1f'
      }
    }
    return this.post(obj)
  },

  // 阿卢
  alu () {

  }
}
