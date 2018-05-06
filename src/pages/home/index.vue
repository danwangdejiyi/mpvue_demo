<template>
  <!-- 新建任务 -->
  <div class="container">
    <Carouel :text="motto" :imgUrls="imgUrls"></Carouel>
    <div class="flex">
        <!-- 抵押情况 -->
        <span class="key">抵押情况</span>
        <div class="flex box type" @click="changeType">
          <p class="box" :class="{active:1==type}" data-id="1">一抵</p>
          <p class="box" :class="{active:2==type}" data-id='2'>二抵</p>
        </div>
    </div>
    <div class="flex">
        <!-- 抵押权 -->
        <span class="box">抵押权</span>
        <input class="input box" maxlength="100" placeholder="请输入抵押权" />
        <span class="key">全称</span>
    </div>
    <div class="flex">
        <!-- 一抵余额 -->
        <span class="box">一抵余额（如有）</span>
        <input text="tel" class="input box" type="digit" maxlength="100" placeholder="请输入一抵余额" />
        <span class="key">万元</span>
    </div>
    <div class="flex">
        <!-- 二抵余额 -->
        <span class="box">二抵余额（如有）</span>
        <input text="tel" class="input box" type="digit" maxlength="100" placeholder="请输入二抵余额" />
        <span class="key">万元</span>
    </div>
    <div class="flex">       
        <!-- 本次拟借款金额 -->
        <span class="box">本次拟借款金额</span>
        <input  class="input box" type="digit" maxlength="100" placeholder="请输入借款金额" />
        <span class="key">万元</span>
    </div>
    <!-- 上传图片 -->
    <div class="flex uploadImg mt20">
        <span>上传房本</span>
        <span class="add" @click='chooseImage'>
          <img src="/static/img/add.png" />
        </span>
    </div>
    <!-- 创建按钮 -->
    <div class="create">
        <button class="btn " @tap="bindSubmit">提交</button>
    </div>
    <!-- mptoast弹出框 -->
    <mptoast />
  </div>
</template>

<script>
import mptoast from 'mptoast'
import Carouel from '@/components/Carousel'
import upload from '@/utils/upload'

export default {
  components: {
    mptoast,
    Carouel
  },
  beforeCreate(){//1
    
  },
  created(){
    
  },
  onLoad(){//监听页面加载
    wx.setNavigationBarTitle({
      title: '浩业金服'
    })
    
  },
  onShow(){//监听页面显示
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
      imgUrls:[
        'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
      ],
      type:1 //一抵（1）+二抵（2），默认一抵
    }
  },
  methods: {
    showToast (title) {
      title&&this.$mptoast(title)
    },
    changeType(e){
      let {dataset:{id}}=e.target
      if(id!=this.$data.type){
        this.$data.type=id
      }
    },
    chooseImage(){
      upload()
    },
    bindSubmit(){
      //将 房抵信息提交上去
    }
  }
}
</script>
<style>

.type{
  height: 60rpx;
  line-height: 60rpx;
  position: relative;
  padding:0;
  margin:0 30rpx;
  overflow:hidden;
  border:2rpx solid #2fcc85;
}
.type::after{
  content:'';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 2rpx;
  height: 90rpx;
  background: #2fcc85;
  transform: translate(-50%,-50%) skewX(-30deg);
}
.type .box{
  height: 100%;
  box-sizing:border-box;
  text-align: center;
}
.type .box.active{
  position: relative;
  background: #2fcc85;
  color:#fff;
  transform:skewX(-30deg);
}
.type .box::after{
  content:'';
  position: absolute;
  z-index: 9;
  top:0;
  width: 36rpx;
  height: 60rpx;
  background: #fff;
  transform:skewx(30deg);
}
.type .box.active::after{
  content:'';
  background: #2fcc85;
}
.type .box:first-child::after{
  content:'';
  left: -18rpx;
}
.type .box:last-child::after{
  content:'';
  right: -18rpx;
}
</style>