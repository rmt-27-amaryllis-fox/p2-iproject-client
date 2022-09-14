import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import DetailPage from "../views/DetailPage.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
    },    
    {
      path: '/paintings/:id',
      name: 'DetailPage',
      component: DetailPage
    },
  ]
})

export default router
