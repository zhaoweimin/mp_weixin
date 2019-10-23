<template>
  <div class="contract-card task-card" @click="detail(id)">
    <div class="order"><div class="bg">合同编号：201903201530326548</div></div>
    <div class="msg no-boder">
      <div class="line">
        <span class="key">类别：沟通</span>
      </div>
      <div class="line">
        <span class="key">主题：<span class="cblue">提成申请</span></span>
      </div>
      <div class="line">
        <span class="key">流程名称：提成申请</span>
      </div>
    </div>
    <div class="msg">
      <div class="line">
        <span class="key">起草人：张瑶</span>
      </div>
      <div class="line">
        <span class="key">发送人：张瑶</span>
        <span class="time">登记时间：2019-03-16 10:30</span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: ['text'],
  methods: {
    detail (id) {
      let url = `/pages/task/detail/main?id=${id}`
      mpvue.navigateTo({ url })
    }
  }
}
</script>

<style>
.task-card .time{
  float: right;
  font-size: 10px;
  color: #ccc;
}
</style>
