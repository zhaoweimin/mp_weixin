<template>
    <div class="customer">
        <div class="bg-fff mt10">
            <comInput :type="0" title="单据编号" :textRight="false" :isSpecialColorTxt="true" value="2322115565512223664"></comInput>
            <comInput :type="0" title="业绩单号" :textRight="false" :isSpecialColorTxt="true" value="265512223664"></comInput>
            <comInput :type="1" title="购买产品" :textRight="false" value="某某某某"></comInput>
            <comInput :type="1" title="认购金额" :textRight="false" value="2千万"></comInput>
            <comInput :type="1" title="年化系数" :textRight="false" value="0.21"></comInput>
            <comInput :type="1" title="年化业绩" :textRight="false" value="2千万"></comInput>
            <comInput :type="3" title="到账日" :textRight="false" value="2019-3-18"></comInput>
            <comInput :type="3" title="到期日" :textRight="false" value="2019-3-18"></comInput>
            <comInput :type="1" title="认购费" :textRight="false" value="2千万"></comInput>
            <comInput :type="3" title="提成方式" :textRight="false" value="一次"></comInput>
            <comInput :type="1" title="提成率" :textRight="false" value="80%"></comInput>
            <comInput :type="1" title="本次提奖" :textRight="false" value="50万"></comInput>
            <comInput :type="1" title="后端提奖" :textRight="false" value="50万"></comInput>
            <comInput :type="3" title="提成是否完成" :textRight="false" value="不是一次性提取情况下"></comInput>
            <comInput :type="1" title="申请人" :textRight="false" value="展播"></comInput>
            <comInput :type="3" title="申请时间" :textRight="false" value="2019-3-18"></comInput>
            <comInput :type="0" title="状态" :textRight="false" value="审核中"></comInput>
        </div>
        <div class="mlr15 mb15 mt25">
            <van-button type="info" size="large">确认</van-button>
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
