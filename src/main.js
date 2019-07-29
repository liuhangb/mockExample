import Vue from 'vue'
import App from './App.vue'
import { mockXHR } from '../mock'

if (process.env.NODE_ENV === 'production') {
  mockXHR()
}

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
