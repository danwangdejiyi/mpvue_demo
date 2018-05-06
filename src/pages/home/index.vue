<template>
  <!-- 新建任务 -->
  <div class="container">
    <div class="flex arrow_right" @click="showToast">
        <!-- 用户姓名 -->
        <span class="key">用户姓名</span>
        <input bindinput="bindKeyInput" class="input box" maxlength="100" placeholder="请输入用户姓名" />
    </div>
    <div class="flex arrow_right">
        <!-- 电话号码 -->
        <span class="key">电话号码</span>
        <input bindinput="bindKeyInput" text="tel" class="input box" maxlength="100" placeholder="请输入电话号码" />
    </div>
    <div class="flex arrow_right">       
        <!-- 其他 -->
        <span class="key">其他</span>
        <input bindinput="bindKeyInput" class="input box" maxlength="100" placeholder="请输入其他" />
    </div>
    <!-- 上传图片 -->
    <div class="flex uploadImg mt20">
        <span>上传图片</span>
        <span class="add">
          <img src="/static/img/add.png" />
        </span>
    </div>
    <!-- 创建按钮 -->
    <div class="create">
        <button class="btn " bindtap="bindSubmit">button</button>
    </div>
    <!-- mptoast弹出框 -->
    <mptoast />
</div>
</template>

<script>
import mptoast from 'mptoast'
export default {
  components: {
    mptoast
  },
  onLoad () {//监听页面加载this.$root.$mp.query
    //console.log(this.$root)
  },
  onReady(){
    wx.setNavigationBarTitle({
      title: '首页'
    })
  },
  onShow () {//this.$root.$mp.appOptions
    this.$common.isLogin()
    //console.log('当小程序启动，或从后台进入前台显示')
    // console.log('this.$root.$mp.query获取小程序在 page onLoad 时候传递的 options')
    //console.log('this.$root.$mp.appOptions小程序在 app onLaunch/onShow 时候传递的 options')
  },
  beforeCreate () {
    //console.log('beforeCreate')
  },
  data () {
    return {}
  },
  methods: {
    showToast () {
      this.$mptoast('我是提示信息')
    }
  }
}
</script>
<style>
/*上传*/
.uploadImg{
  height: 200rpx;
  padding:20rpx;
  justify-content: flex-start;
  background: #fff;
}
.add {
  width: 200rpx;
  height: 100%;
  position: relative;
  background: #F6F6F6;
}
.add img{
  width: 72rpx;
  height: 72rpx;
  position: absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
}
</style>