import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home.vue'
import LoginPage from '../views/login.vue'
import RegisterPage from '../views/register.vue'
import OrderPage from '../views/order.vue'
import MyOrderPage from '../views/myOrder.vue'
import NotFound from '../views/notFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
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
      path: '/order',
      name: 'order',
      component: OrderPage
    },
    {
      path: '/myOrder',
      name: 'myOrder',
      component: MyOrderPage,
      beforeEnter: (to, from) => {
        if (localStorage.getItem("access_token")) {
          return true
        } else {
          return '/';
        }
      }
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
  ]
})

export default router
