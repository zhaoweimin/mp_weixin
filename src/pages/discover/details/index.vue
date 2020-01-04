<template>
    <div class="customer">
        <div class="bg-fff mt10">
            <div class="pl15">
                <div class="ptb15 f16 strong border-b">
                    <div class="dis-flex l-baseline mb5">
                        <div class="f18 strong pr5">{{info['邀约审批人']}}</div>
                        <div class="f12 cgey">{{info['性别']}}</div>
                    </div>
                    <div class="dis-flex">
                        <div class="label-yellow-outline mr10">{{info['客户类型']}}</div>
                        <div class="label-yellow" v-if="info['客户级别']">{{info['客户级别']}}</div>
                    </div>
                </div>
            </div>
            <comInput :type="0" :titleDark="false" title="活动名称" :value="info['活动名称']"></comInput>
            <comInput :type="0" :titleDark="false" title="邀约日期" :value="info['邀约时间']"></comInput>
            <comInput :type="0" :titleDark="false" title="审批状态" :isSpecialColorTxt="true" :value="status"></comInput>
            <comInput :type="0" :titleDark="false" title="备注" :value="info['备注1']"></comInput>
            <comInput :type="0" :titleDark="false" title="手机号码" :value="info['手机号码']"></comInput>
            <comInput :type="0" :titleDark="false" title="客户投资总额" :value="info['客户投资总额']"></comInput>
            <comInput :type="0" :titleDark="false" title="客户累计投资总额" :value="info['客户累计投资总额']"></comInput>
            <comInput :type="0" :titleDark="false" title="邀约审批人" :value="info['邀约审批人']"></comInput>
            <comInput :type="0" :titleDark="false" title="所属部门" :value="info['创建部门']"></comInput>
            <comInput :type="0" :titleDark="false" title="邀约审批状态" :value="info['邀约审批状态']"></comInput>
            <comInput :type="0" :titleDark="false" title="备注" :value="info['备注2']"></comInput>
            <comInput :type="0" :titleDark="false" title="理财经理" :value="info['理财经理']"></comInput>
            <comInput :type="0" :titleDark="false" title="归属部门" :value="info['归属部门']"></comInput>
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
  onLoad (options) {
    this.status = titles.get(options.type)
    wx.getStorage({
      // 获取本地缓存
      key: 'action_detail_info',
      success: res => {
        this.info = res.data
        console.log(this.info)
      }
    })
  },
  methods: {
    addInvitation () {
      mpvue.navigateTo({ url: `/pages/discover/invitation/main` })
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
