<template>
  <div class="main">
    <block v-for="(vo, key) in list" :key="key">
      <card :info="vo" :type="8"></card>
    </block>
  </div>
</template>

<script>
import card from '@/components/achievementCard'

export default {
  data () {
    return {
      type: 0,
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
    card
  },

  onLoad (option) {
    let type = option.type
    this.type = type
    let title = [
      '可邀约活动',
      '历史活动'
    ]
    mpvue.setNavigationBarTitle({ title: title[type] })
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
