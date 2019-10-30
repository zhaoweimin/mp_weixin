<template>
    <div class="main has-header">
        <search placeholder="搜索应用、待办、报表"></search>
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

export default {
  data () {
    return {
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
            { text: '业绩新增', url: '../product/achievement/main', icon: require('../../img/two_3.png') },
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
      ]
    }
  },

  components: {
    item,
    search
  },

  mounted () {
    this.$api
      .test()
      .then(res => {
        console.log(res)
      })
      .then(res => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            console.log(2)
            resolve()
          }, 1000)
        })
      })
      .then(res => {
        console.log(3)
      })
  },

  methods: {
    link (url) {
      console.log(url)
      // mpvue.navigateTo({ url })
    }
  },

  created () {
    // let app = getApp()
  }
}
</script>

