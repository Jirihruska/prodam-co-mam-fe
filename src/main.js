import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes/index.js'
import vClickOutside from 'v-click-outside'
import './index.css'
import './tailwind.css'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(vClickOutside)

const router = new VueRouter({
  mode: "history",
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: routes,
})



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
