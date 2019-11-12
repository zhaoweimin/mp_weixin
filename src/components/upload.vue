<template>
    <div class="upload-block">
        <div class="items">
            <div class="upload">
                <div class="icon">+</div>
                <div class="text">添加附件</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      nav: 0
    }
  },
  props: ['info'],
  methods: {
    tabNav (nav) {
      this.nav = nav
      this.$emit('changeNav', nav)
    }
  }
}
</script>

<style>
.upload-block {
	width: 100%;
}
.upload-block .items {
	position: relative;
}
.upload-block .items .upload {
	display: inline-block;
	width: 120rpx;
	height: 120rpx;
	color: #9d9d9d;
	text-align: center;
	border: 1px solid #dbdbdb;
	font-size: 24rpx;
	border-radius: 4px;
}
.upload-block .items .upload .icon {
	margin-top: 30rpx;
	line-height: 30rpx;
}
.upload-block .items .upload .text {
	line-height: 30rpx;
}
.upload-block .items .item {
	display: inline-block;
	width: 120rpx;
	height: 120rpx;
	border: 1px solid #dbdbdb;
	border-radius: 4px;
}
.upload-block .items .item .img {
	width: 100%;
	height: 100%;
}
</style>
