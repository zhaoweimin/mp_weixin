<template>
	<div class="main has-two-header">
		<navbar :info="nav" @changeNav="changeNav"></navbar>
		<fliter :info="nav" @getData="getFilterData"></fliter>
		<div v-if="list.length > 0">
			<card v-for="(vo, key) in list" :key="key" :type="navId" :info="vo"></card>
		</div>
	</div>
</template>

<script>
import navbar from '@/components/navbar'
import fliter from '@/components/fliterLine'
import card from '@/components/customerCard'

export default {
	data() {
		return {
			nav: ['个人档案', '机构档案'],
			navId: 0,
			typeArr: ['个人客户', '机构客户'],
			list: [],
			page: 1,
			filter: {
				FApplySubject: '个人客户'
			}
		}
	},

	components: {
		navbar,
		fliter,
		card
	},
	onLoad() {
		Object.assign(this.$data, this.$options.data())
	},
	methods: {
		getData(page = 1) {
			this.$api.getAchiveList(page, this.filter, `escontain=true&deptid=1&UserID=${this.$store.state.account.info.RetValue.UserID}`).then(res => {
				if (res.success) {
					if (page === 1) {
						this.list = res.rows
					} else {
						this.list = this.list.concat(res.rows)
					}
					if (res.rows.length > 0) this.page = page
				} else {
					if (page === 1) {
						this.list = []
					}
				}
			})
		},
		changeNav(navId) {
			this.list = []
			console.log(navId)
			this.navId = navId
			this.filter.FApplySubject = this.typeArr[navId]
			this.getData(1, this.filter)
			this.$forceUpdate()
		},
		getFilterData(val) {
			this.filter = { ...this.filter, ...val }
			this.getData(1, val)
		}
	},
	onShow(){
		this.getData()
	},
	onReachBottom() {
		return false
		this.getData(this.page + 1)
	}
}
</script>

<style scoped></style>
