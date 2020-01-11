<template>
	<van-popup :show="show" position="bottom">
		<van-datetime-picker class="w100" type="datetime" :value="currentDate" @confirm="confirm" />
	</van-popup>
</template>

<script>
import { formatTime2 } from '@/utils/index'
export default {
	props: {
		show: {
			default: false
		}
	},
	data() {
		return {
			currentDate: new Date().getTime()
		}
	},
	methods: {
		confirm(event) {
			// this.currentDate = event.mp.detail
			this.$emit('getPickerValue', formatTime2(new Date(event.mp.detail)))
		}
	}
}
</script>
<style scoped></style>
