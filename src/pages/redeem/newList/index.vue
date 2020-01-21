<template>
	<div class="customer">
		<div class="bg-fff mt10">
			<div class="plr15 ptb15 f16 strong">赎回信息</div>
			<comInput :type="0" title="赎回编号" :textRight="false" :isSpecialColorTxt="true" value="265512223664"></comInput>
			<comInput :type="3" title="赎回日期" :textRight="false" value="2019-3-18"></comInput>
			<comInput :type="1" title="赎回金额" :textRight="false" value="2千万"></comInput>
			<comInput :type="3" title="浮动收益率" :textRight="false" value="12%"></comInput>
			<comInput :type="3" title="剩余金额" :textRight="false" value="2234"></comInput>
			<comInput :type="0" title="后端提奖金额" :textRight="false" value="4233"></comInput>
		</div>
		<div class="bg-fff mt10">
			<div class="plr15 ptb15 f16 strong">业绩信息</div>
			<comInput :type="6" title="业绩单号" :textRight="false" :value="datas.string13" paramkey="string13" :filterList="redeemOrderNoOptions" @getFilterSelet="getFilterSelet" :isSpecialBorderStyle="true"></comInput>
			<comInput :type="1" title="客户名称" :textRight="false" :value="datas.string1"></comInput>
			<comInput :type="1" title="产品名称" :textRight="false" :value="datas.string2"></comInput>
			<comInput :type="1" title="产品期限" :textRight="false" :value="datas.string3"></comInput>
			<comInput :type="1" title="证件类型" :textRight="false" :value="datas.string4"></comInput>
			<comInput :type="1" title="证件号码" :textRight="false" :value="datas.string5"></comInput>
			<comInput :type="1" title="银行账号" :textRight="false" :value="datas.string6"></comInput>
			<comInput :type="1" title="账号开户行" :textRight="false" :value="datas.string7"></comInput>
			<comInput :type="1" title="合同编号" :textRight="false" :value="datas.string8"></comInput>
			<comInput :type="1" title="合同金额" :textRight="false" :value="datas.string9"></comInput>
			<comInput :type="1" title="理财经理" :textRight="false" :value="datas.string10"></comInput>
			<comInput :type="1" title="归属部门" :textRight="false" :value="datas.string11"></comInput>
			<comInput :type="1" title="单据状态" :textRight="false" :value="datas.string12"></comInput>
			<div class="pt10 plr15">
				<div class="key mb10">上传附件 <span class="cgey">（格式pdf或图片）</span></div>
				<div class="val" style="padding-bottom: 10px;">
					<upload></upload>
				</div>
			</div>
		</div>
		<div class="mlr15 mb15 mt25">
			<van-button type="info" size="large">确认</van-button>
		</div>
	</div>
</template>

<script>
import card from '@/components/card'
import comInput from '@/components/comInput'
import upload from '@/components/upload'

export default {
	components: {
		card,
		comInput,
		upload
	},

	data() {
		return {
			redeemOrderNoOptions: [],
			redeemInfo: [],
			datas: {
				string13: '',
				string1: '', // 客户名称
				string2: '', // 产品名称
				string3: '', // 产品期限
				string4: '', // 证件类型
				string5: '', // 证件号码
				string6: '', // 银行账号
				string7: '', // 账号开户行
				string8: '', // 合同编号
				string9: '', // 合同金额
				string10: '', // 理财经理
				string11: '', // 归属部门
				string12: '' // 单据状态
			}
		}
	},
	onLoad() {
		Object.assign(this.$data, this.$options.data())
		this.getList()
	},
	methods: {
		getList() {
			this.$api.getHistoryAchievementList(0).then(res => {
				res = JSON.parse(res.RetValue)
				console.log(res)
				this.redeemOrderNoOptions = res.rows.map(m => m['业绩单号'])
				this.redeemInfo = res.rows
			})
		},
		getFilterSelet(data) {
			console.log(data)
			this.datas[data.key] = data.value
			this.datas.string1 = this.redeemInfo[data.index]['客户姓名']
			this.datas.string2 = this.redeemInfo[data.index]['产品名称']
			this.datas.string3 = this.redeemInfo[data.index]['产品期限']
			this.datas.string4 = this.redeemInfo[data.index]['证件类型']
			this.datas.string5 = this.redeemInfo[data.index]['证件号码']
			this.datas.string6 = this.redeemInfo[data.index]['银行账号']
			this.datas.string7 = this.redeemInfo[data.index]['开户行']
			this.datas.string8 = this.redeemInfo[data.index]['合同编号']
			this.datas.string9 = this.redeemInfo[data.index]['合同金额']
			this.datas.string10 = this.redeemInfo[data.index]['理财经理']
			this.datas.string11 = this.redeemInfo[data.index]['所属部门']
			this.datas.string12 = this.redeemInfo[data.index]['单据状态']
		}
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
