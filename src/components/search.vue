<template>
    <div class="search bg-blue dis-flex l-center" :class="[fixed?'fixed':'']">
        <div class="input flex-1 bg-fff dis-flex l-center">
            <div class="icon cgey"><span class="iconfont iconsearch-1-copy"></span></div>
            <input class="flex-1" type="text" :placeholder="placeholder">
        </div>
        <div v-if="rightButton" class="cfff f12 pl10">取消</div>
    </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: {
    rightButton: {
      type: Boolean,
      default () {
        return false
      }
    },
    fixed: {
      type: Boolean,
      default () {
        return true
      }
    },
    placeholder: {
      type: String,
      default () {
        return '请输入搜索内容'
      }
    }
  },
  methods: {},
  mounted () {
    console.log(this.rightButton)
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
	z-index: 1;
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
