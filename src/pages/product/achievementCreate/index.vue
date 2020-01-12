<template>
	<div class="main">
		<div class="booking" v-show="step === 0">
			<div class="dis-flex ptb15 a-center">
				<div class="label bg-blue">销售信息</div>
			</div>
			<div class="block">
				<div class="from">
					<comInput :type="1" @getInputVal="getInputVal" fontSize="f14" :value="datas.string1" paramkey="string1" :textRight="false" title="业绩单号" :isSpecialBorderStyle="true"></comInput>
					<comInput :type="6" ref="string2" fontSize="f14" :value="datas.string2" paramkey="string2" :textRight="false" :filterList="customerOptions" @getFilterSelet="getFilterSelet" title="客户姓名" :isSpecialBorderStyle="true" :isRequired="true"></comInput>
					<comInput :type="0" fontSize="f14" :value="datas.string36" paramkey="string36" :textRight="false" title="证件类型" :isSpecialBorderStyle="true"></comInput>
					<comInput :type="0" fontSize="f14" :value="datas.string37" paramkey="string37" :textRight="false" title="证件号码" :isSpecialBorderStyle="true"></comInput>
					<!-- <comInput :type="1" @getInputVal="getInputVal" fontSize="f14" :value="datas.FNumber" paramkey="string1" :textRight="false" title="业绩单号" :isSpecialBorderStyle="true"></comInput> -->
					<comInput :type="6" ref="string6" fontSize="f14" :value="datas.string6" paramkey="string6" :textRight="false" :filterList="productOptions" @getFilterSelet="getFilterSelet" title="产品名称" :isSpecialBorderStyle="true" :isRequired="true"></comInput>
					<comInput :type="0" fontSize="f14" :value="datas.string7" paramkey="string7" :textRight="false" title="产品分类" :isSpecialBorderStyle="true"></comInput>
					<comInput :type="0" fontSize="f14" :value="datas.string5" paramkey="string5" :textRight="false" title="产品期限" :isSpecialBorderStyle="true"></comInput>
					<comInput :type="6" ref="string9" fontSize="f14" :value="datas.string9" paramkey="string9" :textRight="false" :filterList="contractOptions" @getFilterSelet="getFilterSelet" title="合同编号" :isSpecialBorderStyle="true" :isRequired="true"></comInput>
					<comInput :type="1" @getInputVal="getInputVal" fontSize="f14" :value="datas.string10" paramkey="string10" :textRight="false" title="预约编号" :isSpecialBorderStyle="true"></comInput>
					<comInput :type="0" ref="string13" fontSize="f14" :value="datas.string13" paramkey="string13" :textRight="false" title="理财经理" :isSpecialBorderStyle="true" :isRequired="true"></comInput>
					<comInput :type="0" ref="string14" fontSize="f14" :value="datas.string14" paramkey="string14" :textRight="false" title="所属部门" :isSpecialBorderStyle="true" :isRequired="true"></comInput>
					<comInput :type="0" fontSize="f14" :value="datas.string15" paramkey="string15" :textRight="false" title="录单员" :isSpecialBorderStyle="true"></comInput>
					<comInput :type="0" fontSize="f14" :value="datas.string34" paramkey="string34" :textRight="false" title="录单员所属部门" :isSpecialBorderStyle="true"></comInput>
					<comInput :type="0" fontSize="f14" value="后台未提供字段名" paramkey="XXX" :textRight="false" title="资产证明上传时间" :isSpecialBorderStyle="true"></comInput>
					<div class="line line-big required">
						<div class="key">上传附件（格式pdf或图片）</div>
						<div class="val" style="padding-bottom: 10px;">
							<upload></upload>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="booking" v-show="step === 1">
			<div class="dis-flex ptb15 a-center">
				<div class="label bg-blue">财务信息</div>
			</div>
			<div class="block">
				<div class="from">
					<comInput :type="5" ref="date1" :titleDark="true" title="打款日期" :value="datas.date1" paramkey="date1" @getSelectDateTime="getSelectDateTime" :isSpecialBorderStyle="true" :textRight="false"></comInput>
					<comInput :type="1" ref="string16" @getInputVal="getInputVal" fontSize="f14" validType="numberFloatValid" :value="datas.string16" paramkey="string16" :textRight="false" title="合同金额" inputType="number" :isSpecialBorderStyle="true" :isRequired="true"></comInput>
					<comInput :type="2" fontSize="f14" :value="datas.string17" paramkey="string17" :textRight="false" :options="options.payWay" @getSelect="getSelect" title="付款方式" :isSpecialBorderStyle="true"></comInput>
					<comInput :type="1" ref="string18" @getInputVal="getInputVal" fontSize="f14" :value="datas.string18" paramkey="string18" :textRight="false" title="付款账户开户行" :isSpecialBorderStyle="true" :isRequired="true"></comInput>
					<comInput :type="1" ref="string19" @getInputVal="getInputVal" fontSize="f14" :value="datas.string19" paramkey="string19" :textRight="false" title="付款账号" :isSpecialBorderStyle="true" :isRequired="true"></comInput>
					<comInput :type="1" @getInputVal="getInputVal" fontSize="f14" :value="datas.string20" paramkey="string20" :textRight="false" title="累计缴款金额" :isSpecialBorderStyle="true"></comInput>

					<comInput :type="0" fontSize="f14" :value="datas.date2" paramkey="date2" :textRight="false" title="确认收款日" :isSpecialBorderStyle="true"></comInput>
					<comInput :type="0" fontSize="f14" :value="datas.date3" paramkey="date3" :textRight="false" title="起息日" :isSpecialBorderStyle="true"></comInput>
					<comInput :type="0" fontSize="f14" value="后台未提供字段名" paramkey="XXX" :textRight="false" title="产品成立日" :isSpecialBorderStyle="true"></comInput>
					<!-- <comInput :type="0" fontSize="f14" :value="datas.date3" paramkey="date3" :textRight="false" title="产品成立日" :isSpecialBorderStyle="true"></comInput> -->
					<comInput :type="0" fontSize="f14" :value="datas.date4" paramkey="date4" :textRight="false" title="产品到期日" :isSpecialBorderStyle="true"></comInput>
					<comInput :type="0" fontSize="f14" :value="datas.number1" paramkey="number1" :textRight="false" title="年化系数" :isSpecialBorderStyle="true"></comInput>
					<comInput :type="0" fontSize="f14" :value="datas.number2" paramkey="number2" :textRight="false" title="年化业绩" :isSpecialBorderStyle="true"></comInput>
					<comInput :type="1" ref="string22" @getInputVal="getInputVal" fontSize="f14" :value="datas.string22" paramkey="string22" :textRight="false" title="收益分配账户" :isSpecialBorderStyle="true" :isRequired="true"></comInput>
					<comInput :type="1" ref="string21" @getInputVal="getInputVal" fontSize="f14" :value="datas.string21" paramkey="string21" :textRight="false" title="收益分配账户开户行" :isSpecialBorderStyle="true" :isRequired="true"></comInput>
					<comInput :type="0" fontSize="f14" :value="datas.date8" paramkey="date8" :textRight="false" title="冷静期" :isSpecialBorderStyle="true"></comInput>
				</div>
			</div>
		</div>

		<!-- <button class="btn-submit" @click="ser()">下一步</button> -->

		<div class="line-bar">
			<van-button type="info" @click="submit" v-if="step > 0">确认新增</van-button>
			<van-button v-if="step == 0" type="info" @click="setStep(1)">下一步</van-button>
			<van-button v-if="step > 0" plain type="info" @click="setStep(0)">上一步</van-button>
		</div>
	</div>
</template>

<script>
import upload from '@/components/upload'
import comInput from '@/components/comInput'
import Options from '@/utils/Options.js'
import { formatTime2 } from '@/utils/index.js'

export default {
	data() {
		return {
			options: Options,
			step: 0,
			info: {},
			type_range: ['身份证', '护照'],
			type: '',
			booking_date: '',
			pay_date: '',
			customers: [],
			customerOptions: [],
			products: [],
			productOptions: [],
			contractOptions: [],
			reqParams: [
				{ Field: 'string1', Value: '' },
				{ Field: 'string2', Value: '' },
				{ Field: 'string36', Value: '' },
				{ Field: 'string37', Value: '' },
				{ Field: 'string6', Value: '' },
				{ Field: 'string7', Value: '' },
				{ Field: 'string5', Value: '' },
				{ Field: 'string9', Value: '' },
				{ Field: 'string10', Value: '' },
				{ Field: 'string13', Value: '' },
				{ Field: 'string14', Value: '' },
				{ Field: 'string15', Value: '' },
				{ Field: 'string34', Value: '' },

				{ Field: 'date1', Value: '' },
				{ Field: 'string16', Value: '' },
				{ Field: 'string17', Value: '' },
				{ Field: 'string18', Value: '' },
				{ Field: 'string19', Value: '' },
				{ Field: 'string20', Value: '' },
				{ Field: 'date2', Value: '' },
				{ Field: 'date3', Value: '' },
				{ Field: 'date4', Value: '' },
				{ Field: 'number1', Value: '年化系数' },
				{ Field: 'number2', Value: '年化业绩' },
				{ Field: 'string22', Value: '' },
				{ Field: 'string21', Value: '' },
				{ Field: 'date8', Value: '' },

				{ Field: 'string74', Value: '部门编号' },
				{ Field: 'string69', Value: '录单员id' },
				{ Field: 'string28', Value: '附件' },
				{ Field: 'date100', Value: '资产证明上传时间' },
				{ Field: 'date7', Value: '产品成立日' },
				{ Field: 'date9', Value: '到账日期' },
				{ Field: 'string49', Value: '否' },
				{ Field: 'string50', Value: '否' },
				{ Field: 'string76', Value: '未提奖' },
				{ Field: 'string79', Value: '0' },
				{ Field: 'string38', Value: '0' },
				{ Field: 'string29', Value: '创建人' },
				{ Field: 'string27', Value: '天玑财富' },
				{ Field: 'date5', Value: '创建时间' },
				{ Field: 'string26', Value: '最后修改人' },
				{ Field: 'string24', Value: '最后修改部门' },
				{ Field: 'date6', Value: '最后修改时间' }
			],
			datas: {
				string1: '',
				string2: '',
				string36: '',
				string37: '',
				string6: '',
				string7: '',
				string5: '',
				string9: '',
				string10: '',
				string13: '管理员',
				string14: '天玑财富',
				string15: '管理员',
				string34: '天玑财富',

				date1: formatTime2(),
				string16: '',
				string17: '',
				string18: '',
				string19: '',
				string20: '',
				date2: '此字段有审核人员维护',
				date3: '此字段有审核人员维护',
				date4: '此字段有审核人员维护',
				number1: '自动关联',
				number2: '自动计算',
				string22: '',
				string21: '',
				date8: ''
			}
		}
	},
	onLoad(option) {
		Object.assign(this.$data, this.$options.data())
		console.log(option)
		this.getCustomers()
		this.getProducts()
		this.getContractList()
		this.datas.date8 = this.getTomorrow(new Date(this.datas.date1.replace(/-/g,'/')).getTime())
	},
	components: {
		upload,
		comInput
	},
	methods: {
		getCustomers() {
			this.$api.getAchiveList('', {}, '&r=1&UserID=10183', true).then(res => {
				console.log('res=>>', res)
				this.customerOptions = res.rows.map(m => m.FName)
				this.customers = res.rows.map(m => {
					return {
						FDocumentType: m.FDocumentType,
						FIDNumber: m.FIDNumber
					}
				})
			})
		},
		getProducts() {
			this.$api.getDiscoverProductList('', '', true).then(res => {
				this.productOptions = res.rows.map(m => m.FName)
				this.products = res.rows.map(m => {
					return {
						FTypeId: m.FTypeId,
						FInvestment: m.FInvestment
					}
				})
				console.log('res=>>', res)
			})
		},
		getContractList() {
			this.$api.getContractList('', { string5: '已发放' }).then(res => {
				this.contractOptions = res.rows.map(m => m['编号'])
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
		send() {
			let url = '/pages/success/main'
			mpvue.navigateTo({ url })
		},
		setStep(type) {
			if (type) {
				this.step += 1
			} else {
				this.step -= 1
			}
		},
		submit() {
			let keys = Object.keys(this.datas)
			for (let index = 0; index < keys.length - 1; index++) {
				let _key = keys[index]
				let _item = this.$refs[`${_key}`]
				if (!!_item && _item.isRequired && !this.datas[`${_key}`]) {
					return wx.showToast({
						title: `${_item.title}不能为空`,
						icon: 'none',
						duration: 1500
					})
				}
				this.reqParams[index].Value = this.datas[_key]
			}
			this.$api.addAchievement(this.reqParams).then(res => {
				console.log(res)
				wx.showToast({
					title: res.Msg,
					icon: 'success',
					duration: 1000
				})
				setTimeout(() => {
					mpvue.navigateBack({ delta: 1 })
				}, 1000)
			})
		},
		getSelectDate(data) {
			console.log(data)
			this.datas[data.key] = data.value
		},
		getSelect(data) {
			console.log(data)
			this.datas[data.key] = data.value
		},
		getInputVal(data) {
			console.log(data)
			this.datas[data.key] = data.value
		},
		getFilterSelet(data){
			console.log(data)
			this.datas[data.key] = data.value
			if (data.key === 'string2') {
				this.datas.string36 = this.customers[data.index].FDocumentType
				this.datas.string37 = this.customers[data.index].FIDNumber
			}
			if (data.key === 'string6') {
				this.datas.string7 = this.products[data.index].FTypeId
				this.datas.string5 = this.products[data.index].FInvestment
			}
		},
		getSelectDateTime(data) {
			this.datas[data.key] = data.value
			if(data.key==='date1'){
				this.datas.date8 = this.getTomorrow(new Date(this.datas.date1.replace(/-/g,'/')).getTime())
			}
		},
		// 获取明日日期时间
		getTomorrow(timeStamp=new Date().getTime()){
			return formatTime2(new Date(timeStamp+24*60*60*1000))
		}
	}
}
</script>

<style scoped>
.block {
	background: #ffffff;
	margin-bottom: 10px;
}
.noEdit {
}
.booking .label {
	font-size: 13px;
	color: #fff;
	padding: 5px 20px;
}
.noEdit .block .label {
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
	position: relative;
}
.block .line.required::after {
	content: '*';
	color: #ff0000;
	position: absolute;
	left: 10rpx;
	top: 3px;
}
.block .from .line-big {
	display: block;
	height: auto;
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
