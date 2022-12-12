let mainRoutes = [
    {path: '/', name: 'home', component: () => import('@/shared/views/HomeView.vue')},
    {path: '/about', name: 'about', component: () => import('@/shared/views/AboutView.vue')},

]
export default mainRoutes