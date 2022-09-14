import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PricesGames from "../views/PricesGame.vue";
import LoginPage from "../views/Login.vue";
import RegisterPage from "../views/Register.vue"
import DetailView from "../views/FreeGameDetail.vue";
import MyCartView from "../views/MyCart.vue";
import CheckoutView from "../views/CheckoutView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/pricy-games",
      name: "pricy-games",
      component: PricesGames,
    },
    {
      path: "/login",
      name: "login",
      component: LoginPage,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterPage,
    },
    {
      path: "/detail/:id",
      name: "detail",
      component: DetailView,
    },
    {
      path: "/mycart",
      name: "mycart",
      component: MyCartView,
    },
    {
      path: "/checkout",
      name: "checkout",
      component: CheckoutView,
    },
  ],
});

export default router;
