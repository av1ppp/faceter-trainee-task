import Vue from 'vue'
import VueRouter from 'vue-router'

import Planet from '@/views/Planet.vue'
import Planets from '@/views/Planets.vue'
import Statistics from '@/views/Statistics.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/planets'
    },
    {
        path: '/planets/:id',
        component: Planet
    },
    {
        path: '/planets',
        name: 'Planets',
        component: Planets
    },
    {
        path: '/statistics',
        name: 'Statistics',
        component: Statistics
    },
]

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})