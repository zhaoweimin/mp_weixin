<template>
    <div class="main">
        <div class="booking" v-if="step === 0">
            <div class="dis-flex ptb15 a-center">
                <div class="label bg-blue">销售信息</div>
            </div>
            <div class="block">
                <div class="from">
                    <comInput :type="2" fontSize="f14" :value="datas.string1" paramkey="string1" :textRight="false" :options="achievementOptions" @getSelect="getSelect" title="业绩单号" :isSpecialBorderStyle="true"></comInput>
                    <comInput :type="2" fontSize="f14" :value="datas.string2" paramkey="string2" :textRight="false" :options="customerOptions" @getSelect="getSelect" title="客户姓名" :isSpecialBorderStyle="true" :isRequired="true"></comInput>
                    <comInput :type="0" fontSize="f14" :value="datas.string36" paramkey="string36" :textRight="false" title="证件类型" :isSpecialBorderStyle="true"></comInput>
                    <comInput :type="0" fontSize="f14" :value="datas.string37" paramkey="string37" :textRight="false" title="证件号码" :isSpecialBorderStyle="true"></comInput>
                    <!-- <comInput :type="1" @getInputVal="getInputVal" fontSize="f14" :value="datas.FNumber" paramkey="string1" :textRight="false" title="业绩单号" :isSpecialBorderStyle="true"></comInput> -->
                    <comInput :type="2" fontSize="f14" :value="datas.string6" paramkey="string6" :textRight="false" :options="productOptions" @getSelect="getSelect" title="产品名称" :isSpecialBorderStyle="true" :isRequired="true"></comInput>
                    <comInput :type="0" fontSize="f14" :value="datas.string7" paramkey="string7" :textRight="false" title="产品分类" :isSpecialBorderStyle="true"></comInput>
                    <comInput :type="0" fontSize="f14" :value="datas.string5" paramkey="string5" :textRight="false" title="产品期限" :isSpecialBorderStyle="true"></comInput>
                    
                

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

                    <div class="line">
                        <div class="key">资产证明上传时间</div>
                        <div class="val">
                            <picker mode="date">
                                <div class="icon"><span class="iconfont iconright"></span></div>
                                <div class="picker cgey">
                                    请选择资产证明上传时间
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
import comInput from '@/components/comInput'
import Options from '@/utils/Options.js'

export default {
	data() {
		return {
			step: 0,
			info: {},
			type_range: ['身份证', '护照'],
			type: '',
			booking_date: '',
            pay_date: '',
            customers:[],
            customerOptions:[],
            products:[],
            productOptions:[],
            achievementOptions:[],
            reqParams:[
                {
                    Field: "string1",				//单据编号							
                    Value: "业绩单号"			
                },
                {
                    Field: "string2",				//业绩单号						
                    Value: "客户姓名"
                },
                {
                    Field: "string6",					//客户姓名		
                    Value: "产品名称"
                },
                {
                    Field: "string7",					//购买产品		
                    Value: "产品分类"
                },
                {
                    Field: "string5",					//产品期限		
                    Value: "产品期限"
                },
                {
                    Field: "string36",					//证件类型					
                    Value: "证件类型"
                },
                {
                    Field: "string37",					//证件号	
                    Value: "证件号"
                },
                {
                    Field: "string9",					//合同编号		
                    Value: "合同编号"
                },
                {
                    Field: "string10",					//预约编号
                    Value: "预约编号"
                },
                {
                    Field: "string13",					//理财经理		
                    Value: "理财经理"
                },
                {
                    Field: "string14",					//所属部门			
                    Value: "所属部门"
                },
                {
                    Field: "string74",				//部门编号		
                    Value: "部门编号"
                },
                {
                    Field: "string15",				//录单员	
                    Value: "录单员"
                },
                {
                    Field: "string69",			//录单员id					
                    Value: "录单员id"
                },
                {
                    Field: "string34",				//录单员归属部门		
                    Value: "录单员归属部门"	
                },
                {
                    Field: "string28",				//附件		
                    Value: "附件"	
                },
                {
                    Field: "date100",				//资产证明上传时间		
                    Value: "资产证明上传时间"	
                },
                {
                    Field: "date1",				//打款日期	
                    Value: "打款日期"	
                },
                {
                    Field: "string16",				//合同金额		
                    Value: "合同金额"	
                },
                {
                    Field: "string17",				//付款方式		
                    Value: "付款方式"	
                },
                {
                    Field: "string18",				//付款开户行
                    Value: "付款开户行"	
                },
                {
                    Field: "string19",				//付款账号
                    Value: "付款账号"	
                },
                {
                    Field: "string20",				//累计缴款金额
                    Value: "累计缴款金额"	
                },
                {
                    Field: "date2",				//确认收款日期
                    Value: "确认收款日期"	
                },
                {
                    Field: "date3",				//起息日
                    Value: "起息日"	
                },
                {
                    Field: "date4",				//产品到期日
                    Value: "产品到期日"	
                },
                {
                    Field: "date7",				//产品成立日
                    Value: "产品成立日"	
                },
                {
                    Field: "number1",				//年化系数
                    Value: "年化系数"	
                },
                {
                    Field: "number2",				//年化业绩（合同金额*年化系数=年化业绩）
                    Value: "年化业绩"	
                },
                {
                    Field: "string21",				//收益分配账户开户行
                    Value: "收益分配账户开户行"	
                },
                {
                    Field: "string22",				//收益分配账户
                    Value: "收益分配账户"	
                },
                {
                    Field: "date8",					//冷静期（当前系统时间二十四小时之后的时间）
                    Value: "冷静期"	
                },
                {
                    Field: "date9",					//到账日期 （和确认收款日期一样）		
                    Value: "到账日期"	
                },
                {
                    Field: "string49",				
                    Value: "否"	
                },
                {
                    Field: "string50",				
                    Value: "否"	
                },
                {
                    Field: "string76",				
                    Value: "未提奖"	
                },
                {
                    Field: "string79",				
                    Value: "0"	
                },
                {
                    Field: "string38",				
                    Value: "0"	
                },
                {
                    Field: "string29",				
                    Value: "创建人"	
                },
                {
                    Field: "string27",				
                    Value: "天玑财富"	
                },
                {
                    Field: "date5",				
                    Value: "创建时间"	
                },
                {
                    Field: "string26",				
                    Value: "最后修改人"	
                },
                {
                    Field: "string24",				
                    Value: "最后修改部门"	
                },
                {
                    Field: "date6",				
                    Value: "最后修改时间"	
                }
            ],
            datas:{
                string1:'',
                string2:'',
                string36:'',
                string37:'',
                string6:'',
                string7:'',
                string5:''
            }
		}
	},
	onLoad(option) {
        console.log(option)
        this.getHistoryAchievementList()
        this.getCustomers()
        this.getProducts()
	},
	components: {
        upload,
        comInput
	},
	methods: {
        getCustomers(){
            this.$api.getAchiveList('', {}, '&r=1&UserID=10183', true).then(res => {
                console.log('res=>>',res)
                this.customerOptions= res.rows.map(m=>m.FName)
                this.customers = res.rows.map(m=>{
                    return {
                        FDocumentType: m.FDocumentType,
                        FIDNumber: m.FIDNumber
                    }
                })
            })
        },
        getProducts(){
            this.$api.getDiscoverProductList('', '', true).then(res => {
                this.productOptions = res.rows.map(m=>m.FName)
                this.products = res.rows.map(m=>{
                    return {
                        FTypeId: m.FTypeId,
                        FInvestment: m.FInvestment
                    }
                })
                console.log('res=>>',res)
            })
        },
        getHistoryAchievementList(){
            this.$api.getHistoryAchievementList('',true).then(res=>{
                res = JSON.parse(res.RetValue)
                this.achievementOptions = res.rows.map(m=>m['业绩单号'])
            })
        },
		bindTypeChange(e) {
			let val = e.mp.detail.value
			this.type = val
		},
		bindBookingChange(e) {
			let val = e.mp.detail.value
			this.booking_date = val
		},
		bindPayChange(e) {
			let val = e.mp.detail.value
			this.pay_date = val
		},
		send() {
			let url = '/pages/success/main'
			mpvue.navigateTo({ url })
		},
		setStep(type) {
			if (type) {
				this.step += 1
			} else {
				this.step -= 1
			}
        },
        getSelect (data) {
            console.log(data)

              this.datas[data.key] = data.value
              if(data.key === 'string2'){
                  console.log(111)
                  this.datas.string36 = this.customers[data.index].FDocumentType
                  this.datas.string37 = this.customers[data.index].FIDNumber
              }
              if(data.key === 'string6'){
                  console.log(222)
                  this.datas.string7 = this.products[data.index].FTypeId
                  this.datas.string5 = this.products[data.index].FInvestment
              }
        },
        getInputVal (data) {
            console.log(data)
              this.datas[data.key] = data.value
        }
	},

	created() {}
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
