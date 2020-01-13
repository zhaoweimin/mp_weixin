<template>
	<div class="filter ptb15 plr15">
		<div class="dis-flex">
			<!-- <div class="nav flex-1">
                综合 <span class="iconfont iconxiangxiajiantou"></span>
            </div>
            <div class="nav flex-1">
                类型 <span class="iconfont iconxiangxiajiantou"></span>
            </div>
            <div class="nav flex-1">
                级别 <span class="iconfont iconxiangxiajiantou"></span>
            </div> -->
			<div class="nav flex a-right flex-1 clink" @click="setShowFilter()"><span class="iconfont iconshaixuan clink"></span> 筛选</div>
		</div>
		<block v-if="is_show">
			<div class="meng" @click="setShowFilter()"></div>
			<div class="select">
				<div class="filter-block">
					<div class="title">客户编号</div>
					<div class="con">
						<input v-model="filter.FNumber" class="input" type="text" placeholder="输入编号" />
					</div>
					<div class="title">客户类型</div>
					<div class="con">
						<div class="type" :class="[radio_FCustomerType == 1 ? 'active' : '']" @click="setFilterType(1, '潜在')">潜在客户</div>
						<div class="type" :class="[radio_FCustomerType == 2 ? 'active' : '']" @click="setFilterType(2, '准客户')">准客户</div>
						<div class="type" :class="[radio_FCustomerType == 3 ? 'active' : '']" @click="setFilterType(3, '成交')">成交客户</div>
						<div class="type" :class="[radio_FCustomerType == 4 ? 'active' : '']" @click="setFilterType(4, '历史成交客户')">历史成交客户</div>
					</div>
					<div class="title">客户级别</div>
					<div class="con">
						<div class="type" :class="[radio_FDealType == 1 ? 'active' : '']" @click="setFilterLevel(1, 'A')">A级</div>
						<div class="type" :class="[radio_FDealType == 2 ? 'active' : '']" @click="setFilterLevel(2, 'B')">B级</div>
						<div class="type" :class="[radio_FDealType == 3 ? 'active' : '']" @click="setFilterLevel(3, 'C')">C级</div>
						<div class="type" :class="[radio_FDealType == 4 ? 'active' : '']" @click="setFilterLevel(4, 'D')">D级</div>
					</div>
					<div class="title">客户来源</div>
					<div class="con">
						<div class="type" :class="[radio_FTranType == 1 ? 'active' : '']" @click="setFilterFrom(1, '直销')">直销</div>
						<div class="type" :class="[radio_FTranType == 2 ? 'active' : '']" @click="setFilterFrom(2, '渠道')">渠道</div>
					</div>
					<div class="title">来源明细</div>
					<div class="con">
						<div class="type" :class="[radio_FtranTypeEntry == 1 ? 'active' : '']" @click="setFilterIntro(1, '市场活动')">市场活动</div>
						<div class="type" :class="[radio_FtranTypeEntry == 2 ? 'active' : '']" @click="setFilterIntro(2, '个人拓展')">个人拓展</div>
						<div class="type" :class="[radio_FtranTypeEntry == 3 ? 'active' : '']" @click="setFilterIntro(3, '渠道')">渠道</div>
					</div>
				</div>
				<div class="footer dis-flex">
					<div class="flex-1 btn" @click="reSet()">重置</div>
					<div class="flex-1 btn sure" @click="sure()">确定</div>
				</div>
			</div>
		</block>
	</div>
</template>

<script>
export default {
	data() {
		return {
			is_show: 0,
			radio_FCustomerType: 0,
			radio_FDealType: 0,
			radio_FTranType: 0,
			radio_FtranTypeEntry: 0,
			filter: {
				FNumber: '',
				FCustomerType: 0,
				FDealType: 0,
				FTranType: 0,
				FtranTypeEntry: 0
			}
		}
	},
	props: ['info'],
	onLoad() {
		Object.assign(this.$data, this.$options.data())
	},
	methods: {
		setShowFilter() {
			this.is_show = this.is_show ? 0 : 1
		},
		sure() {
			this.setShowFilter()
			for (let item in this.filter) {
				if (!this.filter[item]) {
					this.filter[item] = ''
				}
			}
			this.$emit('getData', this.filter)
		},
		reSet() {
			this.radio_FCustomerType = 0
			this.radio_FDealType = 0
			this.radio_FTranType = 0
			this.radio_FtranTypeEntry = 0
			this.filter = {
				FNumber: '',
				FCustomerType: 0,
				FDealType: 0,
				FTranType: 0,
				FtranTypeEntry: 0
			}
		},
		setFilterType(idx, val) {
			this.radio_FCustomerType = idx
			this.filter.FCustomerType = val
		},
		setFilterLevel(idx, val) {
			this.radio_FDealType = idx
			this.filter.FDealType = val
		},
		setFilterFrom(idx, val) {
			this.radio_FTranType = idx
			this.filter.FTranType = val
		},
		setFilterIntro(idx, val) {
			this.radio_FtranTypeEntry = idx
			this.filter.FtranTypeEntry = val
		}
	}
}
</script>

<style>
.meng {
	position: fixed;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.3);
	z-index: 11;
}
.filter {
	position: fixed;
	left: 0;
	top: 50px;
	right: 0;
	text-align: center;
	background: #ffffff;
	z-index: 11;
	/* height: 50px; */
}

.filter .nav {
	font-size: 12px;
	position: relative;
}
.iconxiangxiajiantou {
	font-size: 12px;
}
.clink .iconfont {
	font-weight: bold;
}
.select {
	position: fixed;
	right: 0;
	left: 20%;
	top: 0;
	bottom: 0;
	background: #ffffff;
	text-align: left;
	z-index: 12;
}
.filter-block {
	position: absolute;
	padding: 20px;
	top: 0px;
	bottom: 40px;
	left: 0;
	right: 0;
	overflow: scroll;
}
.select .title {
	line-height: 40px;
	font-size: 18px;
	font-weight: bold;
}
.select .con {
	line-height: 30px;
	font-size: 12px;
}
.select .con .input {
	display: inline-block;
	box-sizing: border-box;
	height: 30px;
	border: 1px solid #9a9a9a;
	border-radius: 2px;
	vertical-align: middle;
	width: 30%;
	margin-right: 10px;
	background: #f5f5f5;
	text-align: center;
}
.select .con .type {
	background: #f5f5f5;
	text-align: center;
	width: 30%;
	margin-right: 5%;
	box-sizing: border-box;
	height: 30px;
	font-size: 12px;
	display: inline-block;
	vertical-align: middle;
	margin-bottom: 10px;
	color: #999999;
	border-radius: 2px;
}
.select .con .type.active {
	border: 1px solid #519eee;
	color: #519eee;
	background: #edf6ff;
}
.select .con .type:nth-child(3n) {
	margin-right: 0px;
}
.select .footer {
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	height: 40px;
}
.select .footer .btn {
	text-align: center;
	font-size: 14px;
	line-height: 40px;
	background: #f5f5f5;
	color: #999;
}
.select .footer .sure {
	background: #509ef0;
	color: #fff;
}
</style>
