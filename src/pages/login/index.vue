<template>
    <div class="main flex a-center">
      <div class="form bg-fff plr15 flex flex-column l-center">
        <div class="ta-c mb30">天玑财富</div>
        <div class="w100">
          <div class="inputewrap flex l-center plr15 mb30">
            <input class="input" placeholder-style="color:#d8d8d8" v-model="form.account" placeholder="请输入账号" type="text" >
          </div>
          <div class="inputewrap flex l-center plr15 mb30">
            <input class="input" placeholder-style="color:#d8d8d8" v-model="form.password" placeholder="请输入密码" type="password" >
          </div>
          <van-button :round="true" type="info" size="large" @click="submit">登陆</van-button>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  data () {
    return {
      form:{
        account:'',
        password:''
      },
    }
  },

  components: {
  },

  mounted () {
    
  },

  methods: {
    login (url) {
      console.log(url)
      // mpvue.navigateTo({ url })
    },
  
  },

  created () {
    // let app = getApp()
  }
}
</script>
<style scoped>
  .main{
    padding-top: 100px;
  }
  .form{  
    padding-top: 30px;
    height: 300px;
    width: 300px;
    border-radius: 6px;
  }
  .inputewrap{
    height: 50px;
    width: 100%;
    background-color: #f1f1f1;
    border-radius: 36px;
    box-sizing: border-box;
  }
  .input{
    width: 100%;
    height: 30px;
  }
  .radius-50{
    border-radius: 50
  }
  .mb30{
    margin-bottom: 30px;
  }
</style>

