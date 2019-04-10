<template>
  <div class="main">
   <div class="plr10 pt20">
     <div class="card bg-fff dis-flex l-end">
       <div class="card-left dis-flex flex-1 l-center a-center">
         <div class="dis-flex flex-column a-center l-center">
           <div class="strong f17 cblack mb20">可邀约活动</div>
           <span class="f12 clink btn-in">点击进入</span>
         </div>
       </div>
        <img class="card-img" src="../../../img/follow_1.png" alt="">   
     </div>
   </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },

  methods: {
  },

  created () {
  }
}
</script>

<style scoped>
.card{
  height:150px;
  box-shadow:0px 1px 9px 0px rgba(85,168,255,0.2);
  border-radius:0px 0px 2px 2px;
}
.card-left{
  height:150px;
}
.card-img{
  width: 155px;
  height:125px;
}
.btn-in{
  border: 1px solid #509EF0;
  border-radius: 50px;
  padding: 2px 13px;
}
</style>
