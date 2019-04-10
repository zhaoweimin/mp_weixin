<template>
  <div>
    <div class="footer-icon">
      <div class="dis-flex">
        <div class="flex-1">
          <div class="icon"><span class="iconfont iconjiahao"></span></div>
          <div class="text">新建</div>
        </div>
        <div class="flex-1" @click="bookingStatus(0)">
          <div class="icon"><span class="iconfont iconjiahao"></span></div>
          <div class="text">审核中</div>
        </div>
        <div class="flex-1" @click="bookingStatus(1)">
          <div class="icon"><span class="iconfont iconjiahao"></span></div>
          <div class="text" >预约成功</div>
        </div>
        <div class="flex-1" @click="bookingStatus(2)">
          <div class="icon"><span class="iconfont iconjiahao"></span></div>
          <div class="text">预约失败</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['text']
}
</script>

<style>
.footer-icon {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 50px;
  background: #fff;
  z-index: 10;
  font-size: 13px;
  text-align: center;
  color: #999999;
  box-shadow: 0 0 5px rgba(85,168,255,0.2);
}
.footer-icon .flex-1{
  padding: 5px 0;
}
.footer-icon .icon{
  line-height: 25px;
}
.footer-icon .icon .iconfont{
  font-size: 20px;
}
.footer-icon .text{
  line-height: 15px;
}
</style>
