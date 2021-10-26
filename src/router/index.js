import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Nigredo from '../views/Nigredo.vue'
import Albedo from '../views/Albedo.vue'
import Rubedo from '../views/Rubedo.vue'
import EmeraldTablet from '../components/EmeraldTablet.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/nigredo',
        name: 'Nigredo',
        component: Nigredo
    },
    {
        path: '/',
        name: 'Albedo',
        component: Albedo
    },
    {
        path: '/rubedo',
        name: 'Rubedo',
        component: Rubedo
    },
    {
        path: '/emerald',
        name: 'EmeraldTablet',
        component: EmeraldTablet
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
