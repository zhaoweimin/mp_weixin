<template>
  <div>
    <div class="task-card">
      <div class="status">
        任务-<span class="c1">未完成</span>
        <div class="horn"></div>
      </div>
      <div class="auth">发起人:陈明</div>
      <div class="base">
        <div class="title">下周互联网行业展准备工作，提前与展会商沟通好巡场时间。</div>
        <div class="line">1、搭建展台，易拉宝20个;</div>
        <div class="line">2、巡场举牌。</div>
      </div>
      <div class="base">
        <div class="line">
          <div class="key">创建时间：</div>
          <div class="val">03-11（周三）10:15</div>
        </div>
        <div class="line">
          <div class="key">完成时间：</div>
          <div class="val">03-18（周一）14:00</div>
        </div>
      </div>
      <div class="base">
        <div class="line">
          <div class="key">参与成员：</div>
          <div class="val">陈明、刘丽杭、孙铭杰</div>
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
.task-card{
  position: relative;
  margin: 15px;
  padding: 0 15px;
  background: #ffffff;
  border-radius: 4px;
  /* overflow: hidden; */
  font-size: 13px;
}
.task-card .auth{
  padding: 10px 0;
  line-height: 30px;
}
.task-card .base{
  padding: 10px 0;
  line-height: 24px;
  border-top: 1px solid #F5F5F5;
}
.task-card .base .title{
  font-weight: bold;
}
.task-card .base .line{
  display: flex;
}
.task-card .base .line .key{
  color: #999999;
  flex: 1;
}
.task-card .status{
  position: absolute;
  right: -6px;
  top: 0px;
  line-height: 24px;
  background: #FEECD9;
  padding: 0px 10px;
  color: #FFB96E;
}
.task-card .status .c1{
  color: #FE901B;
}
.task-card .horn{
  position: absolute;
  bottom: -04px;
  right: 0;
  width:0;
  height:0;
	border-right:5px solid transparent;
	border-left:5px solid transparent;
  border-bottom:5px solid #EAC7A1;
  transform:rotate(-45deg);
}
</style>
