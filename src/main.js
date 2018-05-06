import Vue from 'vue'
import App from './App'
import mpvueToastRegistry from 'mptoast/registry'
import common from './utils/common.js'

mpvueToastRegistry(Vue)
Vue.prototype.$common = common

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [
      '^pages/home/main',
      // "pages/home/main",
      // "pages/index/main",
      // "pages/login/main",
      // "pages/my/main"
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      //navigationBarTitleText: '首页',
      navigationBarTextStyle: 'black',
      enablePullDownRefresh: false
    },
    tabBar: {
      color: '#b2b2b2',
      selectedColor: '#2fcc85',
      backgroundColor: '#ffffff',
      list: [
        {
          pagePath: 'pages/home/main',
          text: '房子',
          iconPath: '/static/img/tabBar/home_unselected.png',
          selectedIconPath: '/static/img/tabBar/home_selected.png'
        },
        {
          pagePath: 'pages/index/main',
          text: '浩业金服',
          iconPath: '/static/img/tabBar/index_unselected.png',
          selectedIconPath: '/static/img/tabBar/index_selected.png'
        },
        {
          pagePath: 'pages/my/main',
          text: '我的',
          iconPath: '/static/img/tabBar/my_unselected.png',
          selectedIconPath: '/static/img/tabBar/my_selected.png'
        }
      ]
    },
    networkTimeout: {
      request: 10000,
      connectSocket: 10000,
      uploadFile: 10000,
      downloadFile: 10000
    },
    debug: false
  }
}
