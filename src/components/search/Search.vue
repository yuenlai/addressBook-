<template>
  <div class="search">
    <div class="content">
      <img src="https://wtrjecom.oss-cn-shenzhen.aliyuncs.com/pages/search.png" alt="">
      <form action="javascript:void(0);">
        <input type='search' :placeholder="place" v-on:keyup.enter="search"  v-model="seacherContent" ref="searchInput" />
      </form>
      <img src="https://wtrjecom.oss-cn-shenzhen.aliyuncs.com/pages/removeSearch.png" alt="" v-show="this.seacherContent" @click="removeSearch">
    </div>
    <div class="cancel" v-show="this.cancelNum === 1" @click="cancelSearch">取消</div>
  </div>
</template>

<script>
export default {
  name: 'CommonSearch',
  data () {
    return {
      seacherContent: '',
      cancelNum: 0
    }
  },
  props: {
    'place': {
      type: String,
      default: '请输入搜索内容'
    }
  },
  methods: {
    search () {
      if (this.seacherContent.trim()) {
        this.cancelNum = 1
      }
      this.$emit('search', this.seacherContent)
      this.$refs.searchInput.blur()
    },
    removeSearch () {
      this.seacherContent = ''
      this.$refs.searchInput.focus()
    },
    cancelSearch () {
      this.cancelNum = 0
      this.seacherContent = ''
      this.$emit('cancelSearch')
      this.$refs.searchInput.blur()
    }
  }
}
</script>

<style lang="stylus" scoped>
.search
  height .8rem
  margin .3rem
  display flex
  align-items center
  .content
    background-color #f0f0f0
    border-radius .1rem
    display flex
    align-items center
    flex-grow 1
    margin-right .1rem
    height .8rem
    img
      width .4rem
      height .4rem
      margin 0 .3rem
    form
      flex-grow 1
    input
      border none
      outline none
      color #333333
      background-color #f0f0f0
      font-size .3rem
      letter-spacing .03rem
  .cancel
    font-size .3rem
    color #56d4ff
    width .8rem
    line-height .4rem
input[type=search]::-webkit-search-cancel-button
  -webkit-appearance: none;
</style>
