import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import PlaylistPage from "../views/PlaylistPage.vue";
import SchedulePage from "../views/SchedulePage.vue";
import NotFound from "../views/NotFound.vue";
import MessagePage from "../views/MessagePage.vue";
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
    {
      path: "/gigs",
      name: "schedules",
      component: SchedulePage,
    },
    {
      path: "/messages",
      name: "message",
      component: MessagePage,
    },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  ],
});

export default router;
