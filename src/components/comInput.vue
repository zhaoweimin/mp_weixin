<template>
	<div class="pl15 bg-fff border-box" :class="{ pr15: !isSpecialBorderStyle }" @touchmove.prevent>
		<div class="inputItem dis-flex l-center ptb10 rel" :class="{ 'border-b': border, pr15: isSpecialBorderStyle }">
			<div v-if="isRequired" class="required">*</div>
			<div class="label" :class="[titleDark ? 'cblack' : 'cgey', fontSize]">{{ title }}</div>
			<div class="flex-1 dis-flex flex-column pl20">
				<!-- 文字 -->
				<div v-if="type === 0" class="cblack" :class="[textRight ? 'ta-r' : 'ta-l', isSpecialColorTxt ? 'clink' : 'cblack', fontSize]">{{ resultValue || '--' }}</div>
				<!-- 输入框 -->
				<input v-if="type === 1 && inputType === 'text'" class="w-full" placeholder-style="color:#d8d8d8" :class="[textRight ? 'ta-r' : 'ta-l', fontSize]" :disabled="disabled" v-model="resultValue" :placeholder="placeholder" type="text" @blur="onBlur($event.target.value)" @focus="onFocus($event.target.value)" />
				<input v-if="type === 1 && inputType === 'number'" class="w-full" placeholder-style="color:#d8d8d8" :class="[textRight ? 'ta-r' : 'ta-l', fontSize]" :disabled="disabled" v-model="resultValue" :placeholder="placeholder" type="number" @blur="onBlur($event.target.value)" @focus="onFocus($event.target.value)" />
				<!-- 选择 -->
				<div v-if="type === 2">
					<picker v-if="!disabled" class="w-full rel" :class="[textRight ? 'ta-r' : 'ta-l', !disabled ? 'pr20' : '']" @change="onPickerChange" :value="index" :range="options">
						<span :class="[resultValue ? 'cblack' : 'clight', fontSize]">{{ resultValue || '请选择' }}</span>
						<span v-if="!disabled" class="icon-r iconfont iconright"></span>
					</picker>
					<div v-else class="cblack" :class="[textRight ? 'ta-r' : 'ta-l', isSpecialColorTxt ? 'clink' : 'cblack', fontSize]">{{ resultValue }}</div>
				</div>
				<!-- 日期 -->
				<picker v-if="type === 3" mode="date" class="w-full rel pr20" :class="[textRight ? 'ta-r' : 'ta-l']" :disabled="disabled" :value="resultValue" @change="onDateChange">
					<span :class="[resultValue ? 'cblack' : 'clight', fontSize]">{{ resultValue || '请选择' }}</span>
					<span v-if="!disabled" class="icon-r iconfont iconright"></span>
				</picker>
				<div v-if="type === 5" class="w-full rel">
					<div :class="[resultValue ? 'cblack' : 'clight', fontSize]" @click="onDateTimePickerClick">{{ resultValue || '请选择' }}</div>
					<span v-if="!disabled" class="icon-r iconfont iconright"></span>
				</div>
				<!-- 过滤筛选选择 -->
				<div v-if="type === 6" class="w-full rel pr20" @click="onFilterClick">
					<div :class="[resultValue ? 'cblack' : 'clight', fontSize]">{{ resultValue || '请选择' }}</div>
					<span class="icon-r iconfont iconright"></span>
				</div>
				<!-- 文字 -->
				<div v-if="type === 7" class="w-full rel pr20" :class="[textRight ? 'ta-r' : 'ta-l', isSpecialColorTxt ? 'clink' : 'cblack', fontSize]" @click="onBtnClick">
					<span :class="[resultValue ? 'cblack' : 'clight', fontSize]">{{ value || '请选择' }}</span>
					<span v-if="!disabled" class="icon-r iconfont iconright"></span>
				</div>
				<!-- 错误提示 -->
				<div class="error-tip" :class="[textRight ? 'ta-r' : 'ta-l']" v-if="isShowErr && enableInputErr">{{ errTxt }}</div>
			</div>
		</div>
		<!-- 快速过滤选择层 -->
		<div v-if="isShowFilter" class="fliter has-header">
			<search placeholder="搜索" :list="filterList" @getFilterResult="getFilterResult" :rightButton="true" @cancel="isShowFilter = false"></search>
			<div v-if="fList.length > 0" class="wrap">
				<div v-for="(item, index) in fList" :key="index" class="fliter-item plr15 ptb10 flex l-center f16 cblack border-b" @click="getFilterSelet(item)">{{ item }}</div>
			</div>
			<div v-else class="wrap">
				<div class="ta-c pt20 cgey f14">暂无数据</div>
			</div>
		</div>
		<!-- 时间日期 -->
		<dateTimePicker :show="isShowDateTimePicker" @getPickerValue="getPickerValue" @onCancel="onCancelPicker"></dateTimePicker>
	</div>
</template>

<script>
import Verify from '@/utils/Verify.js'
import search from '@/components/search'
import dateTimePicker from '@/components/dateTimePicker'

export default {
	props: {
		options: {
			type: Array,
			default() {
				return []
			}
		},
		dataList: {
			default() {
				return []
			}
		},
		type: {
			type: Number,
			default() {
				return 1
			}
		},
		title: {
			type: String,
			default() {
				return ''
			}
		},
		placeholder: {
			type: String,
			default() {
				return '请输入内容'
			}
		},
		value: {
			type: String,
			default() {
				return ''
			}
		},
		border: {
			type: Boolean,
			default() {
				return true
			}
		},
		// 校验方法
		validType: {
			type: String,
			default() {
				return ''
			}
		},
		paramkey: {
			type: String,
			default() {
				return ''
			}
		},
		// 启用错误提示开关（默认启用）
		enableInputErr: {
			type: Boolean,
			default() {
				return true
			}
		},
		disabled: {
			type: Boolean,
			default() {
				return false
			}
		},
		textRight: {
			type: Boolean,
			default() {
				return true
			}
		},
		titleDark: {
			type: Boolean,
			default() {
				return true
			}
		},
		isSpecialColorTxt: {
			type: Boolean,
			default() {
				return false
			}
		},
		isSpecialBorderStyle: {
			type: Boolean,
			default() {
				return false
			}
		},
		isRequired: {
			type: Boolean,
			default() {
				return false
			}
		},
		fontSize: {
			type: String,
			default() {
				return 'f16'
			}
		},
		inputType: {
			type: String,
			default() {
				return 'text'
			}
		},
		filterList: {
			type: Array,
			default() {
				return []
			}
		}
	},
	watch: {
		value(newV) {
			this.resultValue = newV
			console.log('newV=>', newV)
		}
		// filterList(newV){
		// 	this.fList = newV
		// }
	},
	components: {
		search,
		dateTimePicker
	},
	data() {
		return {
			resultValue: this.value,
			isShowErr: false,
			errTxt: '',
			scrollTop: '',
			focusDOMScrollTop: '',
			isShowFilter: false,
			fList: [],
			isShowDateTimePicker: false
		}
	},
	methods: {
		hidePiker() {
			this.isShowPicker = false
		},
		onPickerChange(e) {
			// this.resultValue = e.mp.detail.value
			this.$emit('getSelect', { key: this.paramkey, value: this.options[e.mp.detail.value], index: e.mp.detail.value })
			// this.$emit('getInputVal', { key: this.paramkey, value: this.e.mp.detail.value, isErr: this.isShowErr })
		},
		onDateChange(e) {
			this.resultValue = e.mp.detail.value
			this.$emit('getSelectDate', { key: this.paramkey, value: e.mp.detail.value })
			this.$emit('getInputVal', { key: this.paramkey, value: this.resultValue, isErr: this.isShowErr })
		},
		onBtnClick() {
			this.isShowErr = false
			this.$emit('getClickItems', { key: this.paramkey })
			// this.$emit('getInputVal', { key: this.paramkey, value: this.resultValue, isErr: this.isShowErr })
		},
		onBlur() {
			if (this.isRequired) {
				let Fn = this.validType ? (!(this.validType * 1) ? this.validType : 'numberFloatLimitValid') : 'emptyValid'
				if (Fn !== 'none') {
					Verify[Fn](
						'',
						this.resultValue,
						res => {
							this.isShowErr = !!res
							if (this.isShowErr) {
								this.errTxt = res
							}
						},
						this.validType
					)
				}
			}
			this.resultValue = this.isShowErr ? '' : this.resultValue
			this.$emit('getInputVal', { key: this.paramkey, value: this.resultValue, isErr: this.isShowErr })
		},
		onFocus() {
			this.isShowErr = false
		},
		getTabChoose(index) {
			this.$emit('getTabChoose', this.dataList[index].key)
		},
		getFilterResult(data) {
			if (!data.reload) {
				this.fList = data.result
			} else {
				this.fList = this.filterList
			}
		},
		onFilterClick() {
			// hideTextarea 隐藏textarea, 解决  placeholder bug
			this.$emit('hideTextarea', true)
			this.fList = this.filterList
			this.isShowFilter = true
		},
		getFilterSelet(data) {
			this.$emit('getFilterSelet', { key: this.paramkey, value: data, index: this.filterList.findIndex(m => m === data) })
			this.$emit('hideTextarea', false)
			this.isShowFilter = false
		},
		onDateTimePickerClick() {
			this.isShowDateTimePicker = true
			this.$emit('hideTextarea', true)
		},
		getPickerValue(data) {
			this.isShowDateTimePicker = false
			this.$emit('hideTextarea', false)
			this.$emit('getSelectDateTime', { key: this.paramkey, value: data })
		},
		onCancelPicker() {
			this.$emit('hideTextarea', false)
			this.isShowDateTimePicker = false
		}
	}
}
</script>

<style scoped>
.inputItem {
	min-height: 45px;
	box-sizing: border-box;
}
.inputItem .error-tip {
	color: #ee0a24;
	font-size: 12px;
}
.inputItem .label {
	min-width: 100px;
}
.inputItem .btnItem img {
	width: 26px;
	height: 22px;
}
.inputItem .chooseItem {
	width: 40px;
	height: 27px;
	line-height: 27px;
	text-align: center;
	border-radius: 4px;
}
.inputItem .required {
	position: absolute;
	left: -8px;
	/* top: 14px; */
	font-size: 12px;
}
input:disabled,
input[disabled] {
	background: none;
	color: #333;
	-webkit-text-fill-color: #333;
}
.inputItem .required {
	color: #ee0a24;
}
.icon-r {
	position: absolute;
	right: 0;
	top: 4px;
}
.fliter {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: #fff;
	z-index: 999;
	-webkit-overflow-scrolling: touch;
}
.fliter .wrap {
	height: 100%;
	width: 100%;
	overflow: scroll;
}
.fliter .wrap .fliter-item {
	height: 50px;
	width: 100%;
	background: #fff;
	box-sizing: border-box;
}
</style>
