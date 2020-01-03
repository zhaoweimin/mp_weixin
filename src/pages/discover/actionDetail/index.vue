<template>
    <div class="customer">
        <div class="bg-fff mt10">
            <div class="pl15 ptb15 f16 strong">{{info['活动名称']}}</div>
            <comInput :type="0" :titleDark="false" :isSpecialColorTxt="true" title="活动编码" :value="info['活动编码']"></comInput>
            <comInput :type="0" :titleDark="false" title="活动开始时间" :value="info['活动开始时间']"></comInput>
            <comInput :type="0" :titleDark="false" title="活动结束时间" :value="info['活动结束时间']"></comInput>
            <comInput :type="0" :titleDark="false" title="活动地点" :value="info['活动地点']"></comInput>
            <comInput :type="0" :titleDark="false" title="邀约开始时间" :value="info['邀约开始时间']"></comInput>
            <comInput :type="0" :titleDark="false" title="邀约结束时间" :value="info['邀约结束时间']"></comInput>
            <comInput :type="0" :titleDark="false" title="预计参与人数" :value="info['参与人数']"></comInput>
            <comInput :type="0" :titleDark="false" title="负责人" :value="info['负责人']"></comInput>
            <comInput :type="0" :titleDark="false" title="所属部门" :value="info['所属部门']"></comInput>
            <comInput :type="0" :titleDark="false" title="活动类型" :value="info['活动类型']"></comInput>
            <comInput :type="0" :titleDark="false" title="活动范围" :value="info['活动范围']"></comInput>
            <comInput :type="0" :titleDark="false" title="邀约审批人" :value="info['邀约审批人']"></comInput>
            <comInput :type="0" :titleDark="false" title="所属部门" :value="info['所属部门']"></comInput>
            <comInput :type="0" :titleDark="false" title="活动目的" :value="info['活动目的']"></comInput>
            <div class="plr15 pb20">
                <div class="cgey f16 ptb15">活动概况</div>
                <div class="bg-color">
                    <textarea class="f16 ptb10 plr10" name="" id="" cols="30" rows="10" :value="info['活动概况']"></textarea>
                </div>
            </div>
        </div>
        <van-button v-if="type==0" type="info" size="large" @click="addInvitation">+ 新增邀约</van-button>
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
      type: 0,
      info: {}
    }
  },
  methods: {
    addInvitation () {
      mpvue.navigateTo({ url: `/pages/discover/invitation/main` })
    }
  },
  onLoad (option) {
    let type = option.type
    this.type = type

    wx.getStorage({
      // 获取本地缓存
      key: 'action_detail_info',
      success: res => {
        this.info = res.data
      }
    })
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
