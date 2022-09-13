import { createRouter, createWebHistory } from "vue-router";
import home from "../components/home.vue";
import login from "../components/login.vue";
const routes = [
  { path: "/", component: home, name: "home" },
  { path: "/login", component: login, name: "login" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
