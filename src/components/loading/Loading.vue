<template>
  <div class="loading">
    <div class="loading-content">
      <img src="https://wtrjecom.oss-cn-shenzhen.aliyuncs.com/pages/loading.gif" alt="">
      <p>加载中...</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonLoading'
}
</script>

<style scoped lang="stylus">
.loading
  position fixed
  top 0
  left 0
  width 100%
  height 100%
  z-index 9999
.loading-content
  width 2.4rem
  height 2.4rem
  background-color rgba(0,0,0, .4)
  position fixed
  top 50%
  left 50%
  margin-top -1.2rem
  margin-left -1.2rem
  border-radius .1rem
  text-align center
  z-index 9999
.loading-content>img
  width: .8rem
  height auto
  margin-top .5rem
.loading-content>p
  font-size .32rem
  color #fff
  margin-top .36rem
</style>
