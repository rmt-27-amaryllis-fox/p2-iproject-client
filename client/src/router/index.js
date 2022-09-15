import { createRouter, createWebHistory } from "vue-router";
import LoginPage from '../views/LoginPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import UserProfilePage from '../views/UserProfilePage.vue'
import LandingPage from '../views/LandingPage.vue'
import HomePage from '../views/HomePage.vue'
import GamePage from '../views/GamePage.vue'
import Swal from "sweetalert2";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "landing",
      component: LandingPage,
    },
    {
      path: "/myhome",
      name: "myhome",
      component: HomePage,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage
    },

    {
      path: '/myprofile',
      name: 'myprofile',
      component: UserProfilePage
    },

    {
      path: '/game',
      name: 'game',
      component: GamePage
    },
  ],
});

router.beforeEach((to, from, next) => {
  // navigation guard apabila udah login/logout biar ga berabe
  if (!localStorage.getItem("access_token") && to.name === "myprofile") {
    Swal.fire({
      icon: "error",
      title: `Please login to access this feature`,
    });
    next({ path: '/login' });
  } else if (localStorage.getItem("access_token") && to.name === "register") {
    Swal.fire({
      icon: "error",
      title: `You already have registered, bro`,
    });
    next({ name: 'myhome' });;
  } else if (localStorage.getItem("access_token") && to.name === "login") {
    Swal.fire({
      icon: "error",
      title: `You already have login, bro`,
    });
    next({ name: 'myhome' });;
  }
  else if (localStorage.getItem("access_token") && to.name === "landing") {
    Swal.fire({
      icon: "error",
      title: `You already have login, bro`,
    });
    next({ name: 'myhome' });;
  }
  else if (!localStorage.getItem("access_token") && to.name === "myhome") {
    Swal.fire({
      icon: "error",
      title: `Please login to access this feature`,
    });
    next({ path: '/login' });
  }

  else if (!localStorage.getItem("access_token") && to.name === "game") {
    Swal.fire({
      icon: "error",
      title: `Please login to access this feature`,
    });
    next({ path: '/login' });
  }
  else {
    next()
  }

});
export default router;
