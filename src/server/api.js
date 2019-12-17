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
  // 获取 客户/机构 档案列表
  getAchiveList (page, fliter) {
    let obj = {
      url: '/ashx/UIFramework/UploadServerice.ashx?service=GetGridData',
      data: {
        id: '0a68d672-aa11-ea11-b397-39f1c2ed5a99',
        index: page - 1,
        Parameter: 'escontain=true&deptid=1', // 参数 sql中有动态参数时需设置
        filter: fliter,
        rightvalueid: '0a68d672-aa11-ea11-b397-39f1c2ed5a99'
      }
    }
    return this.post(obj)
  },
  // 在售产品接口查询
  getDiscoverProductList (page, type) {
    let obj = {
      url: '/ashx/UIFramework/UploadServerice.ashx?service=GetGridData',
      data: {
        id: '438a4934-0715-5104-a95e-39eb821771d2',
        index: page - 1,
        Parameter: `escontain=true&deptid=1${type ? '&s=4' : ''}`,
        filter: '{}',
        rightvalueid: '438a4934-0715-5104-a95e-39eb821771d2'
      }
    }
    return this.post(obj)
  },

  // 业绩赎回
  getRedeemList (page) {
    let obj = {
      url: '/ashx/UIFramework/PluginServerice.ashx?service=EmitAssembly',
      data: {
        id: '27458a0c-3000-4f36-8b93-81a82f59093f',
        userid: '',
        index: page - 1,
        Parameter: ``,
        rightvalueid: '4eb26c86-23ad-4fde-d17b-39ed60d117a8',
        formid: '4eb26c86-23ad-4fde-d17b-39ed60d117a8',
        filter: '{}',
        urlpara: '',
        sortField: '',
        sortOrder: ''
      }
    }
    return this.post(obj)
  },

  // 历史业绩
  getHistoryAchievementList (page) {
    let obj = {
      url: '/ashx/UIFramework/PluginServerice.ashx?service=EmitAssembly',
      data: {
        id: '27458a0c-3000-4f36-8b93-81a82f59093f',
        userid: '',
        index: page - 1,
        Parameter: ``,
        rightvalueid: 'ee0ccdcc-5668-69e5-d62a-39eb6d640e49',
        formid: 'ee0ccdcc-5668-69e5-d62a-39eb6d640e49',
        filter: '{}',
        urlpara: '',
        sortField: '',
        sortOrder: ''
      }
    }
    return this.post(obj)
  },

  // 客户计息
  getInterestList (page) {
    let obj = {
      url: '/ashx/UIFramework/PluginServerice.ashx?service=EmitAssembly',
      data: {
        id: '27458a0c-3000-4f36-8b93-81a82f59093f',
        userid: '',
        index: page - 1,
        Parameter: ``,
        rightvalueid: '9ec5f9a0-b2d8-1eff-be50-39eb7260201c',
        formid: '9ec5f9a0-b2d8-1eff-be50-39eb7260201c',
        filter: '{}',
        urlpara: '',
        sortField: '',
        sortOrder: ''
      }
    }
    return this.post(obj)
  },

  // 客户计息
  getInterestDetail (id) {
    let obj = {
      url: '/ashx/UIFramework/PluginServerice.ashx?service=EmitAssembly',
      data: {
        id: '82108958-7d38-4e49-aa6c-51b90211245e',
        index: 1,
        Parameter: ``,
        formid: '9ec5f9a0-b2d8-1eff-be50-39eb7260201c',
        value: id
      }
    }
    return this.post(obj)
  },

  // 产品提成
  getRoyaltyList (page) {
    let obj = {
      url: '/ashx/UIFramework/PluginServerice.ashx?service=EmitAssembly',
      data: {
        id: '27458a0c-3000-4f36-8b93-81a82f59093f',
        userid: '',
        index: page - 1,
        Parameter: ``,
        rightvalueid: 'd7a8d228-55ae-3b98-2f34-39eb723ecfd9',
        formid: 'd7a8d228-55ae-3b98-2f34-39eb723ecfd9',
        filter: '{}',
        urlpara: '',
        sortField: '',
        sortOrder: ''
      }
    }
    return this.post(obj)
  },

  // 知识库
  getLoreList (page) {
    let obj = {
      url: '/ashx/UIFramework/UploadServerice.ashx?service=GetGridData',
      data: {
        id: '2e961f6b-30f2-b88d-5cc6-39eb6cfee6c4',
        userid: '',
        index: page - 1,
        Parameter: `escontain=true&deptid=1`,
        rightvalueid: '2e961f6b-30f2-b88d-5cc6-39eb6cfee6c4',
        filter: '{}'
      }
    }
    return this.post(obj)
  },

  // 待办
  getTaskList (page) {
    let obj = {
      url: '/ashx/UIFramework/PluginServerice.ashx?service=EmitAssembly',
      data: {
        id: 'd0ccb1c4-687f-47b7-a20a-05d0a55251b5',
        UserID: '10818',
        PageSize: 10,
        PageIndex: page - 1,
        Types: `assembly`,
        FlowTypeId: '074edcaf-ac1d-b498-98ec-39e65ad5de13'
      }
    }
    return this.post(obj)
  },

  // 待办详情
  getTaskInfo (id) {
    let obj = {
      url: '/ashx/UIFramework/PluginServerice.ashx?service=EmitAssembly',
      data: {
        id: '27458a0c-3000-4f36-8b93-81a82f59093f',
        userid: '',
        index: 0,
        Parameter: ``,
        rightvalueid: id,
        formid: id,
        filter: '{}',
        urlpara: '',
        sortField: '',
        sortOrder: ''
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

  // 客户投诉
  getReportList (page, r) {
    // r 1-待处理 2-已处理
    let rMap = {
      1: '&r=1',
      2: '$r=2'
    }
    let obj = {
      url: '/ashx/UIFramework/PluginServerice.ashx?service=EmitAssembly',
      data: {
        id: '27458a0c-3000-4f36-8b93-81a82f59093f',
        userid: '',
        index: page - 1,
        Parameter: rMap[r],
        rightvalueid: 'b42343ac-4b20-734d-35bb-39eb71be6a41',
        formid: 'b42343ac-4b20-734d-35bb-39eb71be6a41',
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

  // 历史产品预约接口查询
  getHistoryProductBookingList (page, r) {
    let ParameterMap = {
      0: '', // 历史预约
      1: '&r=1', // 审核中预约
      2: '&r=2', // 预约成功
      3: '&r=3' // 预约失败
    }
    let obj = {
      url: '/ashx/UIFramework/PluginServerice.ashx?service=EmitAssembly',
      data: {
        id: '27458a0c-3000-4f36-8b93-81a82f59093f',
        rightvalueid: '84abc643-3ddf-c85b-1555-39eb67fca24f',
        formid: '84abc643-3ddf-c85b-1555-39eb67fca24f',
        userid: '',
        index: page - 1,
        Parameter: ParameterMap[r],
        urlpara: '',
        sortField: '',
        sortOrder: '',
        filter: '{}'
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
  },

  // 产品预约-新建预约提交审核
  addBooking (params) {
    let obj = {
      url: '/ashx/UIFramework/PluginServerice.ashx?service=EmitAssembly',
      data: {
        id: '73a617ba-31f2-c3a3-1d0e-39e80b23f04c',
        content: 'text/html',
        AutoSend: 1,
        StarterID: 10183,
        FlowName: '产品预约',
        FlowModelID: '84abc643-3ddf-c85b-1555-39eb67fca24f',
        HeadFields: params
      }
    }
    return this.post(obj)
  }
}
