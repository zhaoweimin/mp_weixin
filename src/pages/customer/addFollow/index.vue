<template>
    <div class="main">
        <div class="bg-fff mt10">
            <comInput :type="1" :titleDark="true" title="跟进编号" paramkey="string8" @getInputVal="getInputVal" :isSpecialColorTxt="true" :textRight="false"></comInput>
            <comInput :type="1" :titleDark="true" title="客户编号" paramkey="string10" @getInputVal="getInputVal" :isSpecialColorTxt="true" :textRight="false"></comInput>
            <comInput :type="1" :titleDark="true" title="客户姓名" paramkey="string1" @getInputVal="getInputVal" :textRight="false"></comInput>
            <comInput :type="2" :titleDark="true" title="跟进方式" paramkey="string2" :options="options.followWay" placeholder="请选择" @getSelect="getSelect" :textRight="false"></comInput>
            <comInput :type="3" :titleDark="true" title="跟进开始时间" paramkey="date1" @getSelectDate="getSelectDate" :textRight="false"></comInput>
            <comInput :type="3" :titleDark="true" title="跟进结束时间" paramkey="date2" @getSelectDate="getSelectDate" :textRight="false"></comInput>
            <comInput :type="2" :titleDark="true" title="客户类型" paramkey="string16" :options="options.customerType" placeholder="请选择" @getSelect="getSelect" :textRight="false"></comInput>
            <comInput :type="1" :titleDark="true" title="投资总额" paramkey="string24" @getInputVal="getInputVal" :textRight="false"></comInput>
            <comInput :type="1" :titleDark="true" title="累计投资总额" paramkey="string25" @getInputVal="getInputVal" :textRight="false"></comInput>
            <div class="mlr15 ptb10 border-b">
                <div class="cblack f16 mb10">跟进主题</div>
                <textarea v-model="datas.string3" placeholder="请输入跟进主题"></textarea>
            </div>
            <comInput :type="2" :titleDark="true" title="跟进类型" paramkey="string4" :options="options.followType" placeholder="请选择" @getSelect="getSelect" :textRight="false"></comInput>
            <div class="mlr15 ptb10 border-b">
                <div class="cblack f16 mb10">跟进内容</div>
                <textarea v-model="datas.string26" placeholder="请输入跟进内容"></textarea>
            </div>
            <comInput :type="3" :titleDark="true" title="下次跟进时间" paramkey="date3" @getSelectDate="getSelectDate" :textRight="false"></comInput>
            <div class="mlr15 ptb10 border-b">
                <div class="cblack f16 mb10">下次跟进计划</div>
                <textarea v-model="datas.string5" placeholder="请输入下次跟进计划"></textarea>
            </div>
            <comInput :type="1" :titleDark="true" title="跟进人" paramkey="string7" @getInputVal="getInputVal" :textRight="false"></comInput>
            <comInput :type="1" :titleDark="true" title="跟进部门" paramkey="string6" @getInputVal="getInputVal" :textRight="false"></comInput>
        </div>
        <div class="ptb25 plr15 ">
            <van-button type="info" size="large" @click="submit">确认</van-button>
        </div>
    </div>
</template>

<script>
import comInput from '@/components/comInput'
import Options from '@/utils/Options.js'

export default {
  components: {
    comInput
  },

  data () {
    return {
      options: Options,
      type: 0,
      isShowForm: false,

      reqParams: [
        {
          Field: 'string8', // 跟进编码
          Value: '' // 值
        },
        {
          Field: 'string10', // 客户编码
          Value: ''
        },
        {
          Field: 'string1', // 客户姓名
          Value: ''
        },
        {
          Field: 'string2', // 跟进方式
          Value: ''
        },
        {
          Field: 'date1', // 跟进开始时间
          Value: ''
        },
        {
          Field: 'date2', // 跟进结束时间
          Value: ''
        },
        {
          Field: 'string16', // 客户类型
          Value: ''
        },
        {
          Field: 'string24', // 投资总额
          Value: ''
        },
        {
          Field: 'string25', // 累计投资总额
          Value: ''
        },
        {
          Field: 'string3', // 跟进主题
          Value: ''
        },
        {
          Field: 'string4', // 跟进类型
          Value: ''
        },
        {
          Field: 'string26', // 跟进内容
          Value: ''
        },
        {
          Field: 'date3', // 下次跟进时间
          Value: ''
        },
        {
          Field: 'string5', // 下次跟进计划
          Value: ''
        },
        {
          Field: 'string7', // 跟进人
          Value: ''
        },
        {
          Field: 'string6', // 跟进人部门
          Value: ''
        },
        // --------
        {
          Field: 'string14', // 客户分类
          Value: '个人客户'
        },
        {
          Field: 'string29', // 跟进人ID
          Value: '跟进人ID'
        },
        {
          Field: 'string11', // 最后修改人
          Value: '管理员'
        },
        {
          Field: 'string9', // 最后修改部门
          Value: '天玑财富'
        },
        {
          Field: 'date10', // 最后修改时间
          Value: '2019-12-10'
        },
        {
          Field: 'string13', // 创建人
          Value: '管理员'
        },
        {
          Field: 'string12', // 创建部门
          Value: '天玑财富'
        },
        {
          Field: 'date4', // 创建时间
          Value: '2019-12-10'
        },
        {
          Field: 'string27',
          Value: '0'
        },
        {
          Field: 'string30',
          Value: '1'
        }
      ],
      datas: {
        string8: '',
        string10: '',
        string1: '',
        string2: '',
        date1: '',
        date2: '',
        string16: '',
        string24: '',
        string25: '',
        string3: '',
        string4: '',
        string26: '',
        date3: '',
        string5: '',
        string7: '',
        string6: ''
      }
    }
  },

  methods: {
    detail (id) {
      let url = `../followDetail/main?id=${id}`
      mpvue.navigateTo({ url })
    },
    getSelectDate (data) {
      console.log(data)
      this.datas[data.key] = data.value
    },
    getSelect (data) {
      console.log(data)
      this.datas[data.key] = data.value
    },
    getInputVal (data) {
      console.log(data)
      this.datas[data.key] = data.value
    },
    submit () {
      Object.keys(this.datas).forEach((item, index) => {
        this.reqParams[index].Value = this.datas[item]
      })
      console.log('11111=====', this.reqParams)
      this.$api.addFollow(this.reqParams).then(res => {
        console.log(res)
        wx.showToast({
          title: '操作成功',
          icon: 'success',
          duration: 3000,
          success: () => {
            mpvue.navigateTo({ url: '../follow/main' })
          }
        })
      })
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
