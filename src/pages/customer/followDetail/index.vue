<template>
  <div class="main">
    <div class="msg-table">
      <div class="table">
        <div class="line">
          <div class="key flex-1">客户姓名</div>
          <div class="val">周方文 <span class="iconfont iconright"></span></div>
        </div>
        <div class="line">
          <div class="key flex-1">跟进方式</div>
          <div class="val">亲自拜访 <span class="iconfont iconright"></span></div>
        </div>
        <div class="line">
          <div class="key flex-1">客户级别</div>
          <div class="val">B级 <span class="iconfont iconright"></span></div>
        </div>
        <div class="line">
          <div class="key flex-1">跟进主题</div>
          <div class="val"><span class="cgey">未设置</span> <span class="iconfont iconright"></span></div>
        </div>
        <div class="line">
          <div class="key flex-1">跟进类型</div>
          <div class="val">转化成交 <span class="iconfont iconright"></span></div>
        </div>
        <div class="line">
          <div class="key flex-1">跟进内容</div>
          <div class="val"><span class="cgey">未设置</span> <span class="iconfont iconright"></span></div>
        </div>
        <div class="line">
          <div class="key flex-1">跟进开始时间</div>
          <div class="val">2019-03-15 15:30 <span class="iconfont iconright"></span></div>
        </div>
        <div class="line">
          <div class="key flex-1">跟进结束时间</div>
          <div class="val">2019-03-15 18:30 <span class="iconfont iconright"></span></div>
        </div>
        <div class="line">
          <div class="key flex-1">下次跟进计划</div>
          <div class="val"><span class="cgey">未设置</span> <span class="iconfont iconright"></span></div>
        </div>
        <div class="line">
          <div class="key flex-1">跟进人</div>
          <div class="val">陈维亮 <span class="iconfont iconright"></span></div>
        </div>
        <div class="line">
          <div class="key flex-1">跟进部门</div>
          <div class="val"><span class="cgey">未设置</span> <span class="iconfont iconright"></span></div>
        </div>


      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      id: 0
    }
  },

  components: {
  },

  methods: {
    changeNav (nav) {
      console.log(nav)
    }
  },

  onLoad (option) {
    let id = option.id
    this.id = id
    mpvue.setNavigationBarTitle({ title: '跟进详情' })
  }
}
</script>

<style scoped>

</style>
