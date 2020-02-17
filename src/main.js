// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import 'babel-polyfill'
import 'styles/reset.css'
import 'styles/border.css'
import 'lib-flexible/flexible'
import {
  Button,
  Field,
  Toast
} from 'vant'
import Bridge from '@/utils/bridge.js' // 此路径根据实际bridge.js路径填写
Vue.prototype.$bridge = Bridge

Vue.use(Button).use(Field).use(Toast)
Vue.config.productionTip = false
fastClick.prototype.focus = function (targetElement) {
  targetElement.focus()
}
fastClick.attach(document.body)

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
