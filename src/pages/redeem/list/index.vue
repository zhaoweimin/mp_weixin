<template>
    <div class="main has-header">
        <search :rightButton="true" placeholder="搜索"></search>
        <block v-for="(vo, key) in list" :key="key">
            <card :info="vo" :type="41"></card>
        </block>
        <div class="dis-flex a-center ptb15">
            <van-button plain type="info" @click="link">+ 新增赎回</van-button>
        </div>
    </div>
</template>

<script>
import navbar from '@/components/navbar'
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
        }
      ]
    }
  },

  components: {
    navbar,
    card,
    search
  },

  methods: {
    changeNav (nav) {
      this.nav_num = nav
    },
    link () {
      mpvue.navigateTo({ url: `/pages/redeem/newList/main` })
    }
  },

  created () {}
}
</script>

<style scoped>
</style>
