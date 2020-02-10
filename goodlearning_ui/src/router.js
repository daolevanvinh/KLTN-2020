import Vue from 'vue'
import Router from 'vue-router'



//import HomePage from './Role/User/modules/HomePage/HomePage.vue'

Vue.use(Router)

/** 
 * const BaseRoutes = [
    {
        path: '/',
        name: 'home-page',
        component: HomePage
    }
]
 */

import BaseRoutes from './modules/router.js'

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: BaseRoutes,
    scrollBehavior() {
        return { x:0, y:0 }
    }
})


export default router