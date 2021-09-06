import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/home/index.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
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