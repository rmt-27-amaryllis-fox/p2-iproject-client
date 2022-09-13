import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import Profile from "../views/Profile.vue";
import NotFound from "../views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound,
    },
  ],
});

// Navigation guard
router.beforeEach((to, from, next) => {
  const isLogin = localStorage.access_token;

  if (to.name === "login" && isLogin) {
    next({ name: "home" });
  } else if (to.name !== "login" && !isLogin) {
    next({ name: "login" });
  } else if (to.name === "register" && isLogin) {
    next({ name: "home" });
  } else {
    next();
  }
});

export default router;
