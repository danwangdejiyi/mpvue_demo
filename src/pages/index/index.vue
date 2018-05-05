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
import common from '../../utils/common'
export default {
  components: {
    mptoast
  },
  onLoad (options) {//监听页面加载this.$root.$mp.query
    
  },
  onReady(){
    wx.setNavigationBarTitle({
      title: '首页'
    })
  },
  onShow () {//this.$root.$mp.appOptions
    // wx.redirectTo({
    //   url:'pages/login/main'
    // })
    //console.log('当小程序启动，或从后台进入前台显示')
    // console.log('this.$root.$mp.query获取小程序在 page onLoad 时候传递的 options')
    //console.log('this.$root.$mp.appOptions小程序在 app onLaunch/onShow 时候传递的 options')
  },
  onHide () {
    //console.log('当小程序从前台进入后台')
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
    },
    isLogin(){
      // 调用API从本地缓存中获取数据,获取用户信息,用来判断用户是否登陆
      const uid = wx.getStorageSync('uid')
      if(uid){
        this.userinfo={
          uid:uid
        }
      }else{
        wx.navigateTo({
          url: '/pages/login/main?msg='+encodeURIComponent('您还没有登录，请登陆')
        })
      }
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
  background-color: #fff;
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