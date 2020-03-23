<template>
	<div class="customer">
		<div class="bg-fff mt10">
			<comInput :type="0" :titleDark="false" title="单据编号" :isSpecialColorTxt="true" :value="info['单据编号']"></comInput>
			<comInput :type="0" :titleDark="false" title="业绩单号" :isSpecialColorTxt="true" :value="info['业绩单号']"></comInput>
			<comInput :type="0" :titleDark="false" title="客户姓名" :value="info['客户姓名']"></comInput>
			<comInput :type="0" :titleDark="false" title="购买产品" :value="info['购买产品']"></comInput>
			<comInput :type="0" :titleDark="false" title="产品期限" :value="info['产品期限']"></comInput>
			<comInput :type="0" :titleDark="false" title="认购金额" :value="info['认购金额']"></comInput>
			<comInput :type="0" :titleDark="false" title="出资认缴日" :value="info['出资认缴日']"></comInput>
			<comInput :type="0" :titleDark="false" title="到账日" :value="info['到账日']"></comInput>
			<comInput :type="0" :titleDark="false" title="到期日" :value="info['到期日']"></comInput>
			<comInput :type="0" :titleDark="false" title="认购费" :value="info['认购费']"></comInput>
			<comInput :type="0" :titleDark="false" title="提奖方式" :value="info['提奖方式']"></comInput>
			<comInput :type="0" :titleDark="false" title="提奖率" :value="info['提奖率']"></comInput>
			<comInput :type="0" :titleDark="false" title="本次提奖" :value="info['本次提奖金额']"></comInput>
			<comInput :type="0" :titleDark="false" title="部门经理" :value="info['理财经理']"></comInput>
			<comInput :type="0" :titleDark="false" title="归属部门" :value="info['归属部门']"></comInput>
			<comInput :type="0" :titleDark="false" title="申请时间" :value="info['申请时间']"></comInput>
		</div>
		<div class="plr15 mt25 pb20">
			<van-button type="info" size="large" @click="link">进入审批</van-button>
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
			info: {}
		}
	},
	methods: {
		link() {
			let url = '/pages/task/approval/main?id='
			mpvue.navigateTo({ url })
		}
	},
	onLoad() {
		Object.assign(this.$data, this.$options.data())
		this.info = mpvue.getStorageSync('detail0')
		console.log('=>>', mpvue.getStorageSync('detail0'))
	},
	created() {}
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
