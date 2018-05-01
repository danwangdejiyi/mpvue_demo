<template>
  <div>
     <p @click="showToast">省略其他代码</p>
    <mptoast />
  </div>
</template>

<script>
import mptoast from 'mptoast'

export default {
  components: {
    mptoast
  },
  data () {
    console.log(this)
    return {}
  },
  methods: {
    showToast () {
      this.$mptoast('我是提示信息')
    }
  }
}
</script>