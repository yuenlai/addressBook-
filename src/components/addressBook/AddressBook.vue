<template>
  <div>
    <!--<ul class="addressee-list">
      <li class="addressee-list-content" v-for="(item, index) in this.members" :key="index">
        <div class="checked" @click="updateMemberState(item.selectState, index, item.orgCode, item.userId, item.orgId)">
          <img src="https://wtrjecom.oss-cn-shenzhen.aliyuncs.com/pages/tick.png" alt="" v-show="item.selectState">
        </div>
        <div class="addressee-info">
          <span>{{item.name}}</span>
          <p v-if="item.orgName">{{item.orgName}}</p>
        </div>
      </li>
    </ul>-->
    <ul ref="listuser" style="background: #fff">
      <li class="" v-for="(item, index) in this.members" :key="index">
        <p style="padding: 0.1rem 0 0.1rem 0.3rem;background: #f2f5fc;margin-top: 0.2rem" :class="{ 'active-p': index === 0}">{{item.index}}</p>
        <ul class="addressee-list">
          <li class="addressee-list-content" v-for="(user, i) in item.user" :key="i">
            <div class="checked" @click="updateMemberState(user.selectState, user.theIndex, user.orgCode, user.userId, user.orgId, user.studentUserId)">
              <img src="https://wtrjecom.oss-cn-shenzhen.aliyuncs.com/pages/tick.png" alt="" v-show="user.selectState">
            </div>
            <div class="addressee-info">
              <span>{{user.name}}</span>
              <p v-if="user.orgName">{{user.orgName}}</p>
            </div>
          </li>
        </ul>
      </li>
    </ul>
    <div class="category-list" v-if="rightLetterIndex.length>0" ref="listIndex">
      <div>
        <div v-for="(categ, index) in rightLetterIndex" :key="index" class="category-list-item">
          <a @click="setScroll" :class="{ 'active': index == 0}">{{categ}}</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {sortPY} from './js/pinyin.js'
export default {
  name: 'AddressBook',
  props: {
    member: {
      type: Array
    }
  },
  data () {
    return {
      rightLetterIndex: []
    }
  },
  computed: {
    members () {
      // eslint-disable-next-line
      let value = sortPY(this.member)
      // eslint-disable-next-line
      this.rightLetterIndex = value.letterArr
      return value.result
    }
  },
  mounted: function () {
    this.setListIndexPos()
    this.setScrollEvent()
  },
  methods: {
    /**
     *勾选事件
     */
    updateMemberState (state, index, orgCode, userId, orgId, studentUserId) {
      this.$emit('click', state, index, orgCode, userId, orgId, studentUserId)
    },
    /**
     *设置通讯录右侧快速导航条样式
     */
    setListIndexPos: function () {
      // 1、ref 加在普通的元素上，用this.ref.name 获取到的是dom元素
      // 2、ref 加在子组件上，用this.ref.name 获取到的是组件实例，可以使用组件的所有方法。
      // 3、如何利用 v-for 和 ref 获取一组数组或者dom 节点
      var iH = this.$refs.listIndex.offsetHeight
      this.$refs.listIndex.style.marginTop = -iH / 2 + 'px'
    },
    /**
     * 设置页面滚动
     * @param ev
     * @returns {*}
     */
    setScroll: function (ev) {
      this.setNavClass(ev.target)
      var ap = this.$refs.listuser.getElementsByTagName('p')
      for (var i = 0; i < ap.length; i++) {
        if (ap[i].innerHTML === ev.target.innerHTML) {
          document.body.scrollTop = ap[i].offsetTop
          document.documentElement.scrollTop = ap[i].offsetTop
          window.scrollTop = ap[i].offsetTop
          this.setLetterClass(ap[i])
        }
      }
    },
    /**
     * 设置导航类名
     * @param node
     */
    setNavClass (node) {
      var parent = node.parentNode.parentNode.childNodes
      for (let i = 0; i < parent.length; i++) {
        parent[i].childNodes[0].classList.remove('active')
      }
      node.classList.add('active')
    },
    /**
     * 设置通讯录文字类名
     * @param node
     */
    setLetterClass (node) {
      let activeP = document.getElementsByClassName('active-p')
      for (let i = 0; i < activeP.length; i++) {
        activeP[i].classList.remove('active-p')
      }
      node.classList.add('active-p')
    },
    /**
     * 设置滚动监听
     */
    setScrollEvent () {
      let self = this
      window.onscroll = function () {
        if (self.members && self.members.length) {
          let p = self.$refs.listuser.getElementsByTagName('p')
          for (let i = 0; i < p.length; i++) {
            if (p[i].offsetTop > document.documentElement.scrollTop - 15 && p[i].offsetTop < document.documentElement.scrollTop + 15) {
              let a = self.$refs.listIndex.getElementsByTagName('a')
              for (let j = 0; j < a.length; j++) {
                if (p[i].innerHTML === a[j].innerHTML) {
                  self.setNavClass(a[j])
                }
              }
              self.setLetterClass(p[i])
            }
          }
        }
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
  .addressee-list
    padding-left .3rem
  .addressee-list-content
    display flex
    align-items center
    padding-right .3rem
    border-bottom .01rem solid #e3e3e3
    height 1rem
    flex-wrap nowrap
    .checked
      width .5rem
      height .5rem
      border-radius 50%
      border .01rem solid #333333
      box-sizing border-box
      position relative
      img
        height .5rem
        width .5rem
        position absolute
        z-index 1
        left -.01rem
        top -.01rem
    .addressee-info
      padding-left .3rem
      flex-grow 1
      span
        font-size .32rem
        color #333333
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
      p
        font-size .24rem
        color #999999
        margin-top .1rem
  .category-list {
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 15px;
    bottom: 1.4rem;
    right: 1px;
    border-radius: 5px;
    height: calc(100% - 150px);
    background: #fff;
    z-index: 100;
  }

  .category-list .category-list-item {
    width: 12px;
    line-height: 20px;
    text-align: center;
  }

  .category-list a {
    color: #666;
    font-size: 12px;
  }
  .category-list a.active {
    color: #25a4bb;
  }
  .active-p{
    color: #25a4bb;
  }
</style>
