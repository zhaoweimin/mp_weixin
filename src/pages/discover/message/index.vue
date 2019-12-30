<template>
	<div class="main">
		<!-- <navbar :info="nav" @changeNav="changeNav"></navbar> -->
		<div class="box plr10 pt15" v-for="(vo, key) in list" :key="key">
			<div class="item dis-flex bg-fff plr20 pt15 pb10">
				<div class="flex-1">
					<div class="f17 mb10 cblack strong">{{ vo.title }}</div>
					<div class="f12 cblack mb5">{{ vo.sendUser }}：{{ vo.msgContent }}</div>
					<div class="f12 cgey">{{ vo.sendTime }}</div>
				</div>
				<!-- <div class="dis-flex flex-column l-end">
                    <div class="f13 clink">未读</div>
                    <div class="f13 clink btn-detail clink mt15">前往查看</div>
                </div> -->
			</div>
		</div>
		<!-- <div v-if="currentNavId===1" class="box plr10 pt15">
            <div class="item dis-flex bg-fff plr20 pt15 pb10">
                <div class="flex-1">
                    <div class="f17 mb10 cblack strong">系统</div>
                    <div class="f12 cblack mb5">您好：流程【客户】-Tj0920230320230320（客户投诉已正常结束）。</div>
                    <div class="f12 cgey">2019-03-20 15:52</div>
                </div>
            </div>
        </div> -->
	</div>
</template>

<script>
import navbar from '@/components/navbar'
export default {
	data() {
		return {
			// nav: ['未读', '已读'],
			currentNavId: 0,
			page: 1,
			list: []
		}
	},
	components: {
		navbar
	},
	mounted() {
		this.getList()
	},

	onReachBottom() {
		this.getList(this.page + 1)
	},

	methods: {
		getList(page = 1) {
			this.$api.getMsgList(page, this.currentNavId + 1).then(res => {
				res = JSON.parse(res.RetValue)
				if (res.success) {
					if (page === 1) {
						this.list = res.rows || []
					} else {
						this.list = this.list.concat(res.rows)
					}
					if (res.rows.length > 0 && page !== 1) this.page = page
				} else {
					if (page === 1) {
						this.list = []
						this.page = page
					}
				}
			})
		},
		changeNav(nav) {
			this.currentNavId = nav
			this.getList()
		}
	},

	created() {}
}
</script>

<style scoped>
.item {
	box-shadow: 0px 1px 5px 0px rgba(127, 127, 127, 0.2);
	border-radius: 2px;
}
.btn-detail {
	padding: 2px 8px;
	border-radius: 50px;
	border: 1px solid #509ef0;
}
</style>
