import { createRouter, createWebHistory } from "vue-router";
import home from "../components/home.vue";
import login from "../components/login.vue";
import register from "../components/register.vue";
const routes = [
  { path: "/", component: home, name: "home" },
  { path: "/login", component: login, name: "login" },
  { path: "/register", component: register, name: "register" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
