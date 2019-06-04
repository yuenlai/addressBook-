<template>
  <div class="hint-info">
    <div class="hint-info-content">
      <p>{{hintInfo}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonHintInfo',
  props: ['hintInfo']
}
</script>

<style scoped lang="stylus">
.hint-info
  position fixed
  height 100%
  width 100%
  top 0
  left 0
  z-index 999
  .hint-info-content
    position fixed
    top 45%
    left 22%
    width 48%
    height auto
    padding .4rem 4%
    text-align center
    background-color rgba(0,0,0,.4)
    z-index 99
    border-radius .1rem
    p
      font-size .32rem
      color #ffffff
      display inline-block
      line-height 1.2
</style>
