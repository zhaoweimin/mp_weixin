<template>
  <div class="main">
    <div class="msg-table">
      <div class="table">
        <div class="line">
          <div class="key flex-1">客户姓名</div>
          <div class="val">周方文 </div>
        </div>
        <div class="line">
          <div class="key flex-1">跟进方式</div>
          <div class="val">亲自拜访 </div>
        </div>
        <div class="line">
          <div class="key flex-1">客户级别</div>
          <div class="val">B级 </div>
        </div>
        <div class="line">
          <div class="key flex-1">跟进主题</div>
          <div class="val"><span class="cgey">未设置</span> </div>
        </div>
        <div class="line">
          <div class="key flex-1">跟进类型</div>
          <div class="val">转化成交 </div>
        </div>
        <div class="line">
          <div class="key flex-1">跟进内容</div>
          <div class="val"><span class="cgey">未设置</span> </div>
        </div>
        <div class="line">
          <div class="key flex-1">跟进开始时间</div>
          <div class="val">2019-03-15 15:30 </div>
        </div>
        <div class="line">
          <div class="key flex-1">跟进结束时间</div>
          <div class="val">2019-03-15 18:30 </div>
        </div>
        <div class="line">
          <div class="key flex-1">下次跟进计划</div>
          <div class="val"><span class="cgey">未设置</span> </div>
        </div>
        <div class="line">
          <div class="key flex-1">跟进人</div>
          <div class="val">陈维亮 </div>
        </div>
        <div class="line">
          <div class="key flex-1">跟进部门</div>
          <div class="val"><span class="cgey">未设置</span> </div>
        </div>


      </div>
    </div>
    <button class="btn-submit" @click="send()">提交审核</button>
  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  methods: {
  },
  created () {
  }
}
</script>

<style scoped>
.task-detail{
  padding: 10px 0;
}
.block .title{
  line-height: 40px;
  height: 40px;
  padding: 0 15px;
  font-size: 13px;
}
.block .from{
  background: #ffffff;
}
.block .from .line{
  line-height: 40px;
  height: 40px;
  display: flex;
  padding: 0 15px;
  font-size: 16px;
}
.block .from .line .key{
  width: 30%;
  /* font-weight: bold; */
}
.block .from .line .val{
  flex: 1;
  padding: 0 5px;
}
.block .from .line .val input{
  line-height: 40px;
  height: 40px;
}
.block .from .line .icon{
  float: right;
  line-height: 40px;
}
.btn-submit{
  background: rgba(80,158,240,1);
  border-radius: 5px;
  color: #ffffff;
  font-size: 16px;
  margin: 15px;
}
</style>
