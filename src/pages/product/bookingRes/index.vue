<template>
  <div>
    <div class="contract-card">
      <div class="order">合同编号：201903201530326548 <div class="copy">复制</div></div>
      <div class="status">预约成功</div>
      <div class="title">
        <div class="name">预约产品：<span class="tag">产品名称</span></div>
      </div>
      <div class="msg no-boder">
        <div class="line">
          <span class="key">产品限期：</span><span class="val">(14个月)</span><span class="cgey">2018-03-20至2019-5-20</span>
        </div>
        <div class="line">
          <span class="key">已募集金额：</span><span class="val">5亿</span>
        </div>
        <div class="line">
          <span class="key">已预约人数：</span><span class="val">10人</span>
        </div>
      </div>
      <div class="msg">
        <div class="line">
          <span class="key">客户姓名：</span><span class="val">周方文</span>
        </div>
        <div class="line">
          <span class="key">已预约金额：</span><span class="val cred">2千万</span>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import navbar from '@/components/navbar'
import product from '@/components/productList'

export default {
  data () {
    return {
      nav: ['新建预约', '历史预约'],
      nav_num: 0,
      info: [
        {
          title: '基金',
          type: 0,
          list: [
            {type: 0},
            {type: 1},
            {type: 0},
            {type: 0}
          ]
        },
        {
          title: '股权',
          type: 1,
          list: [
            {type: 0},
            {type: 1},
            {type: 0},
            {type: 0}
          ]
        },
        {
          title: '证券',
          type: 2,
          list: [
            {type: 0},
            {type: 1},
            {type: 0},
            {type: 0}
          ]
        },
        {
          title: '其他',
          type: 3,
          list: [
            {type: 0},
            {type: 1},
            {type: 0},
            {type: 0}
          ]
        }
      ]
    }
  },

  components: {
    navbar,
    product
  },

  methods: {
    changeNav (nav) {
      this.nav_num = nav
    }
  },

  created () {
  }
}
</script>

<style scoped>
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
  color: #F2A711;
  background: rgba(255,238,203,1);
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
.contract-card .order .copy{
  color: #ffffff;
  font: 10px;
  float: right;
  padding: 0 4px;
  box-sizing: border-box;
  border: 1px solid #ffffff;
  border-radius: 2px;
  line-height: 16px;
  margin-top: 2px;
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
