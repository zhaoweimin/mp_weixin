<template>
  <div class="main">
    <div class="booking">
      <div class="block">
        <div class="table">
          <div class="line">
            <div class="key">业绩单号</div>
            <div class="val">
              <input type="text" placeholder="请输入业绩单号" placeholder-class="cgey">
            </div>
          </div>
          <div class="line">
            <div class="key">客户姓名</div>
            <div class="val">
              <input type="text" placeholder="请输入客户姓名" placeholder-class="cgey">
            </div>
          </div>
          <div class="line">
            <div class="key">产品分类</div>
            <div class="val">
              <picker mode="selector" :value="type" :range="type_range" @change="bindTypeChange">
                <div class="icon"><span class="iconfont iconright"></span></div>
                <div class="picker" v-if="type != ''">
                  {{type_range[type]}}
                </div>
                <div class="picker cgey" v-if="type == ''">
                  请选择产品分类
                </div>
              </picker>
            </div>
          </div>
          <div class="line">
            <div class="key">产品名称</div>
            <div class="val">
              <input type="text" placeholder="请输入产品名称" placeholder-class="cgey">
            </div>
          </div>
          <div class="line">
            <div class="key">产品期限</div>
            <div class="val">
              <input type="text" placeholder="请输入产品期限" placeholder-class="cgey">
            </div>
          </div>
          <div class="line">
            <div class="key">提成计提周期</div>
            <div class="val">
              <input type="text" placeholder="请输入计提周期" placeholder-class="cgey">
            </div>
          </div>
          <div class="line">
            <div class="key">合同编号</div>
            <div class="val">
              <input type="text" placeholder="请输入合同编号" placeholder-class="cgey">
            </div>
          </div>
          <div class="line">
            <div class="key">预约编号</div>
            <div class="val">
              <input type="text" placeholder="请输入预约编号" placeholder-class="cgey">
            </div>
          </div>
          <div class="line">
            <div class="key">理财经理</div>
            <div class="val">
              <picker mode="selector" :value="manage" :range="manage_range" @change="bindManageChange">
                <div class="icon"><span class="iconfont iconright"></span></div>
                <div class="picker" v-if="manage != ''">
                  {{manage_range[manage]}}
                </div>
                <div class="picker cgey" v-if="manage == ''">
                  请选择理财经理
                </div>
              </picker>
            </div>
          </div>
          <div class="line">
            <div class="key">所属部门</div>
            <div class="val">
              <picker mode="selector" :value="team" :range="team_range" @change="bindTeamChange">
                <div class="icon"><span class="iconfont iconright"></span></div>
                <div class="picker" v-if="team != ''">
                  {{team_range[team]}}
                </div>
                <div class="picker cgey" v-if="team == ''">
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
        </div>
      </div>
    </div>
    <button class="btn-submit" @click="send()">确认新增</button>

  </div>
</template>

<script>

export default {
  data () {
    return {
      info: {},
      type_range: ['销售', '代理'],
      manage_range: ['张三', '李四'],
      team_range: ['销售部', '代理部'],
      type: '',
      manage: '',
      team: '',
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
    bindManageChange (e) {
      let val = e.mp.detail.value
      this.manage = val
    },
    bindTeamChange (e) {
      let val = e.mp.detail.value
      this.team = val
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
.block .table{
  background: #ffffff;
}
.block .table .line{
  line-height: 40px;
  height: 40px;
  display: flex;
  padding: 0 15px;
  font-size: 16px;
}
.block .table .line .key{
  width: 30%;
  /* font-weight: bold; */
}
.block .table .line .val{
  flex: 1;
  padding: 0 5px;
}
.block .table .line .val input{
  line-height: 40px;
  height: 40px;
}
.block .table .line .icon{
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
