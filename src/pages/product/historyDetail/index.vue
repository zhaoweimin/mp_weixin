<template>
    <div class="main">
        <div class="booking">
            <div class="block">
                <!-- <div class="title">客户信息</div> -->
                <div class="from">
                    <div class="line">
                        <div class="key">业绩单号</div>
                        <div class="val ta-r">
                            <span class="clink">201903201530326548</span>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">客户姓名</div>
                        <div class="val ta-r">
                            <span>客户姓名</span>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">证件类型</div>
                        <div class="val ta-r">
                            <span>身份证</span>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">证件号码</div>
                        <div class="val ta-r">
                            <span>xxxxxxxxxxx</span>
                        </div>
                    </div>

                    <div class="line">
                        <div class="key">产品名称</div>
                        <div class="val ta-r">
                            <span>xxxxxxxxxxx</span>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">产品类型</div>
                        <div class="val ta-r">
                            <span>股权类</span>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">产品限期</div>
                        <div class="val ta-r">
                            <span>12个月</span>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">合同编号</div>
                        <div class="val ta-r">
                            <span>523256654555444</span>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">预约编号</div>
                        <div class="val ta-r">
                            <span>201903202156984</span>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">理财经理</div>
                        <div class="val ta-r">
                            <span>李方圆</span>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">所属部门</div>
                        <div class="val ta-r">
                            <span>市场部</span>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">录单员</div>
                        <div class="val ta-r">
                            <span>陈欧</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="booking">
            <div class="block">
                <!-- <div class="title">客户信息</div> -->
                <div class="from">
                    <div class="line">
                        <div class="key">打款日期</div>
                        <div class="val ta-r">
                            <span class="clink">2019-03-31 </span>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">合同金额</div>
                        <div class="val ta-r">
                            <span>20万</span>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">付款方式</div>
                        <div class="val ta-r">
                            <span>网银转账</span>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">付款账户开户行</div>
                        <div class="val ta-r">
                            <span>招商银行</span>
                        </div>
                    </div>

                    <div class="line">
                        <div class="key">付款账号</div>
                        <div class="val ta-r">
                            <span>622623261235896</span>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">累计缴款金额</div>
                        <div class="val ta-r">
                            <span>500万</span>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">确认收款日</div>
                        <div class="val ta-r">
                            <span>营销支持维护某日期</span>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">起息日</div>
                        <div class="val ta-r">
                            <span>默认收款日期第二天<span style="font-size: 10px;">(管理版为成立日当天)</span></span>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">产品到期日 </div>
                        <div class="val ta-r">
                            <span>产品成立后再维护此字段</span>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">年化系数</div>
                        <div class="val ta-r">
                            <span>0.21</span>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">年化业绩</div>
                        <div class="val ta-r">
                            <span>105万</span>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">收益分配账户</div>
                        <div class="val ta-r">
                            <span>6321254555468499854</span>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">收益分配账户开户行</div>
                        <div class="val ta-r">
                            <span>XXXX</span>
                        </div>
                    </div>
                    <div class="line auto">
                        <div class="key">附件</div>
                        <div class="val ta-r">
                            <div class="img-item">
                                <img class="img" src="../../../img/preview.png" mode="aspectFill">
                                <div class="clink text">(点击预览)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="booking">
            <div class="block">
                <div class="title flex">
                    <div class="flex-1">客户信息</div>
                    <div style="padding-top: 4px">
                        <van-switch size="20px" :checked="isSwitch" @change="changeSwitch" />
                    </div>
                </div>
                <div class="from">
                    <div class="line">
                        <div class="key">到账日期</div>
                        <div class="val ta-r">
                            <span class="clink">2019-06-06</span>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">业绩比较基准</div>
                        <div class="val ta-r">
                            <span>0.3</span>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">产品提奖率</div>
                        <div class="val ta-r">
                            <span>0.5</span>
                        </div>
                    </div>
                    <div class="desc">
                        <div class="til">本人郑重承洁：</div>
                        <div class="text">
                            <div class="span">1、本人以真实身份向客户推介所销售产品；</div>
                            <div class="span">2、销售产品前已向客户进行充分的风险掲示；</div>
                            <div class="span">3、已严格按照《私募投资基金募集行为管理办法》的要求确认投资者的合格投资者身份并已向公司提交相应的证明文件，并严格按照规范的募集行为向客户推介产品；</div>
                            <div class="span">4、已严格按照《证券期货投资者适当性管理办法》的要求，确认投资和匹配产品的风险等级；</div>
                            <div class="span">5、客户对认购产品签的相关文件，均由本人面签。确认为客户本人亲笔签名；</div>
                            <div class="span">6、本人确认，以上承诺均属实，由此引发的一切法律责任由本人承担。</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div class="booking">
            <div class="block">
                <div class="title flex">
                    <div class="flex-1">份额转让</div>
                </div>
                <div class="from">
                    <div class="line">
                        <div class="key">受让人</div>
                        <div class="val ta-r">
                            <span>周方文</span>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">证件类型</div>
                        <div class="val ta-r">
                            <span>身份证</span>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">证件号码</div>
                        <div class="val ta-r">
                            <span>36645645854964896</span>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">银行账号</div>
                        <div class="val ta-r">
                            <span>XXXXXXX</span>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">开户行</div>
                        <div class="val ta-r">
                            <span>股权类</span>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">转让份额</div>
                        <div class="val ta-r">
                            <span>12个月</span>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">转让金额</div>
                        <div class="val ta-r">
                            <span>3千万</span>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">转让时间</div>
                        <div class="val ta-r">
                            <span>2018-06-03</span>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">转让费</div>
                        <div class="val ta-r">
                            <span>李方圆</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <button class="btn-submit" @click="send()" v-if="isEdit == 1">提交审核</button>

    </div>
</template>

<script>
export default {
  data () {
    return {
      isEdit: 0,
      info: {},
      type_range: ['身份证', '护照'],
      type: '',
      booking_date: '',
      pay_date: '',
      isSwitch: true
    }
  },
  onLoad (option) {
    console.log(option)
    this.isEdit = option.isEdit
  },
  components: {},
  methods: {
    bindTypeChange (e) {
      let val = e.mp.detail.value
      this.type = val
    },
    bindBookingChange (e) {
      let val = e.mp.detail.value
      this.booking_date = val
    },
    bindPayChange (e) {
      let val = e.mp.detail.value
      this.pay_date = val
    },
    send () {
      let url = '/pages/success/main'
      mpvue.navigateTo({ url })
    },
    changeSwitch (e) {
      this.isSwitch = e.mp.detail
    }
  },

  created () {}
}
</script>

<style scoped>
.block {
	background: #ffffff;
	margin-bottom: 10px;
}
.noEdit {
}
.block .title {
	line-height: 40px;
	height: 40px;
	padding: 0 15px;
	font-size: 14px;
	font-weight: bold;
}
.noEdit .block .title {
	color: #259efa;
}
.block .from {
	background: #ffffff;
}
.block .from .line {
	line-height: 40px;
	height: 40px;
	display: flex;
	padding: 0 15px;
	font-size: 14px;
}
.block .from .auto {
	height: auto;
}
.block .from .line-big {
	height: auto;
	display: block;
}
.block .from .line .key {
	min-width: 30%;
	color: #9d9d9d;
	/* font-weight: bold; */
}
.block .from .line .val {
	flex: 1;
	padding: 0 5px;
}
.block .from .line .val input {
	line-height: 40px;
	height: 40px;
}
.block .from .line .icon {
	float: right;
	line-height: 40px;
}
.block .from .desc {
	padding: 0 15px;
	font-size: 13px;
}
.block .from .desc .span {
	padding-bottom: 10px;
}
.block .from .desc .til {
	line-height: 40px;
}
.btn-submit {
	background: rgba(80, 158, 240, 1);
	border-radius: 5px;
	color: #ffffff;
	font-size: 16px;
	margin: 15px;
}
.img-item {
	display: inline-block;
	text-align: center;
	font-size: 10px;
	margin-left: 4px;
}
.img-item .img {
	width: 100px;
	height: 100px;
}
.img-item .text {
	line-height: 15px;
	margin-bottom: 10px;
}
</style>
