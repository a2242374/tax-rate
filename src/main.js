// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastClick'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/styles/border.css'
import '@/assets/styles/reset.css'
import '@/assets/styles/iconfont.css'
import 'element-ui/lib/theme-chalk/display.css'
import '@/assets/styles/copyright.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
