<template>
    <div class="customer">
        <div class="bg-fff mt10">
            <div class="pl15">
                <div class="ptb15 f16 strong border-b">
                    <div class="dis-flex l-baseline mb5">
                        <div class="f18 strong pr5">张耀阳</div>
                        <div class="f12 cgey">先生</div>
                    </div>
                    <div class="dis-flex">
                        <div class="label-yellow-outline mr10">历史成交客户</div>
                        <div class="label-yellow">A级</div>
                    </div>
                </div>
            </div>
            <comInput :type="0" :titleDark="false" title="活动名称" value="自带"></comInput>
            <comInput :type="0" :titleDark="false" title="邀约日期" value="默认当前"></comInput>
            <comInput :type="0" :titleDark="false" title="审批状态" :isSpecialColorTxt="true" :value="status"></comInput>
            <comInput :type="0" :titleDark="false" title="备注" value="XXXXXXX"></comInput>
            <comInput :type="0" :titleDark="false" title="手机号码" value="15000000000"></comInput>
            <comInput :type="0" :titleDark="false" title="客户投资总额" value="100万"></comInput>
            <comInput :type="0" :titleDark="false" title="邀约审批人" value="自带"></comInput>
            <comInput :type="0" :titleDark="false" title="所属部门" value="商务部门"></comInput>
            <comInput :type="0" :titleDark="false" title="邀约审批状态" value="自动判断状态"></comInput>
            <comInput :type="0" :titleDark="false" title="备注" value="XXXXXXXX"></comInput>
            <comInput :type="0" :titleDark="false" title="理财经理" value="XXX"></comInput>
            <comInput :type="0" :titleDark="false" title="归属部门" value="XXX"></comInput>
        </div>
    </div>
</template>

<script>
import card from '@/components/card'
import comInput from '@/components/comInput'

const titles = new Map([['1', '待审批'], ['2', '同意'], ['3', '拒绝']])
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
      },
      status: ''
    }
  },
  methods: {
    addInvitation () {
      mpvue.navigateTo({ url: `/pages/discover/invitation/main` })
    }
  },
  onLoad (options) {
    this.status = titles.get(options.type)
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
