<template>
    <div class="customer has-footer">
        <div class="customer-card">
            <div class="dis-flex">
                <div class="avatar">
                    <img class="img" :src="info.avatar" mode="aspectFill">
                    <!-- <div class="text">编辑</div> -->
                </div>
                <div class="msg">
                    <div class="title mb5">
                        <span class="strong">{{pageData.FName}}</span>
                        <span class="sex">{{pageData.FGender ? '先生' : '女士'}}</span>
                        <div class="edit f13" @click="edit">{{isEdit ? '编辑中...' : '编辑档案'}}</div>
                    </div>
                    <div class="tags mb10 level-0" v-if="pageData.FDealType == ''">
                        <div class="tag">{{pageData.FCustomerType}}</div>
                    </div>
                    <div class="tags level-1" v-if="pageData.FDealType === 'A'">
                        <div class="tag">历史成交客户</div>
                        <div class="tag level">A级</div>
                    </div>
                    <div class="tags level-2" v-if="pageData.FDealType === 'B'">
                        <div class="tag">成交客户</div>
                        <div class="tag level">B级</div>
                    </div>
                    <div class="tags level-3" v-if="pageData.FDealType === 'C'">
                        <div class="tag">准客户</div>
                        <div class="tag level">C级</div>
                    </div>
                    <div class="tags level-4" v-if="pageData.FDealType === 'D'">
                        <div class="tag">潜在客户</div>
                        <div class="tag level">D级</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="msg-table">
            <div class="title">
                风险能力测评 <span class="iconfont iconkehugenjin"></span>
                <div class="fr check-count" @click="lingQuestion">
                    再测评
                </div>
            </div>
            <div class="flex chart">
                <div class="count ml10">
                    <div class="num">{{pageData.Fassessment}}</div>
                    <div class="text">风险测评得分</div>
                </div>
                <div class="flex-1 pl20">
                    <div class="text mb10">客户风险等级：{{pageData.FRiskLevel}}</div>
                    <div class="text mb10">风险承受能力类型：{{pageData.Fbear}}</div>
                    <div class="text">相匹配产品风险等级：{{pageData.FproductLevel}}</div>
                </div>
            </div>
        </div>

        <div class="msg-table">
            <div class="title" @click="setOpen(0)">
                基本信息 <span class="iconfont iconjibenxinxi"></span>
                <div class="fr cblack iconfont" :class="{ 'iconxiangxiajiantou': !open[0], 'iconxiangxiajiantou-copy': open[0] }"></div>
            </div>
            <div v-show="open[0]">
                <comInput :type="0" fontSize="f14" title="客户编号" :titleDark="false" :isSpecialBorderStyle="true" :value="pageData.FNumber"></comInput>
                <comInput :type="0" fontSize="f14" title="客户来源" :titleDark="false" :isSpecialBorderStyle="true" :value="pageData.FTranType" :isRequired="true"></comInput>
                <comInput :type="0" fontSize="f14" title="客户来源明细" :titleDark="false" :isSpecialBorderStyle="true" :value="pageData.FtranTypeEntry" :isRequired="true"></comInput>
                <comInput :type="0" fontSize="f14" title="市场活动" :titleDark="false" :isSpecialBorderStyle="true" :value="pageData.FMktId"></comInput>
                <comInput :type="0" fontSize="f14" title="投诉次数" :titleDark="false" :isSpecialBorderStyle="true" :value="pageData.FNoOfComplaints"></comInput>
                <comInput :type="0" fontSize="f14" title="证件类型" :titleDark="false" :isSpecialBorderStyle="true" :value="pageData.FDocumentType" :isRequired="true"></comInput>
                <comInput :type="0" fontSize="f14" title="证件号码" :titleDark="false" :isSpecialBorderStyle="true" :value="pageData.FIDNumber" :isRequired="true"></comInput>
                <comInput :type="0" fontSize="f14" title="婚姻状况" :titleDark="false" :isSpecialBorderStyle="true" :value="pageData.FMaritalStatus" :isRequired="true"></comInput>
                <comInput :type="0" fontSize="f14" title="出生日期" :titleDark="false" :isSpecialBorderStyle="true" :value="pageData.FBirthDate"></comInput>
                <comInput :type="0" fontSize="f14" title="国籍" :titleDark="false" :isSpecialBorderStyle="true" :value="pageData.FNationality"></comInput>
                <comInput :type="0" fontSize="f14" title="生日关怀" :titleDark="false" :isSpecialBorderStyle="true" :value="pageData.Fbthmis"></comInput>
                <div class="table pr15 line">
                    <div class="flex-1">
                        <div class="key f14 cgey l-end w100">工作单位</div>
                        <!-- <div class="val">深圳市xxx公司 <span class="iconfont iconright"></span></div> -->
                        <div class="text-val f14">{{pageData.Fcompany}}</div>
                    </div>
                </div>
                <comInput :type="0" fontSize="f14" title="职业" :titleDark="false" :isSpecialBorderStyle="true" :value="pageData.FOccupation" :isRequired="true"></comInput>
                <comInput :type="0" fontSize="f14" title="职位" :titleDark="false" :isSpecialBorderStyle="true" :value="pageData.Fposition"></comInput>
                <comInput :type="0" fontSize="f14" title="常住省份" :titleDark="false" :isSpecialBorderStyle="true" :value="pageData.FPermanentProvinces" :isRequired="true"></comInput>
                <comInput :type="0" fontSize="f14" title="常住城市" :titleDark="false" :isSpecialBorderStyle="true" :value="pageData.FPermanentCity" :isRequired="true"></comInput>
            </div>
        </div>

        <div class="msg-table">
            <div class="title" @click="setOpen(1)">
                联系方式 <span class="iconfont iconliaotianduihua"></span>
                <div class="fr cblack iconfont" :class="{ 'iconxiangxiajiantou': !open[1], 'iconxiangxiajiantou-copy': open[1] }"></div>
            </div>
            <div v-show="open[1]">
                <comInput :type="0" fontSize="f14" title="手机号码" :titleDark="false" :isSpecialBorderStyle="true" :value="pageData.FMobilePhone" :isRequired="true"></comInput>
                <comInput :type="0" fontSize="f14" title="电话类型" :titleDark="false" :isSpecialBorderStyle="true" :value="pageData.FPhoneType"></comInput>
                <comInput :type="0" fontSize="f14" title="邮箱" :titleDark="false" :isSpecialBorderStyle="true" :value="pageData.email"></comInput>
                <comInput :type="0" fontSize="f14" title="紧急联系人" :titleDark="false" :isSpecialBorderStyle="true" :value="pageData.FEmergencyName"></comInput>
                <comInput :type="0" fontSize="f14" title="紧急联系人电话" :titleDark="false" :isSpecialBorderStyle="true" :value="pageData.FEmergencyPhone"></comInput>
                <div class="table pr15 pb20 line required">
                    <div class="flex-1">
                        <div class="key f14 cgey">邮寄地址</div>
                        <div class="text-val f14">{{pageData.FMailingAddress}}</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="msg-table">
            <div class="title" @click="setOpen(3)">
                兴趣爱好 <span class="iconfont iconjibenxinxi"></span>
                <div class="fr cblack iconfont" :class="{ 'iconxiangxiajiantou': !open[3], 'iconxiangxiajiantou-copy': open[3] }"></div>
            </div>
            <div v-show="open[3]">
                <comInput :type="0" fontSize="f14" title="性别" :titleDark="false" :isSpecialBorderStyle="true" :value="pageData.FChoGender"></comInput>
                <comInput :type="0" fontSize="f14" title="年龄段" :titleDark="false" :isSpecialBorderStyle="true" :value="pageData.FChoold"></comInput>
                <comInput :type="0" fontSize="f14" title="行业" :titleDark="false" :isSpecialBorderStyle="true" :value="pageData.Findustry"></comInput>
                <comInput :type="0" fontSize="f14" title="性别" :titleDark="false" :isSpecialBorderStyle="true" :value="pageData.FChoGender"></comInput>
                <comInput :type="0" fontSize="f14" title="投资占收入比" :titleDark="false" :isSpecialBorderStyle="true" :value="pageData.FInvestment"></comInput>
                <comInput :type="0" fontSize="f14" title="投资理财年限" :titleDark="false" :isSpecialBorderStyle="true" :value="pageData.FYearInvest"></comInput>
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
        </div>

        <div class="msg-table">
            <div class="title" @click="setOpen(4)">
                统计与分析 <span class="iconfont iconyejixinzeng"></span>
                <div class="fr cblack iconfont" :class="{ 'iconxiangxiajiantou': !open[4], 'iconxiangxiajiantou-copy': open[4] }"></div>
            </div>
            <div v-show="open[4]">
                <div class="table">
                    <div class="big-line line">
                        <div class="dis-flex flex-column l-center a-center flex-1">
                            <div class="val"><span class="strong">{{pageData.FnowInvestment/10000}}万</span> <span class="iconfont iconright"></span></div>
                            <div class="key">客户投资总额</div>
                        </div>
                        <div class="dis-flex flex-column l-center a-center flex-1">
                            <div class="val"><span class="strong">{{pageData.FsumInvestment/10000}}万</span> <span class="iconfont iconright"></span></div>
                            <div class="key">累计投资总额</div>
                        </div>
                    </div>
                </div>
                <comInput :type="0" fontSize="f14" title="最近跟进时间" :titleDark="false" :isSpecialBorderStyle="true" :value="pageData.FlastFollowUp"></comInput>
                <comInput :type="0" fontSize="f14" title="首次成交时间" :titleDark="false" :isSpecialBorderStyle="true" :value="pageData.Ffisttransaction"></comInput>
            </div>
        </div>

        <div class="footer-bar" v-if="isEdit">
            <div class="flex-1 mr10">
                <van-button plain type="info" @click="cancle">取消</van-button>
            </div>
            <div class="flex-1">
                <van-button type="info" @click="submit">确定</van-button>
            </div>
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
      pageData: {},
      info: {
        avatar: 'https://wx.qlogo.cn/mmopen/vi_32/Po7hia4bia7Ua8tZxjcLfpHsEKgzMT3wf3HzhE6TqQHqsbXSL72dFpjIlPmAYuzv5VVpgic1iaZ703Op5I4LovGOgg/132?imageView2/2/w/100/q/80/v=',
        name: '张耀扬',
        level: 1,
        sex: 1
      },
      open: [false, false, false, false, false],
      isEdit: false,
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
      sex: 0
    }
  },
  onLoad () {
    wx.getStorage({
      // 获取本地缓存
      key: 'cusInfo',
      success: res => {
        this.pageData = res.data
        res.data.FChoIncom.split(',').forEach(item => {
          let idx = this.souce_income.findIndex(m => m.text === item)
          this.souce_income[idx].val = true
        })
        res.data.FwhereFund.split(',').forEach(item => {
          let idx = this.souce_channel.findIndex(m => m.text === item)
          this.souce_channel[idx].val = true
        })
        res.data.FFollowFund.split(',').forEach(item => {
          let idx = this.souce_point.findIndex(m => m.text === item)
          this.souce_point[idx].val = true
        })
        res.data.Fhealthy.split(',').forEach(item => {
          let idx = this.souce_exercise.findIndex(m => m.text === item)
          this.souce_exercise[idx].val = true
        })
        res.data.FprivateMeet.split(',').forEach(item => {
          let idx = this.souce_enjoy.findIndex(m => m.text === item)
          this.souce_enjoy[idx].val = true
        })
        res.data.FsalonMeet.split(',').forEach(item => {
          let idx = this.souce_salon.findIndex(m => m.text === item)
          this.souce_salon[idx].val = true
        })
        res.data.Fwomenhandwork.split(',').forEach(item => {
          let idx = this.souce_hands.findIndex(m => m.text === item)
          this.souce_hands[idx].val = true
        })
        res.data.Fhumanhandwork.split(',').forEach(item => {
          let idx = this.souce_selfHands.findIndex(m => m.text === item)
          this.souce_selfHands[idx].val = true
        })
        res.data.Fdeliciousfood.split(',').forEach(item => {
          let idx = this.souce_food.findIndex(m => m.text === item)
          this.souce_food[idx].val = true
        })
        res.data.FTourism.split(',').forEach(item => {
          let idx = this.souce_travel.findIndex(m => m.text === item)
          this.souce_travel[idx].val = true
        })

        console.log(9999, res.data)
      }
    })
  },
  methods: {
    setOpen (key) {
      this.open[key] = !this.open[key]
      this.$forceUpdate()
    },
    edit () {
      // console.log(1)
      if (!this.isEdit) {
        this.isEdit = true
      }
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
    },
    lingQuestion (e) {
      let url = `../quetions/main?type=1`
      mpvue.navigateTo({ url })
    }
  }
}
</script>

<style>
.customer-card {
	margin: 0px;
	padding: 15px;
	background: linear-gradient(to right, #509ef0, #5bc7ff); /* 标准的语法 */
	border-radius: 0px;
	position: relative;
	margin-bottom: 30px;
}
.customer-card::after {
	content: '';
	position: absolute;
	bottom: -19px;
	left: 32px;
	width: 0;
	height: 0;
	border-width: 10px;
	border-style: solid;
	border-color: #509ef0 transparent transparent transparent;
}
.customer-card .title {
	color: #ffffff;
}

.customer-card .msg .title .sex {
	color: #ffffff;
}
.customer-card .avatar {
	width: 44px;
	height: 50px;
}
.customer-card .avatar .img {
	width: 44px;
	height: 44px;
}
.customer-card .avatar .text {
	color: #ffffff;
	font-size: 12px;
	text-align: center;
	line-height: 12px;
}
.customer-card .edit {
	border: 1px solid #fff;
	float: right;
	padding: 0 5px;
	/* width: 60px; */
	text-align: center;
	border-radius: 20px;
}
</style>
