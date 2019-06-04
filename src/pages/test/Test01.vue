<template>
  <div class="wrapper">
    <common-header></common-header>

  </div>
</template>
<script>
import CommonHeader from '@/components/header/HeaderParent.vue'

export default {
  name: 'Mine',
  data () {
    return {
      userInfo: {},
      twoShow: false
    }
  },
  components: {
    CommonHeader
  }
}
</script>
<style lang="stylus" scoped>
  .wrapper
    margin: 0;
    background-color: #F2F2F2
    .mine-info
      background-color: #fff;
      width: 100%;
      height: 2.5rem;
      box-sizing:border-box;
      padding: 0 .3rem;
      display: flex;
      align-items: center;
      margin-bottom: .4rem
      .two-code
        float: right
        .pic
          width: .4rem
          height: .4rem
        img
          width: .6rem
          height: .6rem
          vertical-align middle
    .mine-info>img:first-child
      width: 1.28rem;
      height: 1.28rem;
      border: .01rem solid #ccc;
      border-radius: 50%
    li>span{
      font-size: .3rem;
      margin-left: .2rem;
      flex-grow: 1;
      line-height .6rem
    }
    li>img:last-child{
      width: .3rem;
      height: .3rem;
    }
    .mine-dynamic{
      position: relative;
      background-color: #fff;
      width: 100%;
      height: 1rem;
      box-sizing:border-box;
      padding: 0 .3rem;
      display: flex;
      align-items: center;
    }
    .kaoqing:before,.fuwu:before,.shezhi:before{
      content: "";
      position: absolute;
      left: .28rem;
      height: .01rem;
      border-top: .01rem solid #d9d9d9;
      color: #d9d9d9;
      top: 0;
      right: 0;
      transform: scaleY(.5);
    }
    .mine-dynamic>img:first-child{
      width: .4rem;
      height: .4rem;
    }
    .loading-img
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 999;
      display: none;
    .loading-img>img
      width: .5rem;
      height: .5rem;
      position: fixed;
      left: 50%;
      top: 50%;
      margin-right: .25rem;
      margin-bottom: .25rem
</style>
