import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes/index.js'
import './index.css'
import './tailwind.css'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  mode: "history",
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes // short for `routes: routes`
})



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
