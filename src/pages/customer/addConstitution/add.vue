<template>
    <div class="customer creat has-footer">
        <div class="msg-top-bg-green">
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
            <comInput :type="1" @getInputVal="getInputVal" fontSize="f14" paramkey="FNumber" :textRight="false" title="客户编号" :isSpecialBorderStyle="true" value=""></comInput>
            <comInput :type="2" fontSize="f14" paramkey="FTranType" :textRight="false" :options="options.customerOrigin" @getSelect="getSelect" title="客户来源" :isSpecialBorderStyle="true" value="" :isRequired="true"></comInput>
            <comInput :type="2" fontSize="f14" paramkey="FtranTypeEntry" :textRight="false" :options="options.customerOriginDetails" @getSelect="getSelect" title="客户来源明细" :isSpecialBorderStyle="true" value="" :isRequired="true"></comInput>
            <comInput :type="1" @getInputVal="getInputVal" fontSize="f14" paramkey="FName" :textRight="false" title="机构名称" :isSpecialBorderStyle="true" value="" :isRequired="true"></comInput>
            <comInput :type="2" fontSize="f14" paramkey="FInstitutional" :textRight="false" :options="options.institutionXinzhi" @getSelect="getSelect" title="机构性质" :isSpecialBorderStyle="true" value=""></comInput>
            <comInput :type="2" fontSize="f14" paramkey="FLicenseType" :textRight="false" :options="options.zhizhaoType" @getSelect="getSelect" title="执照类型" :isSpecialBorderStyle="true" value=""></comInput>
            <comInput :type="1" @getInputVal="getInputVal" fontSize="f14" paramkey="FLicenseNumber" :textRight="false" title="执照号码" :isSpecialBorderStyle="true" value=""></comInput>
            <comInput :type="2" fontSize="f14" paramkey="FValidTerm" :textRight="false" :options="options.investmentYears" @getSelect="getSelect" title="有效期限" :isSpecialBorderStyle="true" value=""></comInput>
            <comInput :type="2" fontSize="f14" paramkey="FYearCheck" :textRight="false" :options="options.nianjianyouxiao" @getSelect="getSelect" title="年检有效" :isSpecialBorderStyle="true" value=""></comInput>
            <div class="table pr15 line">
                <div class="flex-1">
                    <div class="key f14 l-end w100">注册地址</div>
                    <textarea v-model="datas.FRegisteredAddress" class="text-val f14" placeholder="请输入注册地址" placeholder-class=""></textarea>
                </div>
            </div>
            <comInput :type="1" @getInputVal="getInputVal" fontSize="f14" paramkey="FRegisteredCapital" :textRight="false" title="注册资本" :isSpecialBorderStyle="true" value=""></comInput>
        </div>

        <div class="msg-table" v-show="step === 1">
            <comInput :type="1" @getInputVal="getInputVal" fontSize="f14" paramkey="FMainName" :textRight="false" title="主联系人姓名" :isSpecialBorderStyle="true" value="" :isRequired="true"></comInput>
            <comInput :type="2" fontSize="f14" paramkey="FMGender" :textRight="false" :options="options.sex" @getSelect="getSelect" title="性别" :isSpecialBorderStyle="true" value=""></comInput>
            <comInput :type="1" @getInputVal="getInputVal" fontSize="f14" paramkey="FAge" :textRight="false" title="年龄" :isSpecialBorderStyle="true" value=""></comInput>
            <comInput :type="1" @getInputVal="getInputVal" fontSize="f14" paramkey="FMainPhone" :textRight="false" title="主联系人手机" :isSpecialBorderStyle="true" value="" :isRequired="true"></comInput>
            <comInput :type="1" @getInputVal="getInputVal" fontSize="f14" paramkey="FMainFax" :textRight="false" title="主联系人传真" :isSpecialBorderStyle="true" value=""></comInput>
            <comInput :type="1" @getInputVal="getInputVal" fontSize="f14" paramkey="FMainEmail" :textRight="false" title="主联系人邮箱" :isSpecialBorderStyle="true" value=""></comInput>
            <div class="table pr15 pb20 line required">
                <div class="flex-1">
                    <div class="key f14 l-end w100">通讯地址</div>
                    <textarea v-model="datas.FAddress" class="text-val f14" placeholder="请输入通讯地址" placeholder-class=""></textarea>
                </div>
            </div>
            <comInput :type="1" @getInputVal="getInputVal" fontSize="f14" paramkey="Frepresentative" :textRight="false" title="法定代表人" :isSpecialBorderStyle="true" value=""></comInput>
            <comInput :type="2" fontSize="f14" paramkey="FrepresentativeG" :textRight="false" :options="options.sex" @getSelect="getSelect" title="法定代表人性别" :isSpecialBorderStyle="true" value=""></comInput>
        </div>

        <div class="msg-table" v-show="step === 2">
            <comInput :type="2" fontSize="f14" paramkey="FChoGender" :textRight="false" :options="options.sex" @getSelect="getSelect" title="性别" :isSpecialBorderStyle="true" value=""></comInput>
            <comInput :type="2" fontSize="f14" paramkey="FChoold" :textRight="false" :options="options.ageRange" @getSelect="getSelect" title="年龄段" :isSpecialBorderStyle="true" value=""></comInput>
            <comInput :type="2" fontSize="f14" paramkey="Findustry" :textRight="false" :options="options.industry" @getSelect="getSelect" title="行业" :isSpecialBorderStyle="true" value=""></comInput>
            <comInput :type="2" fontSize="f14" paramkey="FInvestment" :textRight="false" :options="options.investmentRate" @getSelect="getSelect" title="投资占收入比" :isSpecialBorderStyle="true" value=""></comInput>
            <comInput :type="2" fontSize="f14" paramkey="FYearInvest" :textRight="false" :options="options.investmentYears" @getSelect="getSelect" title="投资理财年限" :isSpecialBorderStyle="true" value=""></comInput>
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
import Options from '@/utils/Options.js'

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
      options: Options,
      step: 0,

      check: [true, true, false, false],
      souce_income: [
        { val: false, text: '工资，劳务报酬' },
        { val: false, text: '生产经营所得' },
        { val: false, text: '利息、股息，转让证券等金融性资产收入' },
        { val: false, text: '出租、出售房地产等非金融性资产收入' }
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
        { val: false, text: '私募基金的业绩表现' },
        { val: false, text: '综合考虑私募基金管理机构的管理能力' }
      ],
      souce_exercise: [
        { val: false, text: '马术运动' },
        { val: false, text: '帆船/游艇出海' },
        { val: false, text: '室内高尔夫' },
        { val: false, text: '网球' },
        { val: false, text: '射箭' },
        { val: false, text: '羽毛球' },
        { val: false, text: '其他' }
      ],
      souce_enjoy: [
        { val: false, text: '红酒品鉴' },
        { val: false, text: '形象提升（男/女）' },
        { val: false, text: '美体/形体培训' },
        { val: false, text: '珠宝鉴赏' },
        { val: false, text: '其他' }
      ],
      souce_salon: [{ val: false, text: '摄影分享' }, { val: false, text: '花艺沙龙' }, { val: false, text: '投资策略' }, { val: false, text: '茶艺沙龙' }, { val: false, text: '其他' }],
      souce_hands: [
        { val: false, text: '香水手作' },
        { val: false, text: '小黑裙手作' },
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

      reqParams: [
        { Field: 'FNumber', Value: '' },
        { Field: 'FTranType', Value: '' },
        { Field: 'FtranTypeEntry', Value: '' },
        { Field: 'FName', Value: '' }, // 客户姓名/机构姓名  机构客户两个name都需要填写
        { Field: 'FName1', Value: '' }, // 客户姓名/机构姓名
        { Field: 'FInstitutional', Value: '' },
        { Field: 'FLicenseType', Value: '' },
        { Field: 'FLicenseNumber', Value: '' },
        { Field: 'FValidTerm', Value: '' },
        { Field: 'FYearCheck', Value: '' },
        { Field: 'FRegisteredAddress', Value: '' },
        { Field: 'FRegisteredCapital', Value: '' },

        { Field: 'FMainName', Value: '' },
        { Field: 'FMGender', Value: '' },
        { Field: 'FAge', Value: '' },
        { Field: 'FMainPhone', Value: '' },
        { Field: 'FMainFax', Value: '' },
        { Field: 'FMainEmail', Value: '' },
        { Field: 'FAddress', Value: '' },
        { Field: 'Frepresentative', Value: '' },
        { Field: 'FrepresentativeG', Value: '' },

        { Field: 'FChoGender', Value: '' },
        { Field: 'FChoold', Value: '' },
        { Field: 'Findustry', Value: '' },
        { Field: 'FInvestment', Value: '' },
        { Field: 'FYearInvest', Value: '' },

        { Field: 'FChoIncom', Value: '' },
        { Field: 'FwhereFund', Value: '' },
        { Field: 'FFollowFund', Value: '' },
        { Field: 'Fhealthy', Value: '' },
        { Field: 'FprivateMeet', Value: '' },
        { Field: 'FsalonMeet', Value: '' },
        { Field: 'Fwomenhandwork', Value: '' },
        { Field: 'Fhumanhandwork', Value: '' },
        { Field: 'Fdeliciousfood', Value: '' },
        { Field: 'FTourism', Value: '' },

        // 默认
        { Field: 'Fassessment', Value: 100 },
        { Field: 'FRiskLevel', Value: 'C5' },
        { Field: 'Fbear', Value: '进取型' },
        { Field: 'FproductLevel', Value: 'R1、R2、R3、R4、R5' },
        { Field: 'date1', Value: '2019-12-09' },

        // 默认必传的字段
        { Field: 'FApplySubject', Value: '机构客户' }, // 默认
        { Field: 'FCustomerType', Value: '潜在客户' }, // 默认
        { Field: 'FPublic', Value: '否' },
        { Field: 'FCreateUserId', Value: '管理员' },
        { Field: 'FCreateTime', Value: '当前时间' },
        { Field: 'GSbumen', Value: '天玑财富' },
        { Field: 'string17', Value: '1' },
        { Field: 'FupdateUserId', Value: '管理员' },
        { Field: 'FUpdateTime', Value: '当前时间' },
        { Field: 'FIsstatic', Value: '未导入' },
        { Field: 'Fchangestatic', Value: '否' },
        { Field: 'FoverPerson', Value: '否' },
        { Field: 'string3', Value: '1' },
        { Field: 'string6', Value: '否' },
        { Field: 'string7', Value: '否' },
        { Field: 'string11', Value: '否' },
        { Field: 'string15', Value: '1' },
        { Field: 'string16', Value: 0 },
        { Field: 'string8', Value: '10183' },
        { Field: 'string21', Value: '0' }
      ],
      datas: {
        FNumber: '',
        FTranType: '',
        FtranTypeEntry: '',
        FName: '',
        FName1: '',
        FInstitutional: '',
        FLicenseType: '',
        FLicenseNumber: '',
        FValidTerm: '',
        FYearCheck: '',
        FRegisteredAddress: '',
        FRegisteredCapital: '',

        FMainName: '',
        FMGender: '',
        FAge: '',
        FMainPhone: '',
        FMainFax: '',
        FMainEmail: '',
        FAddress: '',
        Frepresentative: '',
        FrepresentativeG: '',

        FChoGender: '',
        FChoold: '',
        Findustry: '',
        FInvestment: '',
        FYearInvest: '',

        FChoIncom: [],
        FwhereFund: [],
        FFollowFund: [],
        Fhealthy: [],
        FprivateMeet: [],
        FsalonMeet: [],
        Fwomenhandwork: [],
        Fhumanhandwork: [],
        Fdeliciousfood: [],
        FTourism: []
      }
    }
  },
  created () {},
  methods: {
    setStep (type) {
      if (type) {
        this.step += 1
      } else {
        this.step -= 1
      }
    },
    lingQuestion (e) {
      let url = `../quetions/main?type=2`
      mpvue.navigateTo({ url })
    },
    submit () {
      Object.keys(this.datas).forEach((item, index) => {
        this.reqParams[index].Value = Array.isArray(this.datas[item]) ? this.datas[item].join(',') : this.datas[item]
      })
      console.log('reqParams=====', this.reqParams)
      this.$api.UploadServerice(this.reqParams).then(res => {
        console.log(res)
        if (res.Result === 1) {
          wx.showToast({
            title: res.PromptMsg,
            icon: 'success',
            duration: 3000,
            success: () => {
              mpvue.switchTab({ url: '/pages/home/main' })
            }
          })
        } else {
          wx.showToast({
            title: res.PromptMsg,
            duration: 3000
          })
        }
      })
    },
    onChange (key, type) {
      switch (type) {
        case 'income':
          this.souce_income[key].val = !this.souce_income[key].val
          if (this.souce_income[key].val) {
            this.datas.FChoIncom.push(this.souce_income[key].text)
          } else {
            this.datas.FChoIncom.splice(this.datas.FChoIncom.indexOf(this.souce_income[key].text), 1)
          }
          break
        case 'channel':
          this.souce_channel[key].val = !this.souce_channel[key].val
          if (this.souce_channel[key].val) {
            this.datas.FwhereFund.push(this.souce_channel[key].text)
          } else {
            this.datas.FwhereFund.splice(this.datas.FwhereFund.indexOf(this.souce_channel[key].text), 1)
          }
          break
        case 'point':
          this.souce_point[key].val = !this.souce_point[key].val
          if (this.souce_point[key].val) {
            this.datas.FFollowFund.push(this.souce_point[key].text)
          } else {
            this.datas.FFollowFund.splice(this.datas.FFollowFund.indexOf(this.souce_point[key].text), 1)
          }
          break
        case 'exercise':
          this.souce_exercise[key].val = !this.souce_exercise[key].val
          if (this.souce_exercise[key].val) {
            this.datas.Fhealthy.push(this.souce_exercise[key].text)
          } else {
            this.datas.Fhealthy.splice(this.datas.Fhealthy.indexOf(this.souce_exercise[key].text), 1)
          }
          break
        case 'enjoy':
          this.souce_enjoy[key].val = !this.souce_enjoy[key].val
          if (this.souce_enjoy[key].val) {
            this.datas.FprivateMeet.push(this.souce_enjoy[key].text)
          } else {
            this.datas.FprivateMeet.splice(this.datas.FprivateMeet.indexOf(this.souce_enjoy[key].text), 1)
          }
          break
        case 'salon':
          this.souce_salon[key].val = !this.souce_salon[key].val
          if (this.souce_salon[key].val) {
            this.datas.FsalonMeet.push(this.souce_salon[key].text)
          } else {
            this.datas.FsalonMeet.splice(this.datas.FsalonMeet.indexOf(this.souce_salon[key].text), 1)
          }
          break
        case 'hands':
          this.souce_hands[key].val = !this.souce_hands[key].val
          if (this.souce_hands[key].val) {
            this.datas.Fwomenhandwork.push(this.souce_hands[key].text)
          } else {
            this.datas.Fwomenhandwork.splice(this.datas.Fwomenhandwork.indexOf(this.souce_hands[key].text), 1)
          }
          break
        case 'selfHands':
          this.souce_selfHands[key].val = !this.souce_selfHands[key].val
          if (this.souce_selfHands[key].val) {
            this.datas.Fhumanhandwork.push(this.souce_selfHands[key].text)
          } else {
            this.datas.Fhumanhandwork.splice(this.datas.Fhumanhandwork.indexOf(this.souce_selfHands[key].text), 1)
          }
          break
        case 'food':
          this.souce_food[key].val = !this.souce_food[key].val
          if (this.souce_food[key].val) {
            this.datas.Fdeliciousfood.push(this.souce_food[key].text)
          } else {
            this.datas.Fdeliciousfood.splice(this.datas.Fdeliciousfood.indexOf(this.souce_food[key].text), 1)
          }
          break
        case 'travel':
          this.souce_travel[key].val = !this.souce_travel[key].val
          if (this.souce_travel[key].val) {
            this.datas.FTourism.push(this.souce_travel[key].text)
          } else {
            this.datas.FTourism.splice(this.datas.FTourism.indexOf(this.souce_travel[key].text), 1)
          }
          break
      }
      this.$forceUpdate()
    },
    getSelect (data) {
      console.log(data)
      this.datas[data.key] = data.value
    },
    getInputVal (data) {
      console.log(data)
      if (data.key === 'FName') {
        this.datas.FName1 = data.value
      }
      this.datas[data.key] = data.value
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
.msg-table .table .line .key {
	color: #333;
}
</style>
