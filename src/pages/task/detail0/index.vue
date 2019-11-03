<template>
    <div class="customer">
        <div class="bg-fff mt10">
            <comInput :type="0" title="单据编号" :isSpecialColorTxt="true" value="53456762312313"></comInput>
            <comInput :type="0" title="业绩单号" :isSpecialColorTxt="true" value="1312245423"></comInput>
            <comInput :type="0" title="客户名称" value="XXX"></comInput>
            <comInput :type="0" title="购买产品" value="XXX"></comInput>
            <comInput :type="0" title="产品期限" value="12个月"></comInput>
            <comInput :type="0" title="认购金额" value="12万"></comInput>
            <comInput :type="0" title="出资认缴日" value="2019-09-08"></comInput>
            <comInput :type="0" title="到账日" value="2019-09-08"></comInput>
            <comInput :type="0" title="到期日" value="2019-09-08"></comInput>
            <comInput :type="0" title="认购费" value="关联产品发布"></comInput>
            <comInput :type="0" title="提成方式" value="一次"></comInput>
            <comInput :type="0" title="提奖率" value="80%"></comInput>
            <comInput :type="0" title="本次提奖" value="50万"></comInput>
            <comInput :type="0" title="部门经理" value="XXX"></comInput>
            <comInput :type="0" title="归属部门" value="XXX"></comInput>
            <comInput :type="0" title="申请时间" value="2019-09-08"></comInput>
        </div>
        <div class="plr15 mt25 pb20">
            <van-button type="info" size="large" @click="link">进入审批</van-button>
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
  methods: {
    link () {
      console.log(111)
      let url = '/pages/task/approval/main?id='
      mpvue.navigateTo({ url })
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
