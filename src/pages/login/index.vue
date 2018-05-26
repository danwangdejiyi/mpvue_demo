<template>
  <!-- 登陆 -->
  <div class="container" v-bind:class="{ active: transition }">
    <div class="flex logo" >
        <!-- 公司logo -->
        <img src="/static/img/logo/icon-logo.png" />
    </div>
    <div class="content">
      <div class="flex">
          <!-- 用户名 -->
          <input v-on:input="bindKeyInput" v-on:blur="bindBlur" id="username" v-model="username"  type="email" class="input box" maxlength="100" placeholder="电子邮箱" />
      </div>
      <div class="flex">
          <!-- 密码 -->
          <input v-on:input="bindKeyInput" v-on:blur="bindBlur" id="password" type="password" class="input box" maxlength="100" placeholder="请输入密码" />
      </div>
    </div>
    <!-- 创建按钮 -->
    <div class="create">
        <button class="btn" @click="bindSubmit">登录</button>
    </div>
    <!-- mptoast弹出框 -->
    <mptoast />
</div>
</template>

<script>
import mptoast from 'mptoast'
import {hexMD5} from '@/utils/md5.js'
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
      title: '登陆'
    })
  },
  onShow(){//监听页面显示
    
  },
  onHide () {//监听页面隐藏
    
  },
  onReady(){//监听页面初次渲染完成
    this.$data.transition=true//开启动画
  },
  data () {
    return {
      transition:false,//动画
      username:'',//用户名
      password:''//密码
    }
  },
  methods: {
    showToast (title) {
      title&&this.$mptoast(title)
    },
    bindKeyInput(e){
      let {target:{id,value}}=e;
      if(id==='username'){
        value=value.trim()
        this.$data.username=value
      }else{
        this.$data.password=value
      }
    },
    bindBlur(e){
      let {target:{id,value}}=e;
      if(id==='username'){
        if(!/^(\w+\.?)*\w+@(?:\w+\.)\w+$/.test(value)){
          this.showToast('请输入邮箱')
        }
      }else{
        if(value.length<6||value.length>20){
          this.showToast('密码长度太短或太长')
        }
      }
    },
    bindSubmit(){
      let {username,password}=this.$data
      if(!/^(\w+\.?)*\w+@(?:\w+\.)\w+$/.test(username)){
        this.showToast('请输入用户名')
        return false
      }
      if(!password){
        this.showToast('密码长度太短或太长')
        return false
      }
      //md5加密
      this.$common.networkRequest('get','/login/fast',{
        email:username,
        password:hexMD5(hexMD5(password))
      }).then((v) => {//登录成功，保存信息，，并跳转之前那个页面
          let {data} =v;
          if(data.ret==1&&data.data){
            this.$common.userinfo.uid=data.data;
            wx.setStorageSync('uid',data.data);
            wx.switchTab({
              url: '/pages/home/main'
            })
          }else{
            this.showToast(data.msg);
          }
      }).catch((v) => {
          this.showToast(v.msg);
      })
    }
  }
}
</script>
<style>
page{
  background:transparent;
  overflow:hidden;
}
/*
.container{
  background:url('https://www.haoyejinfu.com/static/static/img/background/loginBg.jpg') no-repeat center;
  background-size: cover;
}*/
.container>.flex{
  border:0;
}
.content{
  padding:0 50rpx;
}
.flex{
  padding:0;
  background:transparent;
}
.logo{
  justify-content:center;
  height: auto; 
  padding-bottom:72rpx;
}
.logo img{
  width: 128rpx;
  height: 128rpx;
}
.flex input{
  text-align: left;
}
/*动画*/
.logo,.content,.create{
  position: absolute;
  width: 100%;
  box-sizing: border-box;
  top:100%;
}
.content{
  transform: rotateX(90deg);
}
.active .logo{
  top:0;
  transition:top 500ms ease; 
}
.active .content{
  top:200rpx;
  transform: rotateX(0);
  transition-delay: 200ms;
  transition:all 1s ease-out	; 
}
.active .create{
  top:380rpx;
  transition-delay: 400s;
  transition:top 1s ease-in; 
}
</style>