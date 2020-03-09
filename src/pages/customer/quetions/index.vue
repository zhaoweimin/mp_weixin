<template>
    <div class="main">
        <div class="block" @click="create(1)">
            <img v-if="type==='1'" src="../../../img/questions.png" alt="" mode="aspectFit">
            <img v-else src="../../../img/questions1.png" alt="" mode="aspectFit">
        </div>
        <div v-if="type==='1'">
            <div class="question-block">
                <div class="title">一、基本信息</div>
                <div class="input-question">
                    <div class="flex">
                        <div class="key">1、客户姓名</div>
                        <div class="val flex-1">
                            <input type="text" placeholder="请输入用户姓名" disabled :value="revealData.string1" placeholder-class="cplaceholder">
                        </div>
                    </div>
                    <div class="flex">
                        <div class="key"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;身份号码</div>
                        <div class="val flex-1">
                            <input type="text" placeholder="请输入身份号码" disabled :value="revealData.string2" placeholder-class="cplaceholder">
                        </div>
                    </div>
                </div>
                <question v-for="(vo, key) in questions1" :key="key" :data="vo" :sort="vo.num" :sign="vo.sign" @change="change" :reveal="vo.reveal"></question>
            </div>
            <div class="question-block">
                <div class="title">二、财务状况</div>
                <question v-for="(vo, key) in questions2" :key="key" :data="vo" :sort="vo.num" :sign="vo.sign" @change="change" :reveal="vo.reveal"></question>
            </div>
            <div class="question-block">
                <div class="title">三、投资知识</div>
                <question v-for="(vo, key) in questions3" :key="key" :data="vo" :sort="vo.num" :sign="vo.sign" @change="change" :reveal="vo.reveal"></question>
            </div>
            <div class="question-block">
                <div class="title">四、投资目标</div>
                <question v-for="(vo, key) in questions4" :key="key" :data="vo" :sort="vo.num" :sign="vo.sign" @change="change" :reveal="vo.reveal"></question>
            </div>
            <div class="question-block">
                <div class="title">五、风险偏好</div>
                <question v-for="(vo, key) in questions5" :key="key" :data="vo" :sort="vo.num" :sign="vo.sign" @change="change" :reveal="vo.reveal"></question>
            </div>
        </div>
        <div v-if="type==='2'">
            <div class="question-block">
                <question v-for="(vo, key) in questions_constitution" :key="key" :data="vo" :sort="vo.num" :sign="vo.sign" @change="change" :reveal="vo.reveal"></question>
            </div>
        </div>

        <div class="line-bar">
            <van-button type="info" @click="onSubmit">确 认</van-button>
        </div>
    </div>
</template>

<script>
import question from '@/components/question'
import { getPersonScore ,getInstitutionScore } from '@/utils/index'

export default {
  data () {
    return {
      type: '1',
      questions1: [
        {
          num: 2,
          sign: 'string3',
          question: '客户年龄介于',
          options: [{ val: 'A', text: '18-30岁' }, { val: 'B', text: '31-50岁' }, { val: 'C', text: '51-65岁' }, { val: 'D', text: '高于65岁' }],
          reveal: ''
        },
        {
          num: 3,
          sign: 'string6',
          question: '客户的学历',
          options: [{ val: 'A', text: '高中及以下' }, { val: 'B', text: '中专或大专' }, { val: 'C', text: '本科' }, { val: 'D', text: '硕士及以上' }],
          reveal: ''
        },
        {
          num: 3,
          sign: 'string7',
          question: '客户的职业',
          options: [{ val: 'A', text: '无固定职业' }, { val: 'B', text: '专业技术人员' }, { val: 'C', text: '一般企事业单位员工' }, { val: 'D', text: '金融行业一般从业人员' }],
          reveal: ''
        }
      ],
      questions2: [
        {
          num: 1,
          sign: 'string8',
          question: '客户的主要收入来源是',
          options: [
            { val: 'A', text: '工资、劳务酬劳' },
            { val: 'B', text: '生产经营所得' },
            { val: 'C', text: '利息、股息、转让等金融性资产收入' },
            { val: 'D', text: '出租出售房地产等非金融资产收入' }
          ],
          reveal: ''
        },
        {
          num: 2,
          sign: 'string9',
          question: '客户的家庭可支配年收入为（折合人民币）',
          options: [{ val: 'A', text: '50万元以下' }, { val: 'B', text: '50-100万元' }, { val: 'C', text: '100-500万元' }, { val: 'D', text: '500-1000万元' }],
          reveal: ''
        },
        {
          num: 3,
          sign: 'string10',
          question: '客户每年的家庭可支配收入中，可用于金融投资（储蓄存款除外）的比例为？',
          options: [{ val: 'A', text: '小于10%' }, { val: 'B', text: '10%至25%' }, { val: 'C', text: '25%至50%' }, { val: 'D', text: '大于50%' }],
          reveal: ''
        },
        {
          num: 4,
          sign: 'string11',
          question: '客户是否有尚未清偿的数额较大的债务，如有，其性质是',
          options: [{ val: 'A', text: '没有' }, { val: 'B', text: '有，住房抵押贷款等长期定额债务' }, { val: 'C', text: '有，信用卡欠款、消费信贷' }, { val: 'D', text: '有，亲戚朋友借款' }],
          reveal: ''
        }
      ],
      questions3: [
        {
          num: 1,
          sign: 'string12',
          question: '客户的投资知识可描述为：',
          options: [
            { val: 'A', text: '有限：基本没有金融产品方面的知识' },
            { val: 'B', text: '一般：对金融产品及其相关风险具有基本的知识和理解' },
            { val: 'C', text: '丰富：对金融产品及其相关风险具有丰富的知识和理解' }
          ],
          reveal: ''
        },
        {
          num: 2,
          sign: 'string13',
          question: '客户的投资经验可描述为：',
          options: [
            { val: 'A', text: '除银行储蓄外，基本没有其他的投资经验' },
            { val: 'B', text: '购买过债券、保险等理财产品' },
            { val: 'C', text: '参与过股票、基金等产品的交易' },
            { val: 'D', text: '参与过权证、期货期权等产品的交易' }
          ],
          reveal: ''
        },
        {
          num: 3,
          sign: 'string14',
          question: '客户有多少年投资基金、股票、信托、私募证券或金融衍生产品等风险投资品的经验？',
          options: [{ val: 'A', text: '没有经验' }, { val: 'B', text: '少于2年' }, { val: 'C', text: '2至5年' }, { val: 'D', text: '5至10年' }, { val: 'E', text: '10年以上' }],
          reveal: ''
        }
      ],
      questions4: [
        {
          num: 1,
          sign: 'string15',
          question: '客户计划的投资期限是多久',
          options: [{ val: 'A', text: '1年以下' }, { val: 'B', text: '1至3年' }, { val: 'C', text: '3至5年' }, { val: 'D', text: '5年以上' }],
          reveal: ''
        },
        {
          num: 2,
          sign: 'string16',
          question: '客户打算重点投资于哪些种类的投资品种？',
          options: [
            { val: 'A', text: '债券、货币市场基金、债券基金等固定收益类投资品种' },
            { val: 'B', text: '股票、混合型基金、股票型基金等权益类投资品种' },
            { val: 'C', text: '期货、期权等金融衍生品' },
            { val: 'D', text: '其他产品或者服务' }
          ],
          reveal: ''
        }
      ],
      questions5: [
        {
          num: 1,
          sign: 'string17',
          question: '以下哪项描述最符合客户的投资态度？',
          options: [
            { val: 'A', text: '厌恶风险，不希望本金损失，希望获得稳定的回报' },
            { val: 'B', text: '保守投资，不希望本金损失，愿意承担一定幅度的收益波动' },
            { val: 'C', text: '寻求资金的较高收益和成长性，愿意为此承担有限本金损失' },
            { val: 'D', text: '希望赚取高回报，愿意为此承担较大本金损失' }
          ],
          reveal: ''
        },
        {
          num: 2,
          sign: 'string18',
          question: '假设有两种投资：投资A预期获得10%的收益，可能承担的损失非常小；投资B预期获得30%的收益，但可能承担较大的亏损。客户会怎么支配客户的投资：',
          options: [
            { val: 'A', text: '全部投资于收益较小且风险较小的A' },
            { val: 'B', text: '同时投资于A和B,但是大部分资金投资于收益较小且风险较小的A' },
            { val: 'C', text: '同时投资于A和B,但是大部分资金投资于收益较大且风险较大的B' },
            { val: 'D', text: '全部投资于收益较大且风险较大的B' }
          ],
          reveal: ''
        },
        {
          num: 3,
          sign: 'string19',
          question: '客户认为自己能承受的最大投资损失是多少',
          options: [{ val: 'A', text: '10%以内' }, { val: 'B', text: '10%-30%' }, { val: 'C', text: '30%-50%' }, { val: 'D', text: '超过50%' }],
          reveal: ''
        }
      ],
      questions_constitution: [
        {
          num: 1,
          sign: 'string2',
          question: '客户的单位的性质：',
          options: [{ val: 'A', text: '国有企事业单位' }, { val: 'B', text: '非上市民营企业' }, { val: 'C', text: '外资企业' }, { val: 'D', text: '上市公司' }],
          reveal: ''
        },
        {
          num: 2,
          sign: 'string3',
          question: '客户单位的净资产规模为：',
          options: [{ val: 'A', text: '500万元以下' }, { val: 'B', text: '500万元-2000万元' }, { val: 'C', text: '2000万元-1亿元' }, { val: 'D', text: '超过1亿元' }],
          reveal: ''
        },
        {
          num: 3,
          sign: 'string4',
          question: '客户单位年营业收入为',
          options: [{ val: 'A', text: '500万元以下' }, { val: 'B', text: '500万元-2000万元' }, { val: 'C', text: '2000万元-1亿元' }, { val: 'D', text: '超过1亿元' }],
          reveal: ''
        },
        {
          num: 4,
          sign: 'string5',
          question: '客户单位证券账户资产为：',
          options: [{ val: 'A', text: '300万元以内' }, { val: 'B', text: '300万元-1000万元' }, { val: 'C', text: '1000万元-3000万元' }, { val: 'D', text: '超过3000万元' }],
          reveal: ''
        },
        {
          num: 5,
          sign: 'string6',
          question: '客户单位是否有尚未清偿的数额较大的债务？如有，主要是：',
          options: [
            { val: 'A', text: '银行贷款' },
            { val: 'B', text: '公司债券或企业债券' },
            { val: 'C', text: '通过担保公司等中介机构募集等借款' },
            { val: 'D', text: '民间借贷' },
            { val: 'E', text: '没有数额较大的债务' }
          ],
          reveal: ''
        },
        {
          num: 6,
          sign: 'string7',
          question: '对于金融资产投资工作，客户单位打算配置怎样的人员力量：',
          options: [
            { val: 'A', text: '一名兼职人员（包括负责人自行决策）' },
            { val: 'B', text: '一名专职人员' },
            { val: 'C', text: '多名兼职或专职人员，相互之间分工不明确' },
            { val: 'D', text: '多名兼职或专职人员，相互之间有明确分工' }
          ],
          reveal: ''
        },
        {
          num: 7,
          sign: 'string8',
          question: '客户单位所配置的金融产品投资工作的人员是否符合以下情况',
          options: [
            { val: 'A', text: '现在或此前曾从事金融、经济或财会等与金融产品投资相关的工作超过两年' },
            { val: 'B', text: '已取得金融、经济或财会等与金融产品投资专业学士以上学位' },
            { val: 'C', text: '取得证券从业资格、期货从业资格、注册会计师证书（CPA）或注册金融分析师（CFA）中的一项及以上' },
            { val: 'D', text: '本单位配置的人员不符合以上任何一项描述' }
          ],
          reveal: ''
        },
        {
          num: 8,
          sign: 'string9',
          question: '客户单位是否建立了金融产品投资相关的管理制度：',
          options: [
            { val: 'A', text: '没有，因为要保证操作的灵活性' },
            { val: 'B', text: '已建立。包括了分工和授权的要求，但未包括投资风险控制的规则' },
            { val: 'C', text: '已建立。包括了分工与授权、风险控制等一系列与金融产品投资有关的规则' },
            { val: 'D', text: '本单位配置的人员不符合以上任何一项描述' }
          ],
          reveal: ''
        },
        {
          num: 9,
          sign: 'string10',
          question: '客户单位的投资经验可以被概括为：',
          options: [
            { val: 'A', text: '有限：除银行活期账户和定期存款外基本没有其他投资经验' },
            { val: 'B', text: '一般：除银行活期账户和定期存款外，购买过基金、保险等理财产品，但还需进一步但指导' },
            { val: 'C', text: '丰富：本单位具有相当投资经验，参与过股票、基金等产品等交易并倾向于自己做出的投资决策' },
            { val: 'D', text: '非常丰富：本单位对于投资非常有经验，参与过权证、期货或创业板等高风险产品等交易' }
          ],
          reveal: ''
        },
        {
          num: 10,
          sign: 'string11',
          question: '有一个投资者一个月内做了15笔5交易（同一个品种买卖各一次算一笔）客户单位认为这样的交易频率：',
          options: [{ val: 'A', text: '太高了' }, { val: 'B', text: '偏高' }, { val: 'C', text: '正常' }, { val: 'D', text: '偏低' }],
          reveal: ''
        },
        {
          num: 11,
          sign: 'string12',
          question: '过去一年时间内，客户购买的不同金融产品（含同一类型的不同金融产品）的数量是：',
          options: [{ val: 'A', text: '5个以下' }, { val: 'B', text: '6至10个' }, { val: 'C', text: '11至15个' }, { val: 'D', text: '16个以上' }],
          reveal: ''
        },
        {
          num: 12,
          sign: 'string13',
          question: '以下金融产品，客户单位投资经验在两年以上的有（多选）：',
          options: [
            { val: 'A', text: '银行存款' },
            { val: 'B', text: '债券、货币市场基金、债券型基金或其他固定收益类产品' },
            { val: 'C', text: '股票、混合型基金、偏股型基金、股票型基金等权益类投资品种' },
            { val: 'D', text: '期货、融资融券' },
            { val: 'E', text: '复杂金融产品或其他产品' }
          ],
          reveal: ''
        },
        {
          num: 13,
          sign: 'string14',
          question: '如果客户单位曾经从事过金融产品投资，在交易较为活跃等月份，平均月交易额大概是多少：',
          options: [
            { val: 'A', text: '100万元以内' },
            { val: 'B', text: '100万元-300万元' },
            { val: 'C', text: '300万元-1000万元' },
            { val: 'D', text: '1000万元以上' },
            { val: 'E', text: '从未投资过金融产品' }
          ],
          reveal: ''
        },
        {
          num: 14,
          sign: 'string15',
          question: '客户单位用于证券投资等大部分资金不会用作其他用途的时间段为：',
          options: [{ val: 'A', text: '短期——0到1年' }, { val: 'B', text: '中期——1到5年' }, { val: 'C', text: '长期——5年以上' }],
          reveal: ''
        },
        {
          num: 15,
          sign: 'string16',
          question: '客户单位进行投资时的首要目标是：',
          options: [
            { val: 'A', text: '资产保值，我不愿意承担任何投资风险' },
            { val: 'B', text: '尽可能保证本金安全，不在乎收益率比较低' },
            { val: 'C', text: '产生较多的收益，可以承担一定的投资风险' },
            { val: 'D', text: '实现资产的大幅增长，愿意承担很大的投资风险' }
          ],
          reveal: ''
        },
        {
          num: 16,
          sign: 'string17',
          question: '客户单位打算重点投资于哪个种类的投资品种：',
          options: [
            { val: 'A', text: '债券、货币市场基金、债券基金固定收益类投资品种' },
            { val: 'B', text: '股票、混合型基金、偏股型基金、股票型基金等权益类投资品种' },
            { val: 'C', text: '期货、融资融券' },
            { val: 'D', text: '复杂金融产品' },
            { val: 'E', text: '其他产品' }
          ],
          reveal: ''
        },
        {
          num: 17,
          sign: 'string18',
          question: '客户单位认为自己能承担等最大投资损失是多少：',
          options: [{ val: 'A', text: '10%以内' }, { val: 'B', text: '10%-30%' }, { val: 'C', text: '30%-50%' }, { val: 'D', text: '超过50%' }],
          reveal: ''
        },
        {
          num: 18,
          sign: 'string19',
          question: '假设有两种不同的投资：投资A预期获得5%的收益，有可能承担非常小的损失；投资B预期获得20%的收益，但有可能面临25%甚至更高的亏损。客户将客户的投资资产分配为：',
          options: [
            { val: 'A', text: '全部投资于A' },
            { val: 'B', text: '大部分投资于A' },
            { val: 'C', text: '两种投资各一半' },
            { val: 'D', text: '大部分投资于B' },
            { val: 'E', text: '全部投资于B' }
          ],
          reveal: ''
        },
        {
          num: 19,
          sign: 'string20',
          question: '客户单位参与金融产品投资的主要目的是什么：',
          options: [
            { val: 'A', text: '闲置资金保值增值' },
            { val: 'B', text: '获取主营业务以外的投资收益' },
            { val: 'C', text: '现货套期保值、对冲主营业务风险' },
            { val: 'D', text: '减持已持有的股票' }
          ],
          reveal: ''
        }
      ],
      revealData:{}
    }
  },
  components: {
    question
  },
  methods: {
    create (type) {
      let url = `../add/main?type=${type}`
      mpvue.navigateTo({ url })
    },
    change (val, sign) {
      if(this.type==='1'){
        this.questions1.forEach(e=>{
          if(e.sign===sign){
            e.reveal = val
          }
        })
        this.questions2.forEach(e=>{
          if(e.sign===sign){
            e.reveal = val
          }
        })
        this.questions3.forEach(e=>{
          if(e.sign===sign){
            e.reveal = val
          }
        })
        this.questions4.forEach(e=>{
          if(e.sign===sign){
            e.reveal = val
          }
        })
        this.questions5.forEach(e=>{
          if(e.sign===sign){
            e.reveal = val
          }
        })
      }else if(this.type === '2'){
        this.questions_constitution.forEach(e=>{
          if(e.sign===sign){
            e.reveal = val
          }
        })
      }
    },
    revealFunc(data){
      if(this.type==='1'){
        this.questions1.forEach(item => {
          const text = this.revealData[item.sign]
          const op = item.options.find(m=>m.text === text)
          item.reveal = op?op.val:''
        })
        this.questions2.forEach(item => {
          const text = this.revealData[item.sign]
          const op = item.options.find(m=>m.text === text)
          item.reveal = op?op.val:''
        })
        this.questions3.forEach(item => {
          const text = this.revealData[item.sign]
          const op = item.options.find(m=>m.text === text)
          item.reveal = op?op.val:''
        })
        this.questions4.forEach(item => {
          const text = this.revealData[item.sign]
          const op = item.options.find(m=>m.text === text)
          item.reveal = op?op.val:''
        })
        this.questions5.forEach(item => {
          const text = this.revealData[item.sign]
          const op = item.options.find(m=>m.text === text)
          item.reveal = op?op.val:''
        })
      }else if(this.type === '2'){
        this.questions_constitution.forEach(item => {
          const text = this.revealData[item.sign]
          const op = item.options.find(m=>m.text === text)
          item.reveal = op?op.val:''
        })
      }
    },
    onSubmit () {
      let result = []
      let score = 0
      if(this.type==='1'){
        this.questions1.forEach(e=>result.push(e.reveal))
        this.questions2.forEach(e=>result.push(e.reveal))
        this.questions3.forEach(e=>result.push(e.reveal))
        this.questions4.forEach(e=>result.push(e.reveal))
        this.questions5.forEach(e=>result.push(e.reveal))
        console.log(result)
        score = getPersonScore(result)
      }else if(this.type === '2'){
        this.questions_constitution.forEach(e=>result.push(e.reveal))
        console.log(result)
        score = getInstitutionScore(result)
      }
      if(!score) return mpvue.showToast({
					title: '请填写完整测评题目',
					icon: 'none'
				})
      this.$store.commit('SET_NUM', score)
      mpvue.navigateBack({ delta: '1' })
    }
  },
  onLoad (options) {
		Object.assign(this.$data, this.$options.data())
    this.type = options.type
    console.log('FNumber', options.FNumber)
    if(!options.FNumber) return false
    if(this.type === '1'){
      this.$api.getPersonTestResult(options.FNumber).then(res=>{
        console.log(res)
        this.revealData = res.rows[0]
        this.revealFunc(res.rows[0])
      })
    }else if(this.type === '2'){
      this.$api.getInstitutionTestResult(options.FNumber).then(res=>{
        console.log(res)
        this.revealData = res.rows[0]
        this.revealFunc(res.rows[0])
      })
    }
  }
}
</script>

<style>
page {
	background: #edf6ff;
}
.block {
	margin: 15px;
	width: 345px;
	border-radius: 6px;
	overflow: hidden;
}
.block img {
	width: 100%;
	height: 120px;
}
.question-block {
	margin: 15px;
	background: #fff;
}
.question-block .title {
	margin: 15px;
	padding-top: 15px;
	color: #000;
	font-weight: bold;
}
.input-question {
	margin: 5px 15px;
	line-height: 40px;
}
.input-question .key {
	margin-right: 10px;
}
.input-question .val input {
	width: 100%;
	height: 40px;
}
</style>
