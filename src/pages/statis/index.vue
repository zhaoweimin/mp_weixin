<template>
    <div class="main has-header">
        <navbar :info="nav" @changeNav="changeNav"></navbar>
        <div class="statis">
            <div class="title">
                <div class="bg">
                    客户新增
                </div>
                <div class="l-horn"></div>
                <div class="r-horn"></div>
            </div>
            <div class="count">
                <div class="con">
                    <div class="val"><span class="num">{{info.CusThisMonth}}</span><span class="unit">个</span></div>
                    <div class="text">本月新增</div>
                </div>
                <div class="con">
                    <div class="val"><span class="num">{{info.CusThisWeek}}</span><span class="unit">个</span></div>
                    <div class="text">本周新增</div>
                </div>
                <div class="con">
                    <div class="val"><span class="num">{{info.CusToday}}</span><span class="unit">个</span></div>
                    <div class="text">本日新增</div>
                </div>
            </div>
        </div>

        <div class="statis">
            <div class="title">
                <div class="bg">
                    客户总数
                </div>
                <div class="l-horn"></div>
                <div class="r-horn"></div>
            </div>
            <div class="count">
                <div class="con">
                    <div class="val"><span class="num">{{info.Potential}}</span><span class="unit">个</span></div>
                    <div class="text">潜在客户</div>
                </div>
                <div class="con">
                    <div class="val"><span class="num">{{info.Accurate}}</span><span class="unit">个</span></div>
                    <div class="text">准客户</div>
                </div>
                <div class="con">
                    <div class="val"><span class="num">{{info.Deal}}</span><span class="unit">个</span></div>
                    <div class="text">成交客户</div>
                </div>
            </div>
            <div class="count">
                <div class="con">
                    <div class="val"><span class="num">{{info.HisTransactionT}}</span><span class="unit">个</span></div>
                    <div class="text">历史成交客户</div>
                </div>
            </div>
        </div>
        <div class="statis">
            <div class="title">
                <div class="bg">
                    合同领用
                </div>
                <div class="l-horn"></div>
                <div class="r-horn"></div>
            </div>
            <div class="count">
                <div class="con">
                    <div class="val"><span class="num">{{info.CollarUse}}</span><span class="unit">个</span></div>
                    <div class="text">已领用</div>
                </div>
                <div class="con">
                    <div class="val"><span class="num">{{info.AlreadyUsed}}</span><span class="unit">个</span></div>
                    <div class="text">已使用</div>
                </div>
                <div class="con">
                    <div class="val"><span class="num">{{info.ToVoid}}</span><span class="unit">个</span></div>
                    <div class="text">已作废</div>
                </div>
            </div>
        </div>
        <!-- <div class="statis">
            <div class="title">
                <div class="bg">
                    规模业绩
                </div>
                <div class="l-horn"></div>
                <div class="r-horn"></div>
            </div>
            <div class="count rel">
                <div class="icon f12">录入<span class="f12 icon-r iconfont iconright"></span></div>
                <div class="con-title">本季</div>
                <div class="con">
                    <div class="val"><span class="num">20</span><span class="unit">万</span></div>
                    <div class="text">本季目标</div>
                </div>
                <div class="con">
                    <div class="val"><span class="num">12</span><span class="unit">万</span></div>
                    <div class="text">本季完成</div>
                </div>
                <div class="con">
                    <div class="val"><span class="num">0</span><span class="unit">%</span></div>
                    <div class="text">达成率</div>
                </div>
            </div>
            <div class="count rel">
                <div class="icon f12">录入<span class="f12 icon-r iconfont iconright"></span></div>
                <div class="con-title">本月</div>
                <div class="con">
                    <div class="val"><span class="num">10</span><span class="unit">万</span></div>
                    <div class="text">本月目标</div>
                </div>
                <div class="con">
                    <div class="val"><span class="num">5</span><span class="unit">万</span></div>
                    <div class="text">本月完成</div>
                </div>
                <div class="con">
                    <div class="val"><span class="num">50</span><span class="unit">%</span></div>
                    <div class="text">达成率</div>
                </div>
            </div>
        </div> -->
        <!-- <div class="statis">
            <div class="title">
                <div class="bg">
                    年化业绩
                </div>
                <div class="l-horn"></div>
                <div class="r-horn"></div>
            </div>
            <div class="count rel">
                <div class="icon f12">录入<span class="f12 icon-r iconfont iconright"></span></div>
                <div class="con-title">本季</div>
                <div class="con">
                    <div class="val"><span class="num">20</span><span class="unit">万</span></div>
                    <div class="text">本季目标</div>
                </div>
                <div class="con">
                    <div class="val"><span class="num">12</span><span class="unit">万</span></div>
                    <div class="text">本季完成</div>
                </div>
                <div class="con">
                    <div class="val"><span class="num">0</span><span class="unit">%</span></div>
                    <div class="text">达成率</div>
                </div>
            </div>
            <div class="count rel">
                <div class="icon f12">录入<span class="f12 icon-r iconfont iconright"></span></div>
                <div class="con-title">本月</div>
                <div class="con">
                    <div class="val"><span class="num">10</span><span class="unit">万</span></div>
                    <div class="text">本月目标</div>
                </div>
                <div class="con">
                    <div class="val"><span class="num">5</span><span class="unit">万</span></div>
                    <div class="text">本月完成</div>
                </div>
                <div class="con">
                    <div class="val"><span class="num">50</span><span class="unit">%</span></div>
                    <div class="text">达成率</div>
                </div>
            </div>
        </div> -->
        <div class="statis">
            <div class="title">
                <div class="bg">
                    产品销售
                </div>
                <div class="l-horn"></div>
                <div class="r-horn"></div>
            </div>
            <div class="count">
                <div class="con">
                    <div class="val"><span class="num">{{info.AnnualSales}}</span><span class="unit">个</span></div>
                    <div class="text">本年销售</div>
                </div>
                <div class="con">
                    <div class="val"><span class="num">{{info.QuarterlySales}}</span><span class="unit">个</span></div>
                    <div class="text">本季销售</div>
                </div>
                <div class="con">
                    <div class="val"><span class="num">{{info.MonthlySales}}</span><span class="unit">个</span></div>
                    <div class="text">本月销售</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import navbar from '@/components/navbar'

export default {
  data () {
    return {
      nav: ['个人报表', '管理报表'],
      list: [],
      info: {}
    }
  },

  components: {
    navbar
  },

  mounted () {
    this.getInfo()
  },

  methods: {
    changeNav (nav) {
      console.log(nav)
    },
    getInfo () {
      this.$api.getReportData().then(res => {
        console.log(res)
        console.log(1)
        if (res.PromptMsg === "操作成功") {
          console.log(res.RetValue)
          let a = res.RetValue.replace(/\'/g,'"')
          this.info = JSON.parse(a)
        } else {
          console.log(3)
        }
      })
    }
  },

  created () {}
}
</script>

<style scoped>
.statis {
	margin: 30px 15px 15px 15px;
	background: #ffffff;
	border-radius: 2px;
	font-size: 13px;
	text-align: center;
	padding: 0 15px;
}
.statis .title {
	position: relative;
	top: -20rpx;
	line-height: 30px;
	height: 30px;
	width: 100px;
	font-size: 16px;
	font-weight: bold;
	background: #259efa;
	border-bottom-left-radius: 2px;
	border-bottom-right-radius: 2px;
	margin: auto;
	color: #ffffff;
	margin-bottom: -10px;
}
.statis .title .bg {
	z-index: 10;
}
.statis .title .r-horn {
	position: absolute;
	top: 0px;
	right: -19rpx;
	width: 0;
	height: 0;
	border-right: 20rpx solid transparent;
	border-left: 0px solid transparent;
	border-bottom: 20rpx solid #4483c5;
	/* transform:rotate(-45deg); */
	z-index: 1;
}
.statis .title .l-horn {
	position: absolute;
	top: 0px;
	left: -19rpx;
	width: 0;
	height: 0;
	border-right: 0px solid transparent;
	border-left: 20rpx solid transparent;
	border-bottom: 20rpx solid #4483c5;
	/* transform:rotate(-45deg); */
	z-index: 1;
}
.statis .count {
	padding: 15px 0;
	border-top: 1px solid #f5f5f5;
	text-align: left;
}
.statis .count .icon {
	position: absolute;
	right: 0;
	top: 30px;
}
.statis .count .con-title {
	width: 70px;
	margin: 10px auto;
	text-align: center;
	box-sizing: border-box;
	border: 1px solid #259efa;
	line-height: 24px;
	color: #259efa;
	font-size: 15px;
	font-weight: 600;
	border-radius: 2px;
	position: relative;
}
.statis .count .con-title::before {
	content: '';
	position: absolute;
	left: 30px;
	bottom: -5px;
	width: 0;
	height: 0;
	border-top: 5px solid #259efa;
	border-left: 5px solid transparent;
	border-right: 5px solid transparent;
}
.statis .count .con-title::after {
	content: '';
	position: absolute;
	left: 31px;
	bottom: -4px;
	width: 0;
	height: 0;
	border-top: 4px solid #fff;
	border-left: 4px solid transparent;
	border-right: 4px solid transparent;
}
.statis .count:nth-child(2) {
	border-top: 0px solid #f5f5f5;
}
.statis .count .con {
	display: inline-block;
	vertical-align: middle;
	width: 33%;
	text-align: center;
}
.statis .count .val {
	line-height: 40px;
}
.statis .count .val .num {
	font-size: 28px;
	font-weight: 600;
}
.statis .count .val .unit {
	font-size: 10px;
	color: #999999;
	margin-left: 4px;
}
.statis .count .key {
	line-height: 20px;
}
</style>
