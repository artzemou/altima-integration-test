// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'
import VueScrollTo from 'vue-scrollto'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueScrollTo, {
  container: 'body',
  duration: 500,
  easing: 'ease',
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: require('@/img/spinner.svg'),
  throttleWait: 0
})
/* eslint-disable no-new */
/* eslint-disable */

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'

})
