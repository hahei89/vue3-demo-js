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
        component: () => import ( /* webpackChunkName: "dashboard" */ "../pages/dashboard/index.vue")
      },
      {
        path: '/tabs',
        name: 'tabs',
        meta: {
          title: '标签页'
        },
        component: () => import ( /* webpackChunkName: "tabs" */ "../pages/tabs/index.vue")
      },
      {
        path: '/permission',
        name: 'permission',
        meta: {
          title: '权限管理',
          permission: true
        },
        component: () => import ( /* webpackChunkName: "permission" */ "../pages/permission/index.vue")
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title | 'vue-manage-system'}`
  const role = localStorage.getItem('ms_username')
  if (!role && to.path !== '/login') {
    next('/login')
  } else if (to.meta.permission) {
    role === 'admin' ? next() : next('/403')
  } else {
    next()
  }
})

export default router