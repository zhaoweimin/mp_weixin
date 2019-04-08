<template>
  <div class="main">
    <div class="search bg-blue">
      <div class="dis-flex">
        <div class="icon cgey"><span class="iconfont iconsearch-1-copy"></span></div>
        <div class="input flex-1">
          <input type="text" placeholder="搜索应用、待办、报表">
        </div>
      </div>
    </div>
    <div class="application">
      <block v-for="(vo, key) in data" :key="key">
        <item :info="vo" text="文字"></item>
      </block>
    </div>
  </div>
</template>

<script>
import item from '@/components/homeItem'

export default {
  data () {
    return {
      data: [
        {
          title: '客户管理',
          list: [
            {text: '客户档案', url: '../customer/archives/main', icon: '../../img/one_1.png'},
            {text: '客户新增', url: '../customer/add/main', icon: '../../img/one_2.png'},
            {text: '客户跟进', url: '../customer/follow/main', icon: '../../img/one_3.png'},
            {text: '客户投诉', url: '../customer/report/main', icon: '../../img/one_4.png'}
          ]
        },
        {
          title: '业绩管理',
          list: [
            {text: '产品预约', url: '../product/booking/main', icon: '../../img/two_1.png'},
            {text: '合同管理', icon: '../../img/two_2.png'},
            {text: '业绩新增', icon: '../../img/two_3.png'},
            {text: '历史业绩', icon: '../../img/two_4.png'}
          ]
        },
        {
          title: '收入管理',
          list: [
            {text: '客户计息', icon: '../../img/three_1.png'},
            {text: '产品提成', icon: '../../img/three_2.png'}
          ]
        },
        {
          title: '线索发现',
          list: [
            {text: '消息提醒', icon: '../../img/four_1.png'},
            {text: '市场活动', icon: '../../img/four_2.png'},
            {text: '在售产品', icon: '../../img/four_3.png'},
            {text: '知识库', icon: '../../img/four_4.png'}
          ]
        }
      ]
    }
  },

  components: {
    item
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

