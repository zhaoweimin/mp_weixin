<template>
	<div class="main has-header">
		<search placeholder="搜索" :list="list" filterParam="客户姓名" @getFilterResult="getFilterResult"></search>
		<div class="customer-card follow-custom" v-for="(vo, key) in list" :key="key">
			<div class="dis-flex l-center mb15 plr10" @click="vo.isShow = !vo.isShow">
				<div class="avatar">
					<img class="img" :src="avatar" mode="aspectFill" />
				</div>
				<div class="msg">
					<div class="title">
						<span class="strong">{{ vo['客户姓名'] }}</span> <span class="sex">{{ vo['客户性别'] }}</span>
					</div>
					<div class="tags level-1">
						<div class="tag">{{ vo['客户类型'] }}</div>
						<div class="tag level" v-if="vo['客户级别']">{{ vo['客户级别'] }}</div>
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
				<div class="right"><span class="iconfont iconxiangxiajiantou f12"></span></div>
			</div>
			<div v-if="vo.isShow">
				<comInput :type="0" :titleDark="false" title="跟进编号" :isSpecialColorTxt="true" :value="vo['跟进编号']"></comInput>
				<comInput :type="0" :titleDark="false" title="客户编号" :isSpecialColorTxt="true" :value="vo['客户编号']"></comInput>
				<comInput :type="0" :titleDark="false" title="跟进方式" :value="vo['跟进方式']"></comInput>
				<!-- <comInput :type="2" :titleDark="false" title="跟进方式" placeholder="请选择" :value="" @getSelect="getSelect" :options="['亲自拜访']"></comInput> -->
				<comInput :type="0" :titleDark="false" title="上次跟进时间" :value="vo['上次跟进时间']"></comInput>
				<!-- <comInput :type="3" :titleDark="false" title="上次跟进时间" :value="" @getSelectDate="getSelectDate"></comInput> -->
				<comInput :type="0" :titleDark="false" title="计划跟进时间" :value="vo['计划跟进时间']"></comInput>
				<!-- <comInput :type="3" :titleDark="false" title="计划跟进时间" :value="" @getSelectDate="getSelectDate"></comInput> -->
				<comInput :type="0" :titleDark="false" title="客户类型" :value="vo['客户类型']"></comInput>
				<!-- <comInput :type="2" :titleDark="false" title="客户类型" placeholder="请选择" :value="" @getSelect="getSelect" :options="['成交类型']"></comInput> -->
				<comInput :type="0" :titleDark="false" title="投资总额" :value="vo['投资总额']"></comInput>
				<comInput :type="0" :titleDark="false" title="累计投资总额" :value="vo['累计投资总额']"></comInput>
				<div class="mlr15 ptb10 border-b">
					<div class="cgey f16 mb10">跟进主题</div>
					<textarea disabled :value="vo['跟进主题']"></textarea>
				</div>
				<comInput :type="0" :titleDark="false" title="跟进类型" :value="vo['跟进类型']"></comInput>
				<!-- <comInput :type="2" :titleDark="false" title="跟进类型" placeholder="请选择" :value="" @getSelect="getSelect" :options="['客情维护']"></comInput> -->
				<div class="mlr15 ptb10 border-b">
					<div class="cgey f16 mb10">跟进内容</div>
					<textarea disabled :value="vo['跟进内容']"></textarea>
				</div>
				<comInput v-if="type === '1'" :type="0" :titleDark="false" title="今日跟进时间" :value="vo['今日跟进时间']"></comInput>
				<comInput v-else :type="0" :titleDark="false" title="跟进时间" :value="vo['跟进时间']"></comInput>
				<!-- <comInput :type="3" :titleDark="false" title="今日跟进时间" :value="" @getSelectDate="getSelectDate"></comInput> -->
				<div v-if="type === '1'" class="mlr15 ptb10 border-b">
					<div class="cgey f16 mb10">今日跟进计划</div>
					<textarea disabled :value="vo['今日跟进计划']"></textarea>
				</div>
				<div v-else class="mlr15 ptb10 border-b">
					<div class="cgey f16 mb10">跟进计划</div>
					<textarea disabled :value="vo['跟进计划']"></textarea>
				</div>
				<comInput :type="0" :titleDark="false" title="跟进人" :value="小张"></comInput>
				<comInput :type="0" :titleDark="false" title="跟进部门" :value="小王"></comInput>
			</div>
			<div v-else class="more dis-flex flex-column a-center plr15">
				<div class="line">
					<span>上次跟进时间：</span><span class="cblack">{{ vo['上次跟进时间'] }}</span>
				</div>
				<div class="line">
					<span>计划跟进时间：</span><span class="cblack">{{ vo['计划跟进时间'] }}</span>
				</div>
			</div>
			<div v-if="vo.isShow" class="ptb25 plr15 ">
				<van-button type="info" size="large" @click="follow(key)">跟进</van-button>
			</div>
		</div>
		<!-- <div v-if="vo['跟进编号']" class="ptb25 plr15 ">
            <van-button type="info" size="large">跟进</van-button>
        </div> -->
	</div>
</template>

<script>
import search from '@/components/search'
import comInput from '@/components/comInput'

export default {
	components: {
		search,
		comInput
	},

	data() {
		return {
			type: 0,
			r: 0,
			avatar: 'https://wx.qlogo.cn/mmopen/vi_32/Po7hia4bia7Ua8tZxjcLfpHsEKgzMT3wf3HzhE6TqQHqsbXSL72dFpjIlPmAYuzv5VVpgic1iaZ703Op5I4LovGOgg/132?imageView2/2/w/100/q/80/v=',
			list: [],
			page: 1
		}
	},

	onLoad(option) {
		// 首次加载清空所有data
		Object.assign(this.$data, this.$options.data())
		let type = option.type
		this.type = type
		let title = ['今日需跟进', '历史跟进', '本周需跟进', '超过30天未跟进']
		let rArr = ['1', '0', '2', '3']
		this.r = rArr[type - 1]
		mpvue.setNavigationBarTitle({ title: title[type - 1] })
		this.getList()
	},

	onReachBottom() {
		return false
		this.getList(this.page + 1)
	},

	methods: {
		getList(page = 1) {
			console.log('=>', 111)
			this.$api.getProductList(page, this.r, this.$store.state.account.info.RetValue.UserID).then(res => {
				console.log('=>', 222)
				res = JSON.parse(res.RetValue)
				res.rows = res.rows.map(m => {
					return { ...m, ...{ isShow: false } }
				})
				console.log('=>', 333)
				console.log('=>', res)
				if (res.success) {
					if (page === 1) {
						this.list = res.rows || []
					} else {
						this.list = this.list.concat(res.rows)
					}
					this.list = this.list.map(m => {
						let item = m
						item['上次跟进时间'] = m['上次跟进时间'].split(' ')[0]
						item['计划跟进时间'] = m['计划跟进时间'].split(' ')[0]
						return item
					})
					if (res.rows.length > 0 && page !== 1) this.page = page
				} else {
					if (page === 1) {
						this.list = []
						this.page = page
					}
				}
			})
		},
		follow(key) {
			let item = this.list[key]
			let url = `/pages/customer/addFollow/main?is_follow=1`
			mpvue.setStorageSync('follow_info', item)
			mpvue.navigateTo({ url })
		},
		detail(id) {
			let url = `../followDetail/main?id=${id}`
			mpvue.navigateTo({ url })
		},
		getFilterResult(data) {
			console.log(data)
			if (!data.reload) {
				this.list = data.result
			} else {
				this.getList()
			}
		}
	}
}
</script>

<style scoped>
.follow-custom {
	padding: 10px 0 0;
	margin: 15px 15px;
}
.follow-custom .more {
	padding: 5px 10px;
	border-top: 1px solid rgba(242, 242, 242, 1);
}
.follow-custom .line {
	line-height: 18px;
}
.follow-custom .line .right {
	float: right;
}
textarea {
	padding: 15px 10px;
	height: 100px;
	width: 100%;
	box-sizing: border-box;
	background-color: #f1f1f1;
}
</style>
