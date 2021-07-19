import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './plugins/element-ui'
import './assets/styles/index.scss'
import './plugins/request'
import { forEach } from 'lodash'
import listModules from './modules'
import components from './components/base'
import * as filters from './helpers/filter'

Vue.config.productionTip = false

// common components
forEach(components, (value, key) => {
  Vue.component(key, value)
})

// modules
forEach(listModules, module => {
  // register route
  forEach(module.router, value => {
    router.addRoute(value)
  })

  // register store
  forEach(module.stores, (value, key) => {
    store.registerModule(key, value)
  })

  //register component
  forEach(module.components, (value, key) => {
    Vue.component(key, value)
  })
})

//register filter
forEach(filters, (filter, key) => {
  Vue.filter(key, filter)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
