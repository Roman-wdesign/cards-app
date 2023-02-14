import {createRouter, createWebHistory} from 'vue-router'
import mainRoutes from '@/shared/router/main'
import notFoundRoutes from '@/shared/router/notFound'
import cardRoutes from '@/Cards/cardRouters'
import cartRoutes from '@/Cart/cartRouter';



const baseRoutes: Array<any> = []
const routes = baseRoutes.concat(mainRoutes, notFoundRoutes, cardRoutes, cartRoutes)

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
