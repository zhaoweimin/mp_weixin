<template>
    <div class="main ">
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

	mounted() {
		this.getList()
	},

	onReachBottom() {
		this.getList(this.page + 1)
	},

	methods: {
		getList(page = 1) {
			this.$api.getTaskList(page).then(res => {
				res = JSON.parse(res.RetValue)
				console.log(res)
				if (res.success) {
					if (page === 1) {
						this.list = res.rows
					} else {
						this.list = this.list.concat(res.rows)
					}
					if (res.rows.length > 0) this.page = page
				}
			})
		},
		changeNav(nav) {
			console.log(nav)
			this.nav_num = nav
			this.getList()
		},
		send() {
			let url = '/pages/task/detail/main?id='
			mpvue.navigateTo({ url })
		}
	},

	created() {}
}
</script>

<style scoped>
</style>
