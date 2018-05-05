<template>
  <!-- 登陆 -->
  <div class="container">
    <div class="flex">
        <!-- 用户名：手机号 -->
        <span class="key">电话号码</span>
        <input bindinput="bindKeyInput" type="tel" class="input box" maxlength="100" placeholder="请输入电话号码" />
    </div>
    <div class="flex" @click="showToast">
        <!-- 用户姓名 -->
        <span class="key">密码</span>
        <input bindinput="bindKeyInput" type="password" class="input box" maxlength="100" placeholder="请输入用户姓名" />
    </div>
    <!-- 创建按钮 -->
    <div class="create">
        <button class="btn" bindtap="bindSubmit">button</button>
    </div>
    <!-- mptoast弹出框 -->
    <mptoast />
</div>
</template>

<script>
import mptoast from 'mptoast'
import common from '../../utils/common.js'
export default {
  components: {
    mptoast
  },
  onLaunch () {
    console.log('初始化')
    console.log(this)
  },
  onShow () {
    // 验证用户是否登陆了
    console.log('当小程序启动，或从后台进入前台显示')
    console.log('this.$root.$mp.query获取小程序在 page onLoad 时候传递的 options')
    console.log('this.$root.$mp.appOptions小程序在 app onLaunch/onShow 时候传递的 options')
  },
  onHide () {
    console.log('当小程序从前台进入后台')
  },
  onLoad (option) {
    console.log(135, option)
    console.log('监听页面加载')
  },
  beforeCreate () {
  },
  data (options) {
    console.log(1, options)
    console.log(common)
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
.flex{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
	flex-wrap:wrap;
  flex-flow:row;
  box-sizing: border-box;
  width:100%;
  height:90rpx;
  padding: 0 30rpx;
  border-bottom: 1px solid #f0f0f0;
  background:url(/static/img/arrow-r-0.png) no-repeat 730rpx center;
  background-color: #fff;
  background-size: 9rpx 17rpx;
}
.flex .box{
  flex:1;
  flex-shrink: 1;
  flex-basis: 0;
  text-align:center;
}
.flex .input,.flex .value{
  text-align: right;
  overflow: hidden;
  color: #676767;
  height: 44rpx;
}
.flex span:first-child{
  width:150rpx;
  margin-right: 24rpx;
}
.create{
  margin-top: 80rpx;
  padding: 0 26rpx;
}
.create .btn{
  height: 80rpx;
  line-height: 80rpx;
  background-color: #2fcc85;
  color: #fff;
}
.create .btn-hover{
  background-color: #2caf6d;
  color: #aadfc4;
}
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