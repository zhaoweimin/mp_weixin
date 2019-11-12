<template>
    <div class="main has-header">
        <search placeholder="搜索" :rightButton="true"></search>
        <div class="filter f13 clink">
            <span class="iconfont iconshaixuan"></span> 筛选
        </div>
        <block v-for="(vo, key) in list" :key="key">
            <!-- <card :info="vo" :type="3"></card> -->
            <div class="contract-card history" @click="detail(key)">
                <div class="order">
                    <div class="bg">业绩单号：201265849215</div>
                </div>
                <div class="msg no-boder">
                    <div class="line">
                        <span class="key">客户姓名：周方文</span>
                    </div>
                </div>
                <div class="msg">
                    <div class="line"><span class="key pr10 strong">产品名称</span><span class="label-blue-outline">股权类</span></div>
                </div>
                <div class="msg no-boder">
                    <div class="line"><span class="key">产品期限：14个月</span></div>
                    <div class="line"><span class="key">合同金额：20万</span></div>
                    <div class="line"><span class="key">确认收款日：2019-3-21</span></div>
                </div>
                <div class="msg no-boder">
                    <div class="line"><span class="key">起息日：2019-4-1</span></div>
                    <div class="line"><span class="key">产品到期日：2019-10-1</span></div>
                </div>
                <div class="add" @click="add(key)">追加</div>
                <div class="status">
                    <img class="img" src="../../../img/check_in.png" alt="">
                </div>
                <div class="icon">
                    <span class="iconfont iconright cgey"></span>
                </div>
            </div>
        </block>
    </div>
</template>

<script>
import card from '@/components/achievementCard'
import search from '@/components/search'

export default {
  data () {
    return {
      nav: ['销售新增', '财务新增', '业绩打回'],
      nav_num: 0,
      list: [
        {
          name: '张耀阳'
        },
        {
          name: '刘世勋'
        },
        {
          name: '方世伟'
        },
        {
          name: '董颖'
        }
      ]
    }
  },

  components: {
    card,
    search
  },

  methods: {
    changeNav (nav) {
      this.nav_num = nav
    },
    add () {
      let url = `../addAchievement/main`
      mpvue.navigateTo({ url })
    },
    detail (id) {
      let url = `../historyDetail/main?id=${id}`
      mpvue.navigateTo({ url })
    }
  },

  created () {}
}
</script>

<style scoped>
.history {
	position: relative;
	overflow: hidden;
}
.history .add {
	position: absolute;
	bottom: 15px;
	right: 15px;
	color: #259efa;
	text-align: center;
	width: 70px;
	height: 20px;
	line-height: 20px;
	font-size: 12px;
	border: 1px solid #259efa;
	border-radius: 10px;
}
.history .icon {
	position: absolute;
	top: 150px;
	right: 15px;
}
.history .status {
	position: absolute;
	top: 16px;
	right: 0;
	padding: 0;
	background: #fff;
	width: 42px;
	height: 38px;
}
.history .status .img {
	width: 100%;
	height: 100%;
}
.filter {
	position: relative;
	top: 10px;
	height: 40px;
	line-height: 40px;
	padding: 0 15px;
	text-align: right;
	background: none;
}
.filter .iconfont {
	font-size: 13px;
}
</style>
