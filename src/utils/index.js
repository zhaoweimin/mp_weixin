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
export function addZero(num) {
	return num < 10 ? `0${num}` : num
}

// 获取个人风险等级信息
export function getPersonGrade(score) {
	console.log('aaaaaa=>,',score)
	let rs = {}
	if(score>0&&score<=45){
		rs = {
			grade: 'C1',
			type: '保守' ,
			proType: 'R1'
		}
	}else if(score>45&&score<=55){
		rs = {
			grade: 'C2',
			type: '稳健' ,
			proType: 'R1、R2'
		}
	}else if(score>55&&score<=65){
		rs = {
			grade: 'C3',
			type: '平衡' ,
			proType: 'R1、R2、R3'
		}
	}else if(score>65&&score<=75){
		rs = {
			grade: 'C4',
			type: '成长' ,
			proType: 'R1、R2、R3、R4'
		}
	}else if(score>75&&score<=100){
		rs = {
			grade: 'C5',
			type: '进取' ,
			proType: 'R1、R2、R3、R4、R5'
		}
	}
	return rs
}

// 获取机构风险等级信息
export function getInstitutionGrade(score) {
	let rs = {}
	if(score>0&&score<=25){
		rs = {
			grade: 'C1',
			type: '保守' ,
			proType: 'R1'
		}
	}else if(score>25&&score<=40){
		rs = {
			grade: 'C2',
			type: '稳健' ,
			proType: 'R1、R2'
		}
	}else if(score>40&&score<=60){
		rs = {
			grade: 'C3',
			type: '平衡' ,
			proType: 'R1、R2、R3'
		}
	}else if(score>60&&score<=70){
		rs = {
			grade: 'C4',
			type: '成长' ,
			proType: 'R1、R2、R3、R4'
		}
	}else if(score>70&&score<=100){
		rs = {
			grade: 'C5',
			type: '进取' ,
			proType: 'R1、R2、R3、R4、R5'
		}
	}
	return rs
}
const personScoreArr = [
	{'A':5,'B':7,'C':6,'D':2},
	{'A':3,'B':5,'C':6,'D':7},
	{'A':3,'B':6,'C':6,'D':7},
	{'A':2,'B':5,'C':6,'D':7,'E':1},
	{'A':4,'B':6,'C':7,'D':8,'E':9},
	{'A':2,'B':5,'C':6,'D':7},
	{'A':4,'B':3,'C':2,'D':1},
	{'A':3,'B':4,'C':5},
	{'A':3,'B':4,'C':5,'D':6},
	{'A':1,'B':3,'C':5,'D':6,'E':7},
	{'A':1,'B':5,'C':6,'D':7},
	{'A':3,'B':5,'C':6,'D':2},
	{'A':4,'B':5,'C':6,'D':7},
	{'A':3,'B':5,'C':6,'D':7},
	{'A':3,'B':5,'C':6,'D':7}
]
const institutionScoreArr = [
	{'A':4,'B':2,'C':3,'D':5},
	{'A':1,'B':3,'C':4,'D':6},
	{'A':2,'B':3,'C':4,'D':5},
	{'A':1,'B':2,'C':3,'D':4},
	{'A':3,'B':2,'C':1,'D':0,'E':5},
	{'A':1,'B':2,'C':3,'D':4},
	{'A':5,'B':5,'C':5,'D':0},
	{'A':1,'B':3,'C':5},
	{'A':1,'B':3,'C':5,'D':7},
	{'A':1,'B':2,'C':3,'D':4},
	{'A':1,'B':3,'C':4,'D':6},
	{'A':1,'B':3,'C':4,'D':5,'E':6},
	{'A':1,'B':2,'C':3,'D':4,'E':0},
	{'A':2,'B':4,'C':5},
	{'A':1,'B':3,'C':4,'D':6},
	{'A':2,'B':4,'C':5,'D':6,'E':3},
	{'A':1,'B':3,'C':4,'D':6},
	{'A':1,'B':2,'C':3,'D':5,'E':7},
	{'A':3,'B':5,'C':4,'D':1}
]
// 获取个人评测分
export function getPersonScore(answer) {
	let score = 0
	answer.forEach((item,index) => {
		score+=Number(personScoreArr[index][item])
	})
	return score
}
// 获取机构评测分
export function getInstitutionScore(answer) {
	let score = 0
	answer.forEach((item,index) => {
		score+=Number(institutionScoreArr[index][item])
	})
	return score
}
export default {
	formatNumber,
	formatTime,
	formatTime2,
	getPersonGrade,
	getInstitutionGrade
}
