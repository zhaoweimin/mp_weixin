import Vue from 'vue'
import App from './App'
import request from './server/WXrequest'
import api from './server/api'

Vue.config.productionTip = false
Vue.prototype.$httpWX = request
Vue.prototype.$api = api
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
