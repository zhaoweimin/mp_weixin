<template>
    <div class="main has-header">
		<search :list="renderList" filterParam="活动名称" @getFilterResult="getFilterResult" @cancel="onCancelFilter" :rightButton="true" placeholder="请输入活动名称搜索"></search>
        <block v-for="(vo, key) in renderList" :key="key">
            <card :info="vo" :type="8" :actionType="type"></card>
        </block>
    </div>
</template>

<script>
import card from '@/components/achievementCard'
import search from '@/components/search'

export default {
	data() {
		return {
			searchValue: '',
			type: 0,
			list: [],
			renderList: [],
			page: 1,
			apiArr: ['getDiscoverMarkerExerciseList', 'getDiscoverMarkerHistoryExerciseList']
		}
	},

	components: {
		card,
		search
	},

	onLoad(option) {
		Object.assign(this.$data, this.$options.data())
		let type = option.type
		console.log('option', option)
		this.type = type
		let title = ['可邀约活动', '历史活动']
		mpvue.setNavigationBarTitle({ title: title[type] })

		this.getList()
	},

	onReachBottom() {
		return false
		this.getList(this.page + 1)
	},

	methods: {
		getList(page = 1) {
			this.$api[this.apiArr[this.type]](page).then(res => {
				console.log(res)
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
.c-inputclass {
	height: 10px;
}
</style>
