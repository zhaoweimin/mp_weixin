<template>
    <div class="main has-big-header">
        <navbar :info="navList" @changeNav="changeNav"></navbar>
        <search :fixed="false" :isMainBg="false" :rightButton="true" placeholder="搜索"></search>
        <block v-for="(vo, key) in list" :key="key">
            <!-- <card :info="vo"></card> -->
            <div class="con-list">
                <div class="flex">
                    <div class="flex-1 left">
                        <div class="order over-flow-ellipsis" v-if="nav == 0">合同编号：<span class="clink">{{vo['合同编号']}}</span></div>
                        <div class="order over-flow-ellipsis" v-if="nav == 1">合同编号：{{vo['合同编号']}}</div>
                        <div class="order over-flow-ellipsis used" v-if="nav == 2">合同编号：{{vo['合同编号']}}</div>

                        <div class="mt10">
                            <div class="time" v-if="nav == 1">业绩单号：6549846546</div>
                            <div class="time">发放日期：{{vo['合同发放日期']}}</div>
                        </div>
                    </div>
                    <div class="status">
                        <img class="img" v-if="nav == 0" src="../../../img/status_using.png" alt="">
                        <img class="img" v-if="nav == 1" src="../../../img/status_used.png" alt="">
                    </div>
                </div>
            </div>
        </block>
    </div>
</template>

<script>
import navbar from '@/components/navbar'
import card from '@/components/contractCard'
import search from '@/components/search'

export default {
  data () {
    return {
      navList: ['可使用', '已使用'],
      nav: 0,
      list: []
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
    this.getList(this.page + 1)
  },

  methods: {
    changeNav (nav) {
      console.log(nav)
      this.nav = nav
    },
    getList (page = 1) {
      this.$api
        .getContractList(page)
        .then(res => {
          console.log(res)
          if (res.success) {
            if (page === 1) {
              this.list = res.rows
            } else {
              this.list = this.list.concat(res.rows)
            }
            if (res.rows.length > 0) this.page = page
          }
        })
    }
  },

  created () {}
}
</script>

<style scoped>
.con-list {
	margin: 30rpx;
	border-radius: 4rpx;
	background: #ffffff;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
	padding: 5px;
}
.con-list .left {
	padding: 5px 10px;
	border-right: 1px dashed #dbdbdb;
}
.con-list .left .order {
	line-height: 45px;
	color: #020202;
	font-size: 17px;
	font-weight: bold;

}
.con-list .left .used {
	color: #9d9d9d;
}
.con-list .left .time {
	font-size: 13px;
	line-height: 15px;
	color: #9d9d9d;
}
.con-list .status {
	padding: 10px;
}
.con-list .status .img {
	width: 90px;
	height: 68px;
}
</style>
