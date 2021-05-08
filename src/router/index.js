import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import store from "../store";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: 'Cratto',
            loginRequired: true
        }
    },
    {
        path: '/auth',
        redirect: '/login',
        component: () => import('../views/auth/Auth.vue'),
        children: [
            {
                path: '/login',
                name: 'Login',
                component: () => import('../views/auth/Login.vue'),
                meta: {
                    title: 'Login',
                    anonymousRequired: true
                },
            },
            {
                path: '/registration',
                name: 'Registration',
                component: () => import('../views/auth/Registration.vue'),
                meta: {
                    anonymousRequired: true
                }
            }
        ]
    },
    {
        path: '/board/:boardId',
        name: 'Board',
        component: () => import('../views/Board.vue'),
        meta: {
            loginRequired: true
        }
    },
    {
        path: '/oauth/vk',
        name: 'VkOauth',
        component: () => import('../views/auth/OAuthVk.vue'),
        meta: {
            anonymousRequired: true
        }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.loginRequired)) {
        if (store.dispatch('auth/isAuthorized')) {
            next()
            return
        }
        next('/login')
    } else if (to.matched.some(record => record.meta.anonymousRequired)) {
        if (store.dispatch('auth/isAuthorized')) {
            next('/')
            return
        }
        next()
    } else {
        next()
    }
})

export default router
