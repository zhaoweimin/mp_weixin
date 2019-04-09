<template>
  <div class="customer">
    <div class="msg-table">
      <div class="table">
        <div class="line">
          <div class="key">单据编号</div>
          <div class="val">2322115565512223664</div>
          <div class="icon"><span class="iconfont iconright"></span></div>
        </div>
        <div class="line">
          <div class="key">业绩单号</div>
          <div class="val">2322115565512223664</div>
          <div class="icon"><span class="iconfont iconright"></span></div>
        </div>
        <div class="line">
          <div class="key">购买产品</div>
          <div class="val">某某某某</div>
          <div class="icon"><span class="iconfont iconright"></span></div>
        </div>
        <div class="line">
          <div class="key">认购金额</div>
          <div class="val">2千万</div>
          <div class="icon"><span class="iconfont iconright"></span></div>
        </div>
        <div class="line">
          <div class="key">年化系数</div>
          <div class="val">0.21</div>
          <div class="icon"><span class="iconfont iconright"></span></div>
        </div>
        <div class="line">
          <div class="key">年化业绩</div>
          <div class="val">2千万</div>
          <div class="icon"><span class="iconfont iconright"></span></div>
        </div>
        <div class="line">
          <div class="key">到账日</div>
          <div class="val">2019-3-18</div>
          <div class="icon"><span class="iconfont iconright"></span></div>
        </div>
        <div class="line">
          <div class="key">到期日</div>
          <div class="val">2019-3-18</div>
          <div class="icon"><span class="iconfont iconright"></span></div>
        </div>
        <div class="line">
          <div class="key">认购费</div>
          <div class="val">2千万</div>
          <div class="icon"><span class="iconfont iconright"></span></div>
        </div>
        <div class="line">
          <div class="key">提成方式</div>
          <div class="val">一次</div>
          <div class="icon"><span class="iconfont iconright"></span></div>
        </div>
        <div class="line">
          <div class="key">提成率</div>
          <div class="val">80%</div>
          <div class="icon"><span class="iconfont iconright"></span></div>
        </div>
        <div class="line">
          <div class="key">本次提奖</div>
          <div class="val">50万</div>
          <div class="icon"><span class="iconfont iconright"></span></div>
        </div>
        <div class="line">
          <div class="key">后端提奖</div>
          <div class="val">50万</div>
          <div class="icon"><span class="iconfont iconright"></span></div>
        </div>
        <div class="line">
          <div class="key">提成是否完成</div>
          <div class="val">不是一次性提取情况下</div>
          <div class="icon"><span class="iconfont iconright"></span></div>
        </div>
        <div class="line">
          <div class="key">申请人</div>
          <div class="val">展播</div>
          <div class="icon"><span class="iconfont iconright"></span></div>
        </div>
        <div class="line">
          <div class="key">申请时间</div>
          <div class="val">2019-3-18</div>
          <div class="icon"><span class="iconfont iconright"></span></div>
        </div>
        <div class="line">
          <div class="key">状态</div>
          <div class="val cgreen">审核中</div>
          <div class="icon"><span class="iconfont iconright"></span></div>
        </div>

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
.customer-card{
  margin: 0px;
  padding: 15px;
  background: linear-gradient(to right, #509EF0 , #5BC7FF); /* 标准的语法 */
  border-radius: 0px;
  position: relative;
  margin-bottom: 30px;
}
.customer-card::after{
  content: "";
  position: absolute;
  bottom: -20px;
  left: 32px;
  width: 0; 
  height: 0;
  border-width: 10px;
  border-style: solid;
  border-color: #509EF0 transparent transparent transparent;
}
.customer-card .title{
  color: #ffffff;
}

.customer-card .msg .title .sex{
  color: #ffffff;
}
.customer-card .avatar{
  width: 44px;
  height: 50px;
}
.customer-card .avatar .img{
  width: 44px;
  height: 44px;
}
.customer-card .avatar .text{
  color: #ffffff;
  font-size: 12px;
  text-align: center;
  line-height: 12px;
}
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
.msg-table .table .line .icon .iconfont{
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
