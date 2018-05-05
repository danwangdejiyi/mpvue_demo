/**
 * 全局方法
 * networkRequest:网络请求方法
 */
// 导入全局数据 globalData.js
import globalData from './globalData'

/**
 * @param {string} method 请求方式：get或者post，默认get,非get或者post则默认为get方式
 * @param {string} url api地址，默认''
 * @param {object} params 参数，默认{}
 */
function networkRequest (method = 'get', url = '', params = {}) {
  method = method.toLowerCase()
  let contentType = 'application/x-www-form-urlencoded'
  switch (method) {
    case 'post':contentType = 'application/json'
      break
    default:
      method = 'get'
  }
  wx.showNavigationBarLoading() // 设置在导航条上显示Loading加载状态
  wx.showLoading({
    title: '加载中'
  })
  return new Promise((resolve, reject) => {
    wx.request({
      method: method,
      header: {
        'Content-Type': contentType,
        'devicetype': '3',
        'Cookie': 'PPU'
      },
      url: globalData.domain,
      data: params,
      success: function (result) {
        wx.hideNavigationBarLoading()
        wx.hideLoading()
        wx.showToast({
          title: result.msg
        })
        resolve(result)
      },
      fail: function (result) {
        reject(result)
      }
    })
  })
}
let common = {
  networkRequest
}

export default common
