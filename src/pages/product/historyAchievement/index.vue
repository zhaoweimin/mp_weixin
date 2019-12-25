<template>
    <div class="main has-header">
        <search placeholder="搜索" :rightButton="true"></search>
        <div class="filter f13 clink">
            <span class="iconfont iconshaixuan"></span> 筛选
        </div>
        <block v-for="(vo, key) in list" :key="key">
            <!-- <card :info="vo" :type="3"></card> -->
            <div class="contract-card history">
                <div class="order">
                    <div class="bg">业绩单号：{{vo['业绩单号']}}</div>
                </div>
                <div class="msg no-boder">
                    <div class="line">
                        <span class="key">客户姓名：{{vo['客户姓名']}}</span>
                    </div>
                </div>
                <div class="msg">
                    <div class="line"><span class="key pr10 strong">{{vo['产品名称']}}</span><span class="label-blue-outline">{{vo['产品类型']}}</span></div>
                </div>
                <div class="msg no-boder" @click="detail(key)">
                    <div class="line"><span class="key">产品期限：{{vo['产品期限']}}个月</span></div>
                    <div class="line"><span class="key">合同金额：{{vo['合同金额']}}</span></div>
                    <div class="line"><span class="key">确认收款日：{{vo['确认收款日']}}</span></div>
                </div>
                <div class="msg no-boder">
                    <div class="line"><span class="key">起息日：{{vo['起息日']}}</span></div>
                    <div class="line"><span class="key">产品到期日：{{vo['产品到期日']}}</span></div>
                </div>
                <div class="add" @click="add(key)">追加</div>
                <div class="status">
                    <img class="img" src="../../../img/check_in.png" alt="">
                </div>
                <div class="icon">
                    <span class="iconfont iconright cgey"></span>
                </div>
            </div>
        </block>
    </div>
</template>

<script>
import card from '@/components/achievementCard'
import search from '@/components/search'

export default {
	data() {
		return {
			nav: ['销售新增', '财务新增', '业绩打回'],
			nav_num: 0,
			list: [],
			page: 1
		}
	},

	components: {
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
			this.$api.getHistoryAchievementList(page).then(res => {
				res = JSON.parse(res.RetValue)
				console.log(res)
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
		changeNav(nav) {
			this.nav_num = nav
		},
		add() {
			let url = `../addAchievement/main`
			mpvue.navigateTo({ url })
		},
		detail(key) {
			let url = `../historyDetail/main?id=${key}`
			mpvue.setStorageSync('history_achievenment_info', this.list[key])
			mpvue.navigateTo({ url })
		}
	}
}
</script>

<style scoped>
.history {
	position: relative;
	overflow: hidden;
}
.history .add {
	position: absolute;
	bottom: 15px;
	right: 15px;
	color: #259efa;
	text-align: center;
	width: 70px;
	height: 20px;
	line-height: 20px;
	font-size: 12px;
	border: 1px solid #259efa;
	border-radius: 10px;
}
.history .icon {
	position: absolute;
	top: 150px;
	right: 15px;
}
.history .status {
	position: absolute;
	top: 16px;
	right: 0;
	padding: 0;
	background: #fff;
	width: 42px;
	height: 38px;
}
.history .status .img {
	width: 100%;
	height: 100%;
}
.filter {
	position: relative;
	top: 10px;
	height: 40px;
	line-height: 40px;
	padding: 0 15px;
	text-align: right;
	background: none;
}
.filter .iconfont {
	font-size: 13px;
}
</style>
