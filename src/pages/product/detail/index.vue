<template>
	<div class="main">
		<div class="intro">
			<div class="block big">
				<div class="title">产品规模</div>
				<div class="desc">
					<text>{{ info['产品规模'] || '暂无' }}</text>
				</div>
			</div>
		</div>

		<div class="intro">
			<div class="block big">
				<div class="title">产品结构</div>
				<div class="desc">
					<text>{{ info['产品结构'] || '暂无' }}</text>
				</div>
			</div>
		</div>
		<div class="intro">
			<div class="block big">
				<div class="title">产品结构描述</div>
				<div class="desc">
					<text>{{ info['产品结构描述'] || '暂无' }}</text>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			info: {}
		}
	},

	components: {},

	onLoad() {
		mpvue.getStorage({
			// 获取本地缓存
			key: 'product_info',
			success: res => {
				this.info = res.data
			}
		})
	},

	methods: {
		changeNav(nav) {
			console.log(nav)
		}
	},

	created() {}
}
</script>

<style scoped>
.intro .block {
	background: #fff;
	box-shadow: 0px 1px 5px 0px rgba(127, 127, 127, 0.2);
	border-radius: 4px;
	margin: 15px;
	padding: 0 15px;
}
.intro .big {
	margin: 0px;
	margin-bottom: 15px;
	padding: 0 30px;
}
.intro .block .title {
	font-size: 17px;
	font-weight: bold;
	line-break: 30px;
	padding: 20px 0px;
	text-align: center;
	border-bottom: 1px solid rgba(245, 245, 245, 1);
}
.intro .block .desc {
	line-height: 24px;
	font-size: 13px;
	padding: 15px 0;
}
</style>
