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
async function networkRequest (method = 'get', url = '', params = {}) {
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
    title: '加载中，请稍后'
  })
  let result=await new Promise((resolve, reject) => {
    wx.request({
      method: method,
      header: {
        'Content-Type': contentType,
        'Cookie': userinfo.__getUserinfo__
      },
      url: globalData.apiUrl+url,
      data: params,
      success: function (res) {
        wx.hideNavigationBarLoading()
        wx.hideLoading()
        wx.showToast({
          title: res.errMsg
        })
        resolve(res)
      },
      fail: function (res) {
        wx.hideNavigationBarLoading()
        wx.hideLoading()
        wx.showToast({
          title: res.errMsg
        })
        reject(res)
      },
      complete:function(res){
        console.log(res)
      }
    })
  })
  return result
}
/**
 * isLogin:判断用户是否登陆，如果没有登陆，则进入登陆页
 */
function isLogin(){
  // 调用API从本地缓存中获取数据,获取用户信息,用来判断用户是否登陆
  const uid = wx.getStorageSync('uid')
  if(uid){
    userinfo.uid=uid
  }else{
    goLogin('您还没有登录，请登陆')
  }
}
function goLogin(msg){
  //去登陆之前移出所有相关信息
  wx.removeStorageSync('uid')
  delete userinfo.uid
  let url='/pages/login/main'+(msg?'?msg='+encodeURIComponent(msg):'')
  wx.navigateTo({
    url: url
  })
}
let userinfo={}//小程序页面操作（读取）的用户信息对象
Object.defineProperty(userinfo,'__getUserinfo__',{
  enumerable: false,
  get:function(){
    let cookie=''
    for(let key in userinfo){
      cookie+=key+'='+userinfo[key]+';'
    }
    return cookie
  }
})
let common = {
  networkRequest,
  isLogin,
  goLogin,
  userinfo
}
export default common
