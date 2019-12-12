<template>
    <div>
        <div class="contract-card" @click="booking(id)">
            <!-- <div class="order">合同编号：201903201530326548 <div class="copy">复制</div></div> -->
            <div class="order-two"><span class="bg">预约编号：201903201530326548</span></div>
            <div class="status c1" v-if="status == 0">审核中</div>
            <div class="status" v-if="status == 1">预约成功</div>
            <div class="status c2" v-if="status == 2">预约失败</div>
            <div class="title">
                <div class="name">产品名称：<span class="tag">产品名称</span> <span class="tag white">股权类</span></div>
            </div>
            <div class="msg no-boder">
                <div class="line">
                    <span class="key">产品限期：</span><span class="val">14个月</span>
                </div>
            </div>
            <div class="msg">
                <div class="line">
                    <span class="key">客户姓名：</span><span class="val">周方文</span>
                </div>
                <div class="line">
                    <span class="key">预约金额：</span><span class="val">2万</span>
                </div>
            </div>
            <div class="msg">
                <div class="line">
                    <span class="key">预计打款日期：2019-03-29</span>
                    <span class="clink fr">查看更多</span>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
  props: ['status'],
  data () {
    return {
      nav: ['新建预约', '历史预约'],
      nav_num: 0,
      info: []
    }
  },

  components: {},
  created () {
    console.log(this.status)
  },

  onLoad (option) {
    this.getList()
  },

  onReachBottom () {
    this.getList(this.page + 1)
  },

  methods: {
    getList (page = 1) {
      this.$api
        .getProductBookingList(page, this.type)
        .then(res => {
          console.log(res)
          if (res.success) {
            if (page === 1) {
              this.list = res.rows
            } else {
              this.list = this.list.concat(res.rows)
            }
            if (res.rows.length > 0) this.page = page
          }
        })
    },
    changeNav (nav) {
      this.nav_num = nav
    },
    booking (id) {
      let url = `../booking/main?id=${id}&isEdit=0`
      mpvue.navigateTo({ url })
    }
  }
}
</script>

<style scoped>
.contract-card {
	margin: 15px;
	border-radius: 2px;
	overflow: hidden;
	background: #ffffff;
	font-size: 13px;
	position: relative;
}
/* .contract-card.fail {
	color: #999999;
} */
.contract-card .status {
	position: absolute;
	right: 0;
	top: 40px;
	line-height: 20px;
	color: #f2a711;
	background: rgba(255, 238, 203, 1);
	padding: 0 10px;
	border-top-left-radius: 10px;
	border-bottom-left-radius: 10px;
}
.contract-card .status.c1 {
	background: #d9fff8;
	color: #16eac2;
}
.contract-card .status.c2 {
	background: #e0e0e0;
	color: #999999;
}
.contract-card .order {
	background: rgba(80, 158, 240, 1);
	line-height: 22px;
	height: 22px;
	font-size: 11px;
	color: #ffffff;
	padding: 0 15px;
}
.contract-card .order-two {
	/* background: rgba(80,158,240,1); */
	margin-top: 10px;
	line-height: 22px;
	height: 22px;
	font-size: 11px;
	color: #020202;
	/* padding: 0 15px; */
}
.contract-card .order-two .bg {
	background: #f0f0f0;
	padding-left: 15px;
}
.contract-card.fail .order {
	background: #e0e0e0;
	color: #999999;
}
.contract-card .order .copy {
	color: #ffffff;
	font: 10px;
	float: right;
	padding: 0 4px;
	box-sizing: border-box;
	border: 1px solid #ffffff;
	border-radius: 2px;
	line-height: 16px;
	margin-top: 2px;
}
.contract-card .title {
	margin: 10px 15px;
}
.contract-card .title .name {
	font-size: 16px;
	font-weight: bold;
}
.contract-card .title .tag {
	background: rgba(255, 230, 214, 1);
	border-radius: 4rpx;
	font-size: 26rpx;
	color: rgba(234, 118, 40, 1);
	line-height: 60rpx;
	padding: 0 8rpx;
	margin-left: 8rpx;
	font-weight: normal;
}
.contract-card .title .tag.white {
	background: #fff;
	color: rgba(234, 118, 40, 1);
	border: 1px solid rgba(255, 230, 214, 1);
	box-shadow: 0 0 2px rgba(234, 118, 40, 0.1);
}
.contract-card.fali .title .tag {
	background: #e0e0e0;
	color: #999999;
}
.contract-card .title .name .small {
	font-size: 13px;
}
.contract-card .title .number {
	margin-top: 4px;
	line-height: 20px;
	font-size: 13px;
	box-sizing: border-box;
	border-radius: 2px;
	padding: 0 6px;
	color: #509ef0;
	border: 1px solid #509ef0;
	display: inline-block;
}
.contract-card .msg {
	margin: 0 15px;
	padding: 6px 0;
	line-height: 24px;
	border-top: 0px solid rgba(240, 240, 240, 1);
}
.contract-card .msg .val {
	font-weight: bold;
}
.contract-card .no-boder {
	border-top: 0px solid rgba(240, 240, 240, 1);
}
</style>
