<template>
  <div class="main has-header has-footer">
    <navbar :info="nav" @changeNav="changeNav"></navbar>
    <block v-for="(vo, key) in list" :key="key">
      <card :info="vo" :type="nav_num"></card>
    </block>
    <div class="fixed-btn">
      <button class="btn" @click="add()"><span class="iconfont iconjiahao"></span> 新增</button>
    </div>
  </div>
</template>

<script>
import navbar from '@/components/navbar'
import card from '@/components/achievementCard'

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
    navbar,
    card
  },

  methods: {
    changeNav (nav) {
      this.nav_num = nav
    },
    add () {
      let url = `../addAchievement/main`
      mpvue.navigateTo({ url })
    }
  },

  created () {
  }
}
</script>

<style scoped>

</style>
