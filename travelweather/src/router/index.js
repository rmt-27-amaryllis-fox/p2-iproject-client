import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MapsView from "../views/MapsView.vue"
import ForecastView from "../views/ForecastView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect : "/maps"
    },
    {
      path: "/maps",
      name: "maps",
      component: MapsView,
    },
    {
      path: "/forecast",
      name: "forecast",
      component: ForecastView,
    },
  ],
});

export default router;
