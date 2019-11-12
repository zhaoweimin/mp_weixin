<template>
    <div class="main has-header">
        <search :rightButton="true" placeholder="搜索"></search>
        <block v-for="(vo, key) in list" :key="key">
            <card :info="vo" :type="8"></card>
        </block>
    </div>
</template>

<script>
import card from '@/components/achievementCard'
import search from '@/components/search'

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
    card,
    search
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
    onSearch () {
      console.log(111)
    },
    onCancel () {}
  },

  created () {}
}
</script>

<style scoped>
.c-inputclass {
	height: 10px;
}
</style>
