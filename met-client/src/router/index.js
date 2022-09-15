import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import LoginPage from '../views/LoginPage.vue'
import DetailPage from "../views/DetailPage.vue"
import RegisterPage from '../views/RegisterPage.vue'
import NotFoundPage from "../views/NotFoundPage.vue"
import OwnedPage from '../views/OwnedPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage
    },
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
      name: 'detail',
      component: DetailPage
    },
    {
      path: '/owned',
      name: 'owned',
      component: OwnedPage
    },
    { path: '/:pathMatch(.*)*', 
    name:"NotFoundPage",
    component: NotFoundPage 
    }
  ]
})
router.beforeEach((to, from, next) => {
  const isLogin = localStorage.access_token
  if (to.name === "login" && isLogin) {
      next({name: "home"})
  } else if (to.name == "detail" && !isLogin){
      next("/login")
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You need to login first!',
        footer: '<a href="">Why do I have this issue?</a>'
      })
  } else {
    next()
  }
})
export default router
