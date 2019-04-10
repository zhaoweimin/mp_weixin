<template>
  <div class="main">
   <div class="box plr10 pt15">
     <div class="item dis-flex bg-fff plr20 pt15 pb10">
       <div class="flex-1">
         <div class="f17 mb15 cblack strong">某某产品预约已通过审核</div>
         <div class="f13 cgey">发送时间：2019-03-20 15:52</div>
       </div>
       <div class="dis-flex flex-column l-end">
         <div class="f13 clink">未读</div> 
         <div class="f13 clink btn-detail clink mt15">前往查看</div> 
        </div>
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
.item{
  box-shadow:0px 1px 9px 0px rgba(85,168,255,0.2);
  border-radius: 2px;
}
.btn-detail{
  padding: 2px 8px;
  border-radius: 50px;
  border: 1px solid #509EF0;
}
</style>
