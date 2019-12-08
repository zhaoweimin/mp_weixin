<template>
    <div>
        <div class="contract-card" v-if="type == 0">
            <div class="order">
                <div class="bg">合同编号：201903201530326548</div>
            </div>
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
                    <span class="key">产品到期日：产品成立后再维护此字段 </span>
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
            <div class="order">
                <div class="bg">业绩单号：201265849215</div>
            </div>
            <div class="msg no-boder">
                <div class="line">
                    <span class="key">客户姓名：周方文</span>
                </div>
            </div>
            <div class="msg no-boder">
                <div class="line"><span class="key">产品名称</span><span class="tag">股权类</span></div>
            </div>
            <div class="msg">
                <div class="line"><span class="key">产品期限：14个月</span></div>
                <div class="line"><span class="key">合同金额：20万</span></div>
                <div class="line"><span class="key">确认收款日：2019-3-21</span></div>
            </div>
            <div class="msg">
                <div class="line"><span class="key">起息日：2019-4-1</span></div>
                <div class="line"><span class="key">产品到期日：2019-10-1</span></div>
            </div>
        </div>

        <div class="contract-card" v-if="type == 4" @click="interstDetail('interest',id)">
            <div class="order">
                <div class="bg">业绩单号：201265849215</div>
            </div>
            <div class="f13 pl15 pt10"><span class="cgey">客户姓名：</span>周方文</div>
            <div class="msg no-boder">
                <div class="f13"><span class="cgey">产品名称：</span>某某某</div>
                <div class="f13 mb10"><span class="cgey">产品期限：</span>14个月</div>
                <div class="f13"><span class="cgey">合同金额：</span>2万(打款日期：2019-03-30)</div>
            </div>
            <div class="dis-flex a-between plr15 pb10">
                <div class="f13 cgey">成立日：2019-03-31</div>
                <div class="f13 clink">更多信息</div>
            </div>
        </div>

        <div class="contract-card" v-if="type == 41" @click="interstDetail('redeem',id)">
            <div class="order">
                <div class="bg">赎回编号：201265849215</div>
            </div>
            <div class="f13 pl15 pt10"><span class="cgey">客户姓名：</span>周方文</div>
            <div class="dis-flex l-end">
                <div class="msg no-boder flex-1">
                    <div class="f13"><span class="cgey">产品名称：</span>某某某</div>
                    <div class="f13 mb10"><span class="cgey">产品期限：</span>14个月</div>
                    <div class="f13"><span class="cgey">赎回金额：</span>2万</div>
                    <div class="f13 cgey">赎回日期：2019-03-31</div>
                </div>
                <div class="dis-flex a-between plr15 pb10">
                    <div class="f13 clink">查看更多</div>
                </div>
            </div>
        </div>

        <div class="contract-card" v-if="type == 5" @click="royaltyDetail(id)">
            <img class="img-status" src="../img/status_1.png" alt="">
            <div class="order">
                <div class="bg">业绩单号：201265849215</div>
            </div>
            <div class="f13 pl15 pt10"><span class="cgey">客户姓名：</span>周方文</div>
            <div class="msg no-boder">
                <div class="f13"><span class="cgey">产品名称：</span>某某某</div>
                <div class="f13 mb10"><span class="cgey">产品期限：</span>14个月</div>
                <div class="f13"><span class="cgey">合同金额：</span>2万(打款日期：2019-03-30)</div>
                <div class="f13"><span class="cgey">本次提奖：</span>20万</div>
            </div>
            <div class="dis-flex a-between plr15 pb10">
                <div class="f13 cgey">申请日期：2019-03-31</div>
                <div class="f13 clink">更多信息</div>
            </div>
        </div>

        <div class="contract-card" v-if="type == 6">
            <div class="order">
                <div class="bg">产品编号：{{ info['FNumber'] }}</div>
            </div>
            <!-- <div class="status two c1" v-if="status == 0">募集中</div>
            <div class="status two c2" v-if="status == 1">已完成</div> -->
            <div class="title dis-flex l-baseline">
                <div class="name mr10">{{info.FName}}</div>
                <div class="label-blue-outline">{{info.Fundtype}}</div>
            </div>
            <div class="msg no-boder">
                <div class="line mb10">
                    <div class="key f13"><span class="cgey">募集规模：</span>{{info.FRaiseScale}}</div>
                    <div class="key f13"><span class="cgey">募集期：</span> {{info.FRaiseDate}}</div>
                </div>
                <div class="line dis-flex a-between">
                    <div class="key f13"><span class="cgey">运作状态：</span>{{info['string27']}}</div>
                    <div class="more clink f13" @click="productDetail(info.id)">查看更多</div>
                </div>
            </div>
        </div>

        <div class="contract-card" v-if="type == 7">
            <div class="dis-flex l-baseline ptb10 plr15 border-b">
                <div class="name f16 strong mr10">标题</div>
                <div class="f13 cgey">类型</div>
            </div>
            <div class="msg no-boder">
                <div class="line f13 mb10"><span class="key cgey">所属目录：</span>目录名称</div>
                <div class="line f13"><span class="key cgey">上传人：</span>陈成</div>
                <div class="line f13"><span class="key cgey">上传部门：</span>合约部</div>
                <div class="line dis-flex a-between">
                    <div class="key f13"><span class="key cgey">上传时间：</span>2019-03-15</div>
                    <div @click="openDoc" class="f13 clink">查看更多</div>
                </div>
            </div>
        </div>

        <div class="contract-card plr10" v-if="type == 8" @click="actionDetail">
            <div class="ptb10 border-b">
                <div class="f16 strong">{{info['活动名称']}}</div>
            </div>
            <div class="dis-flex l-end ptb10">
                <div class="flex-1">
                    <div class="mb5 f13"><span class="cgey">活动时间：</span>{{info['活动时间']}}</div>
                    <div class="mb5 f13"><span class="cgey">活动目的：</span>{{info['活动目的']}}</div>
                    <div class="mb5 f13"><span class="cgey">活动范围：</span>{{info['活动范围']}}</div>
                    <div class="mb5 f13"><span class="cgey">活动发起人：</span>{{info['活动发起人']}}</div>
                    <div class="f13"><span class="cgey">活动发起部门：</span>{{info['活动发起部门']}}</div>
                </div>
                <div class="clink f13">查看更多</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ['info', 'type', 'status', 'actionType'],
  methods: {
    interstDetail (type, id) {
      let url = `/pages/${type}/detail/main?id=${id}`
      mpvue.navigateTo({ url })
    },
    royaltyDetail (id) {
      let url = `/pages/royalty/detail/main?id=${id}`
      mpvue.navigateTo({ url })
    },
    actionDetail () {
      let url = `/pages/discover/actionDetail/main?type=${this.actionType}`
      mpvue.setStorageSync('action_detail_info', this.info)
      mpvue.navigateTo({ url })
    },
    productDetail () {
      let url = `/pages/discover/productDetail/main`
      mpvue.setStorageSync('discover_product_info', this.info)
      mpvue.navigateTo({ url })
    },
    openDoc () {
      wx.showLoading({
        title: '请稍后..'
      })
      wx.downloadFile({
        url: 'http://video.317hu.com/917b3140-3da6-47d5-911c-a15462fcdeb2.pdf',
        success: function (res) {
          var filePath = res.tempFilePath
          wx.openDocument({
            filePath: filePath,
            success: function (res) {
              wx.hideLoading()
            }
          })
        }
      })
    }
  }
}
</script>

<style>
.contract-card {
	margin: 15px;
	border-radius: 2px;
	overflow: hidden;
	background: #ffffff;
	font-size: 13px;
	position: relative;
	box-shadow: 0 0 5px rgba(100, 100, 100, 0.1);
}
.contract-card .status {
	position: absolute;
	right: 0;
	top: 40px;
	line-height: 20px;
	color: #16eac2;
	background: #d9fff8;
	padding: 0 10px;
	border-top-left-radius: 10px;
	border-bottom-left-radius: 10px;
}
.contract-card .status.c1 {
	color: #f2a711;
	background: rgba(255, 238, 203, 1);
}
.contract-card .status.c2 {
	background: #e0e0e0;
	color: #999999;
}
.contract-card .two {
	top: 20px;
}
.contract-card .order .bg {
	margin-top: 10px;
	display: inline-block;
	background: #259efa;
	line-height: 16px;
	height: 16px;
	font-size: 11px;
	color: #ffffff;
	padding: 0 15px;
}
.contract-card .title {
	margin: 10px 15px;
}
.contract-card .title .name {
	font-size: 16px;
	font-weight: bold;
  max-width: 70%;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.contract-card .title .name .small {
	font-size: 13px;
	color: #999999;
	font-weight: normal;
	margin-left: 4px;
}
.contract-card .title .number {
	margin-top: 4px;
	line-height: 20px;
	font-size: 13px;
	box-sizing: border-box;
	border-radius: 2px;
	padding: 0 6px;
	color: #509ef0;
	border: 1px solid #509ef0;
	display: inline-block;
}
.contract-card .msg {
	margin: 0 15px;
	padding: 10px 0;
	line-height: 24px;
	border-top: 1px solid rgba(240, 240, 240, 1);
}
.contract-card .no-boder {
	border-top: 0px solid rgba(240, 240, 240, 1);
}
.contract-card .msg .val {
	font-weight: bold;
}
.contract-card .msg .more {
	float: right;
	color: #999999;
}
.contract-card .msg .more-2 {
	float: right;
	box-sizing: border-box;
	height: 24px;
	border-radius: 12px;
	color: #509ef0;
	border: 1px solid #509ef0;
	padding-left: 10px;
	line-height: 22px;
}
.contract-card .msg .btn {
	line-height: 20px;
	float: right;
	color: #ffffff;
	padding: 0 10px;
	border-radius: 10px;
	background: #509ef0;
}
.contract-card .title-2 {
	margin: 10px 15px;
	padding-top: 10px;
	font-weight: bold;
}
.contract-card .title-3 {
	margin: 10px 15px;
	padding-top: 10px;
	font-weight: bold;
}
.img-status {
	position: absolute;
	right: 0;
	top: 15px;
	width: 50px;
	height: 40px;
}
</style>
