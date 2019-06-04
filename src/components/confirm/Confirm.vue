<template>
  <div class="wrapper">
    <div class="confirm">
      <div class="confirm-content">
        <slot></slot>
      </div>
      <div class="buttons">
        <button @click="handleOkClick">{{content}}</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CommonConfirm',
  props: {
    content: {
      type: String,
      default: '确定'
    }
  },
  methods: {
    handleOkClick () {
      this.$emit('click', true)
    }
  }
}
</script>
<style lang="stylus" scoped>
  .wrapper
    position: fixed;
    display: flex;
    justify-content center;
    align-items center;
    top: 0
    left: 0
    width: 100%
    height: 100%;
    background-color: rgba(0,0,0,.4);
    z-index: 999
    .confirm
      position: relative;
      width: 80%;
      background-color: #FFFFFF;
      border-radius: .1rem;
      .confirm-content
        max-height: 60vh
        overflow-y auto
        box-sizing border-box
        padding: .2rem .2rem 0 .2rem
        line-height: .4rem
        font-size: .32rem
        letter-spacing 1px
    .buttons
      bottom: 0;
      padding: .2rem .3rem;
      display flex
      justify-content center
      align-items center
      margin: 0 auto
      width: 4.5rem
      button
        margin .2rem
        outline: none;
        border: none;
        background-color: #00a0e9;
        color: #FFFFFF;
        font-size: .38rem;
        text-align: center;
        border-radius: .1rem;
        height: .8rem;
        width: 100%;
</style>
