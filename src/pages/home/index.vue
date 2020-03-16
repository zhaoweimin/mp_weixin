<template>
    <div class="main">
        <div class="bg-fff info f14 flex l-end a-right pr10 pb10 mt10 border-box">
          <div class="mr10 f12 cgey">您好~ </div> <div class="f16 cblack">{{account.Name}}</div>
          <!-- <div class="btn-login bg-blue cfff flex l-center a-center f12" @click="login">去登陆</div>  -->
        </div>
        <search :fixed="false" placeholder="搜索应用、待办、报表"></search>
        <div class="application">
            <block v-for="(vo, key) in data" :key="key">
                <item :info="vo" text="文字"></item>
            </block>
        </div>
    </div>
</template>

<script>
import item from '@/components/homeItem'
import search from '@/components/search'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      account: {},
      data: [
        {
          title: '客户管理',
          list: [
            { text: '客户档案', url: '../customer/archives/main', icon: require('../../img/one_1.png') },
            { text: '客户新增', url: '../customer/create/main', icon: require('../../img/one_2.png') },
            { text: '客户跟进', url: '../customer/follow/main', icon: require('../../img/one_3.png') },
            { text: '客户投诉', url: '../customer/report/main', icon: require('../../img/one_4.png') }
          ]
        },
        {
          title: '业绩管理',
          list: [
            { text: '产品预约', url: '../product/bookingList/main', icon: require('../../img/two_1.png') },
            { text: '合同管理', url: '../product/contract/main', icon: require('../../img/two_2.png') },
            { text: '业绩新增', url: '../product/achievementCreate/main', icon: require('../../img/two_3.png') },
            { text: '历史业绩', url: '../product/historyAchievement/main', icon: require('../../img/two_4.png') }
          ]
        },
        {
          title: '收入管理',
          list: [
            { text: '客户计息', url: '../interest/list/main', icon: require('../../img/three_1.png') },
            { text: '产品提成', url: '../royalty/list/main', icon: require('../../img/three_2.png') },
            { text: '业绩赎回', url: '../redeem/list/main', icon: require('../../img/three_3.png') }
          ]
        },
        {
          title: '线索发现',
          list: [
            { text: '消息提醒', url: '../discover/message/main', icon: require('../../img/four_1.png') },
            { text: '市场活动', url: '../discover/market/main', icon: require('../../img/four_2.png') },
            { text: '在售产品', url: '../discover/product/main', icon: require('../../img/four_3.png') },
            { text: '知识库', url: '../discover/lore/main', icon: require('../../img/four_4.png') }
          ]
        }
      ],
      textStore: this.$store.state
    }
  },

  ...mapState({
    test: 'test'
  }),

  components: {
    item,
    search
  },

  mounted () {
    // 通过mutations 修改vuex 里面保存的值
    this.$store.commit('setTest')
    // 通过Action 修改vuex 里面保存的值
    this.$store.dispatch('setTest')
    // 通过store的state 获取vuex保存的值 (直接使用这个方法获取就好了 不用getters)
    // console.log(this.$store.state.test.test)
    // 通过store的getters 获取vuex保存的值
    // console.log(this.$store.getters.getTest)
    // 测试直接在data 中赋值的store
    // console.log(this.textStore)
    this.account = this.$store.state.account.info.RetValue
    // console.log(this.account);
  },

  methods: {
    // login () {
    //   mpvue.navigateTo({ url:'../login/main' })
    // }
  },

  created () {
    // let app = getApp()
  }
}
</script>
<style scoped>
  .info{
    height: 36px;
  }
  .btn-login{
    width: 50px;
    height: 20px;
    border-radius: 3px;
  }
</style>

