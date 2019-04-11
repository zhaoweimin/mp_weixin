<template>
  <div class="customer">
    <div class="msg-table">
      <div class="title">活动名称</div>
      <div class="table">
        <div class="line"><div class="key">活动编号：</div><div class="val">15668554456</div></div>
        <div class="line"><div class="key">活动开始时间：</div><div class="val">2019-03-20 15:30</div></div>
        <div class="line"><div class="key">活动地点：</div><div class="val">深圳市南山区</div></div>
        <div class="line"><div class="key">邀约开始时间：</div><div class="val">2019-03-20 15:30</div></div>
        <div class="line"><div class="key">邀约结束时间：</div><div class="val">2019-03-20 15:30</div></div>
        <div class="line"><div class="key">预计参与人：</div><div class="val">100人 </div></div>
        <div class="line"><div class="key">负责人：</div><div class="val">欧阳超</div></div>
        <div class="line"><div class="key">活动范围：</div><div class="val">会议中心</div></div>
        <div class="line"><div class="key">活动目的：</div><div class="val">合作洽谈</div></div>
        <div class="line"><div class="key">邀约审批人：</div><div class="val">杨伟明</div></div>
        <div class="line"><div class="key">所属部门：</div><div class="val">市场部</div></div>
      </div>
    </div>
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  components: {
    card
  },

  data () {
    return {
      info: {
        avatar: 'https://wx.qlogo.cn/mmopen/vi_32/Po7hia4bia7Ua8tZxjcLfpHsEKgzMT3wf3HzhE6TqQHqsbXSL72dFpjIlPmAYuzv5VVpgic1iaZ703Op5I4LovGOgg/132?imageView2/2/w/100/q/80/v=',
        name: '张耀扬',
        level: 1,
        sex: 1
      }
    }
  },

  created () {
  }
}
</script>

<style>
.msg-table{
  margin: 15px;
  background: #ffffff;
  border-radius: 4px;
}
.msg-table .title{
  padding-top: 5px;
  margin-left: 15px;
  padding-right: 15px;
  font-weight: bold;
  line-height: 40px;
  /* font-size: 13px; */
}
.msg-table .table{
  padding-left: 15px;
  line-height: 40px;
}
.msg-table .table .line{
  display: flex;
  padding-right: 15px;
  font-size: 13px;
  border-top: rgba(245,245,245,1);
}
.msg-table .table .line .key{
  color: #999999;
  width: 36%;
}
.msg-table .table .line .val{
  flex: 1;
}
.msg-table .table .line .val .iconfont{
  font-size: 14px;
}
.msg-table .title .iconfont{
  color: #55A8FF;
}
.msg-table .table .big-line{
  text-align: center;
  line-height: 20px;
  padding: 10px;
  position: relative;
  left: -15px;
}
.msg-table .table .big-line .val{
  line-height: 30px;
  font-size: 17px;
}


</style>
