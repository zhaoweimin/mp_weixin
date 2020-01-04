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
// 格式金额的过滤器
Vue.filter('NumFormat', function(value) {
	let num = String(value).split(',').join('')
	if (!num) return ''
	/* 原来用的是Number(num).toFixed(0)，这样取整时有问题，例如0.51取整之后为1，感谢Nils指正 */
	/* 后来改成了 Number(num)|0,但是输入超过十一位就为负数了，具体见评论 */
	var intPart = Number(num) - (Number(num) % 1) // 获取整数部分（这里是windy93的方法）
	var intPartFormat = intPart.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') // 将整数部分逢三一断
	var num2Array = num.toString().split('.')

	//= 2表示数据有小数位
	if (num2Array.length === 2) {
		return intPartFormat + '.' + num2Array[1].toString()
	} else {
		return intPartFormat
	}
})
Vue.filter('dateFormat', function(str) {
	return str ? str.split(' ')[0] : '--'
})

App.mpType = 'app'

const app = new Vue(App)
app.$mount()
