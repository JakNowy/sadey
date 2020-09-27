import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './quasar'
import VueParticles from 'vue-particles'
import 'leaflet/dist/leaflet.css';
import PayPal from 'vue-paypal-checkout'

Vue.use(VueParticles)
Vue.config.productionTip = false
Vue.component('paypal-checkout', PayPal)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
