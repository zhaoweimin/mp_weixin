<template>
    <div class="customer">
        <div class="bg-fff mt10">
            <div class="pl15 ptb15 f16 strong">活动名称</div>
            <comInput :type="0" :titleDark="false" title="邀约编码" :isSpecialColorTxt="true" :value="info['邀约编码']"></comInput>
            <comInput :type="0" :titleDark="false" title="活动编号" :isSpecialColorTxt="true" :value="info['活动编号']"></comInput>
            <comInput :type="0" :titleDark="false" title="邀约日期" :value="info['邀约日期']"></comInput>
            <comInput :type="0" :titleDark="false" title="审批状态" :value="info['审批状态']"></comInput>
            <comInput :type="0" :titleDark="false" title="备注" :value="info['备注']"></comInput>
            <!-- <comInput :type="0" :titleDark="false" title="预计参与人" :value="100人"></comInput> -->
            <comInput :type="0" :titleDark="false" title="客户姓名" :value="info['客户姓名']"></comInput>
            <comInput :type="0" :titleDark="false" title="手机号码" :value="info['手机号码']"></comInput>
            <comInput :type="0" :titleDark="false" title="客户类型" :value="info['客户类型']"></comInput>
            <comInput :type="0" :titleDark="false" title="客户投资总额" :value="info['客户投资总额']"></comInput>
            <comInput :type="0" :titleDark="false" title="邀约审批人" :value="info['邀约审批人']"></comInput>
            <comInput :type="0" :titleDark="false" title="所属活动" :value="info['所属活动']"></comInput>
            <comInput :type="0" :titleDark="false" title="邀约审批状态" :value="info['邀约审批状态']"></comInput>
            <comInput :type="0" :titleDark="false" title="备注" :value="info['备注']"></comInput>
            <comInput :type="0" :titleDark="false" title="理财经理" :value="info['理财经理']"></comInput>
            <comInput :type="0" :titleDark="false" title="归属部门" :value="info['归属部门']"></comInput>
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
  onLoad (option) {
    wx.getStorage({
      // 获取本地缓存
      key: 'market_customer_info',
      success: res => {
        this.info = res.data
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
