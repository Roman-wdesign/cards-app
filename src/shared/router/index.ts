import { createRouter, createWebHistory } from 'vue-router'
import main from '@/shared/router/main'
import cardRouters from '@/Cards/cardRouters'

const baseRoutes:any =[]
const routes = baseRoutes.concat(main, cardRouters)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
