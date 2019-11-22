<template>
    <div class="customer">
        <div class="bg-fff mt10">
            <div class="plr15 ptb15 f16 clink strong">详情</div>
            <comInput :type="0" title="产品编号" value="12331231231"></comInput>
            <comInput :type="0" title="产品类型" value="股权类"></comInput>
            <comInput :type="0" title="基金管理人名称" value="程程"></comInput>
            <comInput :type="0" title="基金管理人编号" value="42691"></comInput>
            <comInput :type="0" title="基金名称" value="某某"></comInput>
            <comInput :type="0" title="基金类型" value="某某"></comInput>
            <comInput :type="0" title="合伙主体" value="私募基金管理机构"></comInput>
            <comInput :type="0" title="基金规模" value="10万"></comInput>
            <comInput :type="0" title="计划募集规模" value="20万"></comInput>
            <comInput :type="0" title="基金份额" value="80%"></comInput>
            <comInput :type="0" title="基金单位净值" value="15亿"></comInput>
            <comInput :type="0" title="退出期" value="12个月"></comInput>
            <comInput :type="0" title="投资期限" value="12个月"></comInput>
            <comInput :type="0" title="募集期" value="100天"></comInput>
            <comInput :type="0" title="托管方" value="XXXXXX"></comInput>
            <comInput :type="0" title="募集监督机构" value="XXXXXX"></comInput>
            <comInput :type="0" title="托管账户" value="1231312312312312"></comInput>
            <comInput :type="0" title="募集账户户名" value="XXXXXX"></comInput>
            <comInput :type="0" title="募集账户开户行" value="XXXXXX"></comInput>
            <comInput :type="0" title="募集账户账号" value="XXXXXX"></comInput>
            <comInput :type="0" title="收益分配日" value="2019-03-25"></comInput>
            <comInput :type="0" title="收益基准日" value="2019-03-25"></comInput>
            <comInput :type="0" title="止损线" value="0.8"></comInput>
            <comInput :type="0" title="系统产品成立日" value="2019-03-25"></comInput>
            <comInput :type="0" title="系统产品到期日" value="2029-03-25"></comInput>
            <comInput :type="0" title="开放日" value="2029-03-25"></comInput>
            <comInput :type="0" title="合同终止日" value="2029-03-25"></comInput>
            <comInput :type="0" title="产品兑付日" value="2029-03-25"></comInput>
            <comInput :type="0" title="业绩比较基准" value="9%"></comInput>
            <comInput :type="0" title="管理费" value="200万"></comInput>
            <comInput :type="0" title="认购费" value="150万"></comInput>
            <comInput :type="0" title="申购费" value="2000万"></comInput>
            <comInput :type="0" title="赎回费" value="263万"></comInput>
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
