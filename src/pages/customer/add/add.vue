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
                    <div class="num">{{score}}</div>
                    <div class="text">风险测评得分</div>
                </div>
                <div class="pl20 flex-1">
                    <div class="text mb10">客户风险等级：{{gradeResult.grade}}</div>
                    <div class="text mb10">风险承受能力类型：{{gradeResult.type}}</div>
                    <div class="text">相匹配产品风险等级：{{gradeResult.proType}}</div>
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
            <comInput :type="1" @getInputVal="getInputVal" fontSize="f14" :value="datas.FNumber" paramkey="FNumber" :textRight="false" title="客户编号" :isSpecialBorderStyle="true"></comInput>
            <comInput :type="2" fontSize="f14" ref="FTranType" :value="datas.FTranType" paramkey="FTranType" :textRight="false" :options="options.customerOrigin" @getSelect="getSelect" title="客户来源" :isSpecialBorderStyle="true" :isRequired="true"></comInput>
            <comInput :type="2" fontSize="f14" ref="FtranTypeEntry" :value="datas.FtranTypeEntry" paramkey="FtranTypeEntry" :textRight="false" :options="options.customerOriginDetails" @getSelect="getSelect" title="客户来源明细" :isSpecialBorderStyle="true" :isRequired="true"></comInput>
            <comInput :type="1" @getInputVal="getInputVal" fontSize="f14" ref="FName" :value="datas.FName" paramkey="FName" :textRight="false" title="客户姓名" :isSpecialBorderStyle="true" :isRequired="true"></comInput>
            <comInput :type="2" fontSize="f14" ref="FGender" :value="datas.FGender" paramkey="FGender" :textRight="false" :options="options.sex" @getSelect="getSelect" title="客户性别" :isSpecialBorderStyle="true" :isRequired="true"></comInput>
            <comInput :type="2" fontSize="f14" :value="datas.FDocumentType" paramkey="FDocumentType" :textRight="false" :options="options.certType" @getSelect="getSelect" title="证件类型" :isSpecialBorderStyle="true"></comInput>
            <comInput :type="1" @getInputVal="getInputVal" fontSize="f14" :value="datas.FIDNumber" paramkey="FIDNumber" :textRight="false" title="证件号码" :isSpecialBorderStyle="true"></comInput>
            <comInput :type="2" fontSize="f14" :value="datas.FMaritalStatus" paramkey="FMaritalStatus" :textRight="false" :options="options.marriage" @getSelect="getSelect" title="婚姻状况" :isSpecialBorderStyle="true"></comInput>
            <comInput :type="3" fontSize="f14" :value="datas.FBirthDate" paramkey="FBirthDate" :textRight="false" title="出生年月" @getSelectDate="getSelectDate" :isSpecialBorderStyle="true"></comInput>
            <comInput :type="1" @getInputVal="getInputVal" fontSize="f14" :value="datas.FNationality" paramkey="FNationality" :textRight="false" title="国籍" :isSpecialBorderStyle="true"></comInput>
            <comInput :type="2" fontSize="f14" :value="datas.Fbthmis" paramkey="Fbthmis" :textRight="false" :options="options.birthCare" @getSelect="getSelect" title="生日关怀" :isSpecialBorderStyle="true"></comInput>
            <div class="table pr15 line">
                <div class="flex-1">
                    <div class="key f14 l-end w100">工作单位</div>
                    <textarea v-model="datas.Fcompany" class="text-val f14" placeholder="请输入工作单位" placeholder-class=""></textarea>
                </div>
            </div>
            <comInput :type="2" fontSize="f14" :value="datas.FOccupation" paramkey="FOccupation" :textRight="false" :options="options.job" @getSelect="getSelect" title="职业" :isSpecialBorderStyle="true"></comInput>
            <comInput :type="1" @getInputVal="getInputVal" fontSize="f14" :value="datas.Fposition" paramkey="Fposition" :textRight="false" title="职位" :isSpecialBorderStyle="true"></comInput>
            <comInput :type="2" fontSize="f14" :value="datas.FPermanentProvinces" paramkey="FPermanentProvinces" :textRight="false" :options="options.province" @getSelect="getSelect" title="常住省份" :isSpecialBorderStyle="true"></comInput>
            <comInput :type="1" @getInputVal="getInputVal" fontSize="f14" :value="datas.FPermanentCity" paramkey="FPermanentCity" :textRight="false" title="常住城市" :isSpecialBorderStyle="true"></comInput>
        </div>

        <div class="msg-table" v-show="step === 1">
            <comInput :type="1" @getInputVal="getInputVal" fontSize="f14" ref="FMobilePhone" validType="phoneValid" :value="datas.FMobilePhone" paramkey="FMobilePhone" :textRight="false" title="手机号码" :isSpecialBorderStyle="true" :isRequired="true"></comInput>
            <comInput :type="2" fontSize="f14" :value="datas.FPhoneType" paramkey="FPhoneType" :textRight="false" :options="options.phoneType" @getSelect="getSelect" title="电话类型" :isSpecialBorderStyle="true"></comInput>
            <comInput :type="1" @getInputVal="getInputVal" fontSize="f14" validType="emailValid" :value="datas.Email" paramkey="Email" :textRight="false" title="邮箱" :isSpecialBorderStyle="true"></comInput>
            <comInput :type="1" @getInputVal="getInputVal" fontSize="f14" :value="datas.FEmergencyName" paramkey="FEmergencyName" :textRight="false" title="紧急联系人" :isSpecialBorderStyle="true"></comInput>
            <comInput :type="1" @getInputVal="getInputVal" fontSize="f14" :value="datas.FNumbFEmergencyPhoneer" paramkey="FEmergencyPhone" :textRight="false" title="紧急联系人电话" :isSpecialBorderStyle="true"></comInput>
            <div class="table pr15 pb20 line required">
                <div class="flex-1">
                    <div class="key f14 l-end w100">邮寄地址</div>
                    <textarea v-model="datas.FMailingAddress" class="text-val f14" placeholder="请输入邮寄地址" placeholder-class=""></textarea>
                </div>
            </div>
        </div>

        <div class="msg-table" v-show="step === 2">
            <comInput :type="2" fontSize="f14" :value="datas.FChoGender" paramkey="FChoGender" :textRight="false" :options="options.sex" @getSelect="getSelect" title="性别" :isSpecialBorderStyle="true"></comInput>
            <comInput :type="2" fontSize="f14" :value="datas.FChoold" paramkey="FChoold" :textRight="false" :options="options.ageRange" @getSelect="getSelect" title="年龄段" :isSpecialBorderStyle="true"></comInput>
            <comInput :type="2" fontSize="f14" :value="datas.Findustry" paramkey="Findustry" :textRight="false" :options="options.industry" @getSelect="getSelect" title="行业" :isSpecialBorderStyle="true"></comInput>
            <comInput :type="2" fontSize="f14" :value="datas.FInvestment" paramkey="FInvestment" :textRight="false" :options="options.investmentRate" @getSelect="getSelect" title="投资占收入比" :isSpecialBorderStyle="true"></comInput>
            <comInput :type="2" fontSize="f14" :value="datas.FYearInvest" paramkey="FYearInvest" :textRight="false" :options="options.investmentYears" @getSelect="getSelect" title="投资理财年限" :isSpecialBorderStyle="true"></comInput>
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
import { getPersonGrade } from '@/utils/index.js'
import { mapState } from 'vuex'

export default {
	components: {
		card,
		comInput
	},
	computed: {
		...mapState({
			score: state => state.score.num
		}),
		updateSource() {
			return this.source
		},
		gradeResult(){
			return getPersonGrade(this.score)
		}
	},
	data() {
		return {
			options: Options,
			step: 0,

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
				{ Field: 'FName', Value: '' },
				{ Field: 'FGender', Value: '' },
				{ Field: 'FDocumentType', Value: '' },
				{ Field: 'FIDNumber', Value: '' },
				{ Field: 'FMaritalStatus', Value: '' },
				{ Field: 'FBirthDate', Value: '' },
				{ Field: 'FNationality', Value: '' },
				{ Field: 'Fbthmis', Value: '' },
				{ Field: 'Fcompany', Value: '' },
				{ Field: 'FOccupation', Value: '' },
				{ Field: 'Fposition', Value: '' },
				{ Field: 'FPermanentProvinces', Value: '' },
				{ Field: 'FPermanentCity', Value: '' },

				{ Field: 'FMobilePhone', Value: '' },
				{ Field: 'FPhoneType', Value: '' },
				{ Field: 'Email', Value: ''},
				{ Field: 'FEmergencyName', Value: '' },
				{ Field: 'FEmergencyPhone', Value: '' },
				{ Field: 'FMailingAddress', Value: '' },

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

				// 默认必传的字段
				{ Field: 'FApplySubject', Value: '个人客户' }, // 默认
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
				// 新增
				Email: '',
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
			}
		}
	},
	onLoad() {
		Object.assign(this.$data, this.$options.data())
	  	this.$store.commit('SET_NUM', 0)
		console.log('ref=>', this.datas)
	},
	methods: {
		setStep(type) {
			if (type) {
				this.step += 1
			} else {
				this.step -= 1
			}
		},
		lingQuestion(e) {
			let url = `../quetions/main?type=1`
			mpvue.navigateTo({ url })
		},
		submit() {
			let keys = Object.keys(this.datas)
			console.log('keys', keys)
			for (let index = 0; index < keys.length; index++) {
				let _key = keys[index]
				let _item = this.$refs[`${_key}`]
				if (!!_item && _item.isRequired && !this.datas[`${_key}`]) {
					return wx.showToast({
						title: `${_item.title}不能为空`,
						icon: 'none',
						duration: 1500
					})
				}
				this.reqParams[index].Value = Array.isArray(this.datas[_key]) ? this.datas[_key].join(',') : this.datas[_key]
				console.log('tag1', _key)
				console.log('tag2', this.datas)
				console.log('tag3', this.datas[_key])
			}
			this.$api.UploadServerice(this.reqParams).then(res => {
				console.log(res)
				if (res.Result === 1) {
					wx.showToast({
						title: res.PromptMsg,
						icon: 'success',
						duration: 1500
					})
					setTimeout(() => {
						mpvue.switchTab({ url: '/pages/home/main' })
					}, 1500)
				} else {
					wx.showToast({
						title: res.PromptMsg,
						duration: 1500
					})
				}
			})
		},
		onChange(key, type) {
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
		getSelectDate(data) {
			console.log(data)
			this.datas[data.key] = data.value
		},
		getSelect(data) {
			console.log(data)
			this.datas[data.key] = data.value
			console.log(this.datas)
		},
		getInputVal(data) {
			console.log(data)
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
</style>
