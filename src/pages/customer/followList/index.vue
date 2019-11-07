<template>
    <div class="main has-header">
        <search placeholder="搜索"></search>
        <div class="customer-card follow-custom" v-for="(vo, key) in list" :key="key">
            <div class="dis-flex l-center mb15 plr10">
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
                <div class="right" @click="isShowForm=!isShowForm"><span class="iconfont iconxiangxiajiantou f12"></span></div>
            </div>
            <div v-if="isShowForm">
                <comInput :type="0" title="跟进编号" :isSpecialColorTxt="true" value="12312313123123"></comInput>
                <comInput :type="0" title="客户编号" :isSpecialColorTxt="true" value="12312311"></comInput>
                <comInput :type="2" title="跟进方式" placeholder="请选择" value="" @getSelect="getSelect" :options="['通过','未通过','等待审核中']"></comInput>
                <comInput :type="3" title="上次跟进时间" value="" @getSelectDate="getSelectDate"></comInput>
                <comInput :type="3" title="计划跟进时间" value="" @getSelectDate="getSelectDate"></comInput>
                <comInput :type="2" title="客户类型" placeholder="请选择" value="" @getSelect="getSelect" :options="['通过','未通过','等待审核中']"></comInput>
                <comInput :type="1" title="投资总额" value="100万元"></comInput>
                <comInput :type="1" title="累计投资总额" value="200万元"></comInput>
                <div class="mlr15 ptb10 border-b">
                    <div class="cgey f16 mb10">跟进主题</div>
                    <textarea name="" id="" cols="30" rows="10" placeholder="" value="主题内容XXX"></textarea>
                </div>
                <comInput :type="2" title="跟进类型" placeholder="请选择" value="" @getSelect="getSelect" :options="['通过','未通过','等待审核中']"></comInput>
                <div class="mlr15 ptb10 border-b">
                    <div class="cgey f16 mb10">跟进内容</div>
                    <textarea name="" id="" cols="30" rows="10" placeholder="" value="沟通签署合同事宜"></textarea>
                </div>
                <comInput :type="3" title="今日跟进时间" value="" @getSelectDate="getSelectDate"></comInput>
                <div class="mlr15 ptb10 border-b">
                    <div class="cgey f16 mb10">今日跟进计划</div>
                    <textarea name="" id="" cols="30" rows="10" placeholder="" value="执行签署合同事宜"></textarea>
                </div>
                <comInput :type="1" title="跟进人" value="小张"></comInput>
                <comInput :type="1" title="跟进部门" value="小王"></comInput>
            </div>
            <div v-else class="more dis-flex flex-column a-center plr15">
                <div class="line"><span>跟进类型-</span><span class="cblack">转化成交</span></div>
                <div class="line">
                    <span>跟进内容-</span><span class="cblack">沟通签署合同事宜</span>
                </div>
            </div>
        </div>
        <div v-if="isShowForm" class="ptb25 plr15 ">
            <van-button type="info" size="large">跟进</van-button>
        </div>
    </div>
</template>

<script>
import search from '@/components/search'
import comInput from '@/components/comInput'

export default {
  components: {
    search,
    comInput
  },

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
        }
        // {
        //   name: '刘世勋',
        //   avatar: 'https://wx.qlogo.cn/mmopen/vi_32/Po7hia4bia7Ua8tZxjcLfpHsEKgzMT3wf3HzhE6TqQHqsbXSL72dFpjIlPmAYuzv5VVpgic1iaZ703Op5I4LovGOgg/132?imageView2/2/w/100/q/80/v=',
        //   id: 0,
        //   level: 4,
        //   sex: 1
        // },
        // {
        //   name: '方世伟',
        //   avatar: 'https://wx.qlogo.cn/mmopen/vi_32/Po7hia4bia7Ua8tZxjcLfpHsEKgzMT3wf3HzhE6TqQHqsbXSL72dFpjIlPmAYuzv5VVpgic1iaZ703Op5I4LovGOgg/132?imageView2/2/w/100/q/80/v=',
        //   id: 0,
        //   level: 2,
        //   sex: 1
        // },
        // {
        //   name: '董颖',
        //   avatar: 'https://wx.qlogo.cn/mmopen/vi_32/Po7hia4bia7Ua8tZxjcLfpHsEKgzMT3wf3HzhE6TqQHqsbXSL72dFpjIlPmAYuzv5VVpgic1iaZ703Op5I4LovGOgg/132?imageView2/2/w/100/q/80/v=',
        //   id: 0,
        //   level: 3,
        //   sex: 0
        // }
      ],
      isShowForm: false
    }
  },

  methods: {
    detail (id) {
      let url = `../followDetail/main?id=${id}`
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
	padding: 10px 0 0;
	margin: 15px 15px;
}
.follow-custom .more {
	padding: 5px 10px;
	border-top: 1px solid rgba(242, 242, 242, 1);
}
.follow-custom .line {
	line-height: 18px;
}
.follow-custom .line .right {
	float: right;
}
textarea {
	padding: 15px 10px;
	height: 100px;
	width: 100%;
	box-sizing: border-box;
	background-color: #f1f1f1;
}
</style>
