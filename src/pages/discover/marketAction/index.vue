<template>
    <div class="main has-header">
        <search :rightButton="true" placeholder="搜索"></search>
        <block v-for="(vo, key) in list" :key="key">
            <card :info="vo" :type="8" :actionType="type"></card>
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
      list: [],
      page: 1
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

    this.getList()
    // if (type === '0') {
    // } else {
    //   this.getHistoryList()
    // }
  },

  onReachBottom () {
    this.getList(this.page + 1)
    // if (this.type === 0) {
    // } else {
    //   this.getHistoryList(this.page + 1)
    // }
  },

  methods: {
    getList (page = 1) {
      this.$api
        .getDiscoverMarkerExerciseList(page)
        .then(res => {
          console.log(res)
          if (res.success) {
            if (page === 1) {
              this.list = res.rows
            } else {
              this.list = this.list.concat(res.rows)
            }
            if (res.rows.length > 0) this.page = page
          }
        })
    },
    getHistoryList (page = 1) {
      this.$api
        .getDiscoverMarkerHistoryExerciseList(page)
        .then(res => {
          console.log(res)
          if (res.success) {
            if (page === 1) {
              this.list = res.rows
            } else {
              this.list = this.list.concat(res.rows)
            }
            if (res.rows.length > 0) this.page = page
          }
        })
    },
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
