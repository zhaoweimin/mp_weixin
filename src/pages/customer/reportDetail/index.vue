<template>
    <div class="customer" :class="{'has-footer':type===1}">
        <div class="customer-card dis-flex l-center">
            <div class="msg">
                <div class="title"><span class="strong">{{info.name}}</span> <span class="sex">2019-03-20 15:30被投诉</span></div>
            </div>
        </div>

        <div class="msg-table">
            <div class="title">基本信息 <span class="iconfont iconjibenxinxi"></span></div>
            <div class="table">
                <div class="line-2">
                    <div class="key">投诉单号</div>
                    <div class="val ta-r clink">20190320153023654</div>
                </div>
                <div class="line-2">
                    <div class="key">客户姓名</div>
                    <div class="val ta-r">周方文</div>
                </div>
                <div class="line-2">
                    <div class="key">证件号码</div>
                    <div class="val ta-r">521365846951234452361</div>
                </div>
                <div class="line-2">
                    <div class="key">邮箱</div>
                    <div class="val ta-r">19855625@163.com</div>
                </div>
                <div class="line-2">
                    <div class="key">被投诉人</div>
                    <div class="val ta-r">杨文超</div>
                </div>
                <div class="line-2">
                    <div class="key">被投诉部门</div>
                    <div class="val ta-r">销售部</div>
                </div>
                <div class="line-2">
                    <div class="key">购买产品</div>
                    <div class="val ta-r">产品名</div>
                </div>

            </div>
        </div>

        <div class="msg-table">
            <div class="title">投诉信息 <span class="iconfont iconliaotianduihua"></span></div>
            <div class="table">
                <div class="line-2 line">
                    <div class="key">投诉项目</div>
                    <div class="val">项目名称</div>
                </div>
                <div class="line-2 line">
                    <div class="key">投诉日期</div>
                    <div class="val">2019-03-20 15:30</div>
                </div>

                <div class="line-3 line">
                    <div class="key">投诉原因</div>
                    <div class="val ta-l">
                        <text>投诉原因</text>
                    </div>
                </div>
                <div class="line-3 line">
                    <div class="key">投诉内容</div>
                    <div class="val ta-l">
                        <text>投诉内容</text>
                    </div>
                </div>

                <div class="line-2 line">
                    <div class="key">要求回复电话</div>
                    <div class="val">未回复</div>
                </div>

            </div>
        </div>

        <div class="msg-table">
            <div class="title">处理说明 <span class="iconfont iconjibenxinxi"></span></div>
            <div class="table">
                <div class="line">
                    <div class="key flex-1">处理状态</div>
                    <div class="val">处理中 <span class="iconfont iconright"></span></div>
                </div>
                <div class="line-3 line has-pd-b">
                    <div class="key">处理批注</div>
                    <div class="val ta-l">
                        <text>请求协调处理</text>
                    </div>
                </div>
            </div>
        </div>

        <div class="msg-table">
            <div class="title">转部门主管 <span class="iconfont iconjibenxinxi"></span></div>
            <div class="table pb20">
                <!-- <div class="line">
          <div class="key flex-1">处理状态</div>
          <div class="val">处理中 <span class="iconfont iconright"></span></div>
        </div> -->
                <!-- <div class="line-3 line has-pd-b">
          <div class="key">办理意见</div>
          <div class="val ta-l">
            <text>加紧协调处理</text>
          </div>
        </div> -->
                <div class="search">
                    <span class="iconfont iconsearch-1-copy"></span><input class="input" type="text" placeholder="搜索" placeholder-class="cgrey">
                </div>
            </div>
        </div>

        <!-- <div class="footer-line">
            <div class="flex-1"></div>
            <div class="text">已经到底了</div>
            <div class="flex-1"></div>
        </div> -->

        <div v-if="type===1" class="footer-bar">
            <div class="flex-1 mr10">
                <van-button plain type="info" @click="submit">提交</van-button>
            </div>
            <div class="flex-1">
                <van-button type="info" @click="reBack">打回</van-button>
            </div>
        </div>

    </div>
</template>

<script>
import card from '@/components/card'

export default {
  components: {
    card
  },
  onLoad (option) {
    this.type = option.type * 1
    console.log(this.type)
  },
  data () {
    return {
      info: {
        avatar: 'https://wx.qlogo.cn/mmopen/vi_32/Po7hia4bia7Ua8tZxjcLfpHsEKgzMT3wf3HzhE6TqQHqsbXSL72dFpjIlPmAYuzv5VVpgic1iaZ703Op5I4LovGOgg/132?imageView2/2/w/100/q/80/v=',
        name: '张耀扬',
        level: 1,
        sex: 1
      },
      type: 0
    }
  },

  created () {}
}
</script>

<style>
.customer-card {
	margin: 0px;
	height: 60px;
	background: linear-gradient(to right, #509ef0, #5bc7ff); /* 标准的语法 */
	border-radius: 0px;
	position: relative;
	margin-bottom: 30px;
}
.customer-card::after {
	content: '';
	position: absolute;
	bottom: -19px;
	left: 32px;
	width: 0;
	height: 0;
	border-width: 10px;
	border-style: solid;
	border-color: #509ef0 transparent transparent transparent;
}
.customer-card .msg .title {
	color: #ffffff;
	line-height: 22px;
}

.customer-card .msg .title .sex {
	color: #ffffff;
}
.customer-card .avatar {
	width: 46px;
	height: 46px;
}
.customer-card .avatar .img {
	width: 46px;
	height: 46px;
}
.customer-card .avatar .text {
	color: #ffffff;
	font-size: 12px;
	text-align: center;
	line-height: 12px;
}
.msg-table {
	margin: 15px 0;
	background: #ffffff;
	border-radius: 4px;
}
.msg-table .title {
	padding-top: 5px;
	margin-left: 15px;
	padding-right: 15px;
	font-weight: bold;
	line-height: 40px;
}
.msg-table .table {
	padding-left: 15px;
	line-height: 40px;
}
.msg-table .table .line-2,
.msg-table .table .line {
	display: flex;
	padding-right: 15px;
	font-size: 13px;
	border-top: rgba(245, 245, 245, 1);
}
.msg-table .table .line .key {
	color: #999999;
}
.msg-table .table .line-2 .key {
	color: #999999;
	width: 30%;
}
.msg-table .table .line-2 .val {
	flex: 1;
}
.msg-table .table .line-3 {
	display: block;
}
.msg-table .table .line-3 .val {
	padding: 10px;
	border-radius: 4px;
	background: #f5f5f5;
	line-height: 20px;
	min-height: 60px;
}
.has-pd-b {
	padding-bottom: 20px;
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

.customer-card .msg .tag-f {
	border: 1px solid #ffffff;
	color: #509ef0;
	padding: 0 6px;
	border-radius: 2px;
	background: #ffffff;
	font-size: 13px;
}

.footer-line {
	display: flex;
	line-height: 30px;
	margin: 20px 20%;
	color: #a4a4a4;
}
.footer-line .flex-1 {
	height: 1px;
	background: #a4a4a4;
	position: relative;
	top: 15px;
}
.footer-line .text {
	margin: 0 10px;
	font-size: 10px;
}

.msg-table .search {
	height: 36px;
	border: 1px solid #a3d0ff;
	border-radius: 4px;
	margin-top: 5px;
	margin-right: 15px;
	line-height: 36px;
	display: flex;
}
.msg-table .search .iconfont {
	color: #999;
	margin: 0 10px;
	display: block;
}
.msg-table .search .input {
	flex: 1;
	height: 36px;
}
</style>
