import Vue from 'vue'
import Router from 'vue-router'
import Test from './test'
import AddressBook from './addressBook'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/addressBook',
      meta: {
        title: '通讯录'
      }
    },
    ...Test,
    ...AddressBook
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

// 页面刷新时，重新赋值token
// if (localStorage.getItem('accessToken')) {
//   this.$store.commit('commitAccessToken', localStorage.getItem('accessToken'))
// }
//
// router.beforeEach((to, from, next) => {
//   if (to.matched.some(r => r.meta.requireAuth)) { // 这里的requireAuth为路由中定义的 meta:{requireAuth:true}，意思为：该路由添加该字段，表示进入该路由需要登陆的
//     if (this.$store.state.accessToken) {
//       next()
//     } else {
//       next({
//         path: '/login',
//         query: {redirect: to.fullPath}
//       })
//     }
//   } else {
//     next()
//   }
// })

export default router
