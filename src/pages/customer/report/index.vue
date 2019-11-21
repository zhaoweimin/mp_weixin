<template>
    <div class="main has-big-header">
        <navbar :info="nav" @changeNav="changeNav"></navbar>
        <search :fixed="false" :isMainBg="false" :rightButton="true" placeholder="搜索"></search>
        <block v-for="(vo, key) in list" :key="key">
            <div class="customer-card report-card" @click="detail(vo.id)">
                <div class="tle">客户</div>
                <div class="dis-flex">
                    <div class="msg">
                        <div class="title"><span class="srtong">{{vo.name}}</span> <span class="sex">{{vo.sex ? '先生' : '女士'}}</span></div>
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
                <div class="line dis-flex">
                    <div class="flex-1"></div>
                    <div class="iconfont iconright"></div>
                </div>
                <div class="tle mt10">被投诉人</div>
                <div class="dis-flex">
                    <!-- <div class="avatar">
                        <img class="img" :src="vo.avatar" mode="aspectFill">
                    </div> -->
                    <div class="msg">
                        <div class="title dis-flex">
                            <span class="strong">杨文超</span>
                            <span class="time cgey">2019-03-20 15:30被投诉</span>
                        </div>
                        <!-- <div class="title"><span class="tag-grey">投诉单号：20190320153023654</span></div> -->
                    </div>
                </div>
                <img v-if="curNavId===0" class="status" src="../../../img/status_deal.png" alt="">
                <img v-else class="status" src="../../../img/status_no_deal.png" alt="">
            </div>
        </block>
    </div>
</template>

<script>
import navbar from '@/components/navbar'
import card from '@/components/customerCard'
import search from '@/components/search'

export default {
  data () {
    return {
      nav: ['待处理', '已处理'],
      curNavId: 0,
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

  components: {
    navbar,
    card,
    search
  },

  methods: {
    detail (id) {
      let url = `../reportDetail/main?type=${this.curNavId}&id=${id}`
      mpvue.navigateTo({ url })
    },
    changeNav (e) {
      this.curNavId = e
      console.log(e)
    }
  },

  created () {
    // let app = getApp()
  }
}
</script>

<style scoped>
.report-card {
	padding: 10px;
	position: relative;
}
.report-card .tle {
	font-size: 17px;
	line-height: 30px;
	font-weight: bold;
}
.report-card .msg {
	padding: 0 0;
}
.report-card .msg .title {
	font-size: 13px;
}
.report-card .msg .time {
	margin-left: 10px;
}
.report-card .msg .tag-grey {
	/* border: 1px solid #999999; */
	color: #999999;
	padding: 0 6px;
	border-radius: 2px;
}
.report-card .line {
	line-height: 10px;
	margin-top: 10px;
}
.report-card .line .flex-1 {
	position: relative;
	top: 10px;
	height: 1px;
	background: rgba(242, 242, 242, 1);
}
.report-card .line .iconfont {
	position: relative;
	top: -20px;
}
.report-card .status {
	position: absolute;
	right: 20px;
	top: 0;
	height: 50px;
	width: 70px;
}
</style>
