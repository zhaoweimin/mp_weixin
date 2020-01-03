<template>
    <div class="customer">
        <div class="bg-fff">
          <block v-for="(vo, key) in list" :key="key">
            <comInput @getClickItems="getClickItems" :paramkey="key" :type="7" :title="vo.FName" :value="vo.string2"></comInput>
          </block>
        </div>
    </div>
</template>

<script>
import card from '@/components/card'
import comInput from '@/components/comInput'

export default {
  components: {
    card,
    comInput
  },

  data () {
    return {
      list: [],
      page: 1
    }
  },
  mounted () {
    this.getList()
  },

  onReachBottom () {
    return false
    this.getList(this.page + 1)
  },

  methods: {
    getList (page = 1) {
      this.$api
        .getProductBaseList(page)
        .then(res => {
          console.log(res);
          if (res.success) {
            if (page === 1) {
              this.list = res.rows
            } else {
              this.list = this.list.concat(res.rows)
            }
            if (res.rows.length > 0) this.page = page
          }
        })
    },
    getClickItems (res) {
      console.log(res);
      let item = this.list[res.key]
			mpvue.setStorageSync('has_select_royalty', 1)
      mpvue.setStorageSync('select_info', item)
      mpvue.navigateBack({ delta: 1 })
    }
  }
}
</script>

<style>
.customer-card {
	margin: 0px;
	padding: 15px;
	background: linear-gradient(to right, #509ef0, #5bc7ff); /* 标准的语法 */
	border-radius: 0px;
	position: relative;
	margin-bottom: 30px;
}
.customer-card::after {
	content: '';
	position: absolute;
	bottom: -20px;
	left: 32px;
	width: 0;
	height: 0;
	border-width: 10px;
	border-style: solid;
	border-color: #509ef0 transparent transparent transparent;
}
.customer-card .title {
	color: #ffffff;
}

.customer-card .msg .title .sex {
	color: #ffffff;
}
.customer-card .avatar {
	width: 44px;
	height: 50px;
}
.customer-card .avatar .img {
	width: 44px;
	height: 44px;
}
.customer-card .avatar .text {
	color: #ffffff;
	font-size: 12px;
	text-align: center;
	line-height: 12px;
}
.msg-table {
	margin: 15px;
	background: #ffffff;
	border-radius: 4px;
}
.msg-table .title {
	padding-top: 5px;
	margin-left: 15px;
	padding-right: 15px;
	font-weight: bold;
	line-height: 40px;
}
.msg-table .table {
	padding-left: 15px;
	line-height: 40px;
}
.msg-table .table .line {
	display: flex;
	padding-right: 15px;
	font-size: 13px;
	border-top: rgba(245, 245, 245, 1);
}
.msg-table .table .line .key {
	color: #999999;
	width: 36%;
}
.msg-table .table .line .val {
	flex: 1;
}
.msg-table .table .line .icon .iconfont {
	font-size: 14px;
}
.msg-table .title .iconfont {
	color: #55a8ff;
}
.msg-table .table .big-line {
	text-align: center;
	line-height: 20px;
	padding: 10px;
	position: relative;
	left: -15px;
}
.msg-table .table .big-line .val {
	line-height: 30px;
	font-size: 17px;
}
</style>
