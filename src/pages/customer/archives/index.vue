<template>
    <div class="main has-two-header">
        <navbar :info="nav" @changeNav="changeNav"></navbar>
        <fliter :info="nav"></fliter>
        <div class="pt10">
            <card v-for="(vo, key) in list" :key="key" :info="vo"></card>
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
      list: [],
      list1: [
        {
          type: 0,
          name: '张耀阳',
          avatar: 'https://wx.qlogo.cn/mmopen/vi_32/Po7hia4bia7Ua8tZxjcLfpHsEKgzMT3wf3HzhE6TqQHqsbXSL72dFpjIlPmAYuzv5VVpgic1iaZ703Op5I4LovGOgg/132?imageView2/2/w/100/q/80/v=',
          id: 0,
          level: 1,
          deal: true,
          sex: 1,
          url: '../customer/main?id=1'
        },
        {
          type: 0,
          name: '刘世勋',
          avatar: 'https://wx.qlogo.cn/mmopen/vi_32/Po7hia4bia7Ua8tZxjcLfpHsEKgzMT3wf3HzhE6TqQHqsbXSL72dFpjIlPmAYuzv5VVpgic1iaZ703Op5I4LovGOgg/132?imageView2/2/w/100/q/80/v=',
          id: 0,
          level: 4,
          sex: 1,
          url: '../customer/main?id=1'
        },
        {
          type: 0,
          name: '方世伟',
          avatar: 'https://wx.qlogo.cn/mmopen/vi_32/Po7hia4bia7Ua8tZxjcLfpHsEKgzMT3wf3HzhE6TqQHqsbXSL72dFpjIlPmAYuzv5VVpgic1iaZ703Op5I4LovGOgg/132?imageView2/2/w/100/q/80/v=',
          id: 0,
          level: 2,
          deal: true,
          sex: 1,
          url: '../customer/main?id=1'
        },
        {
          type: 0,
          name: '董颖',
          avatar: 'https://wx.qlogo.cn/mmopen/vi_32/Po7hia4bia7Ua8tZxjcLfpHsEKgzMT3wf3HzhE6TqQHqsbXSL72dFpjIlPmAYuzv5VVpgic1iaZ703Op5I4LovGOgg/132?imageView2/2/w/100/q/80/v=',
          id: 0,
          level: 3,
          sex: 0,
          url: '../customer/main?id=1'
        }
      ],
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
  created () {
    this.list = this.list1
  },
  methods: {
    changeNav (navId) {
      console.log(navId)
      this.navId = navId
      this.list = navId === 0 ? this.list1 : this.list2
      console.log(this.list)
      this.$forceUpdate()
    }
  }
}
</script>

<style scoped>
</style>
