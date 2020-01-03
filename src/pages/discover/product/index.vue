<template>
    <div class="main has-big-header">
        <navbar :info="nav" @changeNav="changeNav"></navbar>
		    <search :fixed="false" :isMainBg="false" :rightButton="true" placeholder="搜索"></search>
        <block v-if="nav_num===0">
            <card v-for="(vo, key) in list" :key="key" :info="vo" :type="6" :status="nav_num"></card>
        </block>
        <block v-else>
            <card v-for="(vo, key) in list" :key="key" :info="vo" :type="6" :status="nav_num"></card>
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
      nav: ['在售产品', '历史产品'],
      nav_num: 0,
      list: []
    }
  },

  components: {
    navbar,
    card,
    search
  },

  mounted () {
    this.getList()
  },

  onReachBottom () {
    return false
    this.getList(this.page + 1)
  },

  methods: {
    getList (page = 1) {
      this.$api
        .getDiscoverProductList(page, this.nav_num)
        .then(res => {
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
      this.getList()
    }
  },

  created () {}
}
</script>

<style scoped>
</style>
