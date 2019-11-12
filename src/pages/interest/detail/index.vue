<template>
    <div>
        <div class="bg-fff mt10">
            <div class="plr15 ptb15 f16 clink strong">基本信息 <span class="iconfont iconjibenxinxi"></span></div>
            <comInput :type="0" :titleDark="false" title="业绩单号" value="2322115565512223664"></comInput>
            <comInput :type="0" :titleDark="false" title="客户姓名" value="方周文"></comInput>
            <comInput :type="0" :titleDark="false" title="证件号码" value="521456984564858547"></comInput>
            <comInput :type="0" :titleDark="false" title="购买产品" value="某某某某"></comInput>
            <comInput :type="0" :titleDark="false" title="产品期限" value="14个月"></comInput>
            <comInput :type="0" :titleDark="false" title="合同编号" value="574152429642"></comInput>
            <comInput :type="0" :titleDark="false" title="认购金额" value="18000"></comInput>
            <comInput :type="0" :titleDark="false" title="预期年化收益率" value="0.21"></comInput>
            <comInput :type="0" :titleDark="false" title="出资认缴日" value="18000"></comInput>
            <comInput :type="0" :titleDark="false" title="到账日" value="2019-5-30"></comInput>
            <comInput :type="0" :titleDark="false" title="产品成立日" value="2019-6-30"></comInput>
            <comInput :type="0" :titleDark="false" title="起息日" value="2019-6-30"></comInput>
            <comInput :type="0" :titleDark="false" title="产品到期日" value="2019-6-30"></comInput>
        </div>

        <div class="bg-fff mt10 pb20">
            <div class="plr15 ptb15 f16 clink strong">财务信息 <span class="iconfont iconliaotianduihua"></span></div>
            <comInput :type="0" :titleDark="false" title="本息总额" value="1363445" :border="false"></comInput>
            <comInput :type="0" :titleDark="false" title="总计息天数" value="365天" :border="false"></comInput>
            <div class="f12 ta-c pt10 pb15">展开<span class="iconfont iconxiangxiajiantou"></span></div>
            <div class="bg-color mlr10">
                <div class="list ta-c dis-flex l-center">
                    <div class="item f12">结算次数</div>
                    <div class="item f12">结算日</div>
                    <div class="item f12">结算金额</div>
                    <div class="item f12">派息日</div>
                    <div class="item f12">是否派息</div>
                </div>
                <div class="list ta-c dis-flex l-center">
                    <div class="item f12">第一次</div>
                    <div class="item f12">2019-06-06</div>
                    <div class="item f12">523452</div>
                    <div class="item f12">2019-06-09</div>
                    <div class="item f12">✓</div>
                </div>
                <div class="list ta-c dis-flex l-center">
                    <div class="item f12">第二次</div>
                    <div class="item f12">2019-06-06</div>
                    <div class="item f12">523452</div>
                    <div class="item f12">2019-06-09</div>
                    <div class="item f12">--</div>
                </div>
                <div class="list ta-c dis-flex l-center">
                    <div class="item f12">第三次</div>
                    <div class="item f12">2019-06-06</div>
                    <div class="item f12">523452</div>
                    <div class="item f12">2019-06-09</div>
                    <div class="item f12"></div>
                </div>
                <div class="list ta-c dis-flex l-center">
                    <div class="item f12">第四次</div>
                    <div class="item f12">2019-06-06</div>
                    <div class="item f12">523452</div>
                    <div class="item f12">2019-06-09</div>
                    <div class="item f12">✓</div>
                </div>
                <div class="list ta-c dis-flex l-center">
                    <div class="item f12">第五次</div>
                    <div class="item f12">2019-06-06</div>
                    <div class="item f12">523452</div>
                    <div class="item f12">2019-06-09</div>
                    <div class="item f12">✓</div>
                </div>
            </div>
            <div class="plr15 pb20">
                <div class="cgey f16 ptb15">说明</div>
                <div class="bg-color">
                    <textarea class="f16 ptb10 plr10" name="" id="" cols="30" rows="10" value="说明内容XXXX"></textarea>
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
.list {
	height: 30px;
}
.list .item {
	width: 20%;
}
</style>
