import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NotFound from "../views/NotFound.vue";
import RegisterPage from '../views/RegisterPage.vue'
import LoginPage from '../views/LoginPage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not found',
      component: NotFound
    },
  ],
});

router.beforeEach((to, from) => {
  if (!localStorage.getItem("access_token") && to.name == "CartPage"){
    return "/login"
  } else if (!localStorage.getItem("access_token") && to.name == "OrderHistory"){
    return "/login"
  } else if(localStorage.getItem("access_token") && to.name == "login"){
    return "/"
  } else if(localStorage.getItem("access_token") && to.name == "register"){
    return "/"
  }
})

export default router;
