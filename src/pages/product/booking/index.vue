<template>
  <div class="main has-header">
    <navbar :info="nav" @changeNav="changeNav"></navbar>
    <block v-for="(vo, key) in info" :key="key">
      <product :info="vo"></product>
    </block>
  </div>
</template>

<script>
import navbar from '@/components/navbar'
import product from '@/components/productList'

export default {
  data () {
    return {
      nav: ['新建预约', '历史预约'],
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
    product
  },

  methods: {
    changeNav (nav) {
      console.log(nav)
    }
  },

  created () {
  }
}
</script>

<style scoped>

</style>
