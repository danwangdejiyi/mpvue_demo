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
        if(!value){
          this.showToast('请输入用户名')
        }
      }else{
        if(value.length<6||value.length>20){
          this.showToast('密码长度太短或太长')
        }
      }
    },
    bindSubmit(){
      let {username,password}=this.$data
      if(!username){
        this.showToast('请输入用户名')
        return false
      }
      if(!password){
        this.showToast('密码长度太短或太长')
        return false
      }
      this.$common.networkRequest('get','/api/login',{
        username,
        password
      }).then((v) => {//登录成功，保存信息，，并跳转之前那个页面
          console.log(v);
      }).catch((v) => {
          console.log(v);
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
.container{
  background:url('../../../static/img/background/loginBg.jpg') no-repeat center;
  background-size: cover;
}
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