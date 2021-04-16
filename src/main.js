import Vue from 'vue'
import App from './App.vue'
import router from './router'
import startQiankun from "./micro";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#main-application-app')

startQiankun();