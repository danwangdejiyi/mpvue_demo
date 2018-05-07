<script>
export default {
  onLaunch () {//只有App.vue才会执行初始化函数onLaunch，其他页面不会执行的
    console.log('小程序初始化')
  },
  beforeCreate(){//1
    
  },
  created () {//2
    console.log('create')
    //测试用户：模拟登陆
    /*
      需要保存用户信息：姓名，昵称，uid等
      保存到this.$common.userinfo和setStorage中去
    */
    this.$common.userinfo.uid='test'
    wx.setStorageSync('uid','test')
  },
  onShow(){//当小程序启动，或从后台进入前台显示
    console.log('show')
    this.$common.isLogin()  //全局监听小程序是否登陆
  },
  onHide(){//当小程序从前台进入后台
    console.log('hide')
  },
  data () {
    return {}
  }
}
</script>

<style>
/* 公共样式 */
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
  background-color: #f4f4f4;
  font:32rpx/1.5 "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
  color:#676767;
}
input{
  font:32rpx/1.5 "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
}
.mt20{
  margin-top: 20rpx;
}
.arrow_right{
  background:url('/static/img/icon/ic_arrow_right_on.png') no-repeat 700rpx center;
  background-size: 18rpx 33rpx;
}
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
  text-align:left;
}
.flex .input,.flex .value{
  text-align: left;
  overflow: hidden;
  color: #676767;
}
.flex span:first-child{
  width:auto;
  margin-right: 24rpx;
}
/*按钮*/
.create{
  margin:80rpx 0;
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
.show{
  display: block!important;
}
.hide{
  display: none!important;
}
</style>
