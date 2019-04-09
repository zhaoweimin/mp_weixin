<template>
  <div class="main">
    <div class="success">
      <div class="icon"><span class="iconfont iconchenggong"></span></div>
      <div class="text">操作成功</div>
      <div class="tips">审核已成功提交，预计将在3个工作日内通过</div>
      <div class="tips">请留意消息提醒</div>

      <button class="btn-success" @click="back">返回</button>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },

  data () {
    return {
    }
  },
  methods: {
    back () {
      let url = `/pages/home/main`
      mpvue.switchTab({ url })
    }
  },

  created () {
  }
}
</script>

<style>
page{
  background: #ffffff;
}
.success{
  padding: 40px 15px;
}
.success .icon{
  text-align: center;
}
.success .icon .iconfont{
  font-size: 120px;
  color: #09BB07;
}
.success .text{
  font-size: 20px;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 20px;
}
.success .tips{
  padding: 0 30px;
  font-size: 14px;
  color: #999999;
  line-height: 20px;
}
.btn-success{
  margin-top: 20px;
  background: #09BB07;
  border-radius: 5px;
  color: #ffffff;
  font-size: 16px;
}
</style>
