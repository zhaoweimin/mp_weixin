<template>
    <div class="main">
        <div class="booking" :class="{noEdit: isEdit == 0}">
            <div class="block">
                <div class="title">客户信息</div>
                <div class="from">
                    <div class="line">
                        <div class="key">预约编号</div>
                        <div class="val" v-if="isEdit == 1">
                            <span class="clink">201903201530326548</span>
                        </div>
                        <div class="val ta-r" v-if="isEdit == 0">
                            <span>201903201530326548</span>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">客户姓名</div>
                        <div class="val" v-if="isEdit == 1">
                            <input type="text" placeholder="请输入客户姓名" placeholder-class="cgey">
                        </div>
                        <div class="val ta-r" v-if="isEdit == 0">
                            <span>客户姓名</span>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">证件类型</div>
                        <div class="val" v-if="isEdit == 1">
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
                        <div class="val ta-r" v-if="isEdit == 0">
                            <span>身份证</span>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">证件号码</div>
                        <div class="val" v-if="isEdit == 1">
                            <input type="text" placeholder="请输入证件号码" placeholder-class="cgey">
                        </div>
                        <div class="val ta-r" v-if="isEdit == 0">
                            <span>xxxxxxxxxxx</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div class="booking">
            <div class="block">
                <div class="title">产品信息</div>
                <div class="from">
                    <div class="line">
                        <div class="key">产品类别</div>
                        <div class="val" :class="{'ta-r': isEdit == 0}">{{info['产品类别']}}</div>
                    </div>
                    <div class="line">
                        <div class="key">产品编号</div>
                        <div class="val" :class="{'ta-r': isEdit == 0}">{{info['产品编号']}}</div>
                    </div>
                    <div class="line">
                        <div class="key">产品名称</div>
                        <div class="val" :class="{'ta-r': isEdit == 0}">{{info['产品名称']}}</div>
                    </div>
                    <div class="line">
                        <div class="key">产品期限 </div>
                        <div class="val" :class="{'ta-r': isEdit == 0}">{{info['产品期限']}}个月</div>
                    </div>
                    <div class="line">
                        <div class="key">募集账户 </div>
                        <div class="val" :class="{'ta-r': isEdit == 0}">{{info['募集账户']}}</div>
                    </div>
                    <div class="line">
                        <div class="key">已募集份数</div>
                        <div class="val" :class="{'ta-r': isEdit == 0}">{{info['已募集份数']}}</div>
                    </div>
                    <div class="line">
                        <div class="key">已募集金额</div>
                        <div class="val" :class="{'ta-r': isEdit == 0}">{{info['已募集金额']}}</div>
                    </div>
                    <div class="line">
                        <div class="key">剩余募集金额</div>
                        <div class="val" :class="{'ta-r': isEdit == 0}">{{info['剩余募集金额']}}</div>
                    </div>

                    <div class="line">
                        <div class="key">已预约人数</div>
                        <div class="val" :class="{'ta-r': isEdit == 0}">
                            <!-- <div class="icon"><span class="iconfont iconright"></span></div> -->
                            <div>{{info['已预约人数']}}</div>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">已预约金额</div>
                        <div class="val" :class="{'ta-r': isEdit == 0}">
                            <!-- <div class="icon"><span class="iconfont iconright"></span></div> -->
                            <div>{{info['已预约金额']}}</div>
                        </div>
                    </div>
                    <div class="line">
                        <div class="key">剩余可预约</div>
                        <div class="val" :class="{'ta-r': isEdit == 0}">{{info['剩余可预约']}}</div>
                    </div>

                </div>
            </div>
        </div>

        <div class="booking">
            <div class="block">
                <div class="title">付款信息</div>
                <div class="from">
                    <div class="line">
                        <div class="key">预约付款日期</div>
                        <div class="val" v-if="isEdit == 1">
                            <picker mode="date" :value="booking_date" start="1990-09-01" end="2050-09-01" @change="bindBookingChange">
                                <div class="icon"><span class="iconfont iconright"></span></div>
                                <div class="picker" v-if="booking_date != ''">
                                    {{booking_date}}
                                </div>
                                <div class="picker cgey" v-if="booking_date == ''">
                                    请选择预约付款日期
                                </div>
                            </picker>
                        </div>
                        <div class="val ta-r" v-if="isEdit == 0">
                            <span>2018-10-09</span>
                        </div>
                    </div>
                    <!-- <div class="line">
            <div class="key">实际付款日期</div>
            <div class="val" v-if="isEdit == 1">
              <picker mode="date" :value="pay_date" start="1990-09-01" end="2050-09-01"  @change="bindPayChange">
                <div class="icon"><span class="iconfont iconright"></span></div>
                <div class="picker" v-if="pay_date != ''">
                  {{pay_date}}
                </div>
                <div class="picker cgey" v-if="pay_date == ''">
                  请选择实际付款日期
                </div>
              </picker>
            </div>
            <div class="val ta-r" v-if="isEdit == 0">
              <span>2018-10-09</span>
            </div>
          </div> -->
                    <div class="line">
                        <div class="key">出资金额 </div>
                        <div class="val" v-if="isEdit == 1">
                            <input type="text" placeholder="请输入出资金额（元）" placeholder-class="cgey">
                        </div>
                        <div class="val ta-r" v-if="isEdit == 0">
                            <span>XXXXX元</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <button class="btn-submit" @click="send()" v-if="isEdit == 1">提交审核</button>

    </div>
</template>

<script>
export default {
  data () {
    return {
      isEdit: 0,
      info: {},
      type_range: ['身份证', '护照'],
      type: '',
      booking_date: '',
      pay_date: ''
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
  components: {},
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
.block .title {
	line-height: 40px;
	height: 40px;
	padding: 0 15px;
	font-size: 14px;
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
