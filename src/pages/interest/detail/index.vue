<template>
	<div>
		<div class="bg-fff mt10">
			<div class="plr15 ptb15 f16 clink strong">基本信息 <span class="iconfont iconjibenxinxi"></span></div>
			<comInput :type="0" :titleDark="false" title="业绩单号" :value="info['业绩单']"></comInput>
			<comInput :type="0" :titleDark="false" title="客户姓名" :value="info['客户姓名']"></comInput>
			<comInput :type="0" :titleDark="false" title="证件号码" :value="info['证件号码']"></comInput>
			<comInput :type="0" :titleDark="false" title="购买产品" :value="info['购买产品']"></comInput>
			<comInput :type="0" :titleDark="false" title="产品期限" :value="info['产品期限'] + '个月'"></comInput>
			<comInput :type="0" :titleDark="false" title="合同编号" :value="info['合同编号']"></comInput>
			<comInput :type="0" :titleDark="false" title="认购金额" :value="info['认购金额']"></comInput>
			<comInput :type="0" :titleDark="false" title="预期年化收益率" :value="info['预期年化收益率']"></comInput>
			<comInput :type="0" :titleDark="false" title="出资认缴日" :value="info['出资认缴日']"></comInput>
			<comInput :type="0" :titleDark="false" title="到账日" :value="info['到账日']"></comInput>
			<comInput :type="0" :titleDark="false" title="产品成立日" :value="info['产品成立日']"></comInput>
			<comInput :type="0" :titleDark="false" title="起息日" :value="info['起息日']"></comInput>
			<comInput :type="0" :titleDark="false" title="产品到期日" :value="info['产品到期日']"></comInput>
		</div>

		<div class="bg-fff mt10 pb20">
			<div class="plr15 ptb15 f16 clink strong">财务信息 <span class="iconfont iconliaotianduihua"></span></div>
			<comInput :type="0" :titleDark="false" title="本息总额" :value="info['本息总额']" :border="false"></comInput>
			<comInput :type="0" :titleDark="false" title="总计息天数" :value="info['总计息天数'] + '天'" :border="false"></comInput>
			<div v-if="showDetailList" class="f12 ta-c pt10 pb15 flex a-center" @click="showDetailList = false">
				<div class="mr5">收起</div>
				<div class="rotate-180"><span class="iconfont iconxiangxiajiantou"></span></div>
			</div>
			<div v-else class="f12 ta-c pt10 pb15" @click="showDetailList = true">展开 <span class="iconfont iconxiangxiajiantou"></span></div>
			<div v-if="showDetailList" class="bg-color mlr10">
				<div class="list ta-c dis-flex l-center">
					<div class="item f12">结算次数</div>
					<div class="item f12">结算日</div>
					<div class="item f12">结算金额</div>
					<div class="item f12">派息日</div>
					<div class="item f12">是否派息</div>
				</div>
				<div class="list ta-c dis-flex l-center" v-for="(vo, key) in list" :key="key">
					<div class="item f12">{{ vo.string22 }}</div>
					<div class="item f12">{{ vo.date5 }}</div>
					<div class="item f12">{{ vo.number5 }}</div>
					<div class="item f12">{{ vo.date6 }}</div>
					<div class="item f12">{{ vo.cuts ? '✓' : '--' }}</div>
				</div>
				<!-- 
                <div class="list ta-c dis-flex l-center">
                    <div class="item f12">第二次</div>
                    <div class="item f12">2019-06-06</div>
                    <div class="item f12">523452</div>
                    <div class="item f12">2019-06-09</div>
                    <div class="item f12">--</div>
                </div>
                <div class="list ta-c dis-flex l-center">
                    <div class="item f12">第三次</div>
                    <div class="item f12">2019-06-06</div>
                    <div class="item f12">523452</div>
                    <div class="item f12">2019-06-09</div>
                    <div class="item f12"></div>
                </div>
                <div class="list ta-c dis-flex l-center">
                    <div class="item f12">第四次</div>
                    <div class="item f12">2019-06-06</div>
                    <div class="item f12">523452</div>
                    <div class="item f12">2019-06-09</div>
                    <div class="item f12">✓</div>
                </div>
                <div class="list ta-c dis-flex l-center">
                    <div class="item f12">第五次</div>
                    <div class="item f12">2019-06-06</div>
                    <div class="item f12">523452</div>
                    <div class="item f12">2019-06-09</div>
                    <div class="item f12">✓</div>
                </div> -->
			</div>
			<div class="plr15 pb20">
				<div class="cgey f16 ptb15">说明</div>
				<div class="bg-color">
					<textarea class="f16 ptb10 plr10" name="" id="" cols="30" rows="10" :value="info['说明']" disabled></textarea>
				</div>
			</div>
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
			list: [],
			showDetailList: false
		}
	},

	onLoad(options) {
		this.id = options.id
		mpvue.getStorage({
			// 获取本地缓存
			key: 'interest_info',
			success: res => {
				this.info = res.data
				console.log(this.info)
			}
		})
		this.getInfo()
		console.log(this.id)
	},
	methods: {
		getInfo() {
			this.$api.getInterestDetail(this.id).then(res => {
				res = JSON.parse(res.RetValue)
				console.log(res)
				this.list = res.rows.map(m => {
					let info = m
					info.date5 = m.date5.split(' ')[0]
					info.date6 = m.date6.split(' ')[0]
					return info
				})
			})
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
.list {
	height: 30px;
}
.list .item {
	width: 20%;
}
.rotate-180 {
	transform: rotate(180deg);
}
</style>
