<template>
    <div class="main has-header">
        <search :rightButton="true" placeholder="搜索"></search>
        <block v-for="(vo, key) in list" :key="key">
            <card :info="vo" :type="4"></card>
        </block>
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
    }
  },

  created () {}
}
</script>

<style scoped>
</style>
