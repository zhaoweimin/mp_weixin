<template>
    <div class="main">
        <div class="bg-fff mt10">
            <comInput :type="0" :titleDark="true" title="跟进编号" :isSpecialColorTxt="true" value="12312313123123" :textRight="false"></comInput>
            <comInput :type="0" :titleDark="true" title="客户编号" :isSpecialColorTxt="true" value="A-102" :textRight="false"></comInput>
            <comInput :type="0" :titleDark="true" title="客户姓名" value="周方文" :textRight="false"></comInput>
            <comInput :type="2" :titleDark="true" title="跟进方式" placeholder="请选择" value="" @getSelect="getSelect" :options="['亲自拜访']" :textRight="false"></comInput>
            <comInput :type="3" :titleDark="true" title="跟进开始时间" value="" @getSelectDate="getSelectDate" :textRight="false"></comInput>
            <comInput :type="3" :titleDark="true" title="跟进结束时间" value="" @getSelectDate="getSelectDate" :textRight="false"></comInput>
            <comInput :type="2" :titleDark="true" title="客户类型" placeholder="请选择" value="" @getSelect="getSelect" :options="['成交类型']" :textRight="false"></comInput>
            <comInput :type="1" :titleDark="true" title="投资总额" value="100万元" :textRight="false"></comInput>
            <comInput :type="1" :titleDark="true" title="累计投资总额" value="200万元" :textRight="false"></comInput>
            <div class="mlr15 ptb10 border-b">
                <div class="cblack f16 mb10">跟进主题</div>
                <textarea name="" id="" cols="30" rows="10" placeholder="" value="主题内容XXX"></textarea>
            </div>
            <comInput :type="2" :titleDark="true" title="跟进类型" placeholder="请选择" value="" @getSelect="getSelect" :options="['客情维护']" :textRight="false"></comInput>
            <div class="mlr15 ptb10 border-b">
                <div class="cblack f16 mb10">跟进内容</div>
                <textarea name="" id="" cols="30" rows="10" placeholder="" value="沟通签署合同事宜"></textarea>
            </div>
            <comInput :type="3" :titleDark="true" title="下次跟进时间" value="" @getSelectDate="getSelectDate" :textRight="false"></comInput>
            <div class="mlr15 ptb10 border-b">
                <div class="cblack f16 mb10">下次跟进计划</div>
                <textarea name="" id="" cols="30" rows="10" placeholder="" value="执行签署合同事宜"></textarea>
            </div>
            <comInput :type="1" :titleDark="true" title="跟进人" value="张维亮" :textRight="false"></comInput>
            <comInput :type="1" :titleDark="true" title="跟进部门" value="市场部" :textRight="false"></comInput>
        </div>
        <div class="ptb25 plr15 ">
            <van-button type="info" size="large">确认</van-button>
        </div>
    </div>
</template>

<script>
import comInput from '@/components/comInput'

export default {
  components: {
    comInput
  },

  data () {
    return {
      type: 0,

      isShowForm: false
    }
  },

  methods: {
    detail (id) {
      let url = `../followDetail/main?id=${id}`
      mpvue.navigateTo({ url })
    }
  },

  onLoad () {
    mpvue.setNavigationBarTitle({ title: '新增跟进' })
  }
}
</script>

<style scoped>
.follow-custom {
	padding: 10px 0 0;
	margin: 15px 15px;
}
.follow-custom .more {
	padding: 5px 10px;
	border-top: 1px solid rgba(242, 242, 242, 1);
}
.follow-custom .line {
	line-height: 18px;
}
.follow-custom .line .right {
	float: right;
}
textarea {
	padding: 15px 10px;
	height: 100px;
	width: 100%;
	box-sizing: border-box;
	background-color: #f1f1f1;
}
</style>
