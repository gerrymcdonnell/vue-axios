import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store'

//default settings for axios
axios.defaults.baseURL='https://vueaxios-7085c.firebaseio.com'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
