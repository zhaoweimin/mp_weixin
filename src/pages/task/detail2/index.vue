<template>
	<div class="customer">
		<div class="bg-fff mt10">
			<div class="plr15 ptb15 f16 clink strong">销售信息</div>
			<comInput :type="0" title="业绩单号" :titleDark="false" :isSpecialColorTxt="true" :value="info['业绩单号']"></comInput>
			<comInput :type="0" :isRequired="true" title="客户姓名" :titleDark="false" :value="info['客户姓名']"></comInput>
			<comInput :type="0" title="证件类型" :titleDark="false" :value="info['证件类型']"></comInput>
			<!-- <comInput :type="2" title="证件类型" :titleDark="false" placeholder="请选择" value="" @getSelect="getSelect" :options="['通过','未通过','等待审核中']"></comInput> -->
			<comInput :type="0" title="证件号码" :titleDark="false" :value="info['证件号']"></comInput>
			<!-- <comInput :type="2" :isRequired="true" title="产品名称" :titleDark="false" placeholder="请选择" value="" @getSelect="getSelect" :options="['通过','未通过','等待审核中']"></comInput> -->
			<comInput :type="0" :isRequired="true" title="产品名称" :titleDark="false" :value="info['产品名称']"></comInput>
			<comInput :type="0" title="产品分类" :titleDark="false" :value="info['产品类别']"></comInput>
			<comInput :type="0" title="产品期限" :titleDark="false" :value="info['产品期限']"></comInput>
			<!-- <comInput :type="3" title="产品期限" :titleDark="false" value="" @getSelectDate="getSelectDate"></comInput> -->
			<comInput :type="0" :isRequired="true" title="合同编号" :titleDark="false" :value="info['合同编号']"></comInput>
			<comInput :type="0" title="预约编号" :titleDark="false" :value="info['预约编号']"></comInput>
			<comInput :type="0" :isRequired="true" title="理财经理" :titleDark="false" :value="info['理财经理']"></comInput>
			<comInput :type="0" :isRequired="true" title="所属部门" :titleDark="false" :value="info['所属部门']"></comInput>
			<!-- <comInput :type="2" :isRequired="true" title="理财经理" :titleDark="false" placeholder="请选择" value="" @getSelect="getSelect" :options="['通过','未通过','等待审核中']"></comInput> -->
			<!-- <comInput :type="2" :isRequired="true" title="所属部门" :titleDark="false" placeholder="请选择" value="" @getSelect="getSelect" :options="['通过','未通过','等待审核中']"></comInput> -->
			<comInput :type="0" title="录单员" :titleDark="false" :value="info['录单员']"></comInput>
			<comInput :type="0" title="录单员所属部门" :titleDark="false" :value="info['录单员所属部门']"></comInput>
			<!-- <comInput :type="2" title="录单员所属部门" :titleDark="false" placeholder="请选择" value="" @getSelect="ge Select" :options="['通过','未通过','等待审核中']"></comInput> -->
			<div class="plr15 ptb10 border-b rel">
				<div class="required cred">*</div>
				<div class="f16 cgey mb10">上传附件（格式pdf或图片）</div>
				<div class="dis-flex l-end">
					<img class="preview" src="../../../img/preview.png" alt="" />
				</div>
			</div>
		</div>
		<div class="bg-fff mt10">
			<div class="plr15 ptb15 f16 clink strong">财务信息</div>
			<comInput :type="0" :isRequired="true" title="打款日期" :titleDark="false" :value="info['打款日期']"></comInput>
			<!-- <comInput :type="3" :isRequired="true" :titleDark="false" title="打款日期" value="2019-09-09" @getSelectDate="getSelectDate"></comInput> -->
			<comInput :type="0" :isRequired="true" :titleDark="false" title="合同金额" :value="info['合同金额']"></comInput>
			<comInput :type="0" :titleDark="false" title="付款方式" :value="info['付款方式']"></comInput>
			<comInput :type="0" :isRequired="true" :titleDark="false" title="付款账户开户行" :value="info['付款开户行']"></comInput>
			<!-- <comInput :type="2" :titleDark="false" title="付款方式" placeholder="请选择" value="" @getSelect="getSelect" :options="['通过','未通过','等待审核中']"></comInput> -->
			<comInput :type="0" :isRequired="true" :titleDark="false" title="付款账号" :value="info['付款账号']"></comInput>
			<comInput :type="0" :titleDark="false" title="累计缴款金额" :value="info['累计缴款金额']"></comInput>
			<comInput :type="0" :titleDark="false" title="确认收款日" :value="info['确认收款日']"></comInput>
			<comInput :type="0" :titleDark="false" title="起息日" :value="info['起息日']"></comInput>
			<comInput :type="0" :titleDark="false" title="产品到期日" :value="info['到期日']"></comInput>
			<comInput :type="0" :titleDark="false" title="年化系数" :value="info['年化系数']"></comInput>
			<comInput :type="0" :titleDark="false" title="年化业绩" :value="info['年化业绩']"></comInput>
			<comInput :type="0" :isRequired="true" :titleDark="false" title="收益分配账户" :value="info['收益分配账户']"></comInput>
			<comInput :type="0" :isRequired="true" :titleDark="false" title="收益分配账户开户行" :value="info['收益分配账户开户行']"></comInput>
			<comInput :type="0" :titleDark="false" title="冷静日" :value="info['冷静日']"></comInput>
			<!-- <comInput :type="3" :titleDark="false" title="冷静日" value="2019-09-09" @getSelectDate="getSelectDate"></comInput> -->
		</div>
		<div class="bg-fff mt10">
			<div class="plr15 ptb15 dis-flex a-between border-b">
				<div class="f16 strong">销售确认</div>
				<van-switch :checked="checked" size="20px" @change="onChange" />
			</div>
			<comInput :type="0" :titleDark="false" title="到账日期" :value="info['到账日期']"></comInput>
			<!-- <comInput :type="3" :titleDark="false" title="到账日期" value="2019-09-09" @getSelectDate="getSelectDate"></comInput> -->
			<comInput :type="0" :titleDark="false" title="业绩比较基准" :value="info['业绩比较基准']"></comInput>
			<comInput :type="0" :titleDark="false" title="产品提奖率" :value="info['产品提奖率']"></comInput>
			<div class="plr15 ptb15">
				<div class="f16 mb10">{{ content.title }}</div>
				<div class="f12 mb10" v-for="(item, index) in content.cnt" :key="index">{{ item }}</div>
			</div>
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
			info: {},
			checked: true
		}
	},
	onLoad() {
		Object.assign(this.$data, this.$options.data())
		this.info = mpvue.getStorageSync('detail2')
		this.info['年化系数'] = parseFloat(mpvue.getStorageSync('detail2')['年化系数'])
		console.log('=>>', mpvue.getStorageSync('detail2'))
	},
	computed: {
		content() {
			return {
				title: this.info['string23'].split(':')[0],
				cnt: this.info['string23'].split(':')[1].split(';')
			}
		}
	},
	methods: {
		onChange(e) {
			// 需要手动对 checked 状态进行更新
			this.checked = e.mp.detail
		},
		link() {
			let url = '/pages/task/approval/main?id='
			mpvue.navigateTo({ url })
		}
	}
}
</script>

<style>
.preview {
	width: 100px;
	height: 100px;
}
.required {
	position: absolute;
	left: 10px;
	top: 14px;
	font-size: 12px;
}
</style>
