<template>
    <div class="customer">
        <div class="bg-fff mb20">
            <div class="pl15 ptb15 f16 strong clink">邀约1</div>
            <comInput :type="0" title="邀约编号" :titleDark="true" value="系统分配" :textRight="false"></comInput>
            <comInput :type="1" title="活动名称" :titleDark="true" value="自带" :textRight="false"></comInput>
            <comInput :type="1" title="活动编号" :titleDark="true" value="自带" :textRight="false"></comInput>
            <comInput :type="3" title="邀约日期" :titleDark="true" value="" @getSelectDate="getSelectDate" :textRight="false"></comInput>
            <comInput :type="2" title="审批状态" :titleDark="true" placeholder="请选择审批状态" value="" @getSelect="getSelect" :options="['通过','未通过','等待审核中']" :textRight="false"></comInput>
            <comInput :type="1" title="备注" :titleDark="true" placeholder="请输入备注" value="" :textRight="false"></comInput>
            <comInput :type="1" title="客户姓名" :titleDark="true" placeholder="请输入客户姓名" value="" :textRight="false"></comInput>
            <comInput :type="1" title="手机号码" :titleDark="true" placeholder="请输入手机号码" value="" :textRight="false"></comInput>
            <comInput :type="2" title="客户类型" :titleDark="true" placeholder="请选择客户类型" value="" @getSelect="getSelect" :options="['有意向客户']" :textRight="false"></comInput>
            <comInput :type="1" title="客户投资总额" :titleDark="true" placeholder="请输入客户投资总额" value="" :textRight="false"></comInput>
            <comInput :type="1" title="邀约审批人" :titleDark="true" placeholder="请输入客户投资总额" value="自带" :textRight="false"></comInput>
            <comInput :type="1" title="所属部门" :titleDark="true" placeholder="请输入客户投资总额" value="商务部门" :textRight="false"></comInput>
            <comInput :type="1" title="邀约审批状态" :titleDark="true" placeholder="自动判断状态" value="" :textRight="false"></comInput>
            <comInput :type="1" title="备注" :titleDark="true" placeholder="请输入备注" value="" :textRight="false"></comInput>
            <comInput :type="2" title="理财经理" :titleDark="true" placeholder="请选择理财经理" value="" @getSelect="getSelect" :options="['小王','小李']" :textRight="false"></comInput>
            <comInput :type="2" title="归属部门" :titleDark="true" placeholder="请选择归属部门" value="" @getSelect="getSelect" :options="['市场部门','行政部门']" :textRight="false"></comInput>
        </div>
        <van-button type="info" size="large">确认提交</van-button>
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

  created () {},
  methods: {
    getSelect (data) {
      console.log(11111, data)
    },
    getSelectDate (data) {
      console.log(22, data)
    }
  }
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
