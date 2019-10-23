<template>
    <div class="main">
        <div class="plr10 pt20">
            <div class="card bg-fff dis-flex l-end" v-for="(vo, key) in list" :key="key">
                <div class="card-left dis-flex flex-1 l-center a-center">
                    <div class="dis-flex flex-column a-center l-center">
                        <div class="strong f17 cblack mb20">{{vo.name}}</div>
                        <span class="f12 clink btn-in" @click="link(vo.url)">点击进入</span>
                    </div>
                </div>
                <img class="card-img" src="../../../img/follow_1.png" alt="">
            </div>
        </div>
        <van-tabbar :active="active" @change="onChange">
            <van-tabbar-item icon="home-o">市场活动</van-tabbar-item>
            <van-tabbar-item icon="search">待审批</van-tabbar-item>
            <van-tabbar-item icon="friends-o">同意</van-tabbar-item>
            <van-tabbar-item icon="setting-o">拒绝</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0,
      list: [
        { name: '可邀约活动', url: `/pages/discover/marketAction/main?type=0` },
        { name: '历史活动', url: `/pages/discover/marketAction/main?type=1` },
        { name: '历史邀约客户', url: `/pages/discover/marketCustomer/main` }
      ]
    }
  },

  methods: {
    link (url) {
      if (url) {
        mpvue.navigateTo({ url })
      }
    },
    onChange (event) {
      this.active = event.mp.detail
    }
  },

  created () {}
}
</script>

<style scoped>
.card {
	margin: 10px 0;
	height: 150px;
	box-shadow: 0px 1px 9px 0px rgba(85, 168, 255, 0.2);
	border-radius: 0px 0px 2px 2px;
}
.card-left {
	height: 150px;
}
.card-img {
	width: 155px;
	height: 125px;
}
.btn-in {
	border: 1px solid #509ef0;
	border-radius: 50px;
	padding: 2px 13px;
}
</style>
