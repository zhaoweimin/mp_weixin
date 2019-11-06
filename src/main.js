import Vue from 'vue'
import App from './App'
import request from './server/WXrequest'
import api from './server/api'
// 导入vuex store 对象
import store from './store/index'
Vue.config.productionTip = false
Vue.prototype.$httpWX = request
// 导入通过原型链设置$api 以便全局调用
Vue.prototype.$api = api
// 导入通过原型链设置$store 以便全局调用
Vue.prototype.$store = store
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
