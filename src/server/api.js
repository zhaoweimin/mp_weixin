// eslint-disable-next-line semi
import WXrequest from './WXrequest';

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

  // 客户跟进本周需跟进客户接口查询
  getProductList (page, r) {
    // r- 0 客户跟进历史跟进客 3- 客户跟进超过30天未跟进客户 2- 客户跟进本周需跟进客户
    let obj = {
      url: '/ashx/UIFramework/PluginServerice.ashx?service=EmitAssembly',
      data: {
        id: '27458a0c-3000-4f36-8b93-81a82f59093f',
        userid: '',
        index: page - 1,
        Parameter: `escontain=true&deptid=1&r=${r}&userid=10183`,
        rightvalueid: '59bd9d7b-c6c9-046b-36b0-39eb71be4e6c',
        formid: '59bd9d7b-c6c9-046b-36b0-39eb71be4e6c',
        filter: '{}',
        urlpara: '',
        sortField: '',
        sortOrder: ''
      }
    }
    return this.post(obj)
  },

  // 产品预约接口查询
  getProductBookingList (page) {
    let obj = {
      url: '/ashx/UIFramework/UploadServerice.ashx?service=GetGridData',
      data: {
        id: '438a4934-0715-5104-a95e-39eb821771d2',
        index: page - 1,
        Parameter: 'escontain=true&deptid=1&s=3',
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

  // 待审批邀约活动接口查询
  getDaiDiscoverMarkerExerciseList (page, type = 0) {
    // type  1 历史邀约 0 可邀约
    let obj = {
      url: '/ashx/UIFramework/PluginServerice.ashx?service=EmitAssembly',
      data: {
        userId: 10183,
        id: '27458a0c-3000-4f36-8b93-81a82f59093f',
        rightvalueid: '82907d3f-4979-d0d0-1f50-39eb6765d115',
        formid: '82907d3f-4979-d0d0-1f50-39eb6765d115',
        index: page - 1,
        Parameter: `escontain=true&deptid=1&r=3`,
        filter: '{}',
        urlpara: '',
        sortField: '',
        sortOrder: ''
      }
    }
    return this.post(obj)
  },

  // 拒绝邀约活动接口查询
  getRejectDiscoverMarkerExerciseList (page) {
    let obj = {
      url: '/ashx/UIFramework/PluginServerice.ashx?service=EmitAssembly',
      data: {
        userId: 10183,
        id: '27458a0c-3000-4f36-8b93-81a82f59093f',
        rightvalueid: '82907d3f-4979-d0d0-1f50-39eb6765d115',
        formid: '82907d3f-4979-d0d0-1f50-39eb6765d115',
        index: page - 1,
        Parameter: `escontain=true&deptid=1&r=2`,
        filter: '{}',
        urlpara: '',
        sortField: '',
        sortOrder: ''
      }
    }
    return this.post(obj)
  },

  // 同意邀约活动接口查询
  getAgreatDiscoverMarkerExerciseList (page) {
    let obj = {
      url: '/ashx/UIFramework/PluginServerice.ashx?service=EmitAssembly',
      data: {
        userId: 10183,
        id: '27458a0c-3000-4f36-8b93-81a82f59093f',
        rightvalueid: '82907d3f-4979-d0d0-1f50-39eb6765d115',
        formid: '82907d3f-4979-d0d0-1f50-39eb6765d115',
        index: page - 1,
        Parameter: `escontain=true&deptid=1&r=1`,
        filter: '{}',
        urlpara: '',
        sortField: '',
        sortOrder: ''
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

  // 客户新增
  UploadServerice (params) {
    let obj = {
      url: '/ashx/UIFramework/UploadServerice.ashx?service=SaveForm',
      data: {
        id: 'd9987c7b-d6c8-14c8-8293-39eb8ff08730',
        formdata: {
          formid: 'd9987c7b-d6c8-14c8-8293-39eb8ff08730',
          UrlParams: '',
          HeadFields: params,
          Fentrys: [],
          PluginName: null,
          PluginId: null
        }
      }
    }
    return this.post(obj)
  },

  // 客户跟进新增
  addFollow (params) {
    let obj = {
      url: '/ashx/UIFramework/PluginServerice.ashx?service=EmitAssembly',
      data: {
        id: '73a617ba-31f2-c3a3-1d0e-39e80b23f04c', // 固定id 不变
        content: 'text/html',
        AutoSend: 1, // ( 0表示起草不发送  1表示起草并发送下一环节  2表示起草后如果下一处理人与当前处理人是一个人，则连续发送) （必录）
        StarterID: 10183,
        FlowName: '客户跟进单', // 跟进单标题
        FlowModelID: '59bd9d7b-c6c9-046b-36b0-39eb71be4e6c', // 客户跟进id
        HeadFields: params
      }
    }
    return this.post(obj)
  }
}
