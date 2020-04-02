<template>
	<div class="main">
		<div class="has-big-header">
			<navbar :info="nav" @changeNav="changeNav"></navbar>
			<!-- <fliter :info="nav"></fliter> -->
			<search :fixed="false" :isMainBg="false" :rightButton="true" placeholder="搜索"></search>
			<block v-for="(vo, key) in list" :key="key">
				<card :info="vo"></card>
			</block>
		</div>
	</div>
</template>

<script>
import navbar from '@/components/navbar'
import fliter from '@/components/fliterNav'
import card from '@/components/taskCard'
import search from '@/components/search'
import { formatTime2 } from '@/utils'
export default {
	data() {
		return {
			nav: ['新待办', '历史待办'],
			nav_num: 0,
			list: [],
			page: 1
		}
	},

	components: {
		navbar,
		fliter,
		card,
		search
	},
	onShow() {
		console.log(1111)
		this.getList()
	},
	onReachBottom() {
		return false
		this.getList(this.page + 1)
	},
	methods: {
		getList(page = 1) {
			let userid = this.$store.state.account.info.RetValue.UserID
			this.$api.getTaskList(page, userid).then(res => {
				res = JSON.parse(res.RetValue)
				console.log(res)
				let today = formatTime2().split(' ')[0]
				let temp = res.rows
				if (this.nav_num === 0) {
					temp = temp.filter(f => f.ReceiveTime.split(' ')[0] === today)
				} else {
					temp = temp.filter(f => f.ReceiveTime.split(' ')[0] !== today)
				}
				if (res.success) {
					if (page === 1) {
						this.list = temp
					} else {
						this.list = this.list.concat(temp)
					}
					if (temp.length > 0) this.page = page
				}
			})
		},
		changeNav(nav) {
			console.log(nav)
			this.nav_num = nav
			this.getList()
		},
		send() {
			console.log(url)
			let url = '/pages/task/detail/main?id='
			console.log('url', url)
			mpvue.navigateTo({ url })
		}
	},

	created() {}
}
</script>

<style scoped>
</style>
