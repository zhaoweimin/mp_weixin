<template>
    <div class="main has-header">
        <search :rightButton="true" placeholder="搜索"></search>
        <block v-for="(vo, key) in list" :key="key">
            <card :info="vo" :type="5"></card>
        </block>
        <div class="btn-create" @click="link">
            <img class="icon-create" src="../../../img/create.png" alt="">
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

  mounted () {
    this.getList()
  },

  onReachBottom () {
    this.getList(this.page + 1)
  },

  methods: {
    getList (page = 1) {
      this.$api
        .getRoyaltyList(page)
        .then(res => {
          res = JSON.parse(res.RetValue)
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
    link () {
      mpvue.navigateTo({ url: `/pages/royalty/newList/main` })
    }
  },

  created () {}
}
</script>

<style scoped>
.btn-create {
	position: fixed;
	right: 15px;
	bottom: 50px;
	z-index: 999;
}
.icon-create {
	width: 60px;
	height: 60px;
}
</style>
