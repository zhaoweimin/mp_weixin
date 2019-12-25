<template>
	<div class="main has-two-header">
		<navbar :info="nav" @changeNav="changeNav"></navbar>
		<fliter :info="nav"></fliter>
		<block v-for="(vo, key) in list" :key="key">
			<card :info="vo"></card>
		</block>
	</div>
</template>

<script>
import navbar from '@/components/navbar'
import fliter from '@/components/fliterLine'
import card from '@/components/customerCard'

export default {
	data() {
		return {
			nav: ['个人客户新增', '机构客户新增'],
			list: [
				{
					name: '张耀阳',
					avatar: 'https://wx.qlogo.cn/mmopen/vi_32/Po7hia4bia7Ua8tZxjcLfpHsEKgzMT3wf3HzhE6TqQHqsbXSL72dFpjIlPmAYuzv5VVpgic1iaZ703Op5I4LovGOgg/132?imageView2/2/w/100/q/80/v=',
					id: 0,
					level: 1,
					sex: 1
				},
				{
					name: '刘世勋',
					avatar: 'https://wx.qlogo.cn/mmopen/vi_32/Po7hia4bia7Ua8tZxjcLfpHsEKgzMT3wf3HzhE6TqQHqsbXSL72dFpjIlPmAYuzv5VVpgic1iaZ703Op5I4LovGOgg/132?imageView2/2/w/100/q/80/v=',
					id: 0,
					level: 4,
					sex: 1
				},
				{
					name: '方世伟',
					avatar: 'https://wx.qlogo.cn/mmopen/vi_32/Po7hia4bia7Ua8tZxjcLfpHsEKgzMT3wf3HzhE6TqQHqsbXSL72dFpjIlPmAYuzv5VVpgic1iaZ703Op5I4LovGOgg/132?imageView2/2/w/100/q/80/v=',
					id: 0,
					level: 2,
					sex: 1
				},
				{
					name: '董颖',
					avatar: 'https://wx.qlogo.cn/mmopen/vi_32/Po7hia4bia7Ua8tZxjcLfpHsEKgzMT3wf3HzhE6TqQHqsbXSL72dFpjIlPmAYuzv5VVpgic1iaZ703Op5I4LovGOgg/132?imageView2/2/w/100/q/80/v=',
					id: 0,
					level: 3,
					sex: 0
				}
			]
		}
	},

	components: {
		navbar,
		fliter,
		card
	},

	methods: {
		changeNav(nav) {
			console.log(nav)
		}
	},

	created() {
		// let app = getApp()
	}
}
</script>

<style scoped></style>
