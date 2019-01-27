// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false
Vue.use(Vuex)

Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: require('@/img/spinner.svg'),
  throttleWait: 0
})
/* eslint-disable no-new */
/* eslint-disable */
const store = new Vuex.Store({
  state: {
    current: 0
  },
  mutations: {
    setCurrent: (state, i) => state.current = i
  }
})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'

})
