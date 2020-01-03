<template>
    <div class="customer">
        <div class="bg-fff mt10">
            <div class="plr15 ptb15 f16 clink strong">详情</div>
            <comInput :type="0" title="产品编号" :value="info.FNumber"></comInput>
            <comInput :type="0" title="产品类型" :value="info.FTypeId"></comInput>
            <comInput :type="0" title="基金管理人名称" :value="info.FBlongToName"></comInput>
            <comInput :type="0" title="基金管理人编号" :value="info.FBltoNO"></comInput>
            <comInput :type="0" title="基金名称" :value="info.FName"></comInput>
            <comInput :type="0" title="基金类型" :value="info.Fundtype"></comInput>
            <comInput :type="0" title="合伙主体" :value="info.FpartnershipBody"></comInput>
            <comInput :type="0" title="基金规模" :value="info.FundScale | NumFormat"></comInput>
            <comInput :type="0" title="计划募集规模" :value="info.FRaiseScale | NumFormat"></comInput>
            <comInput :type="0" title="基金份额" :value="info.FundShare"></comInput>
            <comInput :type="0" title="基金单位净值" :value="info.FNetfundUnitvalue"></comInput>
            <comInput :type="0" title="退出期" :value="null"></comInput>
            <comInput :type="0" title="投资期限" :value="info.FInvestment?info.FInvestment+'个月':''"></comInput>
            <comInput :type="0" title="募集期" :value="info.FRaiseDate"></comInput>
            <comInput :type="0" title="托管方" :value="info.Fhoster"></comInput>
            <comInput :type="0" title="募集监督机构" :value="info.RSBody"></comInput>
            <comInput :type="0" title="托管账户" :value="info.FTrusteeshipaccout"></comInput>
            <comInput :type="0" title="募集账户户名" :value="info.mmm"></comInput>
            <comInput :type="0" title="募集账户开户行" :value="info.mmm"></comInput>
            <comInput :type="0" title="募集账户账号" :value="info.mmm"></comInput>
            <comInput :type="0" title="收益分配日" :value="info.FProfitDay"></comInput>
            <comInput :type="0" title="收益基准日" :value="info.FProfitBaseday"></comInput>
            <comInput :type="0" title="止损线" :value="info.FStopLine"></comInput>
            <comInput :type="0" title="系统产品成立日" :value="info.FEstabDate"></comInput>
            <comInput :type="0" title="系统产品到期日" :value="info.FDueDate"></comInput>
            <comInput :type="0" title="开放日" :value="info.FopenDate"></comInput>
            <comInput :type="0" title="合同终止日" :value="info.Fcontractenddate"></comInput>
            <comInput :type="0" title="产品兑付日" :value="info.FCashpaymentdate"></comInput>
            <comInput :type="0" title="业绩比较基准" :value="info.FachiBase"></comInput>
            <comInput :type="0" title="管理费" :value="info.FManageEx"></comInput>
            <comInput :type="0" title="认购费" :value="info.FSubFee"></comInput>
            <comInput :type="0" title="申购费" :value="info.FsubscriFee"></comInput>
            <comInput :type="0" title="赎回费" :value="info.FredemptionFee"></comInput>
        </div>
    </div>
</template>

<script>
import card from '@/components/card'
import comInput from '@/components/comInput'

export default {
  components: {
    card,
    comInput
  },

  data () {
    return {
      info: {}
    }
  },
  onLoad () {
    mpvue.getStorage({
      // 获取本地缓存
      key: 'discover_product_info',
      success: res => {
        console.log(res)
        this.info = res.data
        this.info.FEstabDate = this.info.FEstabDate.split(' ')[0]
        this.info.FDueDate = this.info.FDueDate.split(' ')[0]
        this.info.Fcontractenddate = this.info.Fcontractenddate.split(' ')[0]
        this.info.FCashpaymentdate = this.info.FCashpaymentdate.split(' ')[0]
      }
    })
  },
  methods: {
    addInvitation () {
      mpvue.navigateTo({ url: `/pages/discover/invitation/main` })
    }
  },
  created () {}
}
</script>

<style>
.msg-table {
	background: #ffffff;
	border-radius: 4px;
}
.msg-table .title {
	padding-top: 5px;
	margin-left: 15px;
	padding-right: 15px;
	font-weight: bold;
	line-height: 40px;
	/* font-size: 13px; */
}
.msg-table .table .line {
	display: flex;
	padding-right: 15px;
	font-size: 13px;
	border-top: rgba(245, 245, 245, 1);
}
.msg-table .table .line .key {
	color: #999999;
	width: 36%;
}
.msg-table .table .line .val {
	flex: 1;
}
.msg-table .table .line .val .iconfont {
	font-size: 14px;
}
.msg-table .title .iconfont {
	color: #55a8ff;
}
.msg-table .table .big-line {
	text-align: center;
	line-height: 20px;
	padding: 10px;
	position: relative;
	left: -15px;
}
.msg-table .table .big-line .val {
	line-height: 30px;
	font-size: 17px;
}
</style>
