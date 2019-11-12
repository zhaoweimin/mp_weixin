<template>
    <div class="main">
        <div class="booking" v-if="step === 0">
            <div class="dis-flex ptb15 a-center">
                <div class="label bg-blue">销售信息</div>
            </div>
            <div class="block">
                <div class="from">
                    <div class="line">
                        <div class="key">业绩单号</div>
                        <div class="val">
                            <span class="clink">XXXXXXXXXX</span>
                        </div>
                    </div>
                    <div class="line required">
                        <div class="key">客户姓名</div>
                        <div class="val">
                            <picker mode="selector" :value="type" :range="type_range" @change="bindTypeChange">
                                <div class="icon"><span class="iconfont iconright"></span></div>
                                <div class="picker" v-if="type != ''">
                                    {{type_range[type]}}
                                </div>
                                <div class="picker cgey" v-if="type == ''">
                                    请选择
                                </div>
                            </picker>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">证件类型</div>
                        <div class="val">
                            <picker mode="selector" :value="type" :range="type_range" @change="bindTypeChange">
                                <div class="icon"><span class="iconfont iconright"></span></div>
                                <div class="picker" v-if="type != ''">
                                    {{type_range[type]}}
                                </div>
                                <div class="picker cgey" v-if="type == ''">
                                    请选择证件类型
                                </div>
                            </picker>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">证件号码</div>
                        <div class="val">
                            <input type="text" placeholder="请输入证件号码" placeholder-class="cgey">
                        </div>
                    </div>
                    <div class="line required">
                        <div class="key">产品名称</div>
                        <div class="val">
                            <picker mode="selector" :value="type" :range="type_range" @change="bindTypeChange">
                                <div class="icon"><span class="iconfont iconright"></span></div>
                                <div class="picker" v-if="type != ''">
                                    {{type_range[type]}}
                                </div>
                                <div class="picker cgey" v-if="type == ''">
                                    请选择产品
                                </div>
                            </picker>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">产品分类</div>
                        <div class="val">
                            <span>XXXXX（选择产品自动带出）</span>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">产品期限</div>
                        <div class="val">
                            <input type="text" placeholder="请输入产品期限" placeholder-class="cgey">
                        </div>
                    </div>
                    <div class="line required">
                        <div class="key">合同编号</div>
                        <div class="val">
                            <picker mode="selector" :value="type" :range="type_range" @change="bindTypeChange">
                                <div class="icon"><span class="iconfont iconright"></span></div>
                                <div class="picker" v-if="type != ''">
                                    {{type_range[type]}}
                                </div>
                                <div class="picker cgey" v-if="type == ''">
                                    请选择合同编号
                                </div>
                            </picker>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">预约编号</div>
                        <div class="val">
                            <span>XXXXXXX（系统自动判断）</span>
                        </div>
                    </div>

                    <div class="line required">
                        <div class="key">理财经理</div>
                        <div class="val">
                            <picker mode="selector" :value="type" :range="type_range" @change="bindTypeChange">
                                <div class="icon"><span class="iconfont iconright"></span></div>
                                <div class="picker" v-if="type != ''">
                                    {{type_range[type]}}
                                </div>
                                <div class="picker cgey" v-if="type == ''">
                                    请选择理财经理
                                </div>
                            </picker>
                        </div>
                    </div>

                    <div class="line required">
                        <div class="key">所属部门</div>
                        <div class="val">
                            <picker mode="selector" :value="type" :range="type_range" @change="bindTypeChange">
                                <div class="icon"><span class="iconfont iconright"></span></div>
                                <div class="picker" v-if="type != ''">
                                    {{type_range[type]}}
                                </div>
                                <div class="picker cgey" v-if="type == ''">
                                    请选择其所属部门
                                </div>
                            </picker>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">录单员</div>
                        <div class="val">
                            <input type="text" placeholder="请输入录单员" placeholder-class="cgey">
                        </div>
                    </div>

                    <div class="line">
                        <div class="key">录单员所属部门</div>
                        <div class="val">
                            <picker mode="selector" :value="type" :range="type_range" @change="bindTypeChange">
                                <div class="icon"><span class="iconfont iconright"></span></div>
                                <div class="picker" v-if="type != ''">
                                    {{type_range[type]}}
                                </div>
                                <div class="picker cgey" v-if="type == ''">
                                    请选择其所属部门
                                </div>
                            </picker>
                        </div>
                    </div>

                    <div class="line line-big required">
                        <div class="key">上传附件（格式pdf或图片）</div>
                        <div class="val" style="padding-bottom: 10px;">
                            <upload></upload>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div class="booking" v-if="step === 1">
            <div class="dis-flex ptb15 a-center">
                <div class="label bg-blue">财务信息</div>
            </div>
            <div class="block">
                <div class="from">
                    <div class="line required">
                        <div class="key">打款日期</div>
                        <div class="val">
                            <picker mode="date">
                                <div class="icon"><span class="iconfont iconright"></span></div>
                                <div class="picker cgey" v-if="type == ''">
                                    请选择打款日期
                                </div>
                            </picker>
                        </div>
                    </div>
                    <div class="line required">
                        <div class="key">合同金额</div>
                        <div class="val">
                            <input type="text" placeholder="请输入合同金额" placeholder-class="cgey">
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">付款方式</div>
                        <div class="val">
                            <picker mode="selector" :value="type" :range="type_range" @change="bindTypeChange">
                                <div class="icon"><span class="iconfont iconright"></span></div>
                                <div class="picker" v-if="type != ''">
                                    {{type_range[type]}}
                                </div>
                                <div class="picker cgey" v-if="type == ''">
                                    请选择付款方式
                                </div>
                            </picker>
                        </div>
                    </div>
                    <div class="line required">
                        <div class="key">付款账户开户行</div>
                        <div class="val">
                            <input type="text" placeholder="请输入付款账户开户行" placeholder-class="cgey">
                        </div>
                    </div>
                    <div class="line required">
                        <div class="key">付款账号</div>
                        <div class="val">
                            <input type="text" placeholder="请输入付款账号" placeholder-class="cgey">
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">累计缴款金额</div>
                        <div class="val">
                            <input type="text" placeholder="请输入累计缴款金额" placeholder-class="cgey">
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">确认收款日</div>
                        <div class="val">
                            <span>此字段由审核人员维护</span>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">起息日</div>
                        <div class="val">
                            <span>此字段由审核人员维护</span>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">产品到期日</div>
                        <div class="val">
                            <span>此字段由审核人员维护</span>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">年化系数</div>
                        <div class="val">
                            <span>此字段自动关联</span>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">年化业绩</div>
                        <div class="val">
                            <span>此字段自动计算</span>
                        </div>
                    </div>
                    <div class="line required">
                        <div class="key">收益分配账户</div>
                        <div class="val">
                            <input type="text" placeholder="请输入收益分配账户" placeholder-class="cgey">
                        </div>
                    </div>
                    <div class="line required">
                        <div class="key">收益分配账户开户行</div>
                        <div class="val">
                            <input type="text" placeholder="请输入收益分配账户开户行" placeholder-class="cgey">
                        </div>
                    </div>
                    <div class="line required">
                        <div class="key">冷静期</div>
                        <div class="val">
                            <picker mode="date">
                                <div class="icon"><span class="iconfont iconright"></span></div>
                                <div class="picker cgey" v-if="type == ''">
                                    请选择冷静期
                                </div>
                            </picker>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- <button class="btn-submit" @click="ser()">下一步</button> -->

        <div class="line-bar">
            <van-button type="info" @click="submit" v-if="step >0">确认新增</van-button>
            <van-button v-if="step == 0" type="info" @click="setStep(1)">下一步</van-button>
            <van-button v-if="step > 0" plain type="info" @click="setStep(0)">上一步</van-button>
        </div>

    </div>
</template>

<script>
import upload from '@/components/upload'

export default {
  data () {
    return {
      step: 0,
      info: {},
      type_range: ['身份证', '护照'],
      type: '',
      booking_date: '',
      pay_date: ''
    }
  },
  onLoad (option) {
    console.log(option)
  },
  components: {
    upload
  },
  methods: {
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
    },
    setStep (type) {
      if (type) {
        this.step += 1
      } else {
        this.step -= 1
      }
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
.noEdit {
}
.booking .label {
	font-size: 13px;
	color: #fff;
	padding: 5px 20px;
}
.noEdit .block .label {
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
	position: relative;
}
.block .line.required::after {
	content: '*';
	color: #ff0000;
	position: absolute;
	left: 10rpx;
	top: 3px;
}
.block .from .line-big {
	display: block;
	height: auto;
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
