<template>
  <!-- 个人中心 -->
  <div class="container">
    <div class="contnet">
      <div class="flex" @click="toggleUserInfo" :class="{hide:isToggleUserInfo}">
        <img src="/static/img/center/touxiang.png" alt="浩业金服">
        <div class="box">
          <p>用户名</p>
          <p>浩业金服</p>
        </div>
      </div>
      <img src="/static/img/center/center.png" class="bg">
    </div>
    <div class="flex arrow_right mt20">
        <!-- 历史报单 -->
        <span class="key">历史报单</span>
        <a href="/pages/my/history/main" class="box"></a>
    </div>
    <!-- <div class="flex arrow_right mt20">
        关于
        <span class="key">关于</span>
        <a href="" class="box"></a>
    </div> -->
    <!-- <div class="flex arrow_right mt20">       
        使用说明
        <span class="key">使用说明</span>
        <a href="" class="box"></a>
    </div> -->
    <!-- mptoast弹出框 -->
    <mptoast />
    <!--用户信息详情-->
    <div class="userinfo" :class="{show:isToggleUserInfo}">
      <h6><img src="/static/img/icon/arrow_left_on.png" @click="toggleUserInfo">账号管理</h6>
      <div class="userDetail">
        <div class="flex">
          <p>姓名</p>
          <p class="box">浩业金服</p>
        </div>
      </div>
      <!-- 创建按钮 -->
      <div class="create">
          <button class="btn " @tap="logout">退出</button>
      </div>
    </div>
</div>
</template>

<script>
import mptoast from 'mptoast'
export default {
  components: {
    mptoast
  },
  beforeCreate(){//1
    
  },
  created(){
    
  },
  onLoad(){//监听页面加载
    wx.setNavigationBarTitle({
      title: '个人中心'
    })
  },
  onShow(){//监听页面显示
    this.$common.isLogin()
    //console.log('当小程序启动，或从后台进入前台显示')
    // console.log('this.$root.$mp.query获取小程序在 page onLoad 时候传递的 options')
    //console.log('this.$root.$mp.appOptions小程序在 app onLaunch/onShow 时候传递的 options')
  },
  onHide () {//监听页面隐藏
    
  },
  onReady(){//监听页面初次渲染完成

  },
  data () {
    return {
      isToggleUserInfo:false //是否显示用户信息详情
    }
  },
  methods: {
    showToast (title) {
      title&&this.$mptoast(title)
    },
    toggleUserInfo(){
      let {isToggleUserInfo} =this.$data
      if(!isToggleUserInfo){
        wx.hideTabBar();
      }else{
        wx.showTabBar();
      }
      this.$data.isToggleUserInfo=!isToggleUserInfo
    },
    logout(){//退出
      this.$common.goLogin()
    }
  }
}
</script>
<style>
/*个人中心页-head展示区域*/
.contnet{
  width: 100%;
  height:300rpx;
  padding-top:128rpx;
  box-sizing: border-box;
  position: relative;
}
.contnet .flex{
  background:transparent;
  height:auto;
  border: 0;
}
.contnet .box{
  background:url(/static/img/icon/ic_arrow_right_on.png) no-repeat right center;
  background-size:24rpx 44rpx;
}
.contnet img{
  width: 126rpx;
  height: 126rpx;
  border-radius: 50%;
}
.contnet .bg{
  position: absolute;
  top:0;
  right: 0;
  bottom: 0;
  left:0;
  width: 100%;
  height: 100%;
  border-radius: 0;
  z-index: -1;
}
.contnet p{
  padding-left:30rpx;
  color:#fff;
  font-size:34rpx;
  height:63rpx;
  line-height: 63rpx;
}
/*列表*/
.box{
  height:100%;
}
/*用户信息详情*/
.userinfo{
  display: none;
  position: fixed;
  top:0;
  right:0;
  bottom:0;
  left:0;
  width: 100%;
  height:100%;
  background:#f2f2f2;
  z-index:99;
}
.userinfo .flex,.userinfo h6{
  height: 100rpx;
  line-height: 100rpx;
  color:#333;
  font-size:28rpx;
  padding:0 24rpx;
}
.userinfo .box{
  text-align: right;
}
.userinfo h6 {
  position: relative;
  text-align: center;
}
.userinfo h6 img{
  position: absolute;
  left: 0;
  padding:16rpx 0;
  width: 68rpx;
  height:68rpx;
}
.userinfo p:first-child{
  color: #6c6c6c;
}
.userinfo .create{
  position:absolute;
  bottom:0;
  width:100%;
  box-sizing:border-box;

}
.userinfo .create button{
  color: #6C6C6C;
  border-radius: 4px;
  border: 1px solid #C3C3C3;
  background: #fff;
}
</style>