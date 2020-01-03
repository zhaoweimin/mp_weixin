<template>
	<div class="main has-header">
		<search :rightButton="true" placeholder="搜索"></search>
		<div class="clink f13 ta-r pt20 pr15">文件类型<span class="iconfont icondown"></span></div>
		<block v-for="(vo, key) in list" :key="key">
			<card :info="vo" :type="7"></card>
		</block>
	</div>
</template>

<script>
import card from '@/components/achievementCard'
import search from '@/components/search'

export default {
	data() {
		return {
			nav: ['销售新增', '财务新增', '业绩打回'],
			nav_num: 0,
			list: [],
			page: 1
		}
	},

	components: {
		card,
		search
	},

	mounted() {
		this.getList()
	},

	onReachBottom() {
		return false
		this.getList(this.page + 1)
	},

	methods: {
		getList(page = 1) {
			this.$api.getLoreList(page).then(res => {
				if (res.success) {
					if (page === 1) {
						this.list = res.rows.map(m => {
							let info = m
							m['上传时间'] = m['上传时间'] ? m['上传时间'].split(' ')[0] : '--'
							return info
						})
					} else {
						this.list = this.list.concat(
							res.rows.map(m => {
								let info = m
								m['上传时间'] = m['上传时间'] ? m['上传时间'].split(' ')[0] : '--'
								return info
							})
						)
					}
					if (res.rows.length > 0) this.page = page
				}
			})
		},
		changeNav(nav) {
			this.nav_num = nav
		}
	},

	created() {}
}
</script>

<style scoped></style>
