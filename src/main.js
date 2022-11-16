import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AOS from 'aos';
import axios from 'axios'
import VueSession from 'vue-session'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

// Vue.use(BootstrapVue)

var sessionOptions = {
  persist: true
}
Vue.use(VueSession, sessionOptions)

// axios
Vue.use(axios)
Vue.prototype.$axios = axios

new Vue({
  created() {
    AOS.init()
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
