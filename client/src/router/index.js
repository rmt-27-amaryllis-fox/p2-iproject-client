import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../views/LoginPage.vue";
import HomePage from "../views/HomePage.vue";
import SearchPage from "../views/SearchPage.vue";
import PlaylistPage from "../views/PlaylistPage.vue";
import SimilarArtistPage from "../views/SimilarArtistPage.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: LoginPage,
    },
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/search",
      name: "search",
      component: SearchPage,
    },
    {
      path: "/playlists",
      name: "playlists",
      component: PlaylistPage,
    },
    {
      path: "/similar",
      name: "similar",
      component: SimilarArtistPage,
    }
  ],
});

// router.beforeEach((to, from, next) => {
//   const isLogin = localStorage.access_token;
//   if(to.name === 'login' && isLogin) {
//     next({name: 'home'});
//   } else if(to.name !== 'login' && !isLogin) {
//     next({name: 'login'});
//   } else {
//     next();
//   }
// });

export default router;
