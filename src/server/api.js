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

  // 在售产品接口查询
  getDiscoverProductList (page) {
    let obj = {
      url: '/ashx/UIFramework/UploadServerice.ashx?service=GetGridData',
      data: {
        id: '438a4934-0715-5104-a95e-39eb821771d2',
        index: page - 1,
        Parameter: 'escontain=true&deptid=1',
        filter: '{}',
        rightvalueid: '438a4934-0715-5104-a95e-39eb821771d2'
      }
    }
    return this.post(obj)
  },

  // 消息列表
  getMsgList (page, type, userId) {
    let obj = {
      url: '/ashx/UIFramework/PluginServerice.ashx?service=EmitAssembly',
      data: {
        id: '32ffa833-0ac2-42ac-8098-6f12aa866ebd',
        index: page - 1,
        size: 10,
        UserID: userId || 10183,
        msgType: type
      }
    }
    return this.post(obj)
  },

  // 合同管理查询
  getContractList (page) {
    let obj = {
      url: '/ashx/UIFramework/UploadServerice.ashx?service=GetGridData',
      data: {
        id: '14e54990-f1eb-e911-b38f-39f0cbb5fe1f',
        index: page - 1,
        Parameter: 'escontain=true&deptid=1',
        filter: '{}',
        rightvalueid: '14e54990-f1eb-e911-b38f-39f0cbb5fe1f'
      }
    }
    return this.post(obj)
  },

  // 邀约活动接口查询
  getDiscoverMarkerExerciseList (page, type = 0) {
    // type  1 历史邀约 0 可邀约
    let obj = {
      url: '/ashx/UIFramework/UploadServerice.ashx?service=GetGridData',
      data: {
        id: '37db7883-a615-ea11-b397-39f1dd0a73a7',
        index: page - 1,
        Parameter: `escontain=true&deptid=1${type === '1' ? '&r=1' : ''}`,
        filter: '{}',
        rightvalueid: '37db7883-a615-ea11-b397-39f1dd0a73a7'
      }
    }
    return this.post(obj)
  },

  // 历史活动/历史邀约客户接口查询
  getDiscoverMarkerHistoryExerciseList (page) {
    let obj = {
      url: '/ashx/UIFramework/UploadServerice.ashx?service=GetGridData',
      data: {
        id: 'fcd4083e-a415-ea11-b397-39f1dcfb9124',
        index: page - 1,
        Parameter: 'escontain=true&deptid=1',
        filter: '{}',
        rightvalueid: 'fcd4083e-a415-ea11-b397-39f1dcfb9124'
      }
    }
    return this.post(obj)
  },

  // 阿卢
  alu () {

  }
}
