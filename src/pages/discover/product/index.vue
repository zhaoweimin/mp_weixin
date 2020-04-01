<template>
	<div class="main has-big-header">
		<navbar :info="nav" @changeNav="changeNav"></navbar>
		<search :list="renderList" filterParam="FNumber" @getFilterResult="getFilterResult" @cancel="onCancelFilter" :fixed="false" :rightButton="true" :isMainBg="false" placeholder="请输入产品编号搜索"></search>
		<!-- <block v-if="nav_num === 0">
			<card v-for="(vo, key) in list" :key="key" :info="vo" :type="6" :status="nav_num"></card>
		</block>
		<block v-else>
			<card v-for="(vo, key) in list" :key="key" :info="vo" :type="6" :status="nav_num"></card>
		</block> -->
		<card v-for="(vo, key) in renderList" :key="key" :info="vo" :type="6"></card>
	</div>
</template>

<script>
import navbar from '@/components/navbar'
import card from '@/components/achievementCard'
import search from '@/components/search'

export default {
	data() {
		return {
			nav: ['在售产品', '历史产品'],
			nav_num: 0,
			list: [],
			renderList: []
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
			this.$api.getDiscoverProductList(page, this.nav_num).then(res => {
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
			this.getList()
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
