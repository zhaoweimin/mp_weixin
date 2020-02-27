<template>
	<div class="main has-header">
		<search :rightButton="true" placeholder="搜索"></search>
		<div class="customer-card follow-custom" v-for="(vo, key) in list" :key="key" @click="detail(key)">
			<div class="dis-flex">
				<div class="avatar">
					<img class="img" :src="vo.avatar" mode="aspectFill" />
				</div>
				<div class="msg">
					<div class="title">
						<span class="strong">{{ vo['客户名称'] }}</span> <span class="sex">{{ vo.sex ? '先生' : '女士' }}</span>
					</div>
					<div class="tags level-1">
						<div class="tag">{{ vo['客户类型'] }}</div>
						<!-- <div class="tag level">A级</div> -->
					</div>
					<!-- <div class="tags level-2" v-if="vo.level == 2">
                        <div class="tag">成交客户</div>
                        <div class="tag level">B级</div>
                    </div>
                    <div class="tags level-3" v-if="vo.level == 3">
                        <div class="tag">准客户</div>
                        <div class="tag level">C级</div>
                    </div>
                    <div class="tags level-4" v-if="vo.level == 4">
                        <div class="tag">潜在客户</div>
                        <div class="tag level">D级</div>
                    </div> -->
				</div>
			</div>
			<div class="base more">
				<div class="line">
					<div class="key">邀约活动：</div>
					<div class="val">{{ vo['活动名称'] }}</div>
				</div>
				<div class="line">
					<div class="key">活动时间：</div>
					<div class="val">{{ vo['邀约时间'] }}</div>
				</div>
				<div class="line">
					<div class="key">审批结果：</div>
					<div class="val">{{ vo['审批状态'] }}</div>
					<div class="right clink">查看详情</div>
					<!-- <div class="right">更多 <span class="iconfont iconright"></span></div> -->
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import search from '@/components/search'
export default {
	data() {
		return {
			type: 0,
			page: 1,
			list: []
		}
	},

	components: {
		search
	},

	onLoad() {
		this.getList()
	},

	onReachBottom() {
		return false
		this.getList(this.page + 1)
	},

	methods: {
		getList(page = 1) {
			this.$api.getDiscoverMarkerHistoryInviteList(page).then(res => {
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
		detail(key) {
			let url = `/pages/discover/invitationDetail/main`
			mpvue.setStorageSync('market_customer_info', this.list[key])
			mpvue.navigateTo({ url })
		}
	}
}
</script>

<style scoped>
.follow-custom {
	margin: 10px 10px;
	padding: 12px;
}
.follow-custom .base {
	padding: 5px 0;
	border-top: 1px solid rgba(242, 242, 242, 1);
	margin-top: 15px;
	height: auto;
}
.follow-custom .line {
	line-height: 24px;
	display: flex;
}
.follow-custom .line .key {
	width: 24%;
}
.follow-custom .line .val {
	flex: 1;
	color: #333333;
}
</style>
