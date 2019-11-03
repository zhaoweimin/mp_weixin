<template>
    <div class="main ">
        <div class="has-big-header">
            <navbar :info="nav" @changeNav="changeNav"></navbar>
            <!-- <fliter :info="nav"></fliter> -->
            <search :fixed="false" :isMainBg="false" :rightButton="true" placeholder="搜索"></search>
            <block v-for="(vo, key) in list" :key="key">
                <card :info="vo"></card>
            </block>
        </div>

    </div>
</template>

<script>
import navbar from '@/components/navbar'
import fliter from '@/components/fliterNav'
import card from '@/components/taskCard'
import search from '@/components/search'

export default {
  data () {
    return {
      nav: ['新待办', '历史待办'],
      list: [
        {
          theme: '提成申请',
          avatar: 'https://wx.qlogo.cn/mmopen/vi_32/Po7hia4bia7Ua8tZxjcLfpHsEKgzMT3wf3HzhE6TqQHqsbXSL72dFpjIlPmAYuzv5VVpgic1iaZ703Op5I4LovGOgg/132?imageView2/2/w/100/q/80/v=',
          id: 0,
          level: 1,
          sex: 1
        },
        {
          theme: '活动邀约',
          avatar: 'https://wx.qlogo.cn/mmopen/vi_32/Po7hia4bia7Ua8tZxjcLfpHsEKgzMT3wf3HzhE6TqQHqsbXSL72dFpjIlPmAYuzv5VVpgic1iaZ703Op5I4LovGOgg/132?imageView2/2/w/100/q/80/v=',
          id: 1,
          level: 4,
          sex: 1
        },
        {
          theme: '业绩管理',
          avatar: 'https://wx.qlogo.cn/mmopen/vi_32/Po7hia4bia7Ua8tZxjcLfpHsEKgzMT3wf3HzhE6TqQHqsbXSL72dFpjIlPmAYuzv5VVpgic1iaZ703Op5I4LovGOgg/132?imageView2/2/w/100/q/80/v=',
          id: 2,
          level: 2,
          sex: 1
        },
        {
          theme: '活动申请',
          avatar: 'https://wx.qlogo.cn/mmopen/vi_32/Po7hia4bia7Ua8tZxjcLfpHsEKgzMT3wf3HzhE6TqQHqsbXSL72dFpjIlPmAYuzv5VVpgic1iaZ703Op5I4LovGOgg/132?imageView2/2/w/100/q/80/v=',
          id: 3,
          level: 3,
          sex: 0
        },
        {
          theme: '产品预约',
          avatar: 'https://wx.qlogo.cn/mmopen/vi_32/Po7hia4bia7Ua8tZxjcLfpHsEKgzMT3wf3HzhE6TqQHqsbXSL72dFpjIlPmAYuzv5VVpgic1iaZ703Op5I4LovGOgg/132?imageView2/2/w/100/q/80/v=',
          id: 4,
          level: 3,
          sex: 0
        },
        {
          theme: '业绩赎回',
          avatar: 'https://wx.qlogo.cn/mmopen/vi_32/Po7hia4bia7Ua8tZxjcLfpHsEKgzMT3wf3HzhE6TqQHqsbXSL72dFpjIlPmAYuzv5VVpgic1iaZ703Op5I4LovGOgg/132?imageView2/2/w/100/q/80/v=',
          id: 5,
          level: 3,
          sex: 0
        }
      ]
    }
  },

  components: {
    navbar,
    fliter,
    card,
    search
  },

  methods: {
    changeNav (nav) {
      console.log(nav)
    },
    send () {
      let url = '/pages/task/detail/main?id='
      mpvue.navigateTo({ url })
    }
  },

  created () {}
}
</script>

<style scoped>
</style>
