import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import store from '../store'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            requiresAccessCode: true
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login'),
        meta: {
            hasAccessCode: true
        }
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/views/NotFound')
    },
    {
        path: '/accommodatie',
        name: 'Accommodatie',
        component: () => import('@/views/Accommodatie'),
        meta: {
            requiresAccessCode: true
        }
    },
    {
        path: '/cadeau',
        name: 'Cadeau',
        component: () => import('@/views/Cadeau'),
        meta: {
            requiresAccessCode: true
        }
    },
    {
        path: '/corona',
        name: 'Corona',
        component: () => import('@/views/Corona'),
        meta: {
            requiresAccessCode: true
        }
    },
    {
        path: '/activiteiten',
        name: 'Activiteiten',
        component: () => import('@/views/Activiteiten'),
        meta: {
            requiresAccessCode: true
        }
    },
    {
        path: '/aanwezigheid',
        name: 'Aanwezigheid',
        component: () => import('@/views/Aanwezigheid'),
        meta: {
            requiresAccessCode: true
        }
    },
    {
        path: '/routebeschrijving',
        name: 'Routebeschrijving',
        component: () => import('@/views/Routebeschrijving'),
        meta: {
            requiresAccessCode: true
        }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    },
})

router.beforeEach(async (to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAccessCode)) {
        if (localStorage.getItem('accessCode') !== 'Veluwe') next({ name: 'Login'})
        else next()
    } else if (to.matched.some(record => record.meta.hasAccessCode)) {
        if (localStorage.getItem('accessCode') === 'Veluwe') next({ name: 'Home'})
        else next()
    } else {
        next()
    }
})

router.afterEach(async (to, from) => {
    localStorage.setItem('previousRouteName', from.name)
    store.dispatch('getPreviousRouteName')
})

router.resolve({
    name: 'NotFound',
    params: { pathMatch: ['not', 'found'] }
}).href // '/not/found'

export default router
