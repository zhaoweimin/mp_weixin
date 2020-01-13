<template>
	<div class="main">
		<div class="booking" v-if="isEdit === '1'">
			<div class="block">
				<div class="title">客户信息</div>
				<div class="from">
					<comInput :type="1" title="预约编号" paramkey="string1" :value="datas.string1" @getInputVal="getInputVal" :textRight="false" :isSpecialBorderStyle="true"></comInput>
					<comInput :type="6" title="客户姓名" ref="string13" :value="datas.string13" paramkey="string13" :textRight="false" :filterList="customerOptions" @getFilterSelet="getFilterSelet" :isSpecialBorderStyle="true"></comInput>
					<div v-if="isCustomer">
						<comInput :type="1" title="证件类型" paramkey="string3" :value="datas.string3" @getInputVal="getInputVal" :textRight="false" :isSpecialBorderStyle="true" :isRequired="true"></comInput>
						<comInput :type="1" title="证件号码" paramkey="string2" :value="datas.string2" @getInputVal="getInputVal" :textRight="false" :isSpecialBorderStyle="true"></comInput>
					</div>
					<div v-else>
						<comInput :type="1" title="执照类型" paramkey="string29" :value="datas.string29" @getInputVal="getInputVal" :textRight="false" :isSpecialBorderStyle="true" :isRequired="true"></comInput>
						<comInput :type="1" title="执照号码" paramkey="string32" :value="datas.string32" @getInputVal="getInputVal" :textRight="false" :isSpecialBorderStyle="true"></comInput>
					</div>
				</div>
			</div>
		</div>
		<div class="booking">
			<div class="block">
				<div class="title">产品信息</div>
				<div class="from">
					<comInput :type="0" title="产品类别" :value="info['产品类别']" :textRight="false" :isSpecialBorderStyle="true"></comInput>
					<comInput :type="0" title="产品编号" :value="info['产品编号']" :textRight="false" :isSpecialBorderStyle="true"></comInput>
					<comInput :type="0" title="产品名称" :value="info['产品名称']" :textRight="false" :isSpecialBorderStyle="true"></comInput>
					<comInput :type="0" title="产品期限" :value="info['产品期限']" :textRight="false" :isSpecialBorderStyle="true"></comInput>
					<comInput :type="0" title="募集账户" :value="info['募集账户']" :textRight="false" :isSpecialBorderStyle="true"></comInput>
					<comInput :type="0" title="已募集份数" :value="info['已募集份数']" :textRight="false" :isSpecialBorderStyle="true"></comInput>
					<comInput :type="0" title="已募集金额" :value="info['已募集金额']" :textRight="false" :isSpecialBorderStyle="true"></comInput>
					<comInput :type="0" title="剩余募集金额" :value="info['剩余募集金额']" :textRight="false" :isSpecialBorderStyle="true"></comInput>
					<comInput :type="0" title="已预约人数" :value="info['已预约人数']" :textRight="false" :isSpecialBorderStyle="true"></comInput>
					<comInput :type="0" title="已预约金额" :value="info['已预约金额']" :textRight="false" :isSpecialBorderStyle="true"></comInput>
					<comInput :type="0" title="剩余可预约" :value="info['剩余可预约']" :textRight="false" :isSpecialBorderStyle="true"></comInput>
				</div>
			</div>
		</div>
		<div class="booking" v-if="isEdit === '1'">
			<div class="block">
				<div class="title">付款信息</div>
				<div class="from">
					<comInput :type="3" title="预约打款日期" paramkey="date2" @getSelectDate="getSelectDate" :textRight="false" :isSpecialBorderStyle="true" value=""></comInput>
					<!-- <comInput :type="3" title="实际打款日期" paramkey="FBirthDate" :textRight="false" :isSpecialBorderStyle="true" value=""></comInput> -->
					<comInput :type="1" title="出资金额" paramkey="number2" @getInputVal="getInputVal" :textRight="false" :isSpecialBorderStyle="true" value=""></comInput>
				</div>
			</div>
		</div>
		<button class="btn-submit" v-if="isEdit === '1'" @click="submit">提交审核</button>
	</div>
</template>

<script>
import comInput from '@/components/comInput'
import Options from '@/utils/Options.js'
export default {
	data() {
		return {
			options: Options,
			info: {},
			type_range: ['身份证', '护照'],
			type: '',
			booking_date: '',
			pay_date: '',
			reqParams: [
				{
					Field: 'string1', // 预约编码
					Value: '' // 值
				},
				{
					Field: 'string13', // 客户姓名
					Value: ''
				},
				{
					Field: 'string3', // 证件类型
					Value: ''
				},
				{
					Field: 'string29', // 执照类型
					Value: ''
				},
				{
					Field: 'string32', // 执照号码
					Value: ''
				},
				{
					Field: 'string2', // 证件号码
					Value: ''
				},
				{
					Field: 'date2', // 预约打款日期
					Value: ''
				},
				{
					Field: 'number2', // 出资金额
					Value: ''
				},
				// --------带入 ------
				{
					Field: 'string35', // 产品类别
					Value: ''
				},
				{
					Field: 'string33', // 产品编号
					Value: ''
				},
				{
					Field: 'string34', // 产品名称有两个产品名称     值一样-------特殊-------
					Value: ''
				},
				{
					Field: 'string16', // 产品名称            值一样-------特殊-------
					Value: ''
				},
				{
					Field: 'string17', // 产品期限
					Value: ''
				},
				{
					Field: 'string3', // 募集账户
					Value: ''
				},
				{
					Field: 'string18', // 已募集份数
					Value: ''
				},
				{
					Field: 'string19', // 已募集金额
					Value: ''
				},
				{
					Field: 'string20', // 剩余募集金额
					Value: ''
				},
				{
					Field: 'string21', // 已预约人数
					Value: ''
				},
				{
					Field: 'string22', // 已预约金额
					Value: ''
				},
				{
					Field: 'string23', // 剩余预约金额
					Value: ''
				},
				// --------默认 ------
				{
					Field: 'string6', // 客户编码
					Value: '客户编码'
				},
				{
					Field: 'string7', // 理财经理
					Value: '管理员'
				},
				{
					Field: 'string8', // 所属部门
					Value: '天玑财富'
				},
				{
					Field: 'string25', // 最后修改人
					Value: '管理员'
				},
				{
					Field: 'string24', // 最后修改部门
					Value: '天玑财富'
				},
				{
					Field: 'date4', // 最后修改时间
					Value: '2019-12-10'
				},
				{
					Field: 'string27', // 创建人
					Value: '管理员'
				},
				{
					Field: 'string26', // 创建部门
					Value: '天玑财富'
				},
				{
					Field: 'date5', // 创建时间
					Value: '2019-12-10'
				},
				{
					Field: 'string12',
					Value: '0'
				},
				{
					Field: 'string15',
					Value: '10183'
				}
			],
			datas: {
				string1: '',
				string13: '',
				string3: '',
				string2: '',
				string29: '',
				string32: '',
				date2: '',
				number2: ''
			},
			isEdit: '',
			customers: [],
			customerOptions: [],
			isCustomer: true
		}
	},
	onLoad(option) {
		Object.assign(this.$data, this.$options.data())
		this.isEdit = option.isEdit
		this.getCustomers()
		mpvue.getStorage({
			// 获取本地缓存
			key: 'product_info',
			success: res => {
				this.info = res.data
				console.log('==>', this.info)
				console.log('==>', Object.keys(this.info))
				for (const key in this.info) {
					if (key === '产品编号') {
						this.reqParams[7].Value = this.info[key]
					} else if (key === '已募集金额') {
						this.reqParams[13].Value = this.info[key]
					} else if (key === '已募集份数') {
						this.reqParams[12].Value = this.info[key]
					} else if (key === '已预约金额') {
						this.reqParams[16].Value = this.info[key]
					} else if (key === '剩余可预约') {
						this.reqParams[17].Value = this.info[key]
					} else if (key === '已预约人数') {
						this.reqParams[15].Value = this.info[key]
					} else if (key === '产品类型') {
						this.reqParams[6].Value = this.info[key]
					} else if (key === '募集账户') {
						this.reqParams[11].Value = this.info[key]
					} else if (key === '产品名称') {
						this.reqParams[8].Value = this.info[key]
						this.reqParams[9].Value = this.info[key]
					} else if (key === '产品期限') {
						this.reqParams[10].Value = this.info[key]
					}
				}
				console.log('==>', this.reqParams)
			}
		})
	},
	components: { comInput },
	methods: {
		getCustomers() {
			this.$api.getAchiveList('', {}, `&r=1&UserID=${this.$store.state.account.info.RetValue.UserID}`, true).then(res => {
				this.customerOptions = res.rows.map(m => m.FName)
				this.customers = res.rows.map(m => {
					return {
						FDocumentType: m.FDocumentType,
						FIDNumber: m.FIDNumber,
						FLicenseType: m.FLicenseType,
						FLicenseNumber: m.FLicenseNumber,
						FApplySubject: m.FApplySubject
					}
				})
			})
		},
		bindTypeChange(e) {
			let val = e.mp.detail.value
			this.type = val
		},
		bindBookingChange(e) {
			let val = e.mp.detail.value
			this.booking_date = val
		},
		bindPayChange(e) {
			let val = e.mp.detail.value
			this.pay_date = val
		},
		submit() {
			Object.keys(this.datas).forEach((item, index) => {
				this.reqParams[index].Value = this.datas[item]
			})
			this.$api.addBooking(this.reqParams).then(res => {
				console.log(res)
				wx.showToast({
					title: '操作成功',
					icon: 'success',
					duration: 3000,
					success: () => {
						mpvue.navigateTo({ url: '/pages/success/main' })
					}
				})
			})
		},
		getSelect(data) {
			console.log(data)
			this.datas[data.key] = data.value
		},
		getInputVal(data) {
			console.log(data)
			this.datas[data.key] = data.value
		},
		getSelectDate(data) {
			console.log(data)
			this.datas[data.key] = data.value
		},
		getFilterSelet(data) {
			console.log(data)
			this.datas[data.key] = data.value
			if (data.key === 'string13') {
				if (this.customers[data.index].FApplySubject === '个人客户') {
					this.isCustomer = true
					this.datas.string29 = ''
					this.datas.string32 = ''
					this.datas.string3 = this.customers[data.index].FDocumentType
					this.datas.string2 = this.customers[data.index].FIDNumber
				} else {
					this.isCustomer = false
					this.datas.string3 = ''
					this.datas.string2 = ''
					this.datas.string29 = this.customers[data.index].FLicenseType
					this.datas.string32 = this.customers[data.index].FLicenseNumber
				}
			}
		}
	},

	created() {}
}
</script>

<style scoped>
.block {
	background: #ffffff;
	margin-bottom: 10px;
}

.block .title {
	line-height: 40px;
	height: 40px;
	padding: 0 15px;
	font-size: 16px;
	font-weight: bold;
}
.noEdit .block .title {
	color: #259efa;
}
.block .from {
	background: #ffffff;
}
.block .from .line {
	line-height: 40px;
	height: 40px;
	display: flex;
	padding: 0 15px;
	font-size: 14px;
}
.block .from .line .key {
	min-width: 30%;
	/* font-weight: bold; */
}
.block .from .line .val {
	flex: 1;
	padding: 0 5px;
}
.block .from .line .val input {
	line-height: 40px;
	height: 40px;
}
.block .from .line .icon {
	float: right;
	line-height: 40px;
}
.btn-submit {
	background: rgba(80, 158, 240, 1);
	border-radius: 5px;
	color: #ffffff;
	font-size: 16px;
	margin: 15px;
}
</style>
