import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import LoginPage from "../views/LoginPage.vue";
import MyJobsPage from "../views/MyJobsPage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import JobDetail from "../views/JobDetailPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
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
      path: "/jobdetails/:id",
      name: "jobdetails",
      component: JobDetail,
    },
    {
      path: "/myjobs",
      name: "myjobs",
      component: MyJobsPage,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const access_token = localStorage.access_token;
  if ((to.name === "login" || to.name === "register") && access_token) {
    next("/");
  }  else if (to.name === "home" && !access_token) {
    next("/login");
  } else {
    next();
  }
});

export default router;
