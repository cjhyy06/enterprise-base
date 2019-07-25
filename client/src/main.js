import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import './registerServiceWorker'
import './styles/main.scss'
import './components'

Vue.config.productionTip = false

let instance = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

window.AppRuntimeContext = {
  Vue,
  router,
  store,
  instance
}
