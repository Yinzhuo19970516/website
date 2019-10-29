import Vue from 'vue'
import Router from 'vue-router'
import home from '../index/home.vue'
import example from '../index/example'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/example',
      name: 'example',
      component: example
    }
  ]
})
