import 'babel-polyfill'
import Vue from 'vue'
import App from './App'

import router from './router'
import store from './store'
import './style/base.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
