<template>
    <div class="customer">
        <div class="bg-fff mt10">
            <div class="pl15 ptb15 f16 strong">活动名称</div>
            <comInput :type="0" title="邀约编号" :isSpecialColorTxt="true" value="15668554456"></comInput>
            <comInput :type="0" title="活动编号" :isSpecialColorTxt="true" value="12354456"></comInput>
            <comInput :type="0" title="邀约日期" value="2019-03-20 15:30"></comInput>
            <comInput :type="0" title="审批状态" value="同意"></comInput>
            <comInput :type="0" title="预计参与人" value="100人"></comInput>
            <comInput :type="0" title="客户姓名" value="欧阳超"></comInput>
            <comInput :type="0" title="手机号码" value="15012002939"></comInput>
            <comInput :type="0" title="客户类型" value="成交客户"></comInput>
            <comInput :type="0" title="客户投资总额" value="150万"></comInput>
            <comInput :type="0" title="邀约审批人" value="杨伟明"></comInput>
            <comInput :type="0" title="所属活动" value="XXXXXX"></comInput>
            <comInput :type="0" title="邀约审批状态" value="同意"></comInput>
            <comInput :type="0" title="备注" value="XXXXXX"></comInput>
            <comInput :type="0" title="理财经理" value="XXXXXX"></comInput>
            <comInput :type="0" title="归属部门" value="XXXXXX"></comInput>
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
