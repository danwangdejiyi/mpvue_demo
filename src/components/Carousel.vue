<template>
  <div class="carousel">
    <swiper :indicator-dots="indicatorDots"
      :autoplay="autoplay" :interval="interval" :duration="duration">
      <block v-for="item in imgUrls" :key="item">
        <swiper-item>
          <image :src="item" class="slide-image"/>
        </swiper-item>
      </block>
    </swiper>
    <!-- <button @tap="changeIndicatorDots"> indicator-dots </button>
    <button @tap="changeAutoplay"> autoplay </button>
    <slider @change="intervalChange" show-value min="500" max="2000"/> interval
    <slider @change="durationChange" show-value min="1000" max="10000"/> duration -->
    <!-- <div>
      <p class="carousel">
        {{text}}
      </p>
    </div> -->
  </div>
</template>

<script>
export default {
  props: ['imgUrls'],
  data(){
    //设计一张默认图片
    return {
      imgUrls: this.imgUrls,
      indicatorDots: false,//是否显示面板指示点
      autoplay: true,//是否自动播放
      interval: 5000,//自动切换时间间隔
      duration: 1000 //滑动动画时长
    }
  },
  methods:{
    // changeIndicatorDots: function(e) {
    //   this.indicatorDots=!this.indicatorDots
    // },
    // changeAutoplay: function(e) {
    //   this.autoplay=!this.autoplay
    // },
    // intervalChange: function(e) {
    //   this.interval=e.target.value
    // },
    // durationChange: function(e) {
    //   this.duration=e.target.value
    // }
  }
}
</script>

<style>
.carousel {
  padding: 0;
}
.carousel image{
  width: 100%;
  height: 300rpx;
}
</style>