<template>
    <div class="contract-card task-card" @click="detail(info.flowid)">
        <div class="order">
            <div class="bg">流程号：{{info.flowid}}</div>
        </div>
        <div class="msg no-boder">
            <div class="line">
                <span class="key">类别：{{info['类别']}}</span>
            </div>
            <div class="line">
                <span class="key">主题：<span class="clink">{{info.name}}</span></span>
            </div>
            <div class="line">
                <span class="key">流程名称：{{info.name}}</span>
            </div>
        </div>
        <div class="msg">
            <div class="line">
                <span class="key">起草人：{{info.DraftUserName || '--'}}</span>
            </div>
            <div class="line">
                <span class="key">发送人：{{info.SendUserName || '--'}}</span>
                <span class="time">登记时间：2019-03-16 10:30</span>
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
		detail(id) {
			this.$api.getTaskInfo(this.info.FlowModelID, { flowid: id }).then(res => {
				res = JSON.parse(res.RetValue)
				console.log(res)
				// let url = `/pages/task/detail0/main?id=${id}`
				// mpvue.setStorageSync('task_info', this.info)
				// mpvue.navigateTo({ url })
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
