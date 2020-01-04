<template>
    <div class="customer">
        <div class="bg-fff mb20">
            <comInput :type="0" title="邀约编号" :titleDark="true" value="系统分配" :textRight="false"></comInput>
            <comInput :type="1" title="活动名称" :titleDark="true" value="自带" :textRight="false"></comInput>
            <comInput :type="1" title="活动编号" :titleDark="true" value="自带" :textRight="false"></comInput>
            <comInput :type="3" title="邀约日期" :titleDark="true" value="" @getSelectDate="getSelectDate" :textRight="false"></comInput>
            <comInput :type="2" title="审批状态" :titleDark="true" placeholder="请选择审批状态" value="" @getSelect="getSelect" :options="['通过','未通过','等待审核中']" :textRight="false"></comInput>
            <comInput :type="1" title="备注" :titleDark="true" placeholder="请输入备注" value="" :textRight="false"></comInput>
            <div class="mlr15 ptb15 f16 strong clink border-b">邀约(1)</div>
            <comInput :type="1" title="客户姓名" :titleDark="true" placeholder="请输入客户姓名" value="" :textRight="false"></comInput>
            <comInput :type="1" title="手机号码" :titleDark="true" placeholder="请输入手机号码" value="" :textRight="false"></comInput>
            <comInput :type="2" title="客户类型" :titleDark="true" placeholder="请选择客户类型" value="" @getSelect="getSelect" :options="['有意向客户']" :textRight="false"></comInput>
            <comInput :type="1" title="客户投资总额" :titleDark="true" placeholder="请输入客户投资总额" value="" :textRight="false"></comInput>
            <comInput :type="1" title="邀约审批人" :titleDark="true" placeholder="请输入客户投资总额" value="自带" :textRight="false"></comInput>
            <comInput :type="1" title="所属部门" :titleDark="true" placeholder="请输入客户投资总额" value="商务部门" :textRight="false"></comInput>
            <comInput :type="1" title="邀约审批状态" :titleDark="true" placeholder="自动判断状态" value="" :textRight="false"></comInput>
            <comInput :type="1" title="备注" :titleDark="true" placeholder="请输入备注" value="" :textRight="false"></comInput>
            <comInput :type="2" title="理财经理" :titleDark="true" placeholder="请选择理财经理" value="" @getSelect="getSelect" :options="['小王','小李']" :textRight="false"></comInput>
            <comInput :type="2" title="归属部门" :titleDark="true" placeholder="请选择归属部门" value="" @getSelect="getSelect" :options="['市场部门','行政部门']" :textRight="false"></comInput>
            
            <div v-for="(item, index) in customers" :key="index">
                <div class="mlr15 ptb15 f16 strong clink border-b">邀约({{item.number+1}})</div>
                <comInput :type="1" title="客户姓名" :titleDark="true" placeholder="请输入客户姓名" value="" :textRight="false"></comInput>
                <comInput :type="1" title="手机号码" :titleDark="true" placeholder="请输入手机号码" value="" :textRight="false"></comInput>
                <comInput :type="2" title="客户类型" :titleDark="true" placeholder="请选择客户类型" value="" @getSelect="getSelect" :options="['有意向客户']" :textRight="false"></comInput>
                <comInput :type="1" title="客户投资总额" :titleDark="true" placeholder="请输入客户投资总额" value="" :textRight="false"></comInput>
            </div>
        </div>
        <div class="ta-c pt25 pb25 clink f16" @click="addCustomer">+ 添加邀约</div>
        <van-button type="info" size="large">确认提交</van-button>
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
      info: {},
      customers: [],
      customerNum: 1,
      params: {
        string1: '', //邀约编号
        string2: '', //活动名称
        string3: '', //活动编号
        string4: '', //邀约理财经理
        string8: '', //邀约理财经理编码
        string36: '', //邀约理财经理所属部门
        string20: '', //活动范围
        string25: '', //活动类型
        string39: '', //负责人
        string43: '', //负责人编码
        string31: '', //负责部门
        string30: '', //邀约审批人
        string9: '', //审批人编码
        string44: '', //邀约审批人归属部门
        date8: '', //邀约开始时间
        date10: '', //邀约结束时间
        date11: '', //活动开始时间
        date12: '', //活动结束时间
        string19: '', //创建人
        string12: '', //创建人编码
        date4: '', //创建日期
        string17: '', //创建部门
        string16: '', //最后修改人
        date3: '', //最后修改日期
        string14: '', //最后修改部门
        date8: '', //邀约日期
        string6: '', //审批状态
        string7: '', //备注
      },
      Fentrys: [
        {
          FentryIndex: 1, // 第几个表体
          FentryField: 'fentry1', // 表体ID
          Rows: [
            {
              isAdd: true,
              Fields: []
            }

          ]
        }
      ],
      Fields: {
        string15: '', //客户姓名
        string35: '', // 客户姓名
        string22: '', // 客户编码
        string42: '', // 手机号码
        string21: '', // 客户类型
        string18: '', // 客户投资总额
        string34: '', // 客户累计投资总额
        string28: '', // 理财经理
        string5: '', // 理财经理所属部门
        string23: '', // 邀约审批状态
        string24: '', // 备注
      }
    }
  },
  onLoad (option) {
    console.log(1);
    wx.getStorage({
      // 获取本地缓存
      key: 'market_customer_info',
      success: res => {
        this.info = res.data
        console.log(res.data)
      }
    })
  },
  created () {},
  methods: {
    getSelect (data) {
      console.log(11111, data)
    },
    getSelectDate (data) {
      console.log(22, data)
    },
    addCustomer () {
      this.customers.push({ number: this.customerNum++ })
    }
  }
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
