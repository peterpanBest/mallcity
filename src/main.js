// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store/store";
//element-ui
import { Icon } from 'element-ui';
import { ToastPlugin, AlertPlugin, Alert, LoadingPlugin  } from 'vux'

store.registerModule('vux', { // 名字自己定义
  state: {
    isLoading: false
  },
  mutations: {
    updateLoadingStatus (state, payload) {
      state.isLoading = payload.isLoading
    }
  }
})

router.beforeEach(function (to, from, next) {
  store.commit('updateLoadingStatus', {isLoading: true})
  next()
})

router.afterEach(function (to) {
  store.commit('updateLoadingStatus', {isLoading: false})
})
//上面的实现是为了实现页面切换的loading效果
//去除移动端点击延迟
const FastClick = require('fastclick')
FastClick.attach(document.body)

global.storage = window.localStorage

//以插件的形式引入
Vue.use(LoadingPlugin)
Vue.use(ToastPlugin)
Vue.use(AlertPlugin)
Vue.use(Alert)

//mockjs
require('./mock/mock');

Vue.component(Icon.name, Icon)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  Vue,
  template: '<App/>',
  components: { App }
})
