<template>
  <div class="filter">
    <div class="dis-flex">
      <div class="nav flex-1">
        待办状态 <span class="iconfont iconxiangxiajiantou"></span>   
      </div>
      <div class="nav flex-1">
        待办类型 <span class="iconfont iconxiangxiajiantou"></span>   
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      is_show: 0,
      filter: {
        type: 0,
        level: 0,
        from: 0,
        inrto: 0
      }
    }
  },
  props: ['info'],
  methods: {
    setShowFilter () {
      this.is_show = this.is_show ? 0 : 1
    },
    sure () {
      this.setShowFilter()
    },
    reSet () {
      this.filter = {
        type: 0,
        level: 0,
        from: 0,
        inrto: 0
      }
    },
    setFilterType (val) {
      this.filter.type = val
    },
    setFilterLevel (val) {
      this.filter.level = val
    },
    setFilterFrom (val) {
      this.filter.from = val
    },
    setFilterIntro (val) {
      this.filter.inrto = val
    }
  }
}
</script>

<style>
.meng{
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,.3);
}
.filter {
  position: fixed;
  height: 50px;
  left: 0;
  top: 50px;
  right: 0;
  text-align: center;
  background: #ffffff;
  z-index: 10;
}

.filter .nav{
  font-size: 12px;
  height: 30px;
  line-height: 30px;
  margin: 10px 0;
  position: relative;
}
.iconxiangxiajiantou{
  font-size: 12px;
}
.clink .iconfont{
  font-weight: bold;
}
.select{
  position: fixed;
  right: 0;
  left: 20%;
  top: 0;
  bottom: 0;
  background: #ffffff;
  
  text-align: left;

}
.filter-block{
  position: absolute;
  padding: 20px;
  top: 0px;
  bottom: 40px;
  left: 0;
  right: 0;
  overflow: scroll;
}
.select .title{
  line-height: 40px;
  font-size: 18px;
  font-weight: bold;
}
.select .con {
  line-height: 30px;
  font-size: 12px;
}
.select .con .input{
  display: inline-block;
  box-sizing: border-box;
  height: 30px;
  border: 1px solid #9a9a9a;
  border-radius: 2px;
  vertical-align: middle;
  width: 30%;
  margin-right: 10px;
  background: #f5f5f5;
  text-align: center;
}
.select .con .type{
  background: #f5f5f5;
  text-align: center;
  width: 30%;
  margin-right: 5%;
  box-sizing: border-box;
  height: 30px;
  font-size: 12px;
  display: inline-block;
  vertical-align: middle;
  margin-bottom: 10px;
  color: #999999;
  border-radius: 2px;
}
.select .con .type.active{
  border: 1px solid #519eee;
  color: #519eee;
  background: #edf6ff;
}
.select .con .type:nth-child(3n){
  margin-right: 0px;
}
.select .footer{
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 40px;
  
}
.select .footer .btn{
  text-align: center;
  font-size: 14px;
  line-height: 40px;
  background: #f5f5f5;
  color: #999;
}
.select .footer .sure{
  background: #509ef0;
  color: #fff;
}
</style>
