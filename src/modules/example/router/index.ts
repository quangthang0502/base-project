import { RouteConfig } from 'vue-router'

const authRouters: RouteConfig[] = [
  {
    path: '/login',
    component: () => import('../views/LoginPage.vue'),
    name: 'login',
    meta: {
      isNotLogin: true
    }
  }
]

export default authRouters
