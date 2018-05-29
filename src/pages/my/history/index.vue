<template>
  <!-- 个人中心 -->
  <div class="container">
    <div class="flex" v-for="item in data" :key="item">
        <!-- 历史报单 -->
        <span class="box">{{item.createTime}}</span>
        <span class="box">{{item.auditStatus==0?'待审核':item.auditStatus==1?'审核成功':"审核失败"}}</span>
        <span class="box">{{item.type==1?'房抵':"垫资"}}</span>
    </div>
    <p :class="{hide:!!data.length}">已经没有啦！~</p>
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
      title: '历史报单'
    })
  },
  onShow(){//监听页面显示
    this.$common.isLogin();
    this.historyList();
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
      data:[] //历史报单数据
    }
  },
  methods: {
    showToast (title) {
      title&&this.$mptoast(title)
    },
    historyList(){
      this.$common.networkRequest('post','/about/history',{}).then((v) => {//登录成功，保存信息，，并跳转之前那个页面
        let {data}=v;
        if(data.ret==1){
          this.data=data.data;
        }
      }).catch((v) => {
          console.log(v);
      })
    }
  }
}
</script>
<style>
.flex .box:nth-child(2){
  text-align: center;
}
.flex .box:last-child{
  text-align: right;
}
.container>p{
  text-align: center;
  padding: 20rpx;
}
</style>