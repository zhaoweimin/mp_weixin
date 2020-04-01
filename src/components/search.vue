<template>
	<div class="search dis-flex l-center" :class="[fixed ? 'fixed' : '', isMainBg ? 'bg-blue' : 'bg-color']">
		<div class="input flex-1 bg-fff dis-flex l-center">
			<div class="icon cgey"><span class="iconfont iconsearch-1-copy"></span></div>
			<input ref="input" class="flex-1 f14" type="text" :placeholder="placeholder" v-model="inputVal" @blur="onblur" />
		</div>
		<div v-if="rightButton" class="f12 pl10" :class="[isMainBg ? 'cfff' : 'cgey']" @click="cancel">取消</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			inputVal: ''
		}
	},
	onLoad(option) {
		Object.assign(this.$data, this.$options.data())
	},
	props: {
		rightButton: {
			type: Boolean,
			default() {
				return false
			}
		},
		fixed: {
			type: Boolean,
			default() {
				return true
			}
		},
		placeholder: {
			type: String,
			default() {
				return '请输入搜索内容'
			}
		},
		isMainBg: {
			type: Boolean,
			default() {
				return true
			}
		},
		// 过滤待字段名
		filterParam: {
			type: String,
			default() {
				return ''
			}
		},
		// 传入的待过滤数组
		list: {
			type: Array,
			default() {
				return []
			}
		}
	},
	methods: {
		onblur(value) {
			let result, reload
			let txt = value.mp.detail.value
			if (txt) {
				console.log('list', this.list)
				result = this.filterParam ? this.list.filter(m => m[this.filterParam].indexOf(txt) > -1) : this.list.filter(m => m.indexOf(txt) > -1)
				reload = false
			} else {
				reload = true
			}
			this.$emit('getFilterResult', { reload, result })
		},
		cancel() {
			console.log(this.inputVal)
			console.log(this.$refs['input'])
			this.inputVal = ''
			this.$emit('cancel')
		}
	}
}
</script>

<style scoped>
button::after {
	border: none;
}
.search {
	padding: 10px;
	color: #333333;
	box-sizing: border-box;
}
.search.fixed {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 999;
}
.search .action {
	padding-left: 10px;
	font-size: 13px;
	line-height: 30px;
	color: #999;
}
.search .dis-flex {
	background: #ffffff;
	line-height: 20px;
	height: 30px;
	border-radius: 4px;
	overflow: hidden;
	font-size: 12px;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}
.search .dis-flex .icon {
	width: 30px;
	line-height: 30px;
	text-align: center;
}
.search .dis-flex .icon .iconfont {
	font-size: 14px;
}
.search .dis-flex .input input {
	line-height: 30px;
	height: 30px;
	min-height: 30px;
}
/* end */
</style>
