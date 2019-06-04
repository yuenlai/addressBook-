<template>
  <div class="wrapper">
    <div class="dialog">
      <div class="dialog-content">
        <slot></slot>
      </div>
      <div class="buttons">
        <button @click="handleOkClick">{{confirm}}</button>
        <button @click="handleCancelClick">{{cancle}}</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CommonDialog',
  props: {
    content: Array,
    confirm: {
      type: String,
      default: '继续'
    },
    cancle: {
      type: String,
      default: '取消'
    }
  },
  methods: {
    handleOkClick () {
      this.$emit('click', true)
    },
    handleCancelClick () {
      this.$emit('click', false)
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
    .dialog
      position: relative;
      width: 80%;
      // top: 50%;
      // margin-top: -2rem;
      // left: 10%;
      background-color: #FFFFFF;
      border-radius: .1rem;
      .dialog-content
        max-height: 60vh
        overflow-y auto
    .buttons
      /*position: fixed;*/
      bottom: 0;
      padding: .2rem .3rem;
      display flex
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
