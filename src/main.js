// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store/store";
//element-ui
import { Icon } from 'element-ui';
import { ToastPlugin, AlertPlugin, Alert, LoadingPlugin  } from 'vux'

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
