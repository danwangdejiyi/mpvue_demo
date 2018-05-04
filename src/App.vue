<script>
import { post } from './utils/common.js'

console.log(post)

export default {
  created () {
    // 调用API从本地缓存中获取数据
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
</style>
