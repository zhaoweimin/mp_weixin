<template>
  <div class="customer creat has-footer">
    <div class="msg-top-bg">
    </div>
    <div class="msg-table has-bg box-shaw">
      <div class="title">
        风险能力测评 <span class="iconfont iconkehugenjin"></span>
        <div class="fr check-count" @click="lingQuestion">
          去测评
        </div>
      </div>
      <div class="flex chart">
        <div class="count">
          <div class="num">80</div>
          <div class="text">风险测评得分</div>
        </div>
        <div class="flex-1">
          <div class="text">客户风险等级：---</div>
          <div class="text">风险承受能力类型：---</div>
          <div class="text">相匹配产品风险等级：---</div>
        </div>
      </div>
    </div>

    <div class="step-block box-shaw">
      <div class="line left" v-if="step > 0"></div>
      <div class="line right" v-if="step > 1"></div>
      <div class="flex">
        <div class="flex-1">
          <div class="number active">1</div>
          <div class="text">基本信息</div>
        </div>
        <div class="flex-1">
          <div class="number" :class="{active: step > 0}">2</div>
          <div class="text">联系方式</div>
        </div>
        <div class="flex-1">
          <div class="number" :class="{active: step == 2}">3</div>
          <div class="text">兴趣爱好</div>
        </div>
      </div>
    </div>


    <div class="msg-table" v-show="step === 0">
      <div class="table">
        <div class="line">
          <div class="key">客户编号</div>
          <div class="val">
            <input v-show="isEdit" class="input" placeholder="请输入客户编号" placeholder-class="cplaceholder" type="text" v-model="code">
          </div>
        </div>
        <div class="line required">
          <div class="key">客户来源</div>
          <picker class="val" @change="pickerSell" :value="sell" :range="sells" :disabled="!isEdit">
            {{sells[sell]}} <span class="iconfont iconright"></span>
          </picker>
        </div>
        <div class="line required">
          <div class="key">客户来源明细</div>
          <div class="val">市场活动 <span class="iconfont iconright"></span></div>
        </div>
        <div class="line">
          <div class="key">市场活动</div>
          <div class="val">
            <input v-show="isEdit" class="input" placeholder="请输入市场活动" placeholder-class="cplaceholder" type="text" v-model="code">
          </div>
        </div>
        <div class="line">
          <div class="key">投诉次数</div>
          <div class="val">
            <input v-show="isEdit" class="input" placeholder="请输入投诉次数" placeholder-class="cplaceholder" type="text" v-model="code">
          </div>
        </div>
        <div class="line required">
          <div class="key">证件类型</div>
          <div class="val">身份证 <span class="iconfont iconright"></span></div>
        </div>
        <div class="line required">
          <div class="key">证件号码</div>
          <div class="val">
            <input v-show="isEdit" class="input" placeholder="请输入证件号码" placeholder-class="cplaceholder" type="text" v-model="code">
          </div>
        </div>
        <div class="line required">
          <div class="key">婚姻状况</div>
          <div class="val">已婚 <span class="iconfont iconright"></span></div>
        </div>
        <div class="line">
          <div class="key">出身日期</div>
          <div class="val">1985.3.25 <span class="iconfont iconright"></span></div>
        </div>
        <div class="line">
          <div class="key">国籍</div>
          <div class="val">中国 <span class="iconfont iconright"></span></div>
        </div>
        <div class="line">
          <div class="key">生日关怀</div>
          <div class="val">晚宴 <span class="iconfont iconright"></span></div>
        </div>
        <div class="line">
          <div class="flex-1">
            <div class="key l-end w100">工作单位</div>
            <!-- <div class="val">深圳市xxx公司 <span class="iconfont iconright"></span></div> -->
            <div class="text-val text-placeholder">
              <textarea v-show="isEdit" class="input" placeholder="请输入工作单位" placeholder-class="cplaceholder" type="text" v-model="code" />
            </div>
          </div>
        </div>
        <div class="line required">
          <div class="key">行业</div>
          <div class="val">互联网 <span class="iconfont iconright"></span></div>
        </div>
        <div class="line">
          <div class="key">职位</div>
          <div class="val">市场总监 <span class="iconfont iconright"></span></div>
        </div>
        <div class="line required">
          <div class="key">常住省份</div>
          <div class="val">广东 <span class="iconfont iconright"></span></div>
        </div>
        <div class="line required">
          <div class="key">常住城市</div>
          <div class="val">深圳 <span class="iconfont iconright"></span></div>
        </div>

      </div>
    </div>

    <div class="msg-table" v-show="step === 1">
      <div class="table" >
        <div class="line required">
          <div class="key">手机号码</div>
          <div class="val">
            <input v-show="isEdit" class="input" placeholder="请输入手机号码" placeholder-class="cplaceholder" type="text" v-model="code">
          </div>
        </div>
        <div class="line">
          <div class="key">电话类型</div>
          <div class="val">国内电话 <span class="iconfont iconright"></span></div>
        </div>
        <div class="line">
          <div class="key">紧急联系人</div>
          <div class="val">
            <input v-show="isEdit" class="input" placeholder="请输入紧急联系人" placeholder-class="cplaceholder" type="text" v-model="code">
          </div>
        </div>
        <div class="line">
          <div class="key">紧急联系人电话</div>
          <div class="val">
            <input v-show="isEdit" class="input" placeholder="请输入紧急联系人电话" placeholder-class="cplaceholder" type="text" v-model="code">
          </div>
        </div>
        <div class="line required">
          <div class="flex-1">
            <div class="key">邮寄地址</div>
            <div class="text-val text-placeholder">
              <textarea v-show="isEdit" class="input" placeholder="请输入邮寄地址" placeholder-class="" type="text" v-model="code" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="msg-table" v-show="step === 2">
      <div class="table">
        <div class="line">
          <div class="key">性别</div>
          <div class="val">
            男
            <span class="iconfont iconright"></span>
          </div>
        </div>
        <div class="line">
          <div class="key">年龄段</div>
          <div class="val">25岁以下 <span class="iconfont iconright"></span></div>
        </div>
        <div class="line">
          <div class="key">行业</div>
          <div class="val">互联网行业 <span class="iconfont iconright"></span></div>
        </div>
        <div class="line">
          <div class="key">投资占收入比</div>
          <div class="val">5%-20% <span class="iconfont iconright"></span></div>
        </div>
        <div class="line">
          <div class="key">投资理财年限</div>
          <div class="val">2-5年 <span class="iconfont iconright"></span></div>
        </div>

        <div class="line">
          <div class="flex-1">
            <div class="key">收入来源</div>
            <div class="check-bok">
              <div v-for="(vo, key) in souce_income" :key="key">
                <van-checkbox :value="vo.val" @change="onChange(key, 'income')">{{vo.text}}</van-checkbox>
              </div>
            </div>
          </div>
        </div>
        <div class="line">
          <div class="flex-1">
            <div class="key">投资私募基金信息来源渠道</div>
            <div class="check-bok">
              <div v-for="(vo, key) in souce_channel" :key="key">
                <van-checkbox :value="vo.val" @change="onChange(key, 'channel')">{{vo.text}}</van-checkbox>
              </div>
            </div>
          </div>
        </div>
        <div class="line">
          <div class="flex-1">
            <div class="key">选择私募基金的关注点</div>
            <div class="check-bok">
              <div v-for="(vo, key) in souce_point" :key="key">
                <van-checkbox :value="vo.val" @change="onChange(key, 'point')">{{vo.text}}</van-checkbox>
              </div>
            </div>
          </div>
        </div>
        <div class="line">
          <div class="flex-1">
            <div class="key">运动健康</div>
            <div class="check-bok">
              <div v-for="(vo, key) in souce_exercise" :key="key">
                <van-checkbox :value="vo.val" @change="onChange(key, 'exercise')">{{vo.text}}</van-checkbox>
              </div>
            </div>
          </div>
        </div>
        <div class="line">
          <div class="flex-1">
            <div class="key">私享会</div>
            <div class="check-bok">
              <div v-for="(vo, key) in souce_enjoy" :key="key">
                <van-checkbox :value="vo.val" @change="onChange(key, 'enjoy')">{{vo.text}}</van-checkbox>
              </div>
            </div>
          </div>
        </div>
        <div class="line">
          <div class="flex-1">
            <div class="key">沙龙分享</div>
            <div class="check-bok">
              <div v-for="(vo, key) in souce_salon" :key="key">
                <van-checkbox :value="vo.val" @change="onChange(key, 'salon')">{{vo.text}}</van-checkbox>
              </div>
            </div>
          </div>
        </div>
        <div class="line">
          <div class="flex-1">
            <div class="key">女性专享手作</div>
            <div class="check-bok">
              <div v-for="(vo, key) in souce_hands" :key="key">
                <van-checkbox :value="vo.val" @change="onChange(key, 'hands')">{{vo.text}}</van-checkbox>
              </div>
            </div>
          </div>
        </div>
        <div class="line">
          <div class="flex-1">
            <div class="key">亲子/单人手作</div>
            <div class="check-bok">
              <div v-for="(vo, key) in souce_selfHands" :key="key">
                <van-checkbox :value="vo.val" @change="onChange(key, 'selfHands')">{{vo.text}}</van-checkbox>
              </div>
            </div>
          </div>
        </div>
        <div class="line">
          <div class="flex-1">
            <div class="key">美食专享</div>
            <div class="check-bok">
              <div v-for="(vo, key) in souce_food" :key="key">
                <van-checkbox :value="vo.val" @change="onChange(key, 'food')">{{vo.text}}</van-checkbox>
              </div>
            </div>
          </div>
        </div>
        <div class="line">
          <div class="flex-1">
            <div class="key">旅行</div>
            <div class="check-bok">
              <div v-for="(vo, key) in souce_travel" :key="key">
                <van-checkbox :value="vo.val" @change="onChange(key, 'travel')">{{vo.text}}</van-checkbox>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="line-bar">
        <van-button type="info" @click="submit" v-if="step === 2">确认</van-button>
        <van-button type="info" @click="setStep(1)" v-if="step < 2">下一步</van-button>
        <van-button plain type="info" @click="setStep(0)" v-if="step > 0">上一步</van-button>
    </div>
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  components: {
    card
  },
  computed: {
    updateSource () {
      return this.source
    }
  },
  data () {
    return {
      info: {
        avatar: 'https://wx.qlogo.cn/mmopen/vi_32/Po7hia4bia7Ua8tZxjcLfpHsEKgzMT3wf3HzhE6TqQHqsbXSL72dFpjIlPmAYuzv5VVpgic1iaZ703Op5I4LovGOgg/132?imageView2/2/w/100/q/80/v=',
        name: '张耀扬',
        level: 1,
        sex: 1
      },
      code: '',
      step: 0,

      open: [false, false, false, false, false],
      isEdit: true,
      check: [true, true, false, false],
      souce_income: [
        {val: false, text: '工资，劳务报酬'},
        {val: false, text: '生产经营所得'},
        {val: false, text: '利息、股息，转让证券等金融性资产收入'},
        {val: false, text: '出租、出售房地产等非金融性资产收入 '}
      ],
      souce_channel: [
        {val: false, text: '互联网'},
        {val: false, text: '微信、微博等手机App'},
        {val: false, text: '亲戚朋友'},
        {val: false, text: '银行、证券、信托公司'},
        {val: false, text: '私募基金管理机构'},
        {val: false, text: '第三方理财机构'}
      ],
      souce_point: [
        {val: false, text: '私募基金管理机构的品牌'},
        {val: false, text: '基金销售机构的宣传和推介'},
        {val: false, text: '私募基金的业绩表现 '},
        {val: false, text: '综合考虑私募基金管理机构的管理能力'}
      ],
      souce_exercise: [
        {val: false, text: '马术运动'},
        {val: false, text: '帆船/游艇出海'},
        {val: false, text: '高尔夫赛事/体验场'},
        {val: false, text: '网球'},
        {val: false, text: '射箭'},
        {val: false, text: '羽毛球'},
        {val: false, text: '其他'}
      ],
      souce_enjoy: [
        {val: false, text: '红酒品鉴'},
        {val: false, text: '形象提升'},
        {val: false, text: '美体/形体培训'},
        {val: false, text: '珠宝鉴赏'},
        {val: false, text: '其他'}
      ],
      souce_salon: [
        {val: false, text: '摄影分享'},
        {val: false, text: '花艺沙龙'},
        {val: false, text: '投资策略'},
        {val: false, text: '茶艺沙龙'},
        {val: false, text: '其他'}
      ],
      souce_hands: [
        {val: false, text: '香水手作'},
        {val: false, text: '小黑裙手作 '},
        {val: false, text: '包包手作'},
        {val: false, text: '香薰干花蜡烛手作'},
        {val: false, text: '口红手作'},
        {val: false, text: '其他'}
      ],
      souce_selfHands: [
        {val: false, text: '油画创作手作'},
        {val: false, text: '鸡尾酒/精酿啤酒手作'},
        {val: false, text: '咖啡手作'},
        {val: false, text: '永生花＆永生花团扇手作'},
        {val: false, text: '蛋糕/粽子/饼干手作'},
        {val: false, text: '其他'}
      ],
      souce_food: [
        {val: false, text: '西餐'},
        {val: false, text: '自助餐'},
        {val: false, text: '中餐'},
        {val: false, text: '日料'},
        {val: false, text: '日料'}
      ],
      souce_travel: [
        {val: false, text: '繁华都市'},
        {val: false, text: '名胜古迹'},
        {val: false, text: '自然景观'},
        {val: false, text: '水乡古镇'},
        {val: false, text: '海滨海岛'},
        {val: false, text: '其他'}
      ],

      sells: ['直销', '代理'],
      sexs: ['男', '女'],

      sell: 0,
      sex: 0
    }
  },
  created () {
  },
  methods: {
    setOpen (key) {
      this.open[key] = !this.open[key]
      this.$forceUpdate()
    },
    setStep (type) {
      if (type) {
        this.step += 1
      } else {
        this.step -= 1
      }
    },
    edit () {
      // console.log(1)
      if (!this.isEdit) {
        this.isEdit = true
      }
    },
    lingQuestion (e) {
      let url = `../quetions/main?type=1`
      mpvue.navigateTo({ url })
    },
    submit () {
      this.isEdit = false
    },
    cancle () {
      this.isEdit = false
    },
    onChange (key, type) {
      if (this.isEdit) {
        switch (type) {
          case 'income':
            this.souce_income[key].val = !this.souce_income[key].val
            break
          case 'channel':
            this.souce_channel[key].val = !this.souce_channel[key].val
            break
          case 'point':
            this.souce_point[key].val = !this.souce_point[key].val
            break
          case 'exercise':
            this.souce_exercise[key].val = !this.souce_exercise[key].val
            break
          case 'enjoy':
            this.souce_enjoy[key].val = !this.souce_enjoy[key].val
            break
          case 'salon':
            this.souce_salon[key].val = !this.souce_salon[key].val
            break
          case 'hands':
            this.souce_hands[key].val = !this.souce_hands[key].val
            break
          case 'selfHands':
            this.souce_selfHands[key].val = !this.souce_selfHands[key].val
            break
          case 'food':
            this.souce_food[key].val = !this.souce_food[key].val
            break
          case 'travel':
            this.souce_travel[key].val = !this.souce_travel[key].val
            break
        }
        this.$forceUpdate()
      }
    },
    onSexChange (e) {
      console.log(e)
    },
    pickerSell (e) {
      console.log(e)
      this.seel = e.mp.detail.value
    }
  }
}
</script>

<style>
page{
  background: #edf6ff
}
</style>
