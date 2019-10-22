import WXrequest from './WXrequest'

export default {
  get: function (obj) {
    return WXrequest.request(obj.url, 'GET', obj.data)
  },
  post: function (obj) {
    return WXrequest.request(obj.url, 'POST', obj.data)
  },
  put: function (obj) {
    return WXrequest.request(obj.url, 'PUT', obj.data)
  },
  del: function (obj) {
    return WXrequest.request(obj.url, 'DELETE', obj.data)
  },
  test: function () {
    // 测试接口
    let obj = {
      url: '/mms/country/queryValidZoneListForMallHome',
      data: {
        'categoryType': 'SaleGoodsType@sim',
        'streamNo': 'web_bss153570682909641893',
        'reqSource': 'MALL_H5',
        'appid': 'string',
        'timestamp': 1535706829096,
        'sign': 'string'
      }
    }
    return this.post(obj)
  }
}
