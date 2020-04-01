<template>
	<div class="main has-header">
		<search :list="renderList" filterParam="业绩单" @getFilterResult="getFilterResult" @cancel="onCancelFilter" :rightButton="true" :isMainBg="false" placeholder="请输入业绩单号搜索"></search>
		<card v-for="(vo, key) in renderList" :key="key" :info="vo" :type="4"></card>
	</div>
</template>

<script>
import navbar from '@/components/navbar'
import card from '@/components/achievementCard'
import search from '@/components/search'

export default {
	data() {
		return {
			nav: ['销售新增', '财务新增', '业绩打回'],
			nav_num: 0,
			list: [],
			renderList: [],
			page: 1
		}
	},

	components: {
		navbar,
		card,
		search
	},
	watch: {
		renderList: {
			handler() {
				console.log(111)
			},
			deep: true
		}
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
			this.$api.getInterestList(page).then(res => {
				res = JSON.parse(res.RetValue)
				console.log(res)
				if (res.success) {
					if (page === 1) {
						this.list = res.rows.map(m => {
							let info = m
							info['打款日'] = m['打款日'].split(' ')[0]
							return info
						})
					} else {
						this.list = this.list.concat(
							res.rows.map(m => {
								let info = m
								info['打款日'] = m['打款日'].split(' ')[0]
								return info
							})
						)
					}
					if (res.rows.length > 0) this.page = page
				} else {
					if (page === 1) {
						this.list = []
					}
				}
				this.renderList = this.list
			})
		},
		changeNav(nav) {
			this.nav_num = nav
		},
		getFilterResult(data) {
			if (!data.reload) {
				this.renderList = data.result
			} else {
				this.renderList = this.list
			}
		},
		onCancelFilter() {
			this.renderList = this.list
		}
	},

	created() {}
}
</script>

<style scoped></style>
