<template>
  <!-- 新建任务 -->
  <div class="container">
    <Carouel :text="motto" :imgUrls="imgUrls"></Carouel>
    <div class="flex">
        <!-- 上家 -->
        <span class="box">上家</span>
        <input class="input box" maxlength="100" placeholder="请输入上家"  :value="perHome" data-title="请输入上家" id="perHome" @blur="verification"/>
        <span class="key">全称</span>
    </div>
    <div class="flex">
        <!-- 下家 -->
        <span class="box">下家</span>
        <input class="input box" maxlength="100" placeholder="请输入下家" :value="nextHome" data-title="请输入下家" id="nextHome" @blur="verification"/>
        <span class="key">全称</span>
    </div>
    <div class="flex">
        <!-- 垫资情况 -->
        <span class="box">垫资情况<i>*</i></span>
        <input class="input box" maxlength="100" placeholder="请输入垫资情况" :value="situation" data-title="请输入垫资情况" id="situation" @blur="verification"/>
        <span class="key" style="visibility:hidden;">情况</span>
    </div>
    <div class="flex">
        <!-- 一抵/二抵余额 -->
        <span class="box">余额（如有）</span>
        <input text="tel" class="input box" type="digit" maxlength="100" placeholder="请输入一抵/二抵余额" :value="balance" data-title="一抵/二抵余额未输入或输入错误" id="balance" @blur="verification"/>
        <span class="key">万元</span>
    </div>
    <div class="flex">       
        <!-- 本次拟借款金额 -->
        <span class="box">本次拟借款金额<i>*</i></span>
        <input  class="input box" type="digit" maxlength="100" placeholder="请输入借款金额" :value="borrowMoney" data-title="借款金额未输入或输入错误" id="borrowMoney" @blur="verification"/>
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
      ],
      perHome:null ,//上家
      nextHome:null,//下家
      situation:null,//垫资情况
      balance:null,//一，二抵
      borrowMoney:null,//收款金额
      imgData:[]// 上传图片的数量
    }
  },
  methods: {
    showToast (title) {
      title&&this.$mptoast(title)
    },
    chooseImage(){
      upload(this)
    },
    verification:function(e){
      let {id,value,dataset:{title}}=e.target;
      let isEmpty=true;//默认为空
      if(id==='mortgage'||id==="perHome"||id==='nextHome'||id==="situation"){//抵押权，文字验证
        isEmpty=!value;
      }else{//其他，均关于金额
        isEmpty=value?isNaN(value):true;//value有值时，验证是否为数字；为空是，直接为false
      }
      if(isEmpty){//isEmpty为空提示
        this.showToast(title);
        return false;
      }
      this[id]=value;
    },
    bindSubmit(){
      //将 房抵信息提交上去
      let {perHome,nextHome,situation,balance,borrowMoney,imgData}=this;
      if(!situation){
        this.showToast('请输入垫资情况');
        return false;
      }
      if(!borrowMoney||isNaN(borrowMoney)){
        this.showToast('借款金额未输入或输入错误');
        return false;
      }
      //提交
      this.$common.networkRequest('post','/advance/insert',{
        perHome,
        nextHome,
        situation,
        firstBalance:balance,
        borrowMoney,
        urls:imgData
      }).then(function (result) {
          console.log('成功：' , result);
      }).catch(function (reason) {
          console.log('失败：' , reason);
      });
    }
  }
}
</script>
<style>
.flex i{
  display: inline;
  color:#2fcc85;
  vertical-align:middle;
}
</style>