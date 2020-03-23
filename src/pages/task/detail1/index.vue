<template>
	<div class="customer">
		<div class="bg-fff mt10">
			<div class="plr15 ptb15 f16 strong">活动名称</div>
			<comInput :type="0" :titleDark="false" title="邀约编码" :isSpecialColorTxt="true" :value="info['邀约编码']"></comInput>
			<comInput :type="0" :titleDark="false" title="活动编号" :value="info['活动编号']"></comInput>
			<comInput :type="0" :titleDark="false" title="邀约日期" :value="info['邀约时间']"></comInput>
			<comInput :type="0" :titleDark="false" title="审批状态" :value="info['审批状态']"></comInput>
			<comInput :type="0" :titleDark="false" title="备注" :value="info['备注1']"></comInput>
			<comInput :type="0" :titleDark="false" title="客户姓名" :value="info['客户名称']"></comInput>
			<comInput :type="0" :titleDark="false" title="手机号码" :value="info['手机号码']"></comInput>
			<comInput :type="0" :titleDark="false" title="客户类型" :value="info['客户类型']"></comInput>
			<comInput :type="0" :titleDark="false" title="客户投资总额" :value="info['客户投资总额']"></comInput>
			<comInput :type="0" :titleDark="false" title="邀约审批人" :value="info['邀约审批人']"></comInput>
			<comInput :type="0" :titleDark="false" title="所属活动" :value="info['活动名称']"></comInput>
			<comInput :type="0" :titleDark="false" title="客户来源明细" :value="info['客户来源']"></comInput>
			<comInput :type="0" :titleDark="false" title="备注" :value="info['备注2']"></comInput>
			<comInput :type="0" :titleDark="false" title="理财经理" :value="info['理财经理']"></comInput>
			<comInput :type="0" :titleDark="false" title="归属部门" :value="info['所属部门']"></comInput>
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
	onLoad() {
		Object.assign(this.$data, this.$options.data())
		this.info = mpvue.getStorageSync('detail1')
		console.log('=>>', mpvue.getStorageSync('detail1'))
	},
	methods: {
		link() {
			let url = '/pages/task/approval/main?id='
			mpvue.navigateTo({ url })
		}
	}
}
</script>

<style></style>
