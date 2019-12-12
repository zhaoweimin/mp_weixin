<template>
    <div class="product-list">
        <!-- <div class="title">
          <div class="left-color bg1" v-if="info.type == 0"></div>
          <div class="left-color bg2" v-if="info.type == 1"></div>
          <div class="left-color bg3" v-if="info.type == 2"></div>
          <div class="left-color bg4" v-if="info.type == 3"></div>
          <span class="strong">{{info.title}}</span>
          <span class="right">更多</span>
        </div> -->
        <div class="items">
            <div class="item" v-for="(vo, key) in info" :key="key">
                <div class="top">
                    <div class="line dis-flex">
                        <div class="flex-1">
                            <span class="name">{{vo['产品名称']}}</span>
                            <span class="tag" v-if="vo.type == 0">自行发行</span>
                            <span class="tag tag-2" v-if="vo.type == 1">代销产品</span>
                        </div>
                        <div class="more cgey" @click="detail(key)">查看简介<span class="iconfont iconright"></span></div>
                    </div>
                    <!-- <div class="line">
                        <span class="strong">产品限期：2018-03-20至2019-5-20</span><span class="cgey">（14个月）</span>
                    </div> -->
                </div>
                <div class="foot dis-flex">
                    <div class="flex-1">
                        <!-- <div class="line">募集开始时间：<span class="cblack">2018-03-20</span></div> -->
                        <div class="line">产品限期：<span class="cblack">{{vo['产品期限']}}个月</span></div>
                    </div>
                </div>
                <div class="foot dis-flex">
                    <div class="flex-1"></div>
                    <div class="right">
                        <div class="btn" @click="booking(key)" v-if="type == 0">我要预约</div>
                        <div class="btn" @click="bookingRes(key)" v-if="type == 1">查看结果</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ['info', 'type'],
  methods: {
    detail (key) {
      let url = `../detail/main?id=${key}`
      mpvue.setStorageSync('product_info', this.info[key])
      mpvue.navigateTo({ url })
    },
    booking (key) {
      let url = `../booking/main?id=${key}&isEdit=1`
      mpvue.setStorageSync('product_info', this.info[key])
      mpvue.navigateTo({ url })
    },
    bookingRes (key) {
      let url = `../booking/main?id=${key}&isEdit=0`
      mpvue.setStorageSync('product_info', this.info[key])
      // let url = `../bookingRes/main?id=${id}`
      mpvue.navigateTo({ url })
    }
  }
}
</script>

<style>
.product-list {
	margin-top: 20px;
}
.product-list .title {
	position: relative;
	padding: 0 15px;
	line-height: 20px;
	height: 20px;
	margin: 20px 0;
}
.product-list .title .left-color {
	position: absolute;
	left: 0;
	top: 0;
	bottom: 0px;
	width: 6px;
}
.product-list .title .bg1 {
	background: rgba(242, 167, 17, 1);
}
.product-list .title .bg2 {
	background: rgba(118, 209, 255, 1);
}
.product-list .title .bg3 {
	background: rgba(237, 152, 95, 1);
}
.product-list .title .bg4 {
	background: rgba(22, 234, 194, 1);
}

.product-list .title .right {
	float: right;
	font-size: 13px;
}
.product-list .item {
	margin: 15px;
	padding: 0 15px;
	background: #ffffff;
	border-radius: 2px;
	box-shadow: 0px 1px 5px 0px rgba(127, 127, 127, 0.2);
	font-size: 13px;
	line-height: 30px;
}
.product-list .item .top {
	padding: 10px 0;
	border-bottom: 1px solid rgba(245, 245, 245, 1);
}
.product-list .item .top .name {
	font-size: 16px;
	font-weight: bold;
}
.product-list .item .top .tag {
	background: rgba(255, 230, 214, 1);
	border-radius: 2px;
	font-size: 13px;
	color: rgba(234, 118, 40, 1);
	line-height: 30px;
	padding: 0 4px;
	margin-left: 4px;
}

.product-list .item .top .tag-2 {
	background: rgba(255, 241, 209, 1);
	color: rgba(242, 167, 17, 1);
}

.product-list .item .foot {
	padding: 10px 0;
	font-size: 12px;
	line-height: 24px;
	color: #999999;
}
.product-list .item .right .btn {
	border: 1px solid rgba(80, 158, 240, 1);
	border-radius: 20px;
	line-height: 30px;
	text-align: center;
	width: 100px;
	color: rgba(80, 158, 240, 1);
	margin-top: -9px;
}
</style>
