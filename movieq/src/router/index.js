import { createRouter, createWebHistory } from 'vue-router'
import dashboard from '../views/Dashboard.vue'
import home from '../views/HomePage.vue'
import login from '../views/LoginPage.vue'
import register from '../views/RegisterPage.vue'
import detail from '../views/MovieDetailPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: dashboard,
      children: [
        {
          path: '',
          name: "home",
          component: home
        },
        {
          path: "/detail/:id",
          name: "detail",
          component: detail
        }
      ]
    },
    {
      path: "/login",
      name: "login",
      component: login
    },
    {
      path: "/register",
      name: "register",
      component: register
    }
  ]
})

export default router
