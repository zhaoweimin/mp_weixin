<template>
    <div class="main has-two-header">
        <navbar :info="nav" @changeNav="changeNav"></navbar>
        <fliter :info="nav" @getData="getFilterData"></fliter>
        <div v-show="navId===0" class="pt10">
            <card v-for="(vo, key) in list1" :key="key" :type="0" :info="vo"></card>
        </div>
        <div v-show="navId===1" class="pt10">
            <card v-for="(vo, key) in list2" :key="key" :type="1" :info="vo"></card>
        </div>
    </div>
</template>

<script>
import navbar from '@/components/navbar'
import fliter from '@/components/fliterLine'
import card from '@/components/customerCard'

export default {
  data () {
    return {
      nav: ['个人档案', '机构档案'],
      navId: 0,
      list1: [],
      list2: [
        {
          type: 1,
          name: '深圳市XXX有限公司',
          avatar: 'https://wx.qlogo.cn/mmopen/vi_32/Po7hia4bia7Ua8tZxjcLfpHsEKgzMT3wf3HzhE6TqQHqsbXSL72dFpjIlPmAYuzv5VVpgic1iaZ703Op5I4LovGOgg/132?imageView2/2/w/100/q/80/v=',
          id: 0,
          level: 1,
          sex: 1,
          url: '../constitution/main?id=1'
        }
      ]
    }
  },

  components: {
    navbar,
    fliter,
    card
  },
  onLoad () {
    this.getData()
  },
  methods: {
    getData (filter = {}) {
      let parms = {
        url: '/ashx/UIFramework/UploadServerice.ashx?service=GetGridData',
        data: {
          id: '0a68d672-aa11-ea11-b397-39f1c2ed5a99', // BPM基础资料编号
          pageIndex: '0', // 当前页
          pageSize: '10', // 查询行数 最大200
          Parameter: 'escontain=true&deptid=1', // 参数 sql中有动态参数时需设置
          filter: filter,
          rightvalueid: '0a68d672-aa11-ea11-b397-39f1c2ed5a99'
        }
      }
      this.$api.post(parms).then(res => {
        this.list1 = res.rows.filter(m => m.FApplySubject === '个人客户')
        this.list2 = res.rows.filter(m => m.FApplySubject === '机构客户')
        console.log(111, res)
        console.log(222, res.rows)
      })
    },
    changeNav (navId) {
      console.log(navId)
      this.navId = navId
      this.$forceUpdate()
    },
    getFilterData (val) {
      this.getData(val)
    }
  }
}
</script>

<style scoped>
</style>
