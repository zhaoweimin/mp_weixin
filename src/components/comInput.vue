<template>
    <div class="pl15 bg-fff border-box" :class="{'pr15':!isSpecialBorderStyle}">
        <div class="inputItem dis-flex l-start ptb10" :class="{'border-b':border,'pr15':isSpecialBorderStyle}">
            <div class="label f16 cgey" :class="[titleDark?'cblack':'cgey']">{{title}}</div>
            <div class="flex-1 dis-flex flex-column pl20">
                <!-- 文字 -->
                <div v-if="type===0" class="f16 cblack" :class="[textRight?'ta-r':'ta-l',isSpecialColorTxt?'clink':'cblack']">{{resultValue}}</div>
                <!-- 输入框 -->
                <input v-if="type===1" class="w-full f16" placeholder-style="color:#d8d8d8" :class="[textRight?'ta-r':'ta-l']" :disabled="disabled" v-model="resultValue" :placeholder="placeholder" type="text" @blur="onBlur($event.target.value)" @focus="onFocus($event.target.value)">
                <!-- 选择 -->
                        <picker v-if="type===2" class="w-full" :class="[textRight?'ta-r':'ta-l']" @change="onPickerChange" :value="index" :range="options">
                    <span class="f16" :class="resultValue?'cblack':'clight'">{{options[resultValue]||'请选择'}}</span>
                </picker>
                <!-- 日期 -->
                <picker v-if="type===3" mode="date" :value="resultValue" start="2015-09-01" end="2017-09-01" @change="onDateChange">
                    <span class="f16" :class="resultValue?'cblack':'clight'">{{resultValue||'请选择'}}</span>
                </picker>
                <!-- 点击事件 -->
                <div v-if="type===4" class="btnItem dis-flex flex-1 a-right l-center">
                    <!-- <div class="f16 mr5">{{resultValue}}</div> -->
                    <input class="w-full f16 cblack" :class="[textRight?'ta-r':'ta-l']" v-model="resultValue" :placeholder="placeholder" type="text" @blur="onBlur" @focus="onFocus">
                    <!-- <img class="ml10" src="./img/icon_camera@3x.png" alt="" @click="onBtnClick"> -->
                </div>
                <!-- 选择项 -->
                <div v-if="type===6" class="picker flex1 flex a-left l-center">
                    <div class="chooseItem mr15 f12" :class="[resultValue==item.key?'bg-main c-fff':'bg-color c-999']" v-for="(item,index) in dataList" :key="index" @click="getTabChoose(index)">{{item.value}}</div>
                </div>
                <!-- 错误提示 -->
                <div class="error-tip" :class="[textRight?'ta-r':'ta-l']" v-if="isShowErr&&enableInputErr">{{errTxt}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import Verify from '@/utils/Verify.js'

export default {
  props: {
    options: {
      type: Array,
      default () {
        return []
      }
    },
    dataList: {
      default () {
        return []
      }
    },
    type: {
      type: Number,
      default () {
        return 1
      }
    },
    title: {
      type: String,
      default () {
        return ''
      }
    },
    placeholder: {
      type: String,
      default () {
        return '请输入内容'
      }
    },
    value: {
      type: String,
      default () {
        return ''
      }
    },
    border: {
      type: Boolean,
      default () {
        return true
      }
    },
    // 校验方法
    validType: {
      type: String,
      default () {
        return ''
      }
    },
    paramkey: {
      type: String,
      default () {
        return ''
      }
    },
    // 启用错误提示开关（默认启用）
    enableInputErr: {
      type: Boolean,
      default () {
        return true
      }
    },
    disabled: {
      type: Boolean,
      default () {
        return false
      }
    },
    textRight: {
      type: Boolean,
      default () {
        return true
      }
    },
    titleDark: {
      type: Boolean,
      default () {
        return true
      }
    },
    isSpecialColorTxt: {
      type: Boolean,
      default () {
        return false
      }
    },
    isSpecialBorderStyle: {
      type: Boolean,
      default () {
        return false
      }
    }
  },
  created () {},
  watch: {
    value (newV) {
      this.resultValue = newV
    }
  },
  data () {
    return {
      resultValue: this.value,
      isShowErr: false,
      errTxt: '',
      scrollTop: '',
      focusDOMScrollTop: ''
    }
  },
  methods: {
    hidePiker () {
      this.isShowPicker = false
    },
    onPickerChange (e) {
      this.resultValue = e.mp.detail.value
      this.$emit('getSelect', { key: this.paramkey, value: this.options[e.mp.detail.value], index: e.mp.detail.value })
    },
    onDateChange (e) {
      this.resultValue = e.mp.detail.value
      this.$emit('getSelectDate', { key: this.paramkey, value: e.mp.detail.value })
    },
    onBtnClick () {
      this.isShowErr = false
      this.$emit('getClickItems', { key: this.paramkey })
    },
    onBlur () {
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
      this.resultValue = this.isShowErr ? '' : this.resultValue
      this.$emit('getInputVal', { key: this.paramkey, value: this.resultValue, isErr: this.isShowErr })
    },
    onFocus () {
      this.isShowErr = false
    },
    getTabChoose (index) {
      this.$emit('getTabChoose', this.dataList[index].key)
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
input:disabled,
input[disabled] {
	background: none;
	color: #333;
	-webkit-text-fill-color: #333;
}
</style>
