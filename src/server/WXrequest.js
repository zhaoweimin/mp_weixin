const config = {
	host: 'http://218.17.210.74:8011', // 接口域名 测试域名
	pageSize: 30,
	version: '' // 接口版本
}

function request(url, method, data, header = {}) {
	wx.showLoading({
		title: '加载中'
	})

	// 有index的查询接口才去加页码
	// isGetAll：true直接获取全部列表，不分页
	if (typeof data.index !== 'undefined') {
		data.pageIndex = data.index
		// data.pageSize = data.isGetAll ? 0 : config.pageSize
		// data.size = data.isGetAll ? 0 : config.pageSize
		data.pageSize = 0
		data.size = 0
	}
	return new Promise((resolve, reject) => {
		wx.request({
			url: config.host + config.version + url,
			method: method,
			data: data,
			header: {
				'content-type': 'application/json' // 默认值
			},
			success: function(res) {
				resolve(res.data)
				wx.hideLoading()
			},
			fail: function() {
				// reject(false)
				wx.hideLoading()
			}
		})
	})
}

export default {
	request
}
