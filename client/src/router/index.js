import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import LoginPage from '../views/LoginPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import MoviePage from '../views/MoviePage.vue'
import SeriesPage from '../views/SeriesPage.vue'
import DetailMovie from '../views/DetailMovie.vue'
import DetailSeries from '../views/DetailSeries.vue'
import WatchlistPage from '../views/WatchlistPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomePage
    },
    {
      path: "/login",
      name: "Login",
      component: LoginPage
    },
    {
      path: "/register",
      name: "Register",
      component: RegisterPage
    },
    {
      path: "/movie",
      name: "Movie",
      component: MoviePage
    },
    {
      path: "/series",
      name: "Series",
      component: SeriesPage
    },
    {
      path: "/watchlist",
      name: "Watchlist",
      component: WatchlistPage
    },
    {
      path: "/movie/:id",
      name: "DetailMovie",
      component: DetailMovie
    },
    {
      path: "/series/:id",
      name: "DetailSeries",
      component: DetailSeries
    }
  ]
})

export default router
