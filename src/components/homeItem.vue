<template>
  <div class="block">
    <div class="title">{{info.title}}</div>
    <div class="con">
        <div class="item" v-for="(vo, key) in info.list" :key="key" @click="link(vo.url)">
            <div class="icon"><img class="img" :src="vo.icon" mode="aspectFill"></div>
            <div class="name">{{vo.text}}</div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['info'],
  methods: {
    link (url) {
      if (url) {
        mpvue.navigateTo({ url })
      }
    }
  }
}
</script>

<style>
.application .con .item .icon .img{
 width: 100%;
 height: 100%;
}
</style>
