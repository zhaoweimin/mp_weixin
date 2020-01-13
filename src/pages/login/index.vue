<template>
	<div class="main flex a-center">
		<div class="form bg-fff plr15 flex flex-column l-center">
			<div class="ta-c mb30">天玑财富</div>
			<div class="w100">
				<div class="inputewrap flex l-center plr15 mb30">
					<input class="input" placeholder-style="color:#d8d8d8" v-model="form.userName" placeholder="请输入账号" type="text" />
				</div>
				<div class="inputewrap flex l-center plr15 mb30">
					<input class="input" placeholder-style="color:#d8d8d8" v-model="form.passWord" placeholder="请输入密码" type="password" />
				</div>
				<van-button :round="true" type="info" size="large" @click="login">登陆</van-button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			form: {
				userName: 'kingdee', // kingdee
				passWord: '123456' // 123456
				// userName:'', // kingdee
				// passWord:'' // 123456
			}
		}
	},
	mounted() {},

	methods: {
		login() {
			console.log(222)
			// mpvue.navigateTo({ url })
			let { form } = this
			if (form.userName.trim() === '') {
				mpvue.showToast({
					title: '请输入用户名',
					icon: 'none'
				})
				return
			}
			if (form.passWord.trim() === '') {
				mpvue.showToast({
					title: '请输入密码',
					icon: 'none'
				})
				return
			}
			this.$api.login(form).then(res => {
				console.log(res)
				if (res.Result !== 0) {
					mpvue.showToast({
						title: '登录成功',
						icon: 'success'
					})
					this.$store.commit('setInfo', res)
					console.log('state=>', this.$store.state.account.info)

					mpvue.switchTab({ url: '/pages/home/main' })
				} else {
					mpvue.showToast({
						title: res.PromptMsg,
						icon: 'none'
					})
				}
			})
		}
	},

	created() {
		// let app = getApp()
	}
}
</script>
<style scoped>
.main {
	padding-top: 100px;
}
.form {
	padding-top: 30px;
	height: 300px;
	width: 300px;
	border-radius: 6px;
}
.inputewrap {
	height: 50px;
	width: 100%;
	background-color: #f1f1f1;
	border-radius: 36px;
	box-sizing: border-box;
}
.input {
	width: 100%;
	height: 30px;
}
.radius-50 {
	border-radius: 50;
}
.mb30 {
	margin-bottom: 30px;
}
</style>
