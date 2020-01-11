<template>
    <div class="customer">
        <div class="bg-fff mt10">
            <!-- <comInput @getInputVal="setValue" paramkey="string1" :type="0" title="单据编号" :textRight="false" :isSpecialColorTxt="true" value="2322115565512223664"></comInput> -->
            <!-- <comInput @getInputVal="setValue" paramkey="string6" :type="0" title="业绩单号" :textRight="false" :isSpecialColorTxt="true" :value="params.string6"></comInput> -->
            <comInput :type="2" fontSize="f14" :value="params.string6" paramkey="string6" :textRight="false" :options="achievementOptions" @getSelect="getSelect" title="业绩单号" :isSpecialBorderStyle="true"></comInput>
            <comInput paramkey="string2" :type="0" title="客户姓名" :textRight="false" :value="params.string2"></comInput>
            <comInput paramkey="string3" :type="0" title="购买产品" :textRight="false" :value="params.string3"></comInput>
            <comInput paramkey="string4" :type="0" title="产品期限" :textRight="false" :value="params.string4"></comInput>
            <comInput paramkey="number3" :type="0" title="认购金额" :textRight="false" :value="params.number3"></comInput>
            <comInput paramkey="date4" :type="0" title="出资认缴日" :textRight="false" :value="params.date4"></comInput>
            <!-- <comInput @getInputVal="setValue" paramkey="number2" :type="3" title="到账日" :textRight="false" value="2019-3-18"></comInput> -->
            <!-- <comInput @getInputVal="setValue" paramkey="ads" :type="3" title="到期日" :textRight="false" value="2019-3-18"></comInput> -->
            <comInput @getInputVal="setValue" paramkey="number2" :type="0" title="认购费" :textRight="false" value="2千万"></comInput>
            <comInput @getInputVal="setValue" paramkey="string8" :type="1" title="提成方式" :textRight="false" :value="params.string8"></comInput>
            <comInput @getInputVal="setValue" paramkey="number4" :type="1" title="提成总额" :textRight="false" :value="params.number4"></comInput>
            <comInput @getInputVal="setValue" paramkey="string9" :type="1" title="提成率" :textRight="false" :value="params.string9"></comInput>
            <comInput @getInputVal="setValue" paramkey="string11" :type="1" title="本次提奖" :textRight="false" :value="params.string11"></comInput>
            <comInput @getInputVal="setValue" paramkey="string13" :type="0" title="理财经理" :textRight="false" value="理财经理"></comInput>
            <comInput @getInputVal="setValue" paramkey="string14" :type="0" title="归属部门" :textRight="false" value="归属部门"></comInput>
            <comInput @getInputVal="setValue" paramkey="date1" :type="3" title="申请时间" :textRight="false" :value="params.data1"></comInput>
        </div>
        <div class="mlr15 mb15 mt25">
            <van-button type="info" size="large" @click="sure">确认</van-button>
        </div>
    </div>
</template>

<script>
import card from '@/components/card'
import comInput from '@/components/comInput'

export default {
	components: {
		card,
		comInput
	},
	data() {
		return {
			info: {},
			params: {
				string1: '', // 单据编号
				string6: '', // 业绩单号
				string2: '', // 客户姓名
				string3: '', // 购买产品
				string4: '', // 产品期限
				number3: '', // 认购金额
				date4: '', // 出资认缴日
				number2: '2千万', // 认购费
				number4: '', // 提成总额
				string9: '', // 提奖率
				string11: '', // 本次提奖金额
				string13: '理财经理', // 理财经理
				string14: '归属部门', // 归属部门
				date1: '', // 申请时间
				string19: '', // 创建人
				string18: '', // 创建人部门
				date3: '', // 创建时间 （当前系统时间）
				string17: '', // 最后修改人 (登陆的用户
				string16: '当前部门', // 最后修改人部门 （登陆的用户部门）
				date2: '' // 最后修改时间 （当前系统时间）
			},
			achievementOptions: []
		}
	},
	onLoad() {
		Object.assign(this.$data, this.$options.data())
	},
	onShow() {
		this.getHistoryAchievementList()
		let has = mpvue.getStorageSync('has_select_royalty')
		if (has) {
			let info = mpvue.getStorageSync('select_info')
			this.params['string8'] = info['string2'] // 提成方式
			this.params['string6'] = info['string3'] // 产品编号
			this.params['string3'] = info['string4'] // 产品名称
			this.params['string11'] = info['ToMoney'] // :本次提奖
			this.params['number4'] = info['Intota'] // 提成总额
			this.params['string9'] = info['Frate'] // 提出率
			mpvue.removeStorageSync('has_select_royalty')
			mpvue.removeStorageSync('select_info')
		}
	},

	methods: {
		getHistoryAchievementList() {
			this.$api.getHistoryAchievementList('', true).then(res => {
				res = JSON.parse(res.RetValue)
				this.achievementOptions = res.rows.map(m => m['业绩单号'])
				this.achievements = res.rows.map(m => {
					return {
						string2: m['客户姓名'],
						string3: m['产品名称'],
						string4: m['产品期限'],
						number3: m['合同金额'],
						date4: m['确认收款日']
					}
				})
			})
		},
		getSelect(data) {
			this.params[data.key] = data.value
			if (data.key === 'string6') {
				this.params.string2 = this.achievements[data.index].string2
				this.params.string3 = this.achievements[data.index].string3
				this.params.string4 = this.achievements[data.index].string4
				this.params.number3 = this.achievements[data.index].number3
				this.params.date4 = this.achievements[data.index].date4
			}
		},
		getSelectDate(data) {},
		setValue(val) {
			this.params[val.key] = val.value
		},
		// selectCustomer(res) {
		// let url = '/pages/royalty/customer/main'
		// mpvue.navigateTo({ url })
		// },
		sure() {
			let { params } = this
			let data = []
			for (let key in params) {
				data.push({ Field: key, Value: params[key] })
			}
			this.$api.creatRoyaltyList(data).then(res => {
				if (res.Msg === '操作成功') {
					// mpvue.
					wx.showToast({
						title: '操作成功',
						icon: 'success',
						duration: 1000
					})
					setTimeout(() => {
						mpvue.navigateBack({ delta: 1 })
					}, 1500)
				}
			})
		},
		getDate() {
			var myDate = new Date()
			// 获取当前年
			var year = myDate.getFullYear()
			// 获取当前月
			var month = myDate.getMonth() + 1
			// 获取当前日
			var date = myDate.getDate()
			var h = myDate.getHours() // 获取当前小时数(0-23)
			var m = myDate.getMinutes() // 获取当前分钟数(0-59)
			var s = myDate.getSeconds()
			// 获取当前时间
			var now = year + '-' + conver(month) + '-' + conver(date) + ' ' + conver(h) + ':' + conver(m) + ':' + conver(s)

			function conver(s) {
				return s < 10 ? '0' + s : s
			}

			return now
		}
	},
	created() {
		console.log(this.getDate())
		this.params['date1'] = this.getDate()
		this.params['date2'] = this.getDate()
		this.params['date3'] = this.getDate()
	}
}
</script>

<style>
.customer-card {
	margin: 0px;
	padding: 15px;
	background: linear-gradient(to right, #509ef0, #5bc7ff); /* 标准的语法 */
	border-radius: 0px;
	position: relative;
	margin-bottom: 30px;
}
.customer-card::after {
	content: '';
	position: absolute;
	bottom: -20px;
	left: 32px;
	width: 0;
	height: 0;
	border-width: 10px;
	border-style: solid;
	border-color: #509ef0 transparent transparent transparent;
}
.customer-card .title {
	color: #ffffff;
}

.customer-card .msg .title .sex {
	color: #ffffff;
}
.customer-card .avatar {
	width: 44px;
	height: 50px;
}
.customer-card .avatar .img {
	width: 44px;
	height: 44px;
}
.customer-card .avatar .text {
	color: #ffffff;
	font-size: 12px;
	text-align: center;
	line-height: 12px;
}
.msg-table {
	margin: 15px;
	background: #ffffff;
	border-radius: 4px;
}
.msg-table .title {
	padding-top: 5px;
	margin-left: 15px;
	padding-right: 15px;
	font-weight: bold;
	line-height: 40px;
}
.msg-table .table {
	padding-left: 15px;
	line-height: 40px;
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
.msg-table .table .line .icon .iconfont {
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
</style>
