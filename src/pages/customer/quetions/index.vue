<template>
  <div class="main">
    <div class="block" @click="create(1)">
      <img src="../../../img/personal_creat.jpg" alt="" mode="aspectFit">
    </div>
    <div class="block" @click="create(2)">
      <img src="../../../img/company_creat.jpg" alt="" mode="aspectFit">
    </div>
  </div>
</template>

<script>
import navbar from '@/components/navbar'
import fliter from '@/components/fliterLine'
import card from '@/components/customerCard'

export default {
  data () {
    return {
    }
  },

  components: {
    navbar,
    fliter,
    card
  },

  methods: {
    create (type) {
      let url = `../add/main?type=${type}`
      mpvue.navigateTo({ url })
    }
  },

  created () {
    // let app = getApp()
  }
}
</script>

<style scoped>
.block{
  margin: 15px;
  width: 345px;
  border-radius: 6px;
  overflow: hidden;
}
.block img{
  width: 100%;
  height: 120px;
}
</style>
