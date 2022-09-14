import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import PlaylistPage from "../views/PlaylistPage.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/playlists",
      name: "playlists",
      component: PlaylistPage,
    },
  ],
});

export default router;
