<template>
    <div class="main has-header">
        <search placeholder="搜索"></search>
        <div class="follow-block">
            <div class="items" @click="link(1)">
                <div class="bg">
                    <div class="img">
                        <img class="img-img" src="../../../img/follow_1.png" alt="">
                    </div>
                    <div class="text">今日需跟进客户</div>
                </div>
            </div>
            <div class="items" @click="link(2)">
                <div class="bg">
                    <div class="img">
                        <img class="img-img" src="../../../img/follow_2.png" alt="">
                    </div>
                    <div class="text">计划跟进客户</div>
                </div>
            </div>
            <div class="items" @click="link(3)">
                <div class="bg">
                    <div class="img">
                        <img class="img-img" src="../../../img/follow_3.png" alt="">
                    </div>
                    <div class="text">本周需跟进客户</div>
                </div>
            </div>
            <div class="items" @click="link(4)">
                <div class="bg">
                    <div class="img">
                        <img class="img-img" src="../../../img/follow_4.png" alt="">
                    </div>
                    <div class="text">超过30天未跟进客户</div>
                </div>
            </div>
            <div class="items type-two" @click="add()">
                <div class="bg">
                    <div class="img">
                        <img class="img-img" src="../../../img/follow_5.png" alt="">
                    </div>
                    <div class="text">新增</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import search from '@/components/search'
export default {
  data () {
    return {}
  },

  components: {
    search
  },
  created () {
    // let app = getApp()
  },
  methods: {
    link (type) {
      // type: 1.今日 2.计划 3.本周 4.未跟进
      let url = `../followList/main?type=${type}`
      mpvue.navigateTo({ url })
    },
    add () {
      let url = `../addFollow/main`
      mpvue.navigateTo({ url })
    }
  }
}
</script>

<style scoped>
.follow-block {
	margin: 10px 0;
	padding: 20px;
	background: #ffffff;
}
.follow-block .items {
	display: inline-block;
	width: 155px;
	height: 140px;
	box-sizing: border-box;
	border: 1px solid #509ef0;
	border-radius: 4px;
	margin-right: 25px;
	margin-bottom: 25px;
}
.follow-block .items.type-two {
	border: 1px solid #0feac0;
}
.follow-block .items:nth-child(2n) {
	margin-right: 0px;
}
.follow-block .items .bg {
	border: 1px solid #509ef0;
	box-sizing: border-box;
	border-radius: 4px;
	position: relative;
	width: 154px;
	height: 140px;
	right: 5px;
	top: 5px;
	background: #ffffff;
	overflow: hidden;
}
.follow-block .items.type-two .bg {
	border: 1px solid #0feac0;
}
.follow-block .items .bg .img {
	text-align: center;
}
.img-img {
	width: 100px;
	height: 83px;
	margin: 13px auto;
	display: block;
}
.follow-block .items .bg .text {
	line-height: 30px;
	background: #509ef0;
	color: #ffffff;
	font-size: 13px;
	text-align: center;
}
.follow-block .items.type-two .bg .text {
	background: #0feac0;
}
</style>
