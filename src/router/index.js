import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/auth',
    redirect: '/login',
    component: () => import('../views/auth/Auth.vue'),
    children: [
      {
        path: '/login',
        name: 'Login',
        component: () => import('../views/auth/Login.vue')
      },
      {
        path: '/registration',
        name: 'Registration',
        component: () => import('../views/auth/Registration.vue')
      }
    ]
  },
  {
    path: '/board',
    name: 'Board',
    component: () => import('../views/Board.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
