<template>
    <div class="customer">
        <div class="bg-fff mt10">
            <div class="pl15 ptb15 f16 strong">活动名称</div>
            <comInput :type="0" :titleDark="false" :isSpecialColorTxt="true" title="活动编码" value="15668554456"></comInput>
            <comInput :type="0" :titleDark="false" title="活动开始时间" value="2019-03-20 15:30"></comInput>
            <comInput :type="0" :titleDark="false" title="活动结束时间" value="2019-03-20 15:30"></comInput>
            <comInput :type="0" :titleDark="false" title="活动地点" value="深圳市南山区"></comInput>
            <comInput :type="0" :titleDark="false" title="邀约开始时间" value="2019-03-20 15:30"></comInput>
            <comInput :type="0" :titleDark="false" title="邀约结束时间" value="2019-03-20 15:30"></comInput>
            <comInput :type="0" :titleDark="false" title="预计参与人数" value="100人"></comInput>
            <comInput :type="0" :titleDark="false" title="负责人" value="欧阳超"></comInput>
            <comInput :type="0" :titleDark="false" title="所属部门" value="运营部"></comInput>
            <comInput :type="0" :titleDark="false" title="活动类型" value="类型"></comInput>
            <comInput :type="0" :titleDark="false" title="活动范围" value="准客户"></comInput>
            <comInput :type="0" :titleDark="false" title="邀约审批人" value="杨伟明"></comInput>
            <comInput :type="0" :titleDark="false" title="所属部门" value="市场部"></comInput>
            <comInput :type="0" :titleDark="false" title="活动目的" value="合作洽谈"></comInput>
            <div class="plr15 pb20">
                <div class="cgey f16 ptb15">活动概况</div>
                <div class="bg-color">
                    <textarea class="f16 ptb10 plr10" name="" id="" cols="30" rows="10" value="合作洽谈"></textarea>
                </div>
            </div>
        </div>
        <van-button type="info" size="large" @click="addInvitation">+ 新增邀约</van-button>
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
