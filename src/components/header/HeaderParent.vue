<!--教师端头部，返回教师进入首页-->
<template>
  <div style="background-color: #fff;border-bottom: 1px solid #eee">
    <div class="head">
      <img src="https://wtrjecom.oss-cn-shenzhen.aliyuncs.com/pages/zhichengzhang/2019013015398419-go-back-img.png" alt="" @click="toBack" style="width: .19rem;height: .32rem">
      <p>{{title || headerText}}</p>
      <img src="https://wtrjecom.oss-cn-shenzhen.aliyuncs.com/pages/zhichengzhang/2019013015360846-to-home-icon.png" alt="" @click="toIndex" style="width: .43rem;height: .44rem">
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonHeader',
  props: ['title', 'goBack'],
  data () {
    return {
      headerText: ''
    }
  },
  methods: {
    toIndex () {
      this.$router.push('/teacher/home')
      console.log('index')
    },
    toBack () {
      if (this.goBack) {
        this.$emit('goBack')
      } else {
        this.$router.go(-1)
      }
    }
  },
  mounted () {
    this.headerText = this.$route.meta.headerText
  }
}
</script>

<style scoped lang="stylus">
.head
  display flex
  align-items center
  justify-content space-between
  width 100%
  height .8rem
  box-sizing border-box
  padding 0 .3rem
  p
    font-size .3rem
    color #333333
    white-space nowrap
  font-weight bold
</style>
