<template>
  <!-- 新建任务 -->
  <div class="container">
    <Carouel :text="motto" :imgUrls="imgUrls"></Carouel>
    <div class="flex">
        <!-- 上家 -->
        <span class="box">上家</span>
        <input class="input box" maxlength="100" placeholder="请输入上家" />
        <span class="key">全称</span>
    </div>
    <div class="flex">
        <!-- 下家 -->
        <span class="box">下家</span>
        <input class="input box" maxlength="100" placeholder="请输入下家" />
        <span class="key">全称</span>
    </div>
    <div class="flex">
        <!-- 抵押情况 -->
        <span class="box">抵押情况</span>
        <input class="input box" maxlength="100" placeholder="抵押情况" />
        <span class="key" style="visibility:hidden;">情况</span>
    </div>
    <div class="flex">
        <!-- 一抵/二抵余额 -->
        <span class="box">一抵余额</span>
        <input text="tel" class="input box" type="digit" maxlength="100" placeholder="请输入一抵/二抵余额" />
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
      imgUrls:[
        'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
      ]
    }
  },
  methods: {
    showToast (title) {
      title&&this.$mptoast(title)
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

</style>