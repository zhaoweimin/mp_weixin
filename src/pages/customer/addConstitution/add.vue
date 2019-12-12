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
            <div class="table">
                <div class="line">
                    <div class="key">客户编号</div>
                    <div class="val dis-flex">
                        <!-- <input v-show="isEdit" class="input" placeholder="请输入客户编号" placeholder-class="cplaceholder" type="text" v-model="code"> -->
                        <div class="clink ta-l">A002</div>
                    </div>
                </div>
                <div class="line required">
                    <div class="key">客户来源</div>
                    <div class="val dis-flex">
                        <picker class="flex-1 ta-l" @change="pickerSell" :value="sell" :range="sells" :disabled="!isEdit">
                            {{sells[sell]}}
                        </picker>
                        <span class="iconfont iconright"></span>
                    </div>
                </div>
                <div class="line required">
                    <div class="key">客户来源明细</div>
                    <div class="val dis-flex">
                        <div class="flex-1 ta-l">市场活动</div>
                        <span class="iconfont iconright"></span>
                    </div>
                </div>
                <div class="line required">
                    <div class="key">机构名称</div>
                    <div class="val">
                        <input v-show="isEdit" class="input" placeholder="请输入机构名称" placeholder-class="cplaceholder" type="text" v-model="code">
                    </div>
                </div>
                <div class="line">
                    <div class="key">机构性质</div>
                    <div class="val dis-flex">
                        <div class="flex-1 ta-l">性质</div>
                        <span class="iconfont iconright"></span>
                    </div>
                </div>
                <div class="line">
                    <div class="key">执照类型</div>
                    <div class="val dis-flex">
                        <div class="flex-1 ta-l">营业执照</div>
                        <span class="iconfont iconright"></span>
                    </div>
                </div>
                <div class="line">
                    <div class="key">执照号码</div>
                    <div class="val">
                        <input v-show="isEdit" class="input" placeholder="请输入执照号码" placeholder-class="cplaceholder" type="text" v-model="code">
                    </div>
                </div>

                <div class="line ">
                    <div class="key">有效期限</div>
                    <div class="val">
                        <div class=""></div>
                        <span class="iconfont iconright"></span>
                    </div>
                </div>
                <div class="line ">
                    <div class="key">年检有效</div>
                    <div class="val"> <span class="iconfont iconright"></span></div>
                </div>

                <div class="line">
                    <div class="flex-1">
                        <div class="key l-end w100">注册地址</div>
                        <div class="text-val text-placeholder">
                            <textarea v-show="isEdit" class="input" placeholder="" placeholder-class="cplaceholder" type="text" value="广东省深圳市*******************" />
                            </div>
                    </div>
                </div>
                <div class="line">
                    <div class="key">注册资本</div>
                    <div class="val">
                        <input v-show="isEdit" class="input" placeholder="请输入注册资本（万元）" placeholder-class="cplaceholder" type="text">
                    </div>
                </div>
            </div>
             <!-- <comInput :type="1" @getInputVal="getInputVal" fontSize="f14" paramkey="FNumber" :textRight="false" title="客户编号" :isSpecialBorderStyle="true" value=""></comInput>
            <comInput :type="2" fontSize="f14" paramkey="FTranType" :textRight="false" :options="options.customerOrigin" @getSelect="getSelect" title="客户来源" :isSpecialBorderStyle="true" value="" :isRequired="true"></comInput>
            <comInput :type="2" fontSize="f14" paramkey="FtranTypeEntry" :textRight="false" :options="options.customerOriginDetails" @getSelect="getSelect" title="客户来源明细" :isSpecialBorderStyle="true" value="" :isRequired="true"></comInput>
            <comInput :type="1" @getInputVal="getInputVal" fontSize="f14" paramkey="FName" :textRight="false" title="客户姓名" :isSpecialBorderStyle="true" value="" :isRequired="true"></comInput>
            <comInput :type="2" fontSize="f14" paramkey="FGender" :textRight="false" :options="options.sex" @getSelect="getSelect" title="客户性别" :isSpecialBorderStyle="true" value="" :isRequired="true"></comInput>
            <comInput :type="2" fontSize="f14" paramkey="FDocumentType" :textRight="false" :options="options.certType" @getSelect="getSelect" title="证件类型" :isSpecialBorderStyle="true" value=""></comInput>
            <comInput :type="1" @getInputVal="getInputVal" fontSize="f14" paramkey="FIDNumber" :textRight="false" title="证件号码" :isSpecialBorderStyle="true" value=""></comInput>
            <comInput :type="2" fontSize="f14" paramkey="FMaritalStatus" :textRight="false" :options="options.marriage" @getSelect="getSelect" title="婚姻状况" :isSpecialBorderStyle="true" value=""></comInput>
            <comInput :type="3" fontSize="f14" paramkey="FBirthDate" :textRight="false" title="出生年月" :isSpecialBorderStyle="true" value=""></comInput>
            <comInput :type="1" @getInputVal="getInputVal" fontSize="f14" paramkey="FNationality" :textRight="false" title="国籍" :isSpecialBorderStyle="true" value=""></comInput>
            <comInput :type="2" fontSize="f14" paramkey="Fbthmis" :textRight="false" :options="options.birthCare" @getSelect="getSelect" title="生日关怀" :isSpecialBorderStyle="true" value=""></comInput>
            <div class="table pr15 line">
                <div class="flex-1">
                    <div class="key f14 l-end w100">工作单位</div>
                    <textarea v-model="datas.Fcompany" class="text-val f14" placeholder="请输入工作单位" placeholder-class=""></textarea>
                        </div>
                    </div>
                    <comInput :type="2" fontSize="f14" paramkey="FOccupation" :textRight="false" :options="options.job" @getSelect="getSelect" title="职业" :isSpecialBorderStyle="true" value=""></comInput>
                    <comInput :type="1" @getInputVal="getInputVal" fontSize="f14" paramkey="Fposition" :textRight="false" title="职位" :isSpecialBorderStyle="true" value=""></comInput>
                    <comInput :type="2" fontSize="f14" paramkey="FPermanentProvinces" :textRight="false" :options="options.province" @getSelect="getSelect" title="常住省份" :isSpecialBorderStyle="true" value=""></comInput>
                    <comInput :type="1" @getInputVal="getInputVal" fontSize="f14" paramkey="FPermanentCity" :textRight="false" title="常住城市" :isSpecialBorderStyle="true" value=""></comInput> -->
                </div>

                <div class="msg-table" v-show="step === 1">
                    <div class="table">
                        <div class="line required">
                            <div class="key">主联系人</div>
                            <div class="val">
                                <input v-show="isEdit" class="input" placeholder="请输入主联系人" placeholder-class="cplaceholder" type="text" value="陈嘉尚">
                            </div>
                        </div>
                        <div class="line required">
                            <div class="key">性别</div>
                            <div class="val dis-flex">
                                <div class="flex-1 ta-l">男</div>
                                <span class="iconfont iconright"></span>
                            </div>
                        </div>
                        <div class="line">
                            <div class="key">年龄</div>
                            <div class="val">
                                <input v-show="isEdit" class="input" placeholder="请输入年龄" placeholder-class="cplaceholder" type="text" value="42">
                            </div>
                        </div>
                        <div class="line required">
                            <div class="key">主联系人电话</div>
                            <div class="val">
                                <input v-show="isEdit" class="input" placeholder="请输入紧急联系人电话" placeholder-class="cplaceholder" type="text" value="15501806521">
                            </div>
                        </div>
                        <div class="line">
                            <div class="key">主联系人传真</div>
                            <div class="val">
                                <input v-show="isEdit" class="input" placeholder="请输入主联系人传真" placeholder-class="cplaceholder" type="text">
                            </div>
                        </div>
                        <div class="line">
                            <div class="key">主联系人邮箱</div>
                            <div class="val">
                                <input v-show="isEdit" class="input" placeholder="请输入主联系人邮箱" placeholder-class="cplaceholder" type="text">
                            </div>
                        </div>
                        <div class="line">
                            <div class="flex-1">
                                <div class="key">通讯地址</div>
                                <div class="text-val text-placeholder">
                                    <textarea v-show="isEdit" class="input" placeholder="请输入通讯地址" placeholder-class="cplaceholder" type="text" value="深圳市南山向南村东二巷*坊*号" />
                                    </div>
                    </div>
                </div>
                <div class="line">
                    <div class="key">法定代表人</div>
                    <div class="val">
                        <input v-show="isEdit" class="input" placeholder="请输入法定代表人" placeholder-class="cplaceholder" type="text" value="陈嘉尚">
                    </div>
                </div>
                <div class="line">
                    <div class="key">法定代表人性别</div>
                    <div class="val dis-flex">
                        <div class="flex-1 ta-l">男</div>
                        <span class="iconfont iconright"></span>
                    </div>
                </div>
            </div>
        </div>

        <div class="msg-table" v-show="step === 2">
            <div class="table">
                <div class="line">
                    <div class="key">性别</div>
                    <div class="val dis-flex">
                        <div class="flex-1 ta-l">男</div>
                        <span class="iconfont iconright"></span>
                    </div>
                </div>
                <div class="line">
                    <div class="key">年龄段</div>
                    <div class="val dis-flex">
                        <div class="flex-1 ta-l">35岁以下</div>
                        <span class="iconfont iconright"></span>
                    </div>
                </div>
                <div class="line">
                    <div class="key">行业</div>
                    <div class="val dis-flex">
                        <div class="flex-1 ta-l">互联网行业</div>
                        <span class="iconfont iconright"></span>
                    </div>
                </div>
                <div class="line">
                    <div class="key">投资占收入比</div>
                    <div class="val dis-flex">
                        <div class="flex-1 ta-l">5%-20%</div>
                        <span class="iconfont iconright"></span>
                    </div>
                </div>
                <div class="line">
                    <div class="key">投资理财年限</div>
                    <div class="val dis-flex">
                        <div class="flex-1 ta-l">2-5年</div>
                        <span class="iconfont iconright"></span>
                    </div>
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
        { Field: 'FName', Value: '客户姓名' }, // 客户姓名/机构姓名  机构客户两个name都需要填写
        { Field: 'FName1', Value: '客户姓名' }, // 客户姓名/机构姓名
        { Field: 'FInstitutional', Value: '机构性质' },
        { Field: 'FLicenseType', Value: '执照类型' },
        { Field: 'FLicenseNumber', Value: '执照号码' },
        { Field: 'FValidTerm', Value: '有效期限' },
        { Field: 'FYearCheck', Value: '年检有效' },
        { Field: 'FRegisteredAddress', Value: '注册地址' },
        { Field: 'FRegisteredCapital', Value: '注册资本' },

        { Field: 'FMainName', Value: '主联系人姓名' },
        { Field: 'FMGender', Value: '主联系人性别' },
        { Field: 'FAge', Value: '年龄' },
        { Field: 'FMainPhone', Value: '主联系人手机' },
        { Field: 'FMainFax', Value: '主联系人传真' },
        { Field: 'FMainEmail', Value: '主联系Email' },
        { Field: 'FAddress', Value: '通讯地址' },
        { Field: 'Frepresentative', Value: '法定代表人' },
        { Field: 'FrepresentativeG', Value: '法定代表人性别' },

        { Field: 'FChoGender', Value: '男' },
        { Field: 'FChoold', Value: '年龄段' },
        { Field: 'Findustry', Value: '行业' },
        { Field: 'FInvestment', Value: '投资占收入比' },
        { Field: 'FYearInvest', Value: '投资理财年限' },

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
        FGender: '',
        FDocumentType: '',
        FIDNumber: '',
        FMaritalStatus: '',
        FBirthDate: '',
        FNationality: '',
        Fbthmis: '',
        Fcompany: '',
        FOccupation: '',
        Fposition: '',
        FPermanentProvinces: '',
        FPermanentCity: '',

        FMobilePhone: '',
        FPhoneType: '',
        FEmergencyName: '',
        FEmergencyPhone: '',
        FMailingAddress: '',

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
      },

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
      let url = `../quetions/main?type=2`
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
.msg-table .table .line .key {
	color: #333;
}
</style>
