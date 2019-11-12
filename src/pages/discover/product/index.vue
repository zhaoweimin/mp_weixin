<template>
    <div class="main has-header">
        <navbar :info="nav" @changeNav="changeNav"></navbar>
        <block v-if="nav_num===0">
            <card v-for="(vo, key) in list1" :key="key" :info="vo" :type="6" :status="nav_num"></card>
        </block>
        <block v-else>
            <card v-for="(vo, key) in list2" :key="key" :info="vo" :type="6" :status="nav_num"></card>
        </block>
    </div>
</template>

<script>
import navbar from '@/components/navbar'
import card from '@/components/achievementCard'

export default {
  data () {
    return {
      nav: ['在售产品', '历史产品'],
      nav_num: 0,
      list1: [
        {
          name: '张耀阳',
          status: '募集中'
        },
        {
          name: '刘世勋',
          status: '募集中'
        },
        {
          name: '方世伟',
          status: '募集中'
        },
        {
          name: '董颖',
          status: '募集中'
        }
      ],
      list2: [
        {
          name: '张耀阳',
          status: '已结束'
        },
        {
          name: '刘世勋',
          status: '已结束'
        },
        {
          name: '方世伟',
          status: '已结束'
        },
        {
          name: '董颖',
          status: '已结束'
        }
      ]
    }
  },

  components: {
    navbar,
    card
  },

  methods: {
    changeNav (nav) {
      this.nav_num = nav
    }
  },

  created () {}
}
</script>

<style scoped>
</style>
