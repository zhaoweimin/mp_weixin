<template>
    <div class="main">
        <div class="block" @click="create(1)">
            <img src="../../../img/questions.png" alt="" mode="aspectFit">
        </div>

        <div class="question-block">
            <div class="title">一、基本信息</div>
            <div class="input-question">
                <div class="flex">
                    <div class="key">1、客户姓名</div>
                    <div class="val flex-1">
                        <input type="text" placeholder="请输入用户姓名" disabled value="程咬金" placeholder-class="cplaceholder">
                    </div>
                </div>

                <div class="flex">
                    <div class="key"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;身份号码</div>
                    <div class="val flex-1">
                        <input type="text" placeholder="请输入身份号码" disabled value="4415221888222222222" placeholder-class="cplaceholder">
                    </div>
                </div>
            </div>
            <question v-for="(vo, key) in questions1" :key="key" :data="vo" :sort="vo.num" :sign="vo.sign" @change="change"></question>
        </div>
        <div class="question-block">
            <div class="title">二、财务状况</div>
            <question v-for="(vo, key) in questions2" :key="key" :data="vo" :sort="vo.num" :sign="vo.sign" @change="change"></question>
        </div>
        <div class="question-block">
            <div class="title">三、投资知识</div>
            <question v-for="(vo, key) in questions3" :key="key" :data="vo" :sort="vo.num" :sign="vo.sign" @change="change"></question>
        </div>
        <div class="question-block">
            <div class="title">四、投资目标</div>
            <question v-for="(vo, key) in questions4" :key="key" :data="vo" :sort="vo.num" :sign="vo.sign" @change="change"></question>
        </div>
        <div class="question-block">
            <div class="title">五、风险偏好</div>
            <question v-for="(vo, key) in questions5" :key="key" :data="vo" :sort="vo.num" :sign="vo.sign" @change="change"></question>
        </div>
        <div class="line-bar">
            <van-button type="info" @click="submit">确认</van-button>
        </div>
    </div>
</template>

<script>
import question from '@/components/question'

export default {
  data () {
    return {
      questions1: [
        {
          num: 2,
          sign: 'old_type',
          question: '客户年龄介于',
          options: [{ val: 'A', text: '18-30岁' }, { val: 'B', text: '18-30岁' }, { val: 'C', text: '18-30岁' }, { val: 'D', text: '18-30岁' }]
        },
        {
          num: 3,
          sign: 'old_type',
          question: '客户的学历',
          options: [{ val: 'A', text: '高中及以下' }, { val: 'B', text: '中专或大专' }, { val: 'C', text: '本科' }, { val: 'D', text: '硕士及以上' }]
        },
        {
          num: 3,
          sign: 'old_type',
          question: '客户的职业',
          options: [{ val: 'A', text: '无固定职业' }, { val: 'B', text: '专业技术人员' }, { val: 'C', text: '一般企事业单位员工' }, { val: 'D', text: '金融行业一般从业人员' }]
        }
      ],
      questions2: [
        {
          num: 1,
          sign: 'old_type',
          question: '客户的主要收入来源是',
          options: [
            { val: 'A', text: '工资、劳务酬劳' },
            { val: 'B', text: '生产经营所得' },
            { val: 'C', text: '利息、股息、转让等金融性资产收入' },
            { val: 'D', text: '出租出售房地产等非金融资产收入' }
          ]
        },
        {
          num: 2,
          sign: 'old_type',
          question: '客户的家庭可支配年收入为（折合人民币）',
          options: [{ val: 'A', text: '50万元以下' }, { val: 'B', text: '50-100万元' }, { val: 'C', text: '100-500万元' }, { val: 'D', text: '500-1000万元' }]
        },
        {
          num: 3,
          sign: 'old_type',
          question: '客户每年的家庭可支配收入中，可用于金融投资（储蓄存款除外）的比例为？',
          options: [{ val: 'A', text: '小于10%' }, { val: 'B', text: '10%至25%' }, { val: 'C', text: '25%至50%' }, { val: 'D', text: '大于50%' }]
        },
        {
          num: 4,
          sign: 'old_type',
          question: '客户是否有尚未清偿的数额较大的债务，如有，其性质是',
          options: [{ val: 'A', text: '没有' }, { val: 'B', text: '有，住房抵押贷款等长期定额债务' }, { val: 'C', text: '有，信用卡欠款、消费信贷' }, { val: 'D', text: '有，亲戚朋友借款' }]
        }
      ],
      questions3: [
        {
          num: 1,
          sign: 'old_type',
          question: '客户的投资知识可描述为：',
          options: [
            { val: 'A', text: '有限：基本没有金融产品方面的知识' },
            { val: 'B', text: '一般：对金融产品及其相关风险具有基本的知识和理解' },
            { val: 'C', text: '丰富：对金融产品及其相关风险具有丰富的知识和理解' }
          ]
        },
        {
          num: 2,
          sign: 'old_type',
          question: '客户的投资经验可描述为：',
          options: [
            { val: 'A', text: '除银行储蓄外，基本没有其他的投资经验' },
            { val: 'B', text: '购买过债券、保险等理财产品' },
            { val: 'C', text: '参与过股票、基金等产品的交易' },
            { val: 'D', text: '参与过权证、期货期权等产品的交易' }
          ]
        },
        {
          num: 3,
          sign: 'old_type',
          question: '客户有多少年投资基金、股票、信托、私募证券或金融衍生产品等风险投资品的经验？',
          options: [{ val: 'A', text: '没有经验' }, { val: 'B', text: '少于2年' }, { val: 'C', text: '2至5年' }, { val: 'D', text: '5至10年' }, { val: 'E', text: '10年以上' }]
        }
      ],
      questions4: [
        {
          num: 1,
          sign: 'old_type',
          question: '客户计划的投资期限是多久',
          options: [{ val: 'A', text: '1年以下' }, { val: 'B', text: '1至3年' }, { val: 'C', text: '3至5年' }, { val: 'D', text: '5年以上' }]
        },
        {
          num: 2,
          sign: 'old_type',
          question: '客户打算重点投资于哪些种类的投资品种？',
          options: [
            { val: 'A', text: '债券、货币市场基金、债券基金等固定收益类投资品种' },
            { val: 'B', text: '股票、混合型基金、股票型基金等权益类投资品种' },
            { val: 'C', text: '期货、期权等金融衍生品' },
            { val: 'D', text: '其他产品或者服务' }
          ]
        }
      ],
      questions5: [
        {
          num: 1,
          sign: 'old_type',
          question: '以下哪项描述最符合客户的投资态度？',
          options: [
            { val: 'A', text: '厌恶风险，不希望本金损失，希望获得稳定的回报' },
            { val: 'B', text: '保守投资，不希望本金损失，愿意承担一定幅度的收益波动' },
            { val: 'C', text: '寻求资金的较高收益和成长性，愿意为此承担有限本金损失' },
            { val: 'D', text: '希望赚取高回报，愿意为此承担较大本金损失' }
          ]
        },
        {
          num: 2,
          sign: 'old_type',
          question: '假设有两种投资：投资A预期获得10%的收益，可能承担的损失非常小；投资B预期获得30%的收益，但可能承担较大的亏损。客户会怎么支配客户的投资：',
          options: [
            { val: 'A', text: '全部投资于收益较小且风险较小的A' },
            { val: 'B', text: '同时投资于A和B,但是大部分资金投资于收益较小且风险较小的A' },
            { val: 'C', text: '同时投资于A和B,但是大部分资金投资于收益较大且风险较大的B' },
            { val: 'D', text: '全部投资于收益较大且风险较大的B' }
          ]
        },
        {
          num: 3,
          sign: 'old_type',
          question: '客户认为自己能承受的最大投资损失是多少',
          options: [{ val: 'A', text: '10%以内' }, { val: 'B', text: '10%-30%' }, { val: 'C', text: '30%-50%' }, { val: 'D', text: '超过50%' }]
        }
      ]
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
      console.log(val)
      console.log(sign)
    },
    submit () {
      console.log('submit')
    }
  },

  created () {
    // let app = getApp()
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
