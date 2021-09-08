import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/home/index.vue'

const routes = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        meta: {
          title: '系统首页'
        },
        component: () => import ( /* webpackChunkName: "tabs" */ "../pages/dashboard/index.vue")
      },
      {
        path: '/tabs',
        name: 'tabs',
        meta: {
          title: '标签页'
        },
        component: () => import ( /* webpackChunkName: "tabs" */ "../pages/tabs/index.vue")
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router