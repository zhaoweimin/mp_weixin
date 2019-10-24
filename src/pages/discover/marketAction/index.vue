<template>
    <div class="main">
        <van-search :value="searchValue" background="#259efa" placeholder="请输入搜索关键词" use-action-slot bind:search="onSearch">
            <div slot="action" class="cfff" @tap="onSearch">搜索</div>
        </van-search>
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
      searchValue: '',
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
    let title = ['可邀约活动', '历史活动']
    mpvue.setNavigationBarTitle({ title: title[type] })
  },

  methods: {
    changeNav (nav) {
      this.nav_num = nav
    },
    add () {
      let url = `../addAchievement/main`
      mpvue.navigateTo({ url })
    },
    onSearch () {
      console.log(111)
    },
    onCancel () {}
  },

  created () {}
}
</script>

<style scoped>
</style>
