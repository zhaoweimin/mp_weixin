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
                <div class="count ml10">
                    <div class="num">80</div>
                    <div class="text">风险测评得分</div>
                </div>
                <div class="pl20 flex-1">
                    <div class="text mb10">客户风险等级：---</div>
                    <div class="text mb10">风险承受能力类型：---</div>
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
            <comInput :type="1" fontSize="f14" :textRight="false" title="客户编号" :isSpecialBorderStyle="true" value=""></comInput>
            <comInput :type="2" fontSize="f14" :textRight="false" title="客户来源" :isSpecialBorderStyle="true" value="" :isRequired="true"></comInput>
            <comInput :type="2" fontSize="f14" :textRight="false" title="客户来源明细" :isSpecialBorderStyle="true" value="" :isRequired="true"></comInput>
            <comInput :type="1" fontSize="f14" :textRight="false" title="客户姓名" :isSpecialBorderStyle="true" value="" :isRequired="true"></comInput>
            <comInput :type="2" fontSize="f14" :textRight="false" title="客户性别" :isSpecialBorderStyle="true" value="" :isRequired="true"></comInput>
            <comInput :type="2" fontSize="f14" :textRight="false" title="证件类型" :isSpecialBorderStyle="true" value=""></comInput>
            <comInput :type="1" fontSize="f14" :textRight="false" title="证件号码" :isSpecialBorderStyle="true" value=""></comInput>
            <comInput :type="2" fontSize="f14" :textRight="false" title="婚姻状况" :isSpecialBorderStyle="true" value=""></comInput>
            <comInput :type="3" fontSize="f14" :textRight="false" title="出生年月" :isSpecialBorderStyle="true" value=""></comInput>
            <comInput :type="2" fontSize="f14" :textRight="false" title="国际" :isSpecialBorderStyle="true" value=""></comInput>
            <comInput :type="2" fontSize="f14" :textRight="false" title="生日关怀" :isSpecialBorderStyle="true" value=""></comInput>
            <div class="table pr15 line">
                <div class="flex-1">
                    <div class="key f14 l-end w100">工作单位</div>
                    <!-- <div class="val">深圳市xxx公司 <span class="iconfont iconright"></span></div> -->
                    <textarea class="text-val f14" placeholder="请输入工作单位" placeholder-class=""></textarea>
                </div>
            </div>
            <comInput :type="2" fontSize="f14" :textRight="false" title="职业" :isSpecialBorderStyle="true" value=""></comInput>
            <comInput :type="2" fontSize="f14" :textRight="false" title="职位" :isSpecialBorderStyle="true" value=""></comInput>
            <comInput :type="2" fontSize="f14" :textRight="false" title="常住省份" :isSpecialBorderStyle="true" value=""></comInput>
            <comInput :type="2" fontSize="f14" :textRight="false" title="常住城市" :isSpecialBorderStyle="true" value=""></comInput>
        </div>

        <div class="msg-table" v-show="step === 1">
            <comInput :type="1" fontSize="f14" :textRight="false" title="手机号码" :isSpecialBorderStyle="true" value="" :isRequired="true"></comInput>
            <comInput :type="2" fontSize="f14" :textRight="false" title="电话类型" :isSpecialBorderStyle="true" value=""></comInput>
            <comInput :type="1" fontSize="f14" :textRight="false" title="紧急联系人" :isSpecialBorderStyle="true" value=""></comInput>
            <comInput :type="1" fontSize="f14" :textRight="false" title="紧急联系人电话" :isSpecialBorderStyle="true" value=""></comInput>

            <div class="table pr15 pb20 line required">
                <div class="flex-1">
                    <div class="key f14 l-end w100">邮寄地址</div>
                    <!-- <div class="val">深圳市xxx公司 <span class="iconfont iconright"></span></div> -->
                    <textarea class="text-val f14" placeholder="请输入邮寄地址" placeholder-class=""></textarea>
                </div>
            </div>

        </div>

        <div class="msg-table" v-show="step === 2">
            <comInput :type="2" fontSize="f14" :textRight="false" title="性别" :isSpecialBorderStyle="true" value=""></comInput>
            <comInput :type="2" fontSize="f14" :textRight="false" title="年龄段" :isSpecialBorderStyle="true" value=""></comInput>
            <comInput :type="2" fontSize="f14" :textRight="false" title="行业" :isSpecialBorderStyle="true" value=""></comInput>
            <comInput :type="2" fontSize="f14" :textRight="false" title="投资占收入比" :isSpecialBorderStyle="true" value=""></comInput>
            <comInput :type="2" fontSize="f14" :textRight="false" title="投资理财年限" :isSpecialBorderStyle="true" value=""></comInput>
            <div class="table">
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
import comInput from '@/components/comInput'

export default {
  components: {
    card,
    comInput
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
        { val: false, text: '工资，劳务报酬' },
        { val: false, text: '生产经营所得' },
        { val: false, text: '利息、股息，转让证券等金融性资产收入' },
        { val: false, text: '出租、出售房地产等非金融性资产收入 ' }
      ],
      souce_channel: [
        { val: false, text: '互联网' },
        { val: false, text: '微信、微博等手机App' },
        { val: false, text: '亲戚朋友' },
        { val: false, text: '银行、证券、信托公司' },
        { val: false, text: '私募基金管理机构' },
        { val: false, text: '第三方理财机构' }
      ],
      souce_point: [
        { val: false, text: '私募基金管理机构的品牌' },
        { val: false, text: '基金销售机构的宣传和推介' },
        { val: false, text: '私募基金的业绩表现 ' },
        { val: false, text: '综合考虑私募基金管理机构的管理能力' }
      ],
      souce_exercise: [
        { val: false, text: '马术运动' },
        { val: false, text: '帆船/游艇出海' },
        { val: false, text: '高尔夫赛事/体验场' },
        { val: false, text: '网球' },
        { val: false, text: '射箭' },
        { val: false, text: '羽毛球' },
        { val: false, text: '其他' }
      ],
      souce_enjoy: [{ val: false, text: '红酒品鉴' }, { val: false, text: '形象提升' }, { val: false, text: '美体/形体培训' }, { val: false, text: '珠宝鉴赏' }, { val: false, text: '其他' }],
      souce_salon: [{ val: false, text: '摄影分享' }, { val: false, text: '花艺沙龙' }, { val: false, text: '投资策略' }, { val: false, text: '茶艺沙龙' }, { val: false, text: '其他' }],
      souce_hands: [
        { val: false, text: '香水手作' },
        { val: false, text: '小黑裙手作 ' },
        { val: false, text: '包包手作' },
        { val: false, text: '香薰干花蜡烛手作' },
        { val: false, text: '口红手作' },
        { val: false, text: '其他' }
      ],
      souce_selfHands: [
        { val: false, text: '油画创作手作' },
        { val: false, text: '鸡尾酒/精酿啤酒手作' },
        { val: false, text: '咖啡手作' },
        { val: false, text: '永生花＆永生花团扇手作' },
        { val: false, text: '蛋糕/粽子/饼干手作' },
        { val: false, text: '其他' }
      ],
      souce_food: [{ val: false, text: '西餐' }, { val: false, text: '自助餐' }, { val: false, text: '中餐' }, { val: false, text: '日料' }, { val: false, text: '日料' }],
      souce_travel: [
        { val: false, text: '繁华都市' },
        { val: false, text: '名胜古迹' },
        { val: false, text: '自然景观' },
        { val: false, text: '水乡古镇' },
        { val: false, text: '海滨海岛' },
        { val: false, text: '其他' }
      ],

      sells: ['直销', '代理'],
      sexs: ['男', '女'],

      sell: 0,
      sex: 0
    }
  },
  created () {},
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
page {
	background: #edf6ff;
}
.msg-top-bg-green {
	background: #16eac2;
	width: 100%;
	height: 150px;
	border-radius: 0 0 20px 20px;
}
</style>
