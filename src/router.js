import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Nigredo from './views/Nigredo.vue'
import Albedo from './views/Albedo.vue'
import Rubedo from './views/Rubedo.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/nigredo',
        name: 'Nigredo',
        component: Nigredo,
    },
    {
        path: '/albedo',
        name: 'Albedo',
        component: Albedo,
    },
    {
        path: '/rubedo',
        name: 'Rubedo',
        component: Rubedo,
    },
    {
        path: "/:catchAll(.*)",
        redirect: '/'
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
