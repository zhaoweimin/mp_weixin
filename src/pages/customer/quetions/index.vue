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
            <question v-for="(vo, key) in questions" :key="key" :data="vo" :sort="vo.num" :sign="vo.sign" @change="change"></question>
            <question v-for="(vo, key) in questions" :key="key" :data="vo" :sort="vo.num" :sign="vo.sign" @change="change"></question>
            <question v-for="(vo, key) in questions" :key="key" :data="vo" :sort="vo.num" :sign="vo.sign" @change="change"></question>
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
      questions: [
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
