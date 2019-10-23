<template>
  <div class="main">
    <div class="booking">
      <div class="block">
        <div class="title">客户信息</div>
        <div class="from">
          <div class="line">
            <div class="key">客户姓名</div>
            <div class="val">
              <input type="text" placeholder="请输入客户姓名" placeholder-class="cgey">
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

        </div>
      </div>
    </div>

    <div class="booking">
      <div class="block">
        <div class="title">产品信息</div>
        <div class="from">
          <div class="line">
            <div class="key">产品名称</div>
            <div class="val">名称</div>
          </div>
          <div class="line">
            <div class="key">产品期限	</div>
            <div class="val">24个月</div>
          </div>
          <div class="line">
            <div class="key">已募集份数</div>
            <div class="val">500份</div>
          </div>
          <div class="line">
            <div class="key">已募集金额</div>
            <div class="val">5亿</div>
          </div>
          <div class="line">
            <div class="key">剩余募集金额</div>
            <div class="val">2千万</div>
          </div>

          <div class="line">
            <div class="key">已预约人数</div>
            <div class="val">
              <div class="icon"><span class="iconfont iconright"></span></div>
              <div>10人</div>
            </div>
          </div>
          <div class="line">
            <div class="key">已预约金额</div>
            <div class="val">
              <div class="icon"><span class="iconfont iconright"></span></div>
              <div>4亿8千万</div>
            </div>
          </div>
          <div class="line">
            <div class="key">剩余预约金额</div>
            <div class="val">2千万</div>
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
            <div class="val">
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
          </div>
          <div class="line">
            <div class="key">实际付款日期</div>
            <div class="val">
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
          </div>
          <div class="line">
            <div class="key">出资金额			</div>
            <div class="val">
              <input type="text" placeholder="请输入出资金额" placeholder-class="cgey">
            </div>
          </div>

        </div>
      </div>
    </div>

    <button class="btn-submit" @click="send()">提交审核</button>

  </div>
</template>

<script>

export default {
  data () {
    return {
      info: {},
      type_range: ['身份证', '护照'],
      type: '',
      booking_date: '',
      pay_date: ''
    }
  },

  components: {
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
    }
  },

  created () {
  }
}
</script>

<style scoped>
.block .title{
  line-height: 40px;
  height: 40px;
  padding: 0 15px;
  font-size: 13px;
}
.block .from{
  background: #ffffff;
}
.block .from .line{
  line-height: 40px;
  height: 40px;
  display: flex;
  padding: 0 15px;
  font-size: 16px;
}
.block .from .line .key{
  width: 30%;
  /* font-weight: bold; */
}
.block .from .line .val{
  flex: 1;
  padding: 0 5px;
}
.block .from .line .val input{
  line-height: 40px;
  height: 40px;
}
.block .from .line .icon{
  float: right;
  line-height: 40px;
}
.btn-submit{
  background: rgba(80,158,240,1);
  border-radius: 5px;
  color: #ffffff;
  font-size: 16px;
  margin: 15px;
}
</style>
