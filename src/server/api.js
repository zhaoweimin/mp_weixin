// eslint-disable-next-line semi
import WXrequest from './WXrequest'

export default {
	// base action
	get: function(obj) {
		return WXrequest.request(obj.url, 'GET', obj.data)
	},
	post: function(obj) {
		return WXrequest.request(obj.url, 'POST', obj.data)
	},
	put: function(obj) {
		return WXrequest.request(obj.url, 'PUT', obj.data)
	},
	del: function(obj) {
		return WXrequest.request(obj.url, 'DELETE', obj.data)
	},

	// login
	login: function(data) {
		// 测试接口
		let obj = {
			url: '/ashx/mobile/MoblieLogin.ashx?service=userlogin',
			data
		}
		return this.post(obj)
	},
	// 获取 客户/机构 档案列表
	getAchiveList(page, fliter, Parameter, isGetAll) {
		let obj = {
			url: '/ashx/UIFramework/UploadServerice.ashx?service=GetGridData',
			data: {
				id: '0a68d672-aa11-ea11-b397-39f1c2ed5a99',
				index: page ? page - 1 : 0,
				// 查全部
				isGetAll: isGetAll,
				Parameter: Parameter || 'escontain=true&deptid=1', // 参数 sql中有动态参数时需设置
				filter: fliter,
				rightvalueid: '0a68d672-aa11-ea11-b397-39f1c2ed5a99'
			}
		}
		return this.post(obj)
	},
	// 在售产品接口查询
	getDiscoverProductList(page, type, isGetAll) {
		let obj = {
			url: '/ashx/UIFramework/UploadServerice.ashx?service=GetGridData',
			data: {
				id: '438a4934-0715-5104-a95e-39eb821771d2',
				index: page ? page - 1 : 0,
				// 查全部
				isGetAll: isGetAll,
				Parameter: `escontain=true&deptid=1${type ? '&s=4' : ''}`,
				filter: '{}',
				rightvalueid: '438a4934-0715-5104-a95e-39eb821771d2'
			}
		}
		return this.post(obj)
	},

	// 产品基础资料查询
	getProductBaseList(page) {
		let obj = {
			url: '/ashx/UIFramework/UploadServerice.ashx?service=GetGridData',
			data: {
				id: '438a4934-0715-5104-a95e-39eb821771d2',
				index: page - 1,
				Parameter: `escontain=true&deptid=1`,
				filter: '{}',
				rightvalueid: '438a4934-0715-5104-a95e-39eb821771d2'
			}
		}
		return this.post(obj)
	},

	// 业绩赎回
	getRedeemList(page) {
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
	getHistoryAchievementList(page, isGetAll) {
		let obj = {
			url: '/ashx/UIFramework/PluginServerice.ashx?service=EmitAssembly',
			data: {
				id: '27458a0c-3000-4f36-8b93-81a82f59093f',
				userid: '',
				index: page ? page - 1 : 0,
				// 查全部
				isGetAll: isGetAll,
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
	getInterestList(page) {
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
	getInterestDetail(id) {
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
	getRoyaltyList(page) {
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

	// 产品提成
	creatRoyaltyList(params) {
		let obj = {
			url: '/ashx/UIFramework/PluginServerice.ashx?service=EmitAssembly',
			data: {
				id: '73a617ba-31f2-c3a3-1d0e-39e80b23f04c',
				content: 'text/html',
				AutoSend: 1,
				StarterID: '10183',
				FlowName: '产品提成',
				FlowModelID: 'd7a8d228-55ae-3b98-2f34-39eb723ecfd9',
				HeadFields: params
			}
		}
		return this.post(obj)
	},

	// 知识库
	getLoreList(page) {
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
	getTaskList(page) {
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
	getTaskInfo(id, filter, userid) {
		let obj = {
			url: '/ashx/UIFramework/PluginServerice.ashx?service=EmitAssembly',
			data: {
				id: '27458a0c-3000-4f36-8b93-81a82f59093f',
				userid: userid,
				rightvalueid: id,
				formid: id,
				Parameter: '',
				filter: JSON.stringify(filter),
				urlpara: '',
				pageIndex: 0,
				pageSize: 20,
				sortField: '',
				sortOrder: ''
			}
		}
		return this.post(obj)
	},

	// 审核 type: 通过-1,驳回-0
	verify(type, messageid, opinion) {
		let data = {}
		if (type === 1) {
			data = {
				id: '216c84a1-2d22-ea11-837e-39f22f249db9',
				service: 'SendFlow', // 审核
				messageid: messageid, // 流程MessageID
				opinion: opinion, // 处理意见
				nextUserID: '0'
			}
		} else {
			data = {
				id: '216c84a1-2d22-ea11-837e-39f22f249db9',
				service: 'RejectFlow', // 驳回
				messageid: messageid, // 流程MessageID
				opinion: opinion, // 处理意见
				nextUserID: '0',
				specRight: '90', // 90 重审或按流程；89仅重审；91仅按流程
				nextNodeID: 2 // 驳回到的环节号
			}
		}
		let obj = {
			url: '/ashx/UIFramework/PluginServerice.ashx?service=EmitAssembly',
			data
		}
		return this.post(obj)
	},

	// 获取流程审批日志
	getFlowsLog(messageid, userID) {
		let obj = {
			url: '/ashx/UIFramework/PluginServerice.ashx?service=EmitAssembly',
			data: {
				id: '4c37c469-7122-ea11-837e-39f230e0d56c',
				messageid: messageid, // 流程MessageID
				userID: userID // 用户UserID（默认10818）
			}
		}
		return this.post(obj)
	},

	// 查询跟进人列表
	getFollowList(page) {
		let obj = {
			url: '/ashx/UIFramework/UploadServerice.ashx?service=GetGridData',
			data: {
				id: '1f3105da-2d4a-4bfa-bd3e-9f3aa33f6f7c',
				index: page - 1,
				Parameter: 'escontain=true&deptid=1',
				filter: '{}',
				rightvalueid: '1f3105da-2d4a-4bfa-bd3e-9f3aa33f6f7c'
			}
		}
		return this.post(obj)
	},

	// 客户跟进本周需跟进客户接口查询
	getProductList(page, r, UserID) {
		// r- 0 客户跟进历史跟进客 3- 客户跟进超过30天未跟进客户 2- 客户跟进本周需跟进客户
		let obj = {
			url: '/ashx/UIFramework/PluginServerice.ashx?service=EmitAssembly',
			data: {
				id: '27458a0c-3000-4f36-8b93-81a82f59093f',
				userid: '',
				index: page - 1,
				Parameter: `escontain=true&deptid=1&r=${r}&userid=${UserID}`,
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
	getReportList(page, r) {
		// r 1-待处理 2-已处理
		let rMap = {
			1: '&r=1',
			2: '&r=2'
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
	getProductBookingList(page) {
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
	getHistoryProductBookingList(page, r) {
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
	getMsgList(page, type, userId) {
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
	getContractList(page, filter = {}) {
		let obj = {
			url: '/ashx/UIFramework/UploadServerice.ashx?service=GetGridData',
			data: {
				id: '14e54990-f1eb-e911-b38f-39f0cbb5fe1f',
				index: page ? page - 1 : 0,
				Parameter: 'escontain=true&deptid=1',
				filter: filter,
				rightvalueid: '14e54990-f1eb-e911-b38f-39f0cbb5fe1f'
			}
		}
		return this.post(obj)
	},

	// 邀约活动接口查询
	getDiscoverMarkerExerciseList(page) {
		// type  1 历史邀约 0 可邀约
		let obj = {
			url: '/ashx/UIFramework/UploadServerice.ashx?service=GetGridData',
			data: {
				id: '37db7883-a615-ea11-b397-39f1dd0a73a7',
				index: page - 1,
				Parameter: `escontain=true&deptid=1&r=1`,
				filter: '{}',
				rightvalueid: '37db7883-a615-ea11-b397-39f1dd0a73a7'
			}
		}
		return this.post(obj)
	},

	// 待审批邀约活动接口查询
	getDaiDiscoverMarkerExerciseList(page, type = 0) {
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
	getRejectDiscoverMarkerExerciseList(page) {
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
	getAgreatDiscoverMarkerExerciseList(page) {
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

	// 历史活动接口查询
	getDiscoverMarkerHistoryExerciseList(page) {
		let obj = {
			url: '/ashx/UIFramework/UploadServerice.ashx?service=GetGridData',
			data: {
				id: '37db7883-a615-ea11-b397-39f1dd0a73a7',
				index: page - 1,
				Parameter: 'escontain=true&deptid=1',
				filter: '{}',
				rightvalueid: '37db7883-a615-ea11-b397-39f1dd0a73a7'
			}
		}
		return this.post(obj)
	},

	// 历史邀约客户接口查询
	getDiscoverMarkerHistoryInviteList(page) {
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
	UploadServerice(params) {
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
	addFollow(params) {
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
	addBooking(params) {
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
	},

	// 产品预约-新建预约提交审核
	// pages/discover/invitation/main
	addDiscoverInvitation(params, Rows) {
		let obj = {
			url: '/ashx/UIFramework/PluginServerice.ashx?service=EmitAssembly',
			data: {
				id: '73a617ba-31f2-c3a3-1d0e-39e80b23f04c',
				content: 'text/html',
				AutoSend: 1,
				StarterID: 10818,
				FlowName: '活动邀约',
				FlowModelID: '82907d3f-4979-d0d0-1f50-39eb6765d115',
				HeadFields: params,
				Fentrys: [
					{
						FentryIndex: 1,
						FentryField: 'fentry1',
						Rows: Rows
					}
				]
			}
		}
		return this.post(obj)
	},

	// 业绩新增
	addAchievement(params) {
		let obj = {
			url: '/ashx/UIFramework/PluginServerice.ashx?service=EmitAssembly',
			data: {
				id: '73a617ba-31f2-c3a3-1d0e-39e80b23f04c',
				content: 'text/html',
				AutoSend: 1,
				StarterID: 10183,
				FlowName: '业绩单',
				FlowModelID: 'ee0ccdcc-5668-69e5-d62a-39eb6d640e49',
				HeadFields: params
			}
		}
		return this.post(obj)
	},

	// 选择提成方式时获取对应的提成数据
	getTichengData(params) {
		let obj = {
			url: '/ashx/UIFramework/PluginServerice.ashx?service=EmitAssembly',
			data: {
				id: '9e0dd3cc-3ff6-e911-b397-39f10f3ff06e',
				string1: params.string1, // 业绩单号
				string2: params.string2, // 提成方式
				string3: params.string3, // 产品编号（可在1.22历史业绩接口中取到）
				string4: params.string4 // 产品名称
			}
		}
		return this.post(obj)
	},

	// 获取产品提成业绩单号列表
	getTichengYejidanhaoList(UserID) {
		let obj = {
			url: '/ashx/UIFramework/UploadServerice.ashx?service=GetGridData',
			data: {
				id: '46d2d810-ee16-3385-86d9-39ed5bcf25ea',
				pageIndex: 0,
				pageSize: 0,
				Parameter: `escontain=true&deptid=1&tc=5&UserID=${UserID}`,
				filter: '',
				rightvalueid: '46d2d810-ee16-3385-86d9-39ed5bcf25ea'
			}
		}
		return this.post(obj)
	},

	// 报表数据
	getReportData() {
		let obj = {
			url: '/ashx/UIFramework/PluginServerice.ashx?service=EmitAssembly',
			data: {
				id: 'ed1f625e-5525-ea11-b397-39f243d234ce'
			}
		}
		return this.post(obj)
	},

	// 提交申请审批流程
	getApplayRes(messageid, userID) {
		let obj = {
			url: '/ashx/UIFramework/PluginServerice.ashx?service=EmitAssembly',
			data: {
				id: '4c37c469-7122-ea11-837e-39f230e0d56c',
				messageid: messageid, // "4c37c469-7122-ea11-837e-39f230e0d56c",
				userID: userID // 10818,
			}
		}
		return this.post(obj)
    },
    
    // 获取个人风险能力评测
	getPersonTestResult(fnumber) {
		let obj = {
			url: '/ashx/UIFramework/UploadServerice.ashx?service=GetGridData',
			data: {
                id: "590acc29-43a7-9e04-b61b-39ed556179b0",
                pageIndex: 0,
                pageSize: 10,
                Parameter: `escontain=true&deptid=1&r=1&fnumber=${fnumber}`,
                filter: "{}",
                rightvalueid: "590acc29-43a7-9e04-b61b-39ed556179b0"
            }
		}
		return this.post(obj)
    },
    // 获取机构风险能力评测
	getInstitutionTestResult(fnumber) {
		let obj = {
			url: '/ashx/UIFramework/UploadServerice.ashx?service=GetGridData',
			data: {
                id: "b8f0700c-923f-682a-6253-39ed56b95c31",
                pageIndex: 0,
                pageSize: 10,
                Parameter: `escontain=true&deptid=1&r=1&fnumber=${fnumber}`,
                filter: "{}",
                rightvalueid: "b8f0700c-923f-682a-6253-39ed56b95c31"
            }
		}
		return this.post(obj)
	}
}
