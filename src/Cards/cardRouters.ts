let routes = [
    {
        path: '/:pathMatch(.*)*',
        name: '404',
        component: () => import('../shared/components/PageNotFound.vue')
    },
]
export default routes