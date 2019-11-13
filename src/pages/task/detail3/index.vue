<template>
    <div class="customer">
        <div class="bg-fff mt10">
            <comInput :type="0" :titleDark="false" title="申请人" value="XXX"></comInput>
            <comInput :type="0" :titleDark="false" title="所属部门" value="XXX"></comInput>
            <comInput :type="0" :titleDark="false" title="活动编号" :isSpecialColorTxt="true" value="2322115565512223664"></comInput>
            <comInput :type="0" :isRequired="true" :titleDark="false" title="活动名称" value="XXX"></comInput>
            <comInput :type="3" :titleDark="false" title="活动开始时间" value="2019-09-09" @getSelectDate="getSelectDate"></comInput>
            <comInput :type="0" :isRequired="true" :titleDark="false" title="活动地点" value="XXX"></comInput>
            <comInput :type="0" :isRequired="true" :titleDark="false" title="活动申请部门" value="XXX"></comInput>
            <comInput :type="0" :isRequired="true" :titleDark="false" title="负责人" value="XXX"></comInput>
            <comInput :type="0" :isRequired="true" :titleDark="false" title="活动类型" value="XXX"></comInput>
            <comInput :type="0" :isRequired="true" :titleDark="false" title="活动范围" value="XXX"></comInput>
            <comInput :type="0" :isRequired="true" :titleDark="false" title="预计成本" value="XXX"></comInput>
            <comInput :type="0" :titleDark="false" title="后端提奖金额" value="XXX"></comInput>
            <div class="plr15 ptb10 border-b rel">
                <div class="required cred">*</div>
                <div class="f16 cgey mb10">方案附件</div>
                <div class="dis-flex l-end">
                    <img class="preview" src="../../../img/preview.png" alt="">
                    <div class="f12 cgey">（点击预览）</div>
                </div>
            </div>
            <div class="plr15 ptb10">
                <div class="f16 cgey mb10">需求申请表附件</div>
                <div class="dis-flex l-end">
                    <img class="preview" src="../../../img/preview.png" alt="">
                    <div class="f12 cgey">（点击预览）</div>
                </div>
            </div>
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
.preview {
	width: 100px;
	height: 100px;
}
.required {
	position: absolute;
	left: 10px;
	top: 14px;
	font-size: 12px;
}
</style>
