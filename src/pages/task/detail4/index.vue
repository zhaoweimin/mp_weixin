<template>
    <div class="customer">
        <div class="bg-fff mt10">
            <div class="plr15 ptb15 f16 clink strong">客户信息</div>
            <comInput :type="0" :titleDark="false" title="预约编号" :isSpecialColorTxt="true" value="2322115565512223664"></comInput>
            <comInput :type="0" :titleDark="false" title="客户姓名" value="XXX"></comInput>
            <comInput :type="0" :titleDark="false" title="证件类型" value="XXX"></comInput>
            <comInput :type="0" :titleDark="false" title="证件号码" value="XXXXXXXXX"></comInput>
        </div>
        <div class="bg-fff mt10">
            <div class="plr15 ptb15 f16 clink strong">产品信息</div>
            <comInput :type="0" :titleDark="false" title="产品类别" value="股权类"></comInput>
            <comInput :type="0" :titleDark="false" title="产品编号" value="523446322"></comInput>
            <comInput :type="0" :titleDark="false" title="产品名称" value="名车"></comInput>
            <comInput :type="0" :titleDark="false" title="产品期限" value="12个月"></comInput>
            <comInput :type="0" :titleDark="false" title="募集账户" value="XXX"></comInput>
            <comInput :type="0" :titleDark="false" title="已募集份数" value="5万份"></comInput>
            <comInput :type="0" :titleDark="false" title="已募集金额" value="5万"></comInput>
            <comInput :type="0" :titleDark="false" title="剩余募集金额" value="2万"></comInput>
            <comInput :type="0" :titleDark="false" title="已预约人数" value="10人"></comInput>
            <comInput :type="0" :titleDark="false" title="已预约金额" value="8万"></comInput>
            <comInput :type="0" :titleDark="false" title="剩余可预约" value="2万"></comInput>
        </div>
        <div class="bg-fff mt10">
            <div class="plr15 ptb15 f16 clink strong">付款信息</div>
            <comInput :type="0" :titleDark="false" title="预打款日期" value="2019-09-09"></comInput>
            <comInput :type="0" :titleDark="false" title="实际打款日期" value="系统自动关联"></comInput>
            <comInput :type="0" :titleDark="false" title="出资金额" value="XXXXXXXXX"></comInput>
        </div>
        <div class="plr15 mt25 pb20">
            <van-button type="info" size="large">进入审批</van-button>
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
      info: {
        avatar: 'https://wx.qlogo.cn/mmopen/vi_32/Po7hia4bia7Ua8tZxjcLfpHsEKgzMT3wf3HzhE6TqQHqsbXSL72dFpjIlPmAYuzv5VVpgic1iaZ703Op5I4LovGOgg/132?imageView2/2/w/100/q/80/v=',
        name: '张耀扬',
        level: 1,
        sex: 1
      }
    }
  },

  created () {}
}
</script>

<style>
.customer-card {
	margin: 0px;
	padding: 15px;
	background: linear-gradient(to right, #509ef0, #5bc7ff); /* 标准的语法 */
	border-radius: 0px;
	position: relative;
	margin-bottom: 30px;
}
.customer-card::after {
	content: '';
	position: absolute;
	bottom: -20px;
	left: 32px;
	width: 0;
	height: 0;
	border-width: 10px;
	border-style: solid;
	border-color: #509ef0 transparent transparent transparent;
}
.customer-card .title {
	color: #ffffff;
}

.customer-card .msg .title .sex {
	color: #ffffff;
}
.customer-card .avatar {
	width: 44px;
	height: 50px;
}
.customer-card .avatar .img {
	width: 44px;
	height: 44px;
}
.customer-card .avatar .text {
	color: #ffffff;
	font-size: 12px;
	text-align: center;
	line-height: 12px;
}
.msg-table {
	margin: 15px;
	background: #ffffff;
	border-radius: 4px;
}
.msg-table .title {
	padding-top: 5px;
	margin-left: 15px;
	padding-right: 15px;
	font-weight: bold;
	line-height: 40px;
}
.msg-table .table {
	padding-left: 15px;
	line-height: 40px;
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
.msg-table .table .line .icon .iconfont {
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
