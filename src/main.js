import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './quasar'
import VueParticles from 'vue-particles'
import 'leaflet/dist/leaflet.css';

const VueScrollTo = require('vue-scrollto');

Vue.use(VueParticles)
Vue.use(VueScrollTo)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
