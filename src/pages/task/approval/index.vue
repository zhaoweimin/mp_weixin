<template>
    <div class="customer">
        <img class="banner" src="../../../img/tcsq.png" alt="">
        <div class="bg-fff plr15 mb10">
            <div class="steps pt25">
                <div v-for="(item, index) in steps" :key="index" class="steps-item">
                    <div class="steps-item-dot" :class="[index===0?'active':'bg-blue']"></div>
                    <div class="steps-item-cnt f14" :class="{'border-l':index!==steps.length-1}">
                        <div class="mt-2">{{item.person}}</div>
                        <div class="pt5 pb10">
                            <div>环节名称：{{item.stepName}}</div>
                            <div v-if="item.status">处理状态：<span class="clink">{{item.status}}</span></div>
                            <div v-if="item.time">处理时间：{{item.time}}</div>
                            <div v-if="item.mark">处理意见：<span class="cgreen">{{item.mark}}</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-fff plr15 ptb20">
            <div class="f16 clink mb15">处理意见</div>
            <textarea class="textarea bg-color plr10 ptb10 border-box" value="XXXXXXXXXXXXXXXXXXXXXXXXXXXX"></textarea>
        </div>
        <div class="dis-flex a-between plr15 mt25 pb20">
            <van-button plain type="info" custom-style="width: 160px">驳回</van-button>
            <van-button type="info" custom-style="width: 160px">通过</van-button>
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
      },
      active: 0,
      steps: [
        {
          person: '管理员',
          stepName: '起草',
          status: '待审批',
          time: '2019-09-09'
        },
        {
          person: '管理员',
          stepName: '会审3',
          time: '2019-09-09',
          proccess: '提交kingdee管理员进行会审'
        },
        {
          person: '管理员',
          stepName: '会审3',
          time: '2019-09-09',
          mark: '管理员已审核，系统自动通过'
        },
        {
          person: '管理员',
          stepName: '会审3',
          time: '2019-09-09',
          mark: '管理员已审核，系统自动通过'
        }
      ],
      msg: {}
    }
  },

  onLoad() {
		this.msg = mpvue.getStorageSync('detail0')
    console.log('=>>', mpvue.getStorageSync('detail0'))
    this.getInfo()
	},

  methods: {
    getInfo () {
      this.$api.getApplayRes(this.msg.flowid, 10818).then(res => {
        console.log(res);
      })
    }
  }
}
</script>

<style>
.banner {
	width: 375px;
	height: 88px;
}
.steps-item {
	position: relative;
	padding-left: 6px;
}
.steps-item .steps-item-cnt {
	padding-left: 16px;
	/* border-left: 1px solid #d8d8d8; */
}
.steps-item .steps-item-dot {
	position: absolute;
	left: 0;
	width: 11px;
	height: 11px;
	border-radius: 50%;
}
.steps-item .steps-item-dot.active {
	background-color: #fff;
	box-shadow: 0 0 4px 1px #259efa;
}
.mt-2 {
	transform: translateY(-2px);
}
.textarea {
	width: 100%;
	height: 150px;
}
</style>
