import Vue from 'vue'
import App from './App.vue'
import { mockXHR } from '../mock'

mockXHR();

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
