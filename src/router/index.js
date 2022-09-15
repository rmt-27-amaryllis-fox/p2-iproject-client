import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import ProfileView from "../views/ProfileView.vue";
import WatchlistView from "../views/WatchlistView.vue";
import NewsView from "../views/NewsView.vue";
import CalculatorView from "../views/CalculatorView.vue";
import PaymentSuccessView from "../views/PaymentSuccessView.vue";
import NotFound from "../views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      beforeEnter: (to, from) => {
        return !localStorage.getItem('access_token') ? true : '/'
      }
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
      beforeEnter: (to, from) => {
        return !localStorage.getItem('access_token') ? true : '/'
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
      beforeEnter: (to, from) => {
        return localStorage.getItem('access_token') ? true : '/login'
      }
    },
    {
      path: '/watchlist',
      name: 'watchlist',
      component: WatchlistView,
      beforeEnter: (to, from) => {
        return localStorage.getItem('access_token') ? true : '/login'
      }
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView
    },
    {
      path: '/calculator',
      name: 'calculator',
      component: CalculatorView
    },
    {
      path: '/payment/success',
      name: 'paymentSuccess',
      component: PaymentSuccessView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
    },
  ]
})

export default router
