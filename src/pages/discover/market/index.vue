<template>
    <div class="main has-footer">
        <div v-if="active===0" class="plr10">
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
        <div class="items" v-if="active!==0">
            <div class="item ptb">
                <div class="dis-flex l-baseline">
                    <div class="f18 strong pr5">张耀阳</div>
                    <div class="f12 cgey">先生</div>
                </div>
                <div class="dis-flex mb10">
                    <div class="label-yellow-outline mr10">历史成交客户</div>
                    <div class="label-yellow">A级</div>
                </div>
                <div class="foot dis-flex l-end">
                    <div class="flex-1">
                        <div class="cgey">活动名称：<span class="cblack">陈伟</span></div>
                        <div class="cgey mb10">邀约日期：<span class="cblack">默认当前</span></div>
                        <div class="cgey">审批状态：<span class="clink">{{status}}</span></div>
                    </div>
                    <div class="right">
                        <div class="clink f12" @click="link(`/pages/discover/details/main?type=${active}`)">查看更多</div>
                    </div>
                </div>
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
const titles = new Map([['0', '市场活动'], ['1', '待审批'], ['2', '同意'], ['3', '拒绝']])
export default {
  data () {
    return {
      active: 0,
      status: '',
      list: [
        { name: '可邀约活动', url: `/pages/discover/marketAction/main?type=0` },
        { name: '历史活动', url: `/pages/discover/marketAction/main?type=1` },
        { name: '历史邀约客户', url: `/pages/discover/marketCustomer/main?type=2` }
      ]
    }
  },
  methods: {
    link (url) {
      console.log(url)
      if (url) {
        mpvue.navigateTo({ url })
      }
    },
    onChange (event) {
      this.active = event.mp.detail
      this.status = titles.get(String(event.mp.detail))
      wx.setNavigationBarTitle({
        title: titles.get(String(event.mp.detail))
      })
    }
  }
}
</script>

<style scoped>
.card {
	margin: 10px 0;
	height: 150px;
	box-shadow: 0px 1px 5px 0px rgba(127, 127, 127, 0.2);
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

.item {
	margin: 15px;
	padding: 15px;
	background: #ffffff;
	border-radius: 2px;
	box-shadow: 0px 1px 5px 0px rgba(127, 127, 127, 0.2);
	font-size: 13px;
	line-height: 30px;
}
.item .top {
	padding: 10px 0;
	border-bottom: 1px solid rgba(245, 245, 245, 1);
}
.item .top .name {
	font-size: 18px;
	font-weight: bold;
}
.item .top .tag {
	background: rgba(255, 230, 214, 1);
	border-radius: 2px;
	font-size: 13px;
	color: rgba(234, 118, 40, 1);
	line-height: 30px;
	padding: 0 4px;
	margin-left: 4px;
}

.item .top .tag-2 {
	background: rgba(255, 241, 209, 1);
	color: rgba(242, 167, 17, 1);
}

.item .foot {
	font-size: 12px;
	line-height: 16px;
}
.item .right .btn {
	border: 1px solid rgba(80, 158, 240, 1);
	border-radius: 20px;
	line-height: 30px;
	text-align: center;
	width: 100px;
	color: rgba(80, 158, 240, 1);
	margin-top: 9px;
}
</style>
