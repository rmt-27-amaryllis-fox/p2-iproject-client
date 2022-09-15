import { createRouter, createWebHistory } from "vue-router";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import Sidebar from "../views/Sidebar.vue";
import Services from "../views/Services.vue";
import History from "../views/History.vue";
import CreateService from "../views/CreateService.vue";
import WheelReferences from "../views/ApiCard.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/register", component: Register, name: "Register" },
    { path: "/login", component: Login, name: "Login" },
    {
      path: "/",
      component: Sidebar,
      name: "sidebar",
      children: [
        { path: "", component: Services, name: "Services" },
        { path: "history", component: History, name: "History" },
        {
          path: "wheel-references",
          component: WheelReferences,
          name: "WheelReferences",
        },
      ],
    },
    { path: "/add-queue", component: CreateService, name: "CreateService" },
  ],
});

export default router;
