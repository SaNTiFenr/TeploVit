import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'  


const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/services',
        name: 'services',
        component: () => import('@/views/ServicesView.vue')
    },
    {
        path: '/products',
        name: 'products',
        component: () => import('@/views/ProductsView.vue')
    },
    {
        path: '/solutions',
        name: 'solutions',
        component: () => import('@/views/SolutionsView.vue')
    },
    {
        path: '/portfolio',
        name: 'portfolio',
        component: () => import('@/views/PortfolioView.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/views/AboutView.vue')
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: () => import('@/views/ContactsView.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router