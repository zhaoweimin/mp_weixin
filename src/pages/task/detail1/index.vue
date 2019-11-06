<template>
    <div class="customer">
        <div class="bg-fff mt10">
            <div class="plr15 ptb15 f16 strong">活动名称</div>
            <comInput :type="0" title="邀约编码" :isSpecialColorTxt="true" value="2322115565512223664"></comInput>
            <comInput :type="0" title="活动编号" value="234543"></comInput>
            <comInput :type="0" title="邀约日期" value="2019-03-03"></comInput>
            <comInput :type="0" title="审批状态" value="同意"></comInput>
            <comInput :type="0" title="备注" value="XXX"></comInput>
            <comInput :type="0" title="客户姓名" value="XXX"></comInput>
            <comInput :type="0" title="手机号码" value="15015808369"></comInput>
            <comInput :type="0" title="客户类型" value="成交客户"></comInput>
            <comInput :type="0" title="客户投资总额" value="150万"></comInput>
            <comInput :type="0" title="邀约审批人" value="XXX"></comInput>
            <comInput :type="0" title="所属活动" value="XXXXXXXXX"></comInput>
            <comInput :type="0" title="邀约审批状态" value="同意"></comInput>
            <comInput :type="0" title="备注" value="XXX"></comInput>
            <comInput :type="0" title="理财经理" value="XXXXX"></comInput>
            <comInput :type="0" title="归属部门" value="XXXXX"></comInput>
        </div>
        <div class="plr15 mt25 pb20">
            <van-button type="info" size="large">进入审批</van-button>
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
</style>
