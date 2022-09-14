import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import ProfileView from "../views/ProfileView.vue";
import WatchlistView from "../views/WatchlistView.vue";
import NewsView from "../views/NewsView.vue";
import CalculatorView from "../views/CalculatorView.vue";

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
      component: ProfileView
    },
    {
      path: '/watchlist',
      name: 'watchlist',
      component: WatchlistView
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
    }
  ]
})

export default router
