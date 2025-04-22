import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
// import ServicesView from '../views/Services.vue'
// import ProductsView from '../views/Products.vue'
// import Finished_works_View from '../views/Finished_works.vue'
// import Our_works from '../views/Our_works.vue'
// import About_us from '../views/About_us.vue'
// import Contacts from '../views/Contacts.vue'


const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView // Компонент должен быть импортирован
    },
//   { path: '/services', component: ServicesView },
//   { path: '/products', component: ProductsView },
//   { path: '/finishedworks', component: Finished_works_View },
//   { path: '/ourworks', component: Our_works},
//   { path: '/about_us', component: About_us},
//   { path: '/contacts', component: Contacts },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router