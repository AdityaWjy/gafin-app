import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import './main.css'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

const options = {
  // You can set your default options here
}

Vue.use(Toast, options)

Vue.config.productionTip = false

new Vue({
  router,
  beforeCreate() {
    this.$toast.info('Selamat datang di Gafin Lab!', {
      timeout: 5000,
      toastClassName: 'toast-info'
    })
  },
  render: (h) => h(App)
}).$mount('#app')
