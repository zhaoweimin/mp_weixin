<template>
  <div class="customer">
    <div class="customer-card">
      <div class="dis-flex">
        <div class="avatar">
          <img class="img" :src="info.avatar" mode="aspectFill">
          <div class="text">编辑</div>
        </div>
        <div class="msg">
          <div class="title"><span class="strong">{{info.name}}</span> <span class="sex">{{info.sex ? '先生' : '女士'}}</span></div>
          <div class="tags level-1" v-if="info.level == 1">
            <div class="tag">历史成交客户</div>
            <div class="tag level">A级</div>
          </div>
          <div class="tags level-2" v-if="info.level == 2">
            <div class="tag">成交客户</div>
            <div class="tag level">B级</div>
          </div>
          <div class="tags level-3" v-if="info.level == 3">
            <div class="tag">准客户</div>
            <div class="tag level">C级</div>
          </div>
          <div class="tags level-4" v-if="info.level == 4">
            <div class="tag">潜在客户</div>
            <div class="tag level">D级</div>
          </div>
        </div>
      </div>
    </div>

    <div class="msg-table">
      <div class="title">基本信息 <span class="iconfont iconjibenxinxi"></span></div>
      <div class="table">
        <div class="line">
          <div class="key flex-1">证件类型</div>
          <div class="val">身份证 <span class="iconfont iconright"></span></div>
        </div>
        <div class="line">
          <div class="key flex-1">证件号码</div>
          <div class="val">521201295262699562535 <span class="iconfont iconright"></span></div>
        </div>
        <div class="line">
          <div class="key flex-1">婚姻状况</div>
          <div class="val">已婚 <span class="iconfont iconright"></span></div>
        </div>
        <div class="line">
          <div class="key flex-1">出身日期</div>
          <div class="val">1985.3.25 <span class="iconfont iconright"></span></div>
        </div>
        <div class="line">
          <div class="key flex-1">国籍</div>
          <div class="val">中国 <span class="iconfont iconright"></span></div>
        </div>
        <div class="line">
          <div class="key flex-1">生日关怀</div>
          <div class="val">晚宴 <span class="iconfont iconright"></span></div>
        </div>
        <div class="line">
          <div class="key flex-1">工作单位</div>
          <div class="val">深圳市xxx公司 <span class="iconfont iconright"></span></div>
        </div>
        <div class="line">
          <div class="key flex-1">职位</div>
          <div class="val">市场总监 <span class="iconfont iconright"></span></div>
        </div>
        <div class="line">
          <div class="key flex-1">常住省份</div>
          <div class="val">广东 <span class="iconfont iconright"></span></div>
        </div>
        <div class="line">
          <div class="key flex-1">常住城市</div>
          <div class="val">深圳 <span class="iconfont iconright"></span></div>
        </div>

      </div>
    </div>

    <div class="msg-table">
      <div class="title">联系方式 <span class="iconfont iconliaotianduihua"></span></div>
      <div class="table">
        <div class="line">
          <div class="key flex-1">手机号码</div>
          <div class="val">18032654593 <span class="iconfont iconright"></span></div>
        </div>
        <div class="line">
          <div class="key flex-1">电话类型</div>
          <div class="val">国内电话 <span class="iconfont iconright"></span></div>
        </div>
        <div class="line">
          <div class="key flex-1">紧急联系人</div>
          <div class="val">张宇行 <span class="iconfont iconright"></span></div>
        </div>
        <div class="line">
          <div class="key flex-1">紧急联系人电话</div>
          <div class="val">15963252564 <span class="iconfont iconright"></span></div>
        </div>
        <div class="line">
          <div class="key flex-1">邮寄地址</div>
          <div class="val">深圳市南山区软件产业基地 <span class="iconfont iconright"></span></div>
        </div>
      </div>
    </div>

    <div class="msg-table">
      <div class="title">风险能力测评 <span class="iconfont iconjibenxinxi"></span></div>
      <div class="table">
        <div class="line">
          <div class="key flex-1">风险测评得分</div>
          <div class="val">80 <span class="iconfont iconright"></span></div>
        </div>
        <div class="line">
          <div class="key flex-1">客户风险等级</div>
          <div class="val">C1 <span class="iconfont iconright"></span></div>
        </div>
        <div class="line">
          <div class="key flex-1">风险承受能力</div>
          <div class="val">稳健型 <span class="iconfont iconright"></span></div>
        </div>
        <div class="line">
          <div class="key flex-1">相匹配产品风险等级</div>
          <div class="val">R1R2R3 <span class="iconfont iconright"></span></div>
        </div>
      </div>
    </div>

    <div class="msg-table">
      <div class="title">兴趣爱好 <span class="iconfont iconjibenxinxi"></span></div>
      <div class="table">
        <div class="line">
          <div class="key flex-1">性别</div>
          <div class="val">男 <span class="iconfont iconright"></span></div>
        </div>
        <div class="line">
          <div class="key flex-1">年龄段</div>
          <div class="val">25岁以下 <span class="iconfont iconright"></span></div>
        </div>
        <div class="line">
          <div class="key flex-1">收入来源</div>
          <div class="val">工资，劳务报酬 <span class="iconfont iconright"></span></div>
        </div>
        <div class="line">
          <div class="key flex-1">行业</div>
          <div class="val">互联网行业 <span class="iconfont iconright"></span></div>
        </div>
        <div class="line">
          <div class="key flex-1">投资占收入比</div>
          <div class="val">5%-20% <span class="iconfont iconright"></span></div>
        </div>
        <div class="line">
          <div class="key flex-1">投资理财年限</div>
          <div class="val">2-5年 <span class="iconfont iconright"></span></div>
        </div>
        <div class="line">
          <div class="key flex-1">投资私募基金信息来源渠道</div>
          <div class="val">私募基金管理机构 <span class="iconfont iconright"></span></div>
        </div>
        <div class="line">
          <div class="key flex-1">选择私募基金的关注点</div>
          <div class="val">私募基金管理机构的品牌 <span class="iconfont iconright"></span></div>
        </div>
        <div class="line">
          <div class="key flex-1">运动健康</div>
          <div class="val">帆船/游艇出海 <span class="iconfont iconright"></span></div>
        </div>
        <div class="line">
          <div class="key flex-1">私享会</div>
          <div class="val">红酒品鉴 <span class="iconfont iconright"></span></div>
        </div>
        <div class="line">
          <div class="key flex-1">沙龙分享</div>
          <div class="val">摄影分享 <span class="iconfont iconright"></span></div>
        </div>
        <div class="line">
          <div class="key flex-1">女性专享手作</div>
          <div class="val">香水手作 <span class="iconfont iconright"></span></div>
        </div>
        <div class="line">
          <div class="key flex-1">亲子/单人手作</div>
          <div class="val">鸡尾酒/精酿啤酒手作 <span class="iconfont iconright"></span></div>
        </div>
        <div class="line">
          <div class="key flex-1">美食专享</div>
          <div class="val">西餐 <span class="iconfont iconright"></span></div>
        </div>
        <div class="line">
          <div class="key flex-1">旅行</div>
          <div class="val">海滨海岛 <span class="iconfont iconright"></span></div>
        </div>

      </div>
    </div>

    <div class="msg-table">
      <div class="title">统计与分析 <span class="iconfont iconjibenxinxi"></span></div>
      <div class="table">
        <div class="big-line line">
          <div class="flex-1">
            <div class="val"><span class="strong">10万</span> <span class="iconfont iconright"></span></div>
            <div class="key">客户投资总额</div>
          </div>
          <div class="flex-1">
            <div class="val"><span class="strong">50万</span> <span class="iconfont iconright"></span></div>
            <div class="key">累计投资总额</div>
          </div>
        </div>
        <div class="line">
          <div class="key flex-1">最近跟进时间</div>
          <div class="val">2019.3.20 <span class="iconfont iconright"></span></div>
        </div>
        <div class="line">
          <div class="key flex-1">首次成交时间</div>
          <div class="val">2018.12.20 <span class="iconfont iconright"></span></div>
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
