<template>
    <div class="customer">
        <div class="bg-fff mt10">
            <div class="plr15 ptb15 f16 clink strong">赎回信息 <span class="iconfont iconjibenxinxi"></span></div>
            <comInput :type="0" :titleDark="false" title="赎回编号" :isSpecialColorTxt="true" :value="info['赎回编号']"></comInput>
            <comInput :type="0" :titleDark="false" title="赎回日期" :value="info['赎回日期']"></comInput>
            <comInput :type="0" :titleDark="false" title="赎回金额" :value="info['赎回金额']"></comInput>
            <comInput :type="0" :titleDark="false" title="浮动收益率" :value="info['浮动收益率']"></comInput>
            <comInput :type="0" :titleDark="false" title="剩余金额" :value="info['剩余金额']"></comInput>
            <comInput :type="0" :titleDark="false" title="后端提奖金额" :value="info['后端提奖金额']"></comInput>
        </div>
        <div class="bg-fff mt10">
            <div class="plr15 ptb15 f16 clink strong">业绩信息 <span class="iconfont iconjibenxinxi"></span></div>
            <comInput :type="0" :titleDark="false" title="业绩单号" :isSpecialColorTxt="true" :value="info['业绩单号']"></comInput>
            <comInput :type="0" :titleDark="false" title="客户名称" :value="info['客户姓名']"></comInput>
            <comInput :type="0" :titleDark="false" title="产品名称" :value="info['产品名称']"></comInput>
            <comInput :type="0" :titleDark="false" title="产品期限" :value="info['产品期限']"></comInput>
            <comInput :type="0" :titleDark="false" title="证件类型" :value="info['证件类型']"></comInput>
            <comInput :type="0" :titleDark="false" title="证件号码" :value="info['证件号码']"></comInput>
            <comInput :type="0" :titleDark="false" title="银行账号" :value="info['银行账号']"></comInput>
            <comInput :type="0" :titleDark="false" title="账号开户行" :value="info['账号开户行']"></comInput>
            <comInput :type="0" :titleDark="false" title="合同编号" :value="info['合同编号']"></comInput>
            <comInput :type="0" :titleDark="false" title="合同金额" :value="info['合同金额']"></comInput>
            <comInput :type="0" :titleDark="false" title="理财经理" :value="info['理财经理']"></comInput>
            <comInput :type="0" :titleDark="false" title="归属部门" :value="info['归属部门']"></comInput>
            <comInput :type="0" :titleDark="false" title="单据状态" :value="info['单据状态']"></comInput>
            <div class="plr15 ptb10 border-b">
                <div class="f16 cgey mb10">附件</div>
                <div class="dis-flex l-end">
                    <img class="preview" src="../../../img/preview.png" alt="">
                    <div class="f12 cgey">（点击预览）</div>
                </div>
            </div>
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

  onLoad () {
    mpvue.getStorage({
      // 获取本地缓存
      key: 'redeem_info',
      success: res => {
        this.info = res.data
        console.log(this.info)
      }
    })
  }
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
.preview {
	width: 100px;
	height: 100px;
}
</style>
