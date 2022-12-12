let notFoundRoutes = [
    {path: '/:pathMatch(.*)*', name: '404', component: () => import('@/shared/components/PageNotFound.vue')},
]
export default notFoundRoutes