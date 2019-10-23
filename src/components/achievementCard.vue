<template>
  <div>
    <div class="contract-card" v-if="type == 0">
      <div class="order"><div class="bg">合同编号：201903201530326548</div></div>
      <div class="status">审核中</div>
      <div class="title">
        <div class="name">产品名称<span class="small">基金</span></div>
      </div>
      <div class="msg no-boder">
        <div class="line">
          <span class="key">产品限期：(14个月) 2018-03-20至2019-5-20</span>
        </div>
        <div class="line">
          <span class="key">提成计提周期：3个月</span>
        </div>
      </div>
      <div class="msg">
        <div class="line">
          <span class="key">合同编号：523256654555444</span>
        </div>
        <div class="line">
          <span class="key">预约编号：201903202156984</span>
        </div>
      </div>
      <div class="msg">
        <div class="line">
          <span class="key">理财经理：523256654555444</span>
        </div>
        <div class="line">
          <span class="key">所属部门：市场部</span>
        </div>
      </div>
      <div class="msg">
        <div class="line">
          <span class="key">录单员：陈有财</span>
        </div>
      </div>
    </div>

    <div class="contract-card" v-if="type == 1">
      <div class="status two">审核中</div>
      <div class="title-2">
        <div class="clink">打款日期：2019-03-31 15:30</div>
      </div>
      <div class="msg no-boder">
        <div class="line">
          <span class="key">合同金额：2千万</span>
        </div>
        <div class="line">
          <span class="key">付款方式：网银转账</span>
        </div>
        <div class="line">
          <span class="key">付款账号：622623261235896</span>
        </div>
        <div class="line">
          <span class="key">累计缴款金额：500万</span>
        </div>
      </div>
      <div class="msg">
        <div class="line">
          <span class="key">确认收款日：营销支持维护</span>
        </div>
        <div class="line">
          <span class="key">起息日：默认收款日期第二天</span>
        </div>
        <div class="line">
          <span class="key">产品到期日：产品成立后再维护此字段	</span>
        </div>
      </div>
      <div class="msg">
        <div class="line">
          <span class="key">年化系数：0.21</span>
        </div>
        <div class="line">
          <span class="key">年化业绩：××××</span>
        </div>
      </div>
      <div class="msg">
        <div class="line">
          <span class="key">收益分配账户：6321254555468499854</span>
        </div>
        <div class="line">
          <span class="key">收益分配账户开户行：招商银行</span>
        </div>
      </div>
    </div>

    <div class="contract-card" v-if="type == 2">
      <div class="status two">审核中</div>
      <div class="title-3">
        <div class="name">打回原因：<span class="cred">冷静期退款</span></div>
      </div>
      <div class="msg no-boder">
        <div class="line"><span class="key">退款单号：2115649851456544</span></div>
        <div class="line"><span class="key">退款客户：周方文</span></div>
        <div class="line"><span class="key">退款类型：冷静期退款</span></div>
        <div class="line"><span class="key">合同状态：已发放</span></div>
      </div>
      <div class="msg">
        <div class="line"><span class="key">退款原因：客户放弃</span></div>
        <div class="line"><span class="key">合同编号：54564565145666554</span></div>
        <div class="line"><span class="key">申请退款日期：2019-03-28</span></div>
      </div>
      <div class="msg">
        <div class="line"><span class="key">退款金额：2千万</span></div>
        <div class="line"><span class="key">退款账号：622632569845612332</span></div>
        <div class="line"><span class="key">账号开户行：招商银行</span></div>
      </div>
      <div class="msg">
        <div class="line"><span class="key">申请人：陈有财</span></div>
        <div class="line"><span class="key">归属部门：市场部</span></div>
      </div>
    </div>

    <div class="contract-card" v-if="type == 3">
      <div class="order"><div class="bg">业绩单号：201265849215</div></div>
      <div class="msg no-boder">
        <div class="line">
          <span class="key">客户姓名：周方文</span>
        </div>
      </div>
      <div class="msg no-boder">
        <div class="line"><span class="key">产品名称：某某某</span></div>
        <div class="line"><span class="key">产品期限：14个月</span></div>
      </div>
      <div class="msg">
        <div class="line"><span class="key">合同编号：523256654555444</span></div>
        <div class="line"><span class="key">合同金额：2千万</span></div>
      </div>
      <div class="msg">
        <div class="line"><span class="key">打款日期：2019-03-30</span></div>
        <div class="line"><span class="key">到账日：2019-03-31</span></div>
      </div>
      <div class="msg">
        <div class="line"><span class="key">到期日：2019-04-5</span></div>
      </div>
      <div class="msg">
        <div class="line"><span class="key">年化系数：0.20</span></div>
        <div class="line"><span class="key">年化业绩：3千万</span></div>
        <div class="line"><span class="key">年化收益：6亿</span></div>
        <div class="line"><span class="key">收益总额：20亿</span></div>
      </div>
    </div>

    <div class="contract-card" v-if="type == 4" @click="interstDetail(id)">
      <div class="order"><div class="bg">业绩单号：201265849215</div></div>
      <div class="msg no-boder">
        <div class="line">
          <span class="key">客户姓名：周方文</span>
        </div>
      </div>
      <div class="msg no-boder">
        <div class="line"><span class="key">产品名称：某某某</span></div>
        <div class="line"><span class="key">产品期限：14个月</span></div>
      </div>
      <div class="msg">
        <div class="line"><span class="key">合同编号：523256654555444</span></div>
        <div class="line"><span class="key">合同金额：2千万</span></div>
      </div>
      <div class="msg">
        <div class="line"><span class="key">打款日期：2019-03-30</span></div>
        <div class="line"><span class="key">到账日：2019-03-31</span></div>
      </div>
      <div class="msg">
        <div class="line"><span class="key">到期日：2019-04-5</span></div>
      </div>
      <div class="msg">
        <div class="line"><span class="key">年化收益：6亿</span></div>
        <div class="line"><span class="key">收益总额：20亿</span> <span class="btn">更多信息</span></div>
      </div>
    </div>

    <div class="contract-card" v-if="type == 5" @click="royaltyDetail(id)">
      <div class="order"><div class="bg">业绩单号：201265849215</div></div>
      <div class="msg no-boder">
        <div class="line">
          <span class="key">客户姓名：周方文</span>
        </div>
      </div>
      <div class="msg no-boder">
        <div class="line"><span class="key">产品名称：某某某</span></div>
        <div class="line"><span class="key">产品期限：14个月</span></div>
      </div>
      <div class="msg">
        <div class="line"><span class="key">合同编号：523256654555444</span></div>
        <div class="line"><span class="key">合同金额：2千万</span></div>
      </div>
      <div class="msg">
        <div class="line"><span class="key">打款日期：2019-03-30</span></div>
        <div class="line"><span class="key">到账日：2019-03-31</span></div>
      </div>
      <div class="msg">
        <div class="line"><span class="key">到期日：2019-04-5</span></div>
      </div>
      <div class="msg">
        <div class="line"><span class="key">年化系数：0.20</span></div>
        <div class="line"><span class="key">年化业绩：3千万</span></div>
        <div class="line"><span class="key">提成系数：××</span></div>
        <div class="line"><span class="key">提成总额：50万</span></div>
      </div>
    </div>

    <div class="contract-card" v-if="type == 6">
      <div class="order"><div class="bg">合同编号：201903201530326548</div></div>
      <div class="status two c1" v-if="status == 0">募集中</div>
      <div class="status two c2" v-if="status == 1">已完成</div>
      <div class="title">
        <div class="name">产品名称<span class="small">基金</span></div>
      </div>
      <div class="msg no-boder">
        <div class="line">
          <span class="key">募集规模：10亿</span>
        </div>
        <div class="line">
          <span class="key">募集期：10个月</span> 
          <div class="more">查看更多<span class="iconfont iconright"></span></div>
        </div>
      </div>
    </div>

    <div class="contract-card" v-if="type == 7">
      <div class="title">
        <div class="name">标题<span class="small">类型</span></div>
      </div>
      <div class="msg no-boder">
        <div class="line"><span class="key">所属目录：目录名称</span></div>
        <div class="line"><span class="key">上传人：陈成</span></div>
        <div class="line"><span class="key">上传部门：合约部</span></div>
        <div class="line">
          <span class="key">上传时间：2019-03-15</span> 
          <div class="more-2">查看跟多<span class="iconfont iconright"></span></div>
        </div>
      </div>
    </div>

    <div class="contract-card" v-if="type == 8" @click="actionDetail(id)">
      <div class="title">
        <div class="name">活动名称</div>
      </div>
      <div class="msg no-boder">
        <div class="line"><span class="key">活动时间：2018-03-20至2019-5-20</span></div>
        <div class="line"><span class="key">活动发起人：陈方圆</span></div>
        <div class="line">
          <span class="key">活动发起部门：合约部</span>
          <div class="more">更多<span class="iconfont iconright"></span></div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: ['info', 'type', 'status'],
  methods: {
    interstDetail (id) {
      let url = `/pages/interest/detail/main?id=${id}`
      mpvue.navigateTo({ url })
    },
    royaltyDetail (id) {
      let url = `/pages/royalty/detail/main?id=${id}`
      mpvue.navigateTo({ url })
    },
    actionDetail (id) {
      let url = `/pages/discover/actionDetail/main?id=${id}`
      mpvue.navigateTo({ url })
    }
  }
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
  box-shadow: 0 0 5px rgba(100,100,100,0.1);
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
.contract-card .status.c1{
  color: #F2A711;
  background: rgba(255,238,203,1);
}
.contract-card .status.c2{
  background: #e0e0e0;
  color: #999999;
}
.contract-card .two{
  top: 20px;
}
.contract-card .order .bg{
  display: inline-block;
  background: rgba(255,230,214,1);
  line-height: 22px;
  height: 22px;
  font-size: 11px;
  color: #EA7628;
  padding: 0 15px;
  border-bottom-right-radius: 10px;
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
  color: #999999;
  font-weight: normal;
  margin-left: 4px;
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
.contract-card .no-boder{
  border-top: 0px solid rgba(240,240,240,1);
}
.contract-card .msg .val{
  font-weight: bold;
}
.contract-card .msg .more{
  float: right;
  color: #999999;
}
.contract-card .msg .more-2{
  float: right;
  box-sizing: border-box;
  height: 24px;
  border-radius: 12px;
  color: #509ef0;
  border: 1px solid #509ef0;
  padding-left: 10px;
  line-height: 22px;
}
.contract-card .msg .btn{
  line-height: 20px;
  float: right;
  color: #ffffff;
  padding: 0 10px;
  border-radius: 10px;
  background: #509EF0;
}
.contract-card .title-2{
  margin: 10px 15px;
  padding-top: 10px; 
  font-weight: bold;
}
.contract-card .title-3{
  margin: 10px 15px;
  padding-top: 10px; 
  font-weight: bold;
}
</style>
