<template>
    <div class="customer-card">
        <div class="dis-flex">
            <div class="avatar">
                <img class="img" src="https://wx.qlogo.cn/mmopen/vi_32/Po7hia4bia7Ua8tZxjcLfpHsEKgzMT3wf3HzhE6TqQHqsbXSL72dFpjIlPmAYuzv5VVpgic1iaZ703Op5I4LovGOgg/132?imageView2/2/w/100/q/80/v=" mode="aspectFill">
            </div>
            <div class="flex-1">
                <div class="dis-flex">
                    <div class="msg">
                        <div class="title"><span class="strong">{{info.FName}}</span> <span v-if="type===0" class="sex">{{info.FGender}}</span></div>
                        <div class="tags mb10 level-0" v-if="info.FDealType == ''">
                            <div class="tag">{{info.FCustomerType}}</div>
                        </div>
                        <div class="tags mb10 level-1" v-if="info.FDealType == 'A'">
                            <div class="tag">{{info.FCustomerType}}</div>
                            <div class="tag level">A级</div>
                        </div>
                        <div class="tags mb10 level-2" v-if="info.FDealType == 'B'">
                            <div class="tag">{{info.FCustomerType}}</div>
                            <div class="tag level">B级</div>
                        </div>
                        <div class="tags mb10 level-3" v-if="info.FDealType == 'C'">
                            <div class="tag">{{info.FCustomerType}}</div>
                            <div class="tag level">C级</div>
                        </div>
                        <div class="tags mb10 level-4" v-if="info.FDealType == 'D'">
                            <div class="tag">{{info.FCustomerType}}</div>
                            <div class="tag level">D级</div>
                        </div>
                    </div>
                    <div class="more" @click="linkDetail">更多<span class="iconfont iconright"></span></div>
                </div>
                <div class="pl10 dis-flex" v-if="info.FnowInvestment">
                    <div class="f12 mr20">投资总额 | <span :class="{'cyellow':info.FDealType==='A','clink':info.FDealType==='B','c-y':info.FDealType==='C','cgreen':info.FDealType==='D'}">{{info.FnowInvestment>10000?(info.FnowInvestment/10000)+'万':nfo.FnowInvestment}}</span></div>
                    <div class="f12">累计投资总额 | <span :class="{'cyellow':info.FDealType==='A','clink':info.FDealType==='B','c-y':info.FDealType==='C','cgreen':info.FDealType==='D'}">{{info.FsumInvestment>10000?(info.FsumInvestment/10000)+'万':nfo.FsumInvestment}}</span></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: ['info', 'type'],
  methods: {
    linkDetail () {
      let url = this.type === 0 ? '../customer/main?id=0' : '../constitution/main?id=1'
      mpvue.navigateTo({ url })
      wx.setStorage({
        // 存储到本地
        key: 'cusInfo',
        data: this.info
      })
    },
    formatMoney (num) {
      return num > 10000 ? num / 10000 + '万' : num
    }
  }
}
</script>

<style scoped>
.c-y {
	color: #f3c450;
}
</style>
