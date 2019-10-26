/* eslint-disable standard/no-callback-literal */
// FEer_llx 表单校验
let Verify = {
  /**
   * @desc 检验身份证号码
   */
  IdentityCodeValid: (rule, value, callback) => {
    var telReg = !!value.match(
      /^(([1][1-5])|([2][1-3])|([3][1-7])|([4][1-6])|([5][0-4])|([6][1-5])|([7][1])|([8][1-2]))\d{4}(([1][9]\d{2})|([2]\d{3}))(([0][1-9])|([1][0-2]))(([0][1-9])|([1-2][0-9])|([3][0-1]))\d{3}[0-9xX]$/
    )
    if (!value || !value.replace(/\s+/g, '')) {
      callback('信息不能为空')
    } else if (telReg === false) {
      callback('请输入正确的身份证号')
    } else {
      callback()
    }
  },
  // 邮箱校验
  emailValid: (rule, value, callback) => {
    var telReg = !!value.match(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)
    if (!value || !value.replace(/\s+/g, '')) {
      callback('信息不能为空')
    } else if (telReg === false) {
      callback('请输入正确的邮箱地址')
    } else {
      callback()
    }
  },
  // 手机号码校验
  phoneValid: (rule, value, callback) => {
    // var telReg = !!value.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[0-9]|18[0-9]|14[57]|199)[0-9]{8}$/);
    var telReg = !!value.match(/^[0-9]{11}$/)
    // 如果手机号码不能通过验证
    if (!value || !value.replace(/\s+/g, '')) {
      callback('信息不能为空')
    } else if (telReg === false) {
      callback('请填写正确的11位数手机号码')
    } else {
      callback()
    }
  },
  // 姓名校验
  nameValid: (rule, value, callback) => {
    let nameReg = /^[\u4e00-\u9fa5]{2,}$/g.test(value)
    if (!value || !value.replace(/\s+/g, '')) {
      callback('信息不能为空')
    } else if (nameReg === false) {
      callback('请输入2个字符以上的纯中文的姓名')
    } else {
      callback()
    }
  },
  // 空校验
  emptyValid: (rule, value, callback) => {
    if (!value || !value.replace(/\s+/g, '')) {
      callback('信息不能为空')
    } else {
      callback()
    }
  },
  // 护照校验
  hzValid: (rule, value, callback) => {
    let hzReg = /^[a-zA-Z0-9]{3,21}$/.test(value)
    if (!value || !value.replace(/\s+/g, '')) {
      callback('信息不能为空')
    } else if (hzReg === false) {
      callback('请输入正确的护照格式，并且在3-21位字符以内')
    } else {
      callback()
    }
  },
  // 军官证校验
  jgValid: (rule, value, callback) => {
    let jgReg = /^[a-zA-Z0-9]{7,21}$/.test(value)
    if (!value || !value.replace(/\s+/g, '')) {
      callback('信息不能为空')
    } else if (jgReg === false) {
      callback('请输入正确的军官证格式，并且在7-21位字符以内')
    } else {
      callback()
    }
  },
  // 港澳台通行证和回乡证校验
  gatValid: (rule, value, callback) => {
    let gaReg = /^[a-zA-Z0-9]{5,21}$/.test(value)
    if (!value || !value.replace(/\s+/g, '')) {
      callback('信息不能为空')
    } else if (gaReg === false) {
      callback('请输入正确的港澳台回乡证或台胞证格式，并且在5-21位字符以内')
    } else {
      callback()
    }
  },

  // 只能输入纯数字
  numberValid: (rule, value, callback) => {
    let gaReg = /^[0-9]{1,}$/.test(value)
    if (!value || !value.replace(/\s+/g, '')) {
      callback('信息不能为空')
    } else if (gaReg === false) {
      callback('只能输入整数数字')
    } else {
      callback()
    }
  },
  // 只能输入纯数字包括小数
  numberFloatValid: (rule, value, callback) => {
    let gaReg = /^\d+(\.\d+)?$/.test(value)
    if (gaReg === false) {
      if (!value || !value.replace(/\s+/g, '')) {
        callback('信息不能为空')
      } else {
        callback('只能输入数字')
      }
    } else {
      callback()
    }
  },
  // 限制输入数字范围
  numberFloatLimitValid: (rule, value, callback, limit) => {
    let gaReg = /^\d+(\.\d+)?$/.test(value)
    if (gaReg === false) {
      if (!value || !value.replace(/\s+/g, '')) {
        callback('信息不能为空')
      } else {
        callback('只能输入数字')
      }
    } else {
      if (value > limit * 1) {
        callback(`超过金额范围${limit}，请重新输入`)
      } else {
        callback()
      }
    }
  },
  // 只能输入数字和英文字母
  num_azValid: (rule, value, callback) => {
    let gaReg = /^[a-zA-Z0-9]*$/.test(value)
    if (!value || !value.replace(/\s+/g, '')) {
      callback('信息不能为空')
    } else if (gaReg === false) {
      callback('只能输入包含大小写字母或者数字')
    } else {
      callback()
    }
  },
  CNValid: (rule, value, callback) => {
    let gaReg = /[\u4E00-\u9FA5\uF900-\uFA2D]/.test(value)
    if (!value || !value.replace(/\s+/g, '')) {
      callback('信息不能为空')
    } else if (gaReg) {
      callback('不能输入中文')
    } else {
      callback()
    }
  },
  // 特殊字符校验
  carNumberValid: (rule, value, callback) => {
    let gaReg = /[`_~!@#$^&*()=|{}':;',\\[\]<>/?~！@#￥……&*（）——|{}【】'；：""'。，、？\s]/g.test(value)
    if (!value || !value.replace(/\s+/g, '')) {
      callback('信息不能为空')
    } else if (gaReg) {
      callback('输入内容不能包含特殊字符')
    } else {
      callback()
    }
  }
}

export default Verify
