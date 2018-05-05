<script>
export default {
  onLaunch () {//只有App.vue才会执行初始化函数onLaunch，其他页面不会执行的
    console.log('小程序初始化')
  },
  created () {
    const uid = wx.getStorageSync('uid')
    if(uid){
      this.userinfo={
        uid:uid
      }
    }
  },
  onShow(){
    
  },
  data () {
    return {
      userinfo: null
    }
  }
}
</script>

<style>
*{
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
  box-sizing: border-box;
}
.container {
  width: 100%;
  height: 100%;
}
page{
  height: 100%;
  font-size: 32rpx;
  background-color: #f4f4f4;
  font-family: "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
  font-family: "Microsoft YaHei";
  color:#676767;
}
input{
  font-family: "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
}
.mt20{
  margin-top: 20rpx;
}
.arrow_right{
  background:url('../static/img/arrow-r-0.png') no-repeat 730rpx center;
  background-size: 9rpx 17rpx;
}
</style>
