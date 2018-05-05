import Vue from 'vue'
import App from './App'
import mpvueToastRegistry from 'mptoast/registry'

mpvueToastRegistry(Vue)

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [
      '^pages/index/main',
      'pages/login/main'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '首页',
      navigationBarTextStyle: 'black',
      enablePullDownRefresh: false
    },
    tabBar: {
      color: '#b2b2b2',
      selectedColor: '#2fcc85',
      backgroundColor: '#ffffff',
      list: [
        {
          pagePath: 'pages/index/main',
          text: '快速打卡',
          iconPath: '/static/img/tabBar/check_unselected.png',
          selectedIconPath: '/static/img/tabBar/check_selected.png'
        },
        {
          pagePath: 'pages/index/main',
          text: '任务管理',
          iconPath: '/static/img/tabBar/task_unselected.png',
          selectedIconPath: '/static/img/tabBar/task_selected.png'
        },
        {
          pagePath: 'pages/index/main',
          text: '新建打卡',
          iconPath: '/static/img/tabBar/add_unselected.png',
          selectedIconPath: '/static/img/tabBar/add_selected.png'
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
