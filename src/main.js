import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AOS from 'aos';
import "aos/dist/aos.css";

// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

// Vue.use(BootstrapVue)

new Vue({
  created() {
    AOS.init();
},
  router,
  store,
  render: h => h(App)
}).$mount('#app')
