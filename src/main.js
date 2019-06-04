// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import fastClick from 'fastclick'
import 'swiper/dist/css/swiper.css'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'styles/animate.min.css'
import 'babel-polyfill'
import VueWechatTitle from 'vue-wechat-title'
import Axios from 'axios'
import { DatetimePicker, Popup, Picker } from 'vant'

Vue.use(DatetimePicker)
Vue.use(Popup)
Vue.use(Picker)
Vue.use(VueWechatTitle)
Vue.config.productionTip = false
fastClick.attach(document.body)

Vue.directive('buried', {
  bind (el, binding) {
    el.addEventListener('click', () => {
      console.log('test')
      const data = binding.value
      store.commit('logMu', data)
    }, false)
  }
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  var u = navigator.userAgent
  var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
  // XXX: 修复iOS版微信HTML5 History兼容性问题
  if ((isiOS && to.path !== location.pathname && to.path.indexOf('scan') > 0) || (isiOS && to.path !== location.pathname && to.path.indexOf('preachingconference') > 0) ||
    (isiOS && to.path !== location.pathname && to.path.indexOf('ThCardPay') > 0) || (isiOS && to.path !== location.pathname && to.path.indexOf('ygjxpay') > 0) ||
    (isiOS && to.path !== location.pathname && to.path.indexOf('wryxpay') > 0) || (isiOS && to.path !== location.pathname && to.path.indexOf('thReapplyCard') > 0)) {
    // 此处不可使用location.replace
    location.assign(to.fullPath)
  } else {
    next()
  }
})
/* eslint-disable */
var end = null // 上一级页面结束时间
var start = null // 当前页面开始时间
router.afterEach((to, from, next) => {
  setTimeout(() => {
    var _mtac = {"senseHash":0,"autoReport":0};
    (function() {
      var mta = document.createElement("script");
      mta.src = "//pingjs.qq.com/h5/stats.js?v2.0.4";
      mta.setAttribute("name", "MTAH5");
      mta.setAttribute("sid", "500672131");
      mta.setAttribute("cid", "500672138");
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(mta, s);
    })();
  }, 0)
  start = new Date().getTime();
  let logData = store.getters.log;
  logData['fromPage'] = from.name; // 上一级页面
  logData['toPage'] = to.name; // 当前页面
  logData['startTime'] = start;
  logData['endTime'] = end;
  logData['source'] = '教育社区';
  logData['userOpenId'] = JSON.parse(localStorage.getItem('wxUser')).openId; // 用户标识
  // 这里传送日志至服务器
  Axios.post('/api-buried/buried/point/ga/collect', logData).then((res) => {
    console.log(res)
    store.commit('clearActionData')
  }).catch((err) => {
    console.log(err)
  })
  end = new Date().getTime();
})

Axios.defaults.headers.common['accessToken'] = store.state.accessToken

// 添加请求拦截器
Axios.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  //  判断是否存在token，如果存在将每个页面header都添加token
  if (store.state.accessToken) {
    config.headers.accessToken = store.state.accessToken
  }

  return config
}, error => {
// 对请求错误做些什么
  return Promise.reject(error)
})

// http response 拦截器
Axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          this.$store.commit('delAccessToken')
          router.replace({
            path: '/login',
            query: {redirect: router.currentRoute.fullPath}//  登录成功后跳入浏览的当前页面
          })
      }
    }
    return Promise.reject(error.response.data)
  }
)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
