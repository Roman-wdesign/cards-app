let cardRoutes = [
    {path: '/card', name: 'card', component: () => import('@/Cards/card-detail/CardDetail.vue')},
    {path: '/cards', name: 'cards', component: () => import('@/Cards/card-list/CardsList.vue')},
]

export default cardRoutes