import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import LoginPage from "../views/LoginPage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import DetailPage from "../views/DetailPage.vue";
import CartPage from "../views/CartPage.vue";
import AddAddress from "../views/AddAddress.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: LoginPage,
      beforeEnter: (to, from) => {
        if (!localStorage.getItem("token")) {
          return true;
        }
        return "/";
      },
    },
    {
      path: "/register",
      name: "register",
      component: RegisterPage,
      beforeEnter: (to, from) => {
        if (!localStorage.getItem("token")) {
          return true;
        }
        return "/";
      },
    },
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/detail/:id",
      name: "detail-product",
      component: DetailPage,
      beforeEnter: (to, from) => {
        if (localStorage.getItem("token")) {
          return true;
        }
        return "/login";
      },
    },
    {
      path: "/address",
      name: "address",
      component: AddAddress,
      beforeEnter: (to, from) => {
        if (localStorage.getItem("token")) {
          return true;
        }
        return "/login";
      },
    },
    {
      path: "/mycart",
      name: "cart",
      component: CartPage,
      beforeEnter: (to, from) => {
        if (localStorage.getItem("token")) {
          return true;
        }
        return "/login";
      },
    },
  ],
});

export default router;
