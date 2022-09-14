import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import Profile from "../views/Profile.vue";
import EditProfile from "../views/EditProfile.vue";
import CityPost from "../views/AddPostByCity.vue";
import CoordinatePost from "../views/AddPostByCoordinate.vue";
import PostDetail from "../views/PostDetail.vue";
import About from "../views/AboutThisCity.vue";
import LandingPage from "../views/LandingPage.vue";
import NotFound from "../views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "landingPage",
      component: LandingPage,
      beforeEnter: (to, from) => {
        if (localStorage.getItem("access_token") && to.name == "landingPage") {
          return { name: "home" };
        }
      },
    },
    {
      path: "/home",
      name: "home",
      component: Home,
      beforeEnter: (to, from) => {
        if (!localStorage.getItem("access_token") && to.name == "home") {
          return { name: "landingPage" };
        }
      },
    },
    {
      path: "/register",
      name: "register",
      component: Register,
      beforeEnter: (to, from) => {
        if (localStorage.getItem("access_token") && to.name == "register") {
          return { name: "home" };
        }
      },
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      beforeEnter: (to, from) => {
        if (localStorage.getItem("access_token") && to.name == "login") {
          return { name: "home" };
        }
      },
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
      beforeEnter: (to, from) => {
        if (!localStorage.getItem("access_token") && to.name == "profile") {
          return { name: "landingPage" };
        }
      },
    },
    {
      path: "/edit-profile",
      name: "editProfile",
      component: EditProfile,
      beforeEnter: (to, from) => {
        if (!localStorage.getItem("access_token") && to.name == "editProfile") {
          return { name: "landingPage" };
        }
      },
    },
    {
      path: "/new-post",
      name: "new-post",
      component: CityPost,
      beforeEnter: (to, from) => {
        if (!localStorage.getItem("access_token") && to.name == "new-post") {
          return { name: "landingPage" };
        }
      },
    },
    {
      path: "/new-post2",
      name: "new-post2",
      component: CoordinatePost,
      beforeEnter: (to, from) => {
        if (!localStorage.getItem("access_token") && to.name == "new-post-2") {
          return { name: "landingPage" };
        }
      },
    },
    {
      path: "/post/:id",
      name: "postDetail",
      component: PostDetail,
      beforeEnter: (to, from) => {
        if (!localStorage.getItem("access_token") && to.name == "postDetail") {
          return { name: "landingPage" };
        }
      },
    },
    {
      path: "/about/:id",
      name: "about",
      component: About,
      beforeEnter: (to, from) => {
        if (!localStorage.getItem("access_token") && to.name == "about") {
          return { name: "landingPage" };
        }
      },
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound,
    },
  ],
});

// Navigation guard
// router.beforeEach((to, from, next) => {
//   const isLogin = localStorage.access_token;

//   if (to.name === "login" && isLogin) {
//     next({ name: "home" });
//   } else if (to.name !== "login" && !isLogin) {
//     next({ name: "home" });
//   } else if (to.name === "register" && isLogin) {
//     next({ name: "home" });
//   } else {
//     next();
//   }
// });

export default router;
