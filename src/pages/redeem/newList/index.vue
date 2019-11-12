<template>
    <div class="customer">
        <div class="bg-fff mt10">
            <div class="plr15 ptb15 f16 strong">赎回信息</div>
            <comInput :type="0" title="赎回编号" :textRight="false" :isSpecialColorTxt="true" value="265512223664"></comInput>
            <comInput :type="3" title="赎回日期" :textRight="false" value="2019-3-18"></comInput>
            <comInput :type="1" title="赎回金额" :textRight="false" value="2千万"></comInput>
            <comInput :type="3" title="浮动收益" :textRight="false" value="12313"></comInput>
            <comInput :type="3" title="剩余金额" :textRight="false" value="2234"></comInput>
            <comInput :type="0" title="后端提奖金额" :textRight="false" value="4233"></comInput>
        </div>
        <div class="bg-fff mt10">
            <div class="plr15 ptb15 f16 strong">业绩信息</div>
            <comInput :type="0" title="业绩单号" :textRight="false" :isSpecialColorTxt="true" value="265512223664"></comInput>
            <comInput :type="1" title="客户名称" :textRight="false" value="某某某某"></comInput>
            <comInput :type="1" title="产品名称" :textRight="false" value="XXX"></comInput>
            <comInput :type="1" title="产品期限" :textRight="false" value="XXX"></comInput>
            <comInput :type="1" title="证件类型" :textRight="false" value="XXX"></comInput>
            <comInput :type="1" title="证件号码" :textRight="false" value="XXX"></comInput>
            <comInput :type="3" title="银行账号" :textRight="false" value="XXX"></comInput>
            <comInput :type="3" title="账号开户行" :textRight="false" value="XXX"></comInput>
            <comInput :type="1" title="合同编号" :textRight="false" value="XXX"></comInput>
            <comInput :type="3" title="合同金额" :textRight="false" value="XXX"></comInput>
            <comInput :type="2" title="理财经理" :textRight="false" :options="[1,2,3]"></comInput>
            <comInput :type="2" title="归属部门" :textRight="false" :options="[1,2,3]"></comInput>
            <comInput :type="2" title="单据状态" :textRight="false" :options="[1,2,3]"></comInput>
            <div class="pt10 plr15">
                <div class="key mb10">上传附件 <span class="cgey">（格式pdf或图片）</span></div>
                <div class="val" style="padding-bottom: 10px;">
                    <upload></upload>
                </div>
            </div>
        </div>
        <div class="mlr15 mb15 mt25">
            <van-button type="info" size="large">确认</van-button>
        </div>
    </div>
</template>

<script>
import card from '@/components/card'
import comInput from '@/components/comInput'
import upload from '@/components/upload'

export default {
  components: {
    card,
    comInput,
    upload
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
