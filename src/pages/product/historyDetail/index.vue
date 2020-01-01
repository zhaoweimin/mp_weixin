<template>
    <div class="main">
        <div class="booking">
            <div class="block">
                <!-- <div class="title">客户信息</div> -->
                <div class="from">
                    <div class="line">
                        <div class="key">业绩单号</div>
                        <div class="val ta-r">
                            <span class="clink">{{info['业绩单号'] || '--'}}</span>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">客户姓名</div>
                        <div class="val ta-r">
                            <span>{{info['客户姓名'] || '--'}}</span>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">证件类型</div>
                        <div class="val ta-r">
                            <span>{{info['证件类型'] || '--'}}</span>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">证件号码</div>
                        <div class="val ta-r">
                            <span>{{info['证件号码'] || '--'}}</span>
                        </div>
                    </div>

                    <div class="line">
                        <div class="key">产品名称</div>
                        <div class="val ta-r">
                            <span>{{info['产品名称'] || '--'}}</span>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">产品类型</div>
                        <div class="val ta-r">
                            <span>{{info['产品类型'] || '--'}}</span>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">产品限期</div>
                        <div class="val ta-r">
                            <span>{{info['产品期限'] || '--'}}个月</span>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">合同编号</div>
                        <div class="val ta-r">
                            <span>{{info['合同编号'] || '--'}}</span>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">预约编号</div>
                        <div class="val ta-r">
                            <span>{{info['预约编号'] || '--'}}</span>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">理财经理</div>
                        <div class="val ta-r">
                            <span>{{info['理财经理'] || '--'}}</span>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">所属部门</div>
                        <div class="val ta-r">
                            <span>{{info['所属部门'] || '--'}}</span>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">录单员</div>
                        <div class="val ta-r">
                            <span>{{info['录单员'] || '--'}}</span>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">录单员部门</div>
                        <div class="val ta-r">
                            <span>{{info['录单员部门'] || '--'}}</span>
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
                            <span class="clink">{{info['打款日期'] || '--'}} </span>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">合同金额</div>
                        <div class="val ta-r">
                            <span>{{info['合同金额'] || '--'}}</span>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">付款方式</div>
                        <div class="val ta-r">
                            <span>{{info['付款方式'] || '--'}}</span>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">付款账户开户行</div>
                        <div class="val ta-r">
                            <span>{{info['付款开户行'] || '--'}}</span>
                        </div>
                    </div>

                    <div class="line">
                        <div class="key">付款账号</div>
                        <div class="val ta-r">
                            <span>{{info['付款账号'] || '--'}}</span>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">累计缴款金额</div>
                        <div class="val ta-r">
                            <span>{{info['累计缴款金额'] || '--'}}</span>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">确认收款日</div>
                        <div class="val ta-r">
                            <span>{{info['确认收款日'] || '--'}}</span>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">起息日</div>
                        <div class="val ta-r">
                            {{info['起息日'] || '--'}}  
                            <!-- <span>默认收款日期第二天<span style="font-size: 10px;">(管理版为成立日当天)</span></span> -->
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">产品到期日 </div>
                        <div class="val ta-r">
                            <span>{{info['产品到期日'] || '--'}}</span>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">年化系数</div>
                        <div class="val ta-r">
                            <span>{{info['年化系数'] || '--'}}</span>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">年化业绩</div>
                        <div class="val ta-r">
                            <span>{{info['年化业绩'] || '--'}}</span>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">收益分配账户</div>
                        <div class="val ta-r">
                            <span>{{info['收益分配账户'] || '--'}}</span>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">收益分配账户开户行</div>
                        <div class="val ta-r">
                            <span>{{info['收益分配账户开户行'] || '--'}}</span>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">资产证明上传时间</div>
                        <div class="val ta-r">
                            <span>{{info['资产证明上传时间'] || '--'}}</span>
                        </div>
                    </div>
                    <div class="line auto mt5">
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
                    <div class="flex-1">销售确认</div>
                    <div style="padding-top: 4px">
                        <van-switch size="20px" :checked="isSwitch" @change="changeSwitch" />
                    </div>
                </div>
                <div class="from">
                    <div class="line">
                        <div class="key">到账日期</div>
                        <div class="val ta-r">
                            <span class="clink">{{info['到账日期'] || '--'}}</span>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">业绩比较基准</div>
                        <div class="val ta-r">
                            <span>{{info['业绩比较基准'] || '--'}}</span>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">产品提奖率</div>
                        <div class="val ta-r">
                            <span>{{info['产品提奖率'] || '--'}}</span>
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

        <div class="booking" v-if="info['转让份额']">
            <div class="block">
                <div class="title flex">
                    <div class="flex-1">份额转让</div>
                </div>
                <div class="from">
                    <div class="line">
                        <div class="key">受让人</div>
                        <div class="val ta-r">
                            <span>{{info['受让人'] || '--'}}</span>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">证件类型</div>
                        <div class="val ta-r">
                            <span>{{info['证件类型'] || '--'}}</span>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">证件号码</div>
                        <div class="val ta-r">
                            <span>{{info['证件号码'] || '--'}}</span>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">银行账号</div>
                        <div class="val ta-r">
                            <span>{{info['银行账号'] || '--'}}</span>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">开户行</div>
                        <div class="val ta-r">
                            <span>{{info['开户行'] || '--'}}</span>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">转让份额</div>
                        <div class="val ta-r">
                            <span>{{info['转让份额'] || '--'}}</span>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">转让金额</div>
                        <div class="val ta-r">
                            <span>{{info['转让金额'] || '--'}}</span>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">转让时间</div>
                        <div class="val ta-r">
                            <span>{{info['转让时间'] || '--'}}</span>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">转让费</div>
                        <div class="val ta-r">
                            <span>{{info['转让费'] || '--'}}</span>
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
      isSwitch: false
    }
  },
  onLoad (option) {
    console.log(option)
    this.isEdit = option.isEdit
    mpvue.getStorage({
      // 获取本地缓存
      key: 'history_achievenment_info',
      success: res => {
        this.info = res.data
        this.info['年化系数'] = parseFloat(res.data['年化系数'])
        this.info['资产证明上传时间'] = res.data['资产证明上传时间']?res.data['资产证明上传时间'].split(' ')[0]:'--'
        console.log(this.info)
      }
    })
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
