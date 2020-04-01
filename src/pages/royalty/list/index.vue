<template>
	<div class="main has-header">
		<search :list="renderList" filterParam="业绩单号" @getFilterResult="getFilterResult" @cancel="onCancelFilter" :rightButton="true" placeholder="请输入业绩单号搜索"></search>
		<block v-for="(vo, key) in renderList" :key="key">
			<card :info="vo" :type="5"></card>
		</block>
		<div class="btn-create" @click="link">
			<img class="icon-create" src="../../../img/create.png" alt="" />
		</div>
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

	mounted() {
		this.getList()
	},

	onReachBottom() {
		return false
		this.getList(this.page + 1)
	},

	methods: {
		getList(page = 1) {
			this.$api.getRoyaltyList(page).then(res => {
				res = JSON.parse(res.RetValue)
				if (res.success) {
					if (page === 1) {
						this.list = res.rows
					} else {
						this.list = this.list.concat(res.rows)
					}
					if (res.rows.length > 0) this.page = page
				}
				this.renderList = this.list
			})
		},
		changeNav(nav) {
			this.nav_num = nav
		},
		link() {
			mpvue.navigateTo({ url: `/pages/royalty/newList/main` })
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

<style scoped>
.btn-create {
	position: fixed;
	right: 15px;
	bottom: 50px;
	z-index: 999;
	/* box-shadow: 0 0 5px rgba(0,0,0,0.3) */
}
.icon-create {
	width: 60px;
	height: 60px;
}
</style>
