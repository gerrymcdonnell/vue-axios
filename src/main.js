import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store'

//default settings for axios
axios.defaults.baseURL='https://vueaxios-7085c.firebaseio.com'

//setup headers if needed
/*axios.defaults.headers.common['Authorization']='this is my auth string'
axios.defaults.headers.get['Accepts']='application/json'*/


//axios.interceptors
axios.interceptors.request.use(config=>{
  console.log('[request] interceptor',config)
  return config
})

axios.interceptors.response.use(res=>{
  console.log('[response] interceptor',res)
  return res
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
