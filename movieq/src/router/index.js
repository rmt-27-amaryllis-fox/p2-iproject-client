import { createRouter, createWebHistory } from 'vue-router'
import dashboard from '../views/Dashboard.vue'
import home from '../views/HomePage.vue'
import login from '../views/LoginPage.vue'
import register from '../views/RegisterPage.vue'
import detail from '../views/MovieDetailPage.vue'
import subs from '../views/SubsPage.vue'

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
        },
        {
          path: '/subscription',
          name: "subs",
          component: subs
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

router.beforeEach((to, from ,next) => {
  const token = localStorage.access_token

  if(to.name === 'login' && token) next({name: "home"})
  else if(to.name === 'subs' && localStorage.paid === false) next({name: "home"})
  else if(to.name === 'subs' && !token) next({name: "login"})
  else next()
})

export default router
