import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Accommodatie from '@/views/Accommodatie.vue'
import Cadeau from '@/views/Cadeau.vue'
import Corona from '@/views/Corona.vue'
import Indeling from '@/views/Indeling.vue'
import Activiteiten from '@/views/Activiteiten.vue'
import Routebeschrijving from '@/views/Routebeschrijving.vue'

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
        component: () => import('@/views/Login.vue'),
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
        component: Accommodatie,
        meta: {
            requiresAccessCode: true
        }
    },
    {
        path: '/cadeau',
        name: 'Cadeau',
        component: Cadeau,
        meta: {
            requiresAccessCode: true
        }
    },
    {
        path: '/corona',
        name: 'Corona',
        component: Corona,
        meta: {
            requiresAccessCode: true
        }
    },
    {
        path: '/activiteiten',
        name: 'Activiteiten',
        component: Activiteiten,
        meta: {
            requiresAccessCode: true
        }
    },
    {
        path: '/indeling',
        name: 'Indeling',
        component: Indeling,
        meta: {
            requiresAccessCode: true
        }
    },
    {
        path: '/routebeschrijving',
        name: 'Routebeschrijving',
        component: Routebeschrijving,
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

router.resolve({
    name: 'NotFound',
    params: { pathMatch: ['not', 'found'] }
}).href // '/not/found'

export default router
