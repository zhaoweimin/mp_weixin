<template>
    <div class="main">
        <div class="booking">
            <div class="block">
                <div class="title">客户信息</div>
                <div class="from">
                    <comInput :type="1" title="预约编号" paramkey="string1" @getInputVal="getInputVal" :textRight="false" :isSpecialBorderStyle="true" value=""></comInput>
                    <comInput :type="1" title="客户姓名" paramkey="string13" @getInputVal="getInputVal" :textRight="false" :isSpecialBorderStyle="true" value=""></comInput>
                    <comInput :type="2" title="证件类型" paramkey="string3" :textRight="false" :options="options.customerOriginDetails" @getSelect="getSelect" :isSpecialBorderStyle="true" value="" :isRequired="true"></comInput>
                    <comInput :type="1" title="证件号码" paramkey="string2" @getInputVal="getInputVal" :textRight="false" :isSpecialBorderStyle="true" value=""></comInput>
                </div>
            </div>
        </div>
        <div class="booking">
            <div class="block">
                <div class="title">产品信息</div>
                <div class="from">
                    <comInput :type="0" title="产品类别" :textRight="false" :isSpecialBorderStyle="true" value=""></comInput>
                    <comInput :type="0" title="产品编号" :textRight="false" :isSpecialBorderStyle="true" value=""></comInput>
                    <comInput :type="0" title="产品名称" :textRight="false" :isSpecialBorderStyle="true" value=""></comInput>
                    <comInput :type="0" title="产品期限" :textRight="false" :isSpecialBorderStyle="true" value=""></comInput>
                    <comInput :type="0" title="募集账户" :textRight="false" :isSpecialBorderStyle="true" value=""></comInput>
                    <comInput :type="0" title="已募集份数" :textRight="false" :isSpecialBorderStyle="true" value=""></comInput>
                    <comInput :type="0" title="已募集金额" :textRight="false" :isSpecialBorderStyle="true" value=""></comInput>
                    <comInput :type="0" title="剩余募集金额" :textRight="false" :isSpecialBorderStyle="true" value=""></comInput>
                    <comInput :type="0" title="已预约人数" :textRight="false" :isSpecialBorderStyle="true" value=""></comInput>
                    <comInput :type="0" title="已预约金额" :textRight="false" :isSpecialBorderStyle="true" value=""></comInput>
                    <comInput :type="0" title="剩余可预约" :textRight="false" :isSpecialBorderStyle="true" value=""></comInput>
                </div>
            </div>
        </div>
        <div class="booking">
            <div class="block">
                <div class="title">付款信息</div>
                <div class="from">
                    <comInput :type="3" title="预约打款日期" paramkey="FBirthDate" :textRight="false" :isSpecialBorderStyle="true" value=""></comInput>
                    <!-- <comInput :type="3" title="实际打款日期" paramkey="FBirthDate" :textRight="false" :isSpecialBorderStyle="true" value=""></comInput> -->
                    <comInput :type="1" title="出资金额" paramkey="FNumber" @getInputVal="getInputVal" :textRight="false" :isSpecialBorderStyle="true" value=""></comInput>
                </div>
            </div>
        </div>
        <button class="btn-submit" @click="send()">提交审核</button>
    </div>
</template>

<script>
import comInput from '@/components/comInput'
import Options from '@/utils/Options.js'
export default {
  data () {
    return {
      options: Options,
      info: {},
      type_range: ['身份证', '护照'],
      type: '',
      booking_date: '',
      pay_date: '',
      reqParam: [
        {
          Field: 'string1', // 预约编码
          Value: '66666666666666666' // 值
        },
        {
          Field: 'string13', // 客户姓名
          Value: 'TJ-00110220190821CRM'
        },
        {
          Field: 'string3', // 证件类型
          Value: '证件类型'
        },
        {
          Field: 'string2', // 证件号码
          Value: '证件号码'
        },
        {
          Field: 'date2', // 预约打款日期
          Value: '预约打款日期'
        },
        {
          Field: 'number2', // 出资金额
          Value: '出资金额'
        },
        // --------带入 ------
        {
          Field: 'string35', // 产品类别
          Value: '产品类别'
        },
        {
          Field: 'string33', // 产品编号
          Value: '产品编号'
        },
        {
          Field: 'string34', // 产品名称有两个产品名称     值一样-------特殊-------
          Value: '产品名称'
        },
        {
          Field: 'string16', // 产品名称            值一样-------特殊-------
          Value: '产品名称'
        },
        {
          Field: 'string17', // 产品期限
          Value: '产品期限'
        },
        {
          Field: 'string3', // 募集账户
          Value: '募集账户'
        },
        {
          Field: 'string18', // 已募集份数
          Value: '已募集份数'
        },
        {
          Field: 'string19', // 已募集金额
          Value: '已募集金额'
        },
        {
          Field: 'string20', // 剩余募集金额
          Value: '剩余募集金额'
        },
        {
          Field: 'string21', // 已预约人数
          Value: '已预约人数'
        },
        {
          Field: 'string22', // 已预约金额
          Value: '已预约金额'
        },
        {
          Field: 'string23', // 剩余预约金额
          Value: '剩余可预约'
        },
        // --------默认 ------
        {
          Field: 'string6', // 客户编码
          Value: '客户编码'
        },
        {
          Field: 'string7', // 理财经理
          Value: '管理员'
        },
        {
          Field: 'string8', // 所属部门
          Value: '天玑财富'
        },
        {
          Field: 'string25', // 最后修改人
          Value: '管理员'
        },
        {
          Field: 'string24', // 最后修改部门
          Value: '天玑财富'
        },
        {
          Field: 'date4', // 最后修改时间
          Value: '2019-12-10'
        },
        {
          Field: 'string27', // 创建人
          Value: '管理员'
        },
        {
          Field: 'string26', // 创建部门
          Value: '天玑财富'
        },
        {
          Field: 'date5', // 创建时间
          Value: '2019-12-10'
        },
        {
          Field: 'string12',
          Value: '0'
        },
        {
          Field: 'string15',
          Value: '10183'
        }
      ]
    }
  },
  onLoad (option) {
    this.isEdit = option.isEdit
    // console.log(option)
    mpvue.getStorage({
      // 获取本地缓存
      key: 'product_info',
      success: res => {
        this.info = res.data
        console.log(this.info)
      }
    })
  },
  components: { comInput },
  methods: {
    getInputVal (data) {
      console.log(data)
      //   this.datas[data.key] = data.value
    },
    bindTypeChange (e) {
      let val = e.mp.detail.value
      this.type = val
    },
    bindBookingChange (e) {
      let val = e.mp.detail.value
      this.booking_date = val
    },
    bindPayChange (e) {
      let val = e.mp.detail.value
      this.pay_date = val
    },
    send () {
      let url = '/pages/success/main'
      mpvue.navigateTo({ url })
    }
  },

  created () {}
}
</script>

<style scoped>
.block {
	background: #ffffff;
	margin-bottom: 10px;
}

.block .title {
	line-height: 40px;
	height: 40px;
	padding: 0 15px;
	font-size: 16px;
	font-weight: bold;
}
.noEdit .block .title {
	color: #259efa;
}
.block .from {
	background: #ffffff;
}
.block .from .line {
	line-height: 40px;
	height: 40px;
	display: flex;
	padding: 0 15px;
	font-size: 14px;
}
.block .from .line .key {
	min-width: 30%;
	/* font-weight: bold; */
}
.block .from .line .val {
	flex: 1;
	padding: 0 5px;
}
.block .from .line .val input {
	line-height: 40px;
	height: 40px;
}
.block .from .line .icon {
	float: right;
	line-height: 40px;
}
.btn-submit {
	background: rgba(80, 158, 240, 1);
	border-radius: 5px;
	color: #ffffff;
	font-size: 16px;
	margin: 15px;
}
</style>
