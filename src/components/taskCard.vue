<template>
	<div class="contract-card task-card" @click="detail(info.flowid, info.MessageID)">
		<div class="order">
			<div class="bg">流程号：{{ info.flowid }}</div>
		</div>
		<div class="msg no-boder">
			<div class="line">
				<span class="key">类别：{{ info['类别'] }}</span>
			</div>
			<div class="line">
				<span class="key"
					>主题：<span class="clink">{{ info.name }}</span></span
				>
			</div>
			<div class="line">
				<span class="key">流程名称：{{ info.name }}</span>
			</div>
		</div>
		<div class="msg">
			<div class="line">
				<span class="key">起草人：{{ info.DraftUserName || '--' }}</span>
			</div>
			<div class="line">
				<span class="key">发送人：{{ info.SendUserName || '--' }}</span>
				<span class="time">登记时间：{{ info.ReceiveTime || '--' }}</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		info: {
			type: Object,
			default() {
				return {}
			}
		}
	},
	methods: {
		detail(id, MessageID) {
			let userid = this.$store.state.account.info.RetValue.UserID
			this.$api.getTaskInfo(this.info.FlowModelID, { flowid: id }, userid).then(res => {
				res = JSON.parse(res.RetValue)
				console.log(res)
				console.log(1)
				let id = ''
				if (this.info.name === '提成申请') {
					id = 0
				} else if (this.info.name === '活动邀约') {
					id = 1
				} else if (this.info.name === '业绩管理') {
					id = 2
				} else if (this.info.name === '产品预约') {
					id = 4
				} else if (this.info.name === '客户确认书') {
					id = 6
				} else if (this.info.name === '客户投诉') {
					id = 7
				}
				mpvue.setStorageSync(`detail${id}`, res.rows[0])
				mpvue.setStorageSync(`MessageID`, MessageID)
				mpvue.navigateTo({ url: `/pages/task/detail${id}/main` })
			})
		}
	}
}
</script>

<style>
.task-card .time {
	float: right;
	font-size: 10px;
	color: #ccc;
}
</style>
