function formatNumber(n) {
	const str = n.toString()
	return str[1] ? str : `0${str}`
}

export function formatTime(date = new Date()) {
	const year = date.getFullYear()
	const month = addZero(date.getMonth() + 1)
	const day = addZero(date.getDate())

	const hour = addZero(date.getHours())
	const minute = addZero(date.getMinutes())
	const second = addZero(date.getSeconds())

	const t1 = [year, month, day].map(formatNumber).join('/')
	const t2 = [hour, minute, second].map(formatNumber).join(':')

	return `${t1} ${t2}`
}

export function formatTime2(date = new Date()) {
	const year = date.getFullYear()
	const month = addZero(date.getMonth() + 1)
	const day = addZero(date.getDate())

	const hour = addZero(date.getHours())
	const minute = addZero(date.getMinutes())
	const second = addZero(date.getSeconds())

	const t1 = [year, month, day].map(formatNumber).join('-')
	const t2 = [hour, minute, second].map(formatNumber).join(':')

	return `${t1} ${t2}`
}

export function getCurrentPageUrl() {}
export function getCurrentPageUrlWithArgs() {
	// let pages = getCurrentPages()
}

// 未满10补0
function addZero(num) {
	return num < 10 ? `0${num}` : num
}

export default {
	formatNumber,
	formatTime,
	formatTime2
}
