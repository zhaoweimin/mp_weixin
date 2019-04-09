<template>
  <div>
    <div class="contract-card">
      <div class="order">合同编号：201903201530326548</div>
      <div class="status">已回收</div>
      <div class="title">
        <div class="name">预约产品：<span class="small">产品名称</span></div>
        <div class="number">预约编号：2251654811654456544</div>
      </div>
      <div class="msg no-boder">
        <div class="line">
          <span class="key">产品限期：</span><span class="clink">(14个月)</span><span class="cgey">2018-03-20至2019-5-20</span>
        </div>
        <div class="line">
          <span class="key">发放日期：</span><span class="clink">2019-3-22</span>
        </div>
      </div>
      <div class="msg">
        <div class="line">
          <span class="key">预约客户：</span><span class="val">周方文</span>
        </div>
        <div class="line">
          <span class="key">证件号码：</span><span class="clink">521012335854895465</span>
        </div>
      </div>
      <div class="msg">
        <div class="line">
          <span class="key">回收日期：</span><span class="clink">2019-3-26</span>
        </div>
        <div class="line">
          <span class="key">作废日期：</span><span class="clink">2019-3-30</span>
        </div>
      </div>
      <div class="msg">
        <div class="line">
          <span class="key">合同申请人：</span><span class="val">陈伟</span>
        </div>
        <div class="line">
          <span class="key">归属部门：</span><span class="val">市场部</span>
        </div>
      </div>
      <div class="msg">
        <div class="line">
          <span class="key">发放人：</span><span class="val">陈李阳</span>
        </div>
        <div class="line">
          <span class="key">发放部门：</span><span class="val">法务部</span>
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
.contract-card{
  margin: 15px;
  border-radius: 2px;
  overflow: hidden;
  background: #ffffff;
  font-size: 13px;
  position: relative;
}
.contract-card .status{
  position: absolute;
  right: 0;
  top: 40px;
  line-height: 20px;
  color: #16EAC2;
  background: #D9FFF8;
  padding: 0 10px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}
.contract-card .order{
  background: rgba(80,158,240,1);
  line-height: 22px;
  height: 22px;
  font-size: 11px;
  color: #ffffff;
  padding: 0 15px;
}
.contract-card .title{
  margin: 10px 15px;
}
.contract-card .title .name{
  font-size: 16px;
  font-weight: bold;
}
.contract-card .title .name .small{
  font-size: 13px;
}
.contract-card .title .number{
  margin-top: 4px;
  line-height: 20px;
  font-size: 13px;
  box-sizing: border-box;
  border-radius: 2px;
  padding: 0 6px;
  color: #509EF0;
  border: 1px solid #509EF0;
  display: inline-block;
}
.contract-card .msg{
  margin: 0 15px;
  padding: 10px 0;
  line-height: 24px;
  border-top: 1px solid rgba(240,240,240,1);
}
.contract-card .msg .val{
  font-weight: bold;
}
.contract-card .no-boder{
  border-top: 0px solid rgba(240,240,240,1);
}

</style>
