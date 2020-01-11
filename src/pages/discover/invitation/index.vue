<template>
	<div class="customer">
		<div class="bg-fff mb20">
			<comInput :type="0" @getInputVal="getInputVal" title="邀约编号" :titleDark="true" :value="params.string1" :textRight="false"></comInput>
			<comInput :type="0" @getInputVal="getInputVal" title="活动名称" :titleDark="true" :value="params.string2" :textRight="false"></comInput>
			<comInput :type="0" @getInputVal="getInputVal" title="活动编号" :titleDark="true" :value="params.string3" :textRight="false"></comInput>
			<comInput :type="0" @getInputVal="getInputVal" title="邀约日期" :titleDark="true" :value="params.date8" @getSelectDate="getSelectDate" :textRight="false"></comInput>
			<!-- <comInput :type="2" @getInputVal="getInputVal" title="审批状态" :titleDark="true" placeholder="请选择审批状态" :value="params.string2" @getSelect="getSelect" :options="['通过','未通过','等待审核中']" :textRight="false"></comInput> -->
			<comInput :type="0" @getInputVal="getInputVal" title="备注" :titleDark="true" placeholder="请输入备注" :value="params.string7" :textRight="false"></comInput>

			<div v-for="(vo, index) in customers" :key="index">
				<div class="flex a-between mlr15 ptb15">
					<div class="f16 strong clink border-b">邀约({{ index + 1 }})</div>
					<div class="btn-del cfff flex l-center a-center f12" @click="del(index)">删除</div>
				</div>
				<comInput :type="6" :paramkey="index + '_string35'" title="客户姓名" :titleDark="true" :value="vo.string35" :filterList="customerOptions" @getFilterSelet="getFilterSelet" :textRight="false"></comInput>
				<comInput :type="1" :paramkey="index + '_string42'" @getInputVal="getInputVal" title="手机号码" :titleDark="true" placeholder="请输入手机号码" :value="vo.string42" :textRight="false"></comInput>
				<comInput :type="2" :paramkey="index + '_string21'" @getInputVal="getInputVal" title="客户类型" :titleDark="true" placeholder="请选择客户类型" :value="vo.string21" @getSelect="getSelect" :options="['有意向客户']" :textRight="false"></comInput>
				<comInput :type="1" :paramkey="index + '_string18'" @getInputVal="getInputVal" title="客户投资总额" :titleDark="true" placeholder="请输入客户投资总额" :value="vo.string18" :textRight="false"></comInput>
				<!-- <comInput :type="1" :paramkey="index+'_'" @getInputVal="getInputVal" title="邀约审批人" :titleDark="true" placeholder="请输入客户投资总额" :value="vo.string2" :textRight="false"></comInput> -->
				<!-- <comInput :type="1" :paramkey="index+'_'" @getInputVal="getInputVal" title="所属部门" :titleDark="true" placeholder="请输入客户投资总额" :value="vo.string5" :textRight="false"></comInput> -->
				<comInput :type="1" :paramkey="index + '_string23'" @getInputVal="getInputVal" title="邀约审批状态" :titleDark="true" placeholder="自动判断状态" :value="vo.string23" :textRight="false"></comInput>
				<comInput :type="1" :paramkey="index + '_string24'" @getInputVal="getInputVal" title="备注" :titleDark="true" placeholder="请输入备注" :value="vo.string24" :textRight="false"></comInput>
				<comInput :type="2" :paramkey="index + '_string28'" @getInputVal="getInputVal" title="理财经理" :titleDark="true" placeholder="请选择理财经理" :value="vo.string28" @getSelect="getSelect" :options="['小王', '小李']" :textRight="false"></comInput>
				<comInput :type="2" :paramkey="index + '_string5'" @getInputVal="getInputVal" title="归属部门" :titleDark="true" placeholder="请选择归属部门" :value="vo.string5" @getSelect="getSelect" :options="['市场部门', '行政部门']" :textRight="false"></comInput>
			</div>
		</div>
		<div class="ta-c pt25 pb25 clink f16" @click="addCustomer">+ 添加邀约</div>
		<van-button type="info" size="large" @click="submit">确认提交</van-button>
	</div>
</template>

<script>
import comInput from '@/components/comInput'
import utils from '@/utils/index'

export default {
	components: {
		comInput
	},

	data() {
		return {
			account: {},
			info: {},
			customers: [],
			params: {
				string1: '', // 邀约编号
				string2: '', // 活动名称
				string3: '', // 活动编号
				string4: '', // 邀约理财经理
				string8: '', // 邀约理财经理编码
				string36: '', // 邀约理财经理所属部门
				string20: '', // 活动范围
				string25: '', // 活动类型
				string39: '', // 负责人
				string43: '', // 负责人编码
				string31: '', // 负责部门
				string30: '', // 邀约审批人
				string9: '', // 审批人编码
				string44: '', // 邀约审批人归属部门
				date8: '', // 邀约开始时间
				date10: '', // 邀约结束时间
				date11: '', // 活动开始时间
				date12: '', // 活动结束时间
				string19: '', // 创建人
				string12: '', // 创建人编码
				date4: '', // 创建日期
				string17: '', // 创建部门
				string16: '', // 最后修改人
				date3: '', // 最后修改日期
				string14: '', // 最后修改部门
				date8: '', // 邀约日期
				string6: '', // 审批状态
				string7: '' // 备注
			},
			Fentrys: [
				{
					FentryIndex: 1, // 第几个表体
					FentryField: 'fentry1', // 表体ID
					Rows: [
						{
							isAdd: true,
							Fields: []
						}
					]
				}
			],
			// 点击新增用此对象后 输入有bug（遍历每个同键输入框都会同时取得值） ，所以新增方法改了
			Fields: {
				string15: '', // 客户姓名
				string35: '', // 客户姓名
				string22: '', // 客户编码
				string42: '', // 手机号码
				string21: '', // 客户类型
				string18: '', // 客户投资总额
				string34: '', // 客户累计投资总额
				string28: '', // 理财经理
				string5: '', // 理财经理所属部门
				string23: '', // 邀约审批状态
				string24: '' // 备注
			},
			customerOptions: []
		}
	},
	onLoad(option) {
		this.getCustomers()
		wx.getStorage({
			// 获取本地缓存
			key: 'market_customer_info',
			success: res => {
				let { data } = res
				this.info = data
				let customers = []
				let { Fields } = this
				customers.push(Fields)
				this.customers = customers
				let account = this.$store.state.account.info.RetValue
				this.account = account
				console.log(data)
				console.log(this.account)
				this.params = {
					string1: '', // 邀约编号
					string2: data['活动名称'], // 活动名称
					string3: data['活动编码'], // 活动编号
					string4: '', // 邀约理财经理
					string8: '', // 邀约理财经理编码
					string36: '', // 邀约理财经理所属部门
					string20: data['活动范围'], // 活动范围
					string25: data['活动类型'], // 活动类型
					string39: data['负责人'], // 负责人
					string43: data['负责人编码'], // 负责人编码
					string31: data['负责人部门'], // 负责部门
					string30: data['邀约审批人'], // 邀约审批人
					string9: data['审批人编码'], // 审批人编码
					string44: data['邀约审批人归属部门'], // 邀约审批人归属部门
					date8: data['邀约日期'], // 邀约开始时间
					date10: data['邀约结束时间'], // 邀约结束时间
					date11: data['活动开始时间'], // 活动开始时间
					date12: data['活动结束时间'], // 活动结束时间
					// 当前登录
					string19: account.Name, // 创建人
					string12: account.RootDeptID, // 创建人编码
					string17: account.deptname, // 创建部门
					string16: account.Name, // 最后修改人
					date4: utils.formatTime2(), // 创建日期
					date3: utils.formatTime2(), // 最后修改日期
					string14: account.deptname, // 最后修改部门
					string6: '', // 审批状态

					string7: data['备注'] // 备注
				}
			}
		})
	},
	created() {},
	methods: {
		getCustomers() {
			this.$api.getAchiveList('', {}, '&r=1&UserID=10183', true).then(res => {
				console.log('res=>>', res)
				this.customerOptions = res.rows.map(m => m.FName)
			})
		},
		getSelect(data) {
			let keys = data.key.split('_')
			this.customers[keys[0]][keys[1]] = data.value
		},
		getSelectDate(data) {},
		getInputVal(data) {
			let keys = data.key.split('_')
			this.customers[keys[0]][keys[1]] = data.value
		},
		addCustomer() {
			let { customers } = this
			customers.push({
				string15: '', // 客户姓名
				string35: '', // 客户姓名
				string22: '', // 客户编码
				string42: '', // 手机号码
				string21: '', // 客户类型
				string18: '', // 客户投资总额
				string34: '', // 客户累计投资总额
				string28: '', // 理财经理
				string5: '', // 理财经理所属部门
				string23: '', // 邀约审批状态
				string24: '' // 备注
			})
			this.customers = customers
		},
		submit() {
			let { params, customers } = this
			let data = []
			for (let key in params) {
				let item = {}
				data.push({
					Field: key,
					Value: params[key] || ''
				})
			}
			let Rows = customers.map((vo, idx) => {
				let sort = idx + 1
				let Fields = []
				for (let key in vo) {
					let item = {}
					Fields.push({
						Field: key,
						Value: vo[key]
					})
				}
				return {
					isAdd: true,
					Fields: Fields
				}
			})
			this.$api.addDiscoverInvitation(data, Rows).then(res => {
				if (res.Msg === '操作成功') {
					wx.showToast({
						title: '邀约成功',
						icon: 'success',
						duration: 3000,
						success: () => {
							mpvue.navigateBack({ delta: '1' })
						}
					})
				} else {
					mpvue.showToast({
						title: res.Msg,
						icon: 'none'
					})
				}
			})
		},
		getFilterSelet(data) {
			let keys = data.key.split('_')
			this.customers[keys[0]][keys[1]] = data.value
			if (keys[1] === 'string35') {
				this.customers[keys[0]]['string15'] = data.value
			}
		},
		del(i) {
			this.customers.splice(i, 1)
		}
	}
}
</script>

<style>
.msg-table {
	background: #ffffff;
	border-radius: 4px;
}
.msg-table .title {
	padding-top: 5px;
	margin-left: 15px;
	padding-right: 15px;
	font-weight: bold;
	line-height: 40px;
	/* font-size: 13px; */
}
.msg-table .table .line {
	display: flex;
	padding-right: 15px;
	font-size: 13px;
	border-top: rgba(245, 245, 245, 1);
}
.msg-table .table .line .key {
	color: #999999;
	width: 36%;
}
.msg-table .table .line .val {
	flex: 1;
}
.msg-table .table .line .val .iconfont {
	font-size: 14px;
}
.msg-table .title .iconfont {
	color: #55a8ff;
}
.msg-table .table .big-line {
	text-align: center;
	line-height: 20px;
	padding: 10px;
	position: relative;
	left: -15px;
}
.msg-table .table .big-line .val {
	line-height: 30px;
	font-size: 17px;
}
.btn-del {
	width: 36px;
	height: 20px;
	border-radius: 3px;
	border: 1px solid #f85e5e;
	color: #f85e5e;
}
</style>
