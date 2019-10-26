<template>
    <div class="main">
        <div class="customer-card follow-custom" v-for="(vo, key) in list" :key="key" @click="detail(vo.id)">
            <div class="dis-flex">
                <div class="avatar">
                    <img class="img" :src="vo.avatar" mode="aspectFill">
                </div>
                <div class="msg">
                    <div class="title"><span class="strong">{{vo.name}}</span> <span class="sex">{{vo.sex ? '先生' : '女士'}}</span></div>
                    <div class="tags level-1" v-if="vo.level == 1">
                        <div class="tag">历史成交客户</div>
                        <div class="tag level">A级</div>
                    </div>
                    <div class="tags level-2" v-if="vo.level == 2">
                        <div class="tag">成交客户</div>
                        <div class="tag level">B级</div>
                    </div>
                    <div class="tags level-3" v-if="vo.level == 3">
                        <div class="tag">准客户</div>
                        <div class="tag level">C级</div>
                    </div>
                    <div class="tags level-4" v-if="vo.level == 4">
                        <div class="tag">潜在客户</div>
                        <div class="tag level">D级</div>
                    </div>
                </div>
            </div>
            <div class="base more">
                <div class="line">
                    <div class="key">邀约活动：</div>
                    <div class="val">某某活动</div>
                </div>
                <div class="line">
                    <div class="key">活动发起人</div>
                    <div class="val">方兆龙</div>
                </div>
                <div class="line">
                    <div class="key">发起部门：</div>
                    <div class="val">运营部</div>
                </div>
                <div class="line">
                    <div class="key">活动时间：</div>
                    <div class="val">2019-03-20</div>
                </div>
                <div class="line">
                    <div class="key">邀约审批人：</div>
                    <div class="val">纳兰方知</div>
                </div>
                <div class="line">
                    <div class="key">审批结果：</div>
                    <div class="val">纳兰方知</div>
                    <div class="right">更多 <span class="iconfont iconright"></span></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      type: 0,
      list: [
        {
          name: '张耀阳',
          avatar: 'https://wx.qlogo.cn/mmopen/vi_32/Po7hia4bia7Ua8tZxjcLfpHsEKgzMT3wf3HzhE6TqQHqsbXSL72dFpjIlPmAYuzv5VVpgic1iaZ703Op5I4LovGOgg/132?imageView2/2/w/100/q/80/v=',
          id: 0,
          level: 1,
          sex: 1
        },
        {
          name: '刘世勋',
          avatar: 'https://wx.qlogo.cn/mmopen/vi_32/Po7hia4bia7Ua8tZxjcLfpHsEKgzMT3wf3HzhE6TqQHqsbXSL72dFpjIlPmAYuzv5VVpgic1iaZ703Op5I4LovGOgg/132?imageView2/2/w/100/q/80/v=',
          id: 0,
          level: 4,
          sex: 1
        },
        {
          name: '方世伟',
          avatar: 'https://wx.qlogo.cn/mmopen/vi_32/Po7hia4bia7Ua8tZxjcLfpHsEKgzMT3wf3HzhE6TqQHqsbXSL72dFpjIlPmAYuzv5VVpgic1iaZ703Op5I4LovGOgg/132?imageView2/2/w/100/q/80/v=',
          id: 0,
          level: 2,
          sex: 1
        },
        {
          name: '董颖',
          avatar: 'https://wx.qlogo.cn/mmopen/vi_32/Po7hia4bia7Ua8tZxjcLfpHsEKgzMT3wf3HzhE6TqQHqsbXSL72dFpjIlPmAYuzv5VVpgic1iaZ703Op5I4LovGOgg/132?imageView2/2/w/100/q/80/v=',
          id: 0,
          level: 3,
          sex: 0
        }
      ]
    }
  },

  components: {},

  methods: {
    detail (id) {
      let url = `/pages/customer/customer/main?id=${id}`
      mpvue.navigateTo({ url })
    }
  },

  onLoad (option) {
    let type = option.type
    this.type = type
    let title = ['今日需跟进', '计划跟进', '本周需跟进', '超过30天未跟进']
    mpvue.setNavigationBarTitle({ title: title[type - 1] })
  }
}
</script>

<style scoped>
.follow-custom {
	margin: 10px 10px;
	padding: 12px;
}
.follow-custom .base {
	padding: 5px 0;
	border-top: 1px solid rgba(242, 242, 242, 1);
	margin-top: 15px;
	height: auto;
}
.follow-custom .line {
	line-height: 30px;
	display: flex;
}
.follow-custom .line .key {
	width: 24%;
}
.follow-custom .line .val {
	flex: 1;
	color: #333333;
}
</style>
