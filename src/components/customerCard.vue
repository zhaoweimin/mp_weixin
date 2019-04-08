<template>
  <div class="customer-card">
    <div class="dis-flex">
      <div class="avatar">
        <img class="img" :src="avatar" mode="aspectFill">
      </div>
      <div class="msg">
        <div class="title"><span class="strong">{{info.name}}</span> <span class="sex">{{info.sex ? '先生' : '女士'}}</span></div>
        <div class="tags level-1" v-if="info.level == 1">
          <div class="tag">历史成交客户</div>
          <div class="tag level">A级</div>
        </div>
        <div class="tags level-2" v-if="info.level == 2">
          <div class="tag">成交客户</div>
          <div class="tag level">B级</div>
        </div>
        <div class="tags level-3" v-if="info.level == 3">
          <div class="tag">准客户</div>
          <div class="tag level">C级</div>
        </div>
        <div class="tags level-4" v-if="info.level == 4">
          <div class="tag">潜在客户</div>
          <div class="tag level">D级</div>
        </div>
      </div>
      <div class="more" @click="linkDetail()">更多<span class="iconfont iconright"></span></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      avatar: 'https://wx.qlogo.cn/mmopen/vi_32/Po7hia4bia7Ua8tZxjcLfpHsEKgzMT3wf3HzhE6TqQHqsbXSL72dFpjIlPmAYuzv5VVpgic1iaZ703Op5I4LovGOgg/132?imageView2/2/w/100/q/80/v='
    }
  },
  props: ['info'],
  methods: {
    changeNav (nav) {
      this.nav = nav
    },
    linkDetail () {
      let url = `../customer/main?id=1`
      mpvue.navigateTo({ url })
    }
  }
}
</script>

<style>

</style>
