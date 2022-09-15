import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import LoginPage from '../views/LoginPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import Confirmation from '../views/Confirmation.vue'
import MoviePage from '../views/MoviePage.vue'
import SeriesPage from '../views/SeriesPage.vue'
import DetailMovie from '../views/DetailMovie.vue'
import DetailSeries from '../views/DetailSeries.vue'
import WatchlistPage from '../views/WatchlistPage.vue'
import SearchPage from '../views/SearchPage.vue'
import NotFound from '../views/NotFound.vue'

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
      path: "/confirmation",
      name: "Confirmation",
      component: Confirmation
    },
    {
      path: "/confirmation/:token",
      name: "checkToken",
      component: Confirmation
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
    },
    {
      path: "/search/:query",
      name: "Search",
      component: SearchPage
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  ]
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.access_token
  const isVerified = localStorage.status
  if (to.name == "Watchlist" && !isAuthenticated) next("/login")
  else if (to.name == "Login" && isAuthenticated || to.name == "Register" && isAuthenticated) next('/')
  else if (to.path == '/confirmation' && isVerified || to.name == 'checkToken' && isVerified) next('/')
  else next()
})

export default router
