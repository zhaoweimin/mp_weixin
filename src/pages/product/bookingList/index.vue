<template>
    <div class="main ">
        <div class="has-header" v-if="tag == 0">
            <navbar :info="nav" @changeNav="changeNav"></navbar>
            <block v-for="(vo, key) in info" :key="key">
                <product :info="vo" :type="nav_num"></product>
            </block>
        </div>

        <div v-if="tag == 1">
            <booking :status="0"></booking>
        </div>
        <div v-if="tag == 2">
            <booking :status="1"></booking>
        </div>
        <div v-if="tag == 3">
            <booking :status="2"></booking>
        </div>

        <footerIcon @change="changeTag"></footerIcon>

    </div>
</template>

<script>
import navbar from '@/components/navbar'
import product from '@/components/productList'
import footerIcon from '@/components/footerIcon'
import booking from '@/pages/product/bookingRes/index'

export default {
  data () {
    return {
      nav: ['新建预约', '历史预约'],
      nav_num: 0,
      tag: 0,
      info: [
        {
          title: '基金',
          type: 0,
          list: [{ type: 0 }, { type: 1 }, { type: 0 }, { type: 0 }]
        },
        {
          title: '股权',
          type: 1,
          list: [{ type: 0 }, { type: 1 }, { type: 0 }, { type: 0 }]
        },
        {
          title: '证券',
          type: 2,
          list: [{ type: 0 }, { type: 1 }, { type: 0 }, { type: 0 }]
        },
        {
          title: '其他',
          type: 3,
          list: [{ type: 0 }, { type: 1 }, { type: 0 }, { type: 0 }]
        }
      ]
    }
  },

  components: {
    navbar,
    product,
    footerIcon,
    booking
  },

  methods: {
    changeNav (nav) {
      this.nav_num = nav
    },
    changeTag (tag) {
      this.tag = tag
      let title = ['产品预约', '审核中', '预约成功', '预约失败']
      mpvue.setNavigationBarTitle({ title: title[tag] })
    }
  },

  created () {}
}
</script>

<style scoped>
</style>
