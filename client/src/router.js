import Vue from 'vue'
import Router from 'vue-router'
import routes from './views/index'

Vue.use(Router)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})
