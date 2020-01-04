<template>
    <div class="main has-big-header">
        <navbar :info="nav" @changeNav="changeNav"></navbar>
        <search :fixed="false" :isMainBg="false" :rightButton="true" placeholder="搜索"></search>
        <block v-for="(vo, key) in list" :key="key">
            <div class="customer-card report-card" @click="detail(key)">
                <div class="tle">客户</div>
                <div class="dis-flex">
                    <div class="msg">
                        <div class="title"><span class="srtong">{{vo['客户姓名']}}</span> <span class="sex">{{vo['性别']}}</span></div>
                        <div class="tags level-1">
                            <div class="tag">{{vo['客户类型']}}</div>
                            <div class="tag level" v-if="vo['客户级别']">{{vo['客户级别']}}</div>
                        </div>
                        <!-- <div class="tags level-2" v-if="vo.level == 2">
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
                        </div> -->
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
                            <span class="strong">{{vo['被投诉人']}}</span>
                            <span class="time cgey">{{vo['投诉日期']}}被投诉</span>
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
      list: [],
      page: 1
    }
  },

  components: {
    navbar,
    card,
    search
  },

  mounted () {
    this.getList()
  },

  onReachBottom () {
    return false
    this.getList(this.page + 1)
  },

  methods: {
    getList (page = 1) {
      this.$api
        .getReportList(page, this.curNavId + 1)
        .then(res => {
          res = JSON.parse(res.RetValue)
          console.log(res)
          if (res.success) {
            if (page === 1) {
              this.list = res.rows.map(m=>{
                let item = m
                item['投诉日期'] = m['投诉日期']?m['投诉日期'].split(' ')[0]:'--'
                return item
              })
            } else {
              this.list = this.list.concat(res.rows.map(m=>{
                let item = m
                item['投诉日期'] = m['投诉日期']?m['投诉日期'].split(' ')[0]:'--'
                return item
              }))
            }
            if (res.rows.length > 0) this.page = page
          } else {
            if (page === 1) {
              this.list = []
            }
          }
        })
    },
    detail (key) {
      let url = `../reportDetail/main?type=${this.curNavId}&id=${key}`
      mpvue.setStorageSync('report_info', this.list[key])
      mpvue.navigateTo({ url })
    },
    changeNav (e) {
      this.curNavId = e
      console.log(e)
      this.getList()
    }
  },
  onLoad(){
    Object.assign(this.$data, this.$options.data())
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
