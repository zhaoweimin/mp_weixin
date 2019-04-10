<template>
  <div class="main has-header">
    <navbar :info="nav" @changeNav="changeNav"></navbar>
    <block v-for="(vo, key) in info" :key="key">
      <product :info="vo" :type="nav_num"></product>
    </block>

    <footerIcon></footerIcon>
    
  </div>
</template>

<script>
import navbar from '@/components/navbar'
import product from '@/components/productList'
import footerIcon from '@/components/footerIcon'

export default {
  data () {
    return {
      nav: ['新建预约', '历史预约'],
      nav_num: 0,
      info: [
        {
          title: '基金',
          type: 0,
          list: [
            {type: 0},
            {type: 1},
            {type: 0},
            {type: 0}
          ]
        },
        {
          title: '股权',
          type: 1,
          list: [
            {type: 0},
            {type: 1},
            {type: 0},
            {type: 0}
          ]
        },
        {
          title: '证券',
          type: 2,
          list: [
            {type: 0},
            {type: 1},
            {type: 0},
            {type: 0}
          ]
        },
        {
          title: '其他',
          type: 3,
          list: [
            {type: 0},
            {type: 1},
            {type: 0},
            {type: 0}
          ]
        }
      ]
    }
  },

  components: {
    navbar,
    product,
    footerIcon
  },

  methods: {
    changeNav (nav) {
      this.nav_num = nav
    }
  },

  created () {
  }
}
</script>

<style scoped>

</style>
