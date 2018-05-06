<script>
import common from './utils/common'
export default {
  onLaunch () {//只有App.vue才会执行初始化函数onLaunch，其他页面不会执行的
    console.log('小程序初始化')
  },
  created () {
    common.isLogin()
  },
  onShow(){//当小程序启动，或从后台进入前台显示
    console.log('show')
  },
  onHide(){//当小程序从前台进入后台
    console.log('hide')
  },
  data () {
    return {
      userinfo: null
    }
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
</style>
