import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../components/layout/Layout.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    // name: 'home',
    // component: Home,
    component: Layout,
    meta: {
      isNotAuth: true
    },
    children: [
      {
        path: '',
        name: 'home',
        component: Home
      }
    ]
  },
  {
    path: '*',
    name: 'notFound',
    component: () => import('@/views/404.vue'),
    meta: {
      isNotAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to, from, next) => {
  if (to.meta?.isNotAuth) {
    next()
    return
  }
  console.log('check auth')
  next()
})

export default router
