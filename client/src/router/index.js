import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue';
import loginPage from '../views/loginPage.vue';
import registerPage from '../views/registerPage.vue';
import walletPage from '../views/walletPage.vue';
import buyCoin from '../views/buyCoin.vue';


const routes = [
    {path : '/', component : home, name : 'homePage'},
    {path : '/login', component : loginPage, name : 'loginPage'},
    {path : '/register', component : registerPage, name : 'registerPage'},
    {path : '/buy', component : buyCoin, name : 'buyCoinPage'},
    {path : '/wallet', component : walletPage, name : 'walletPage'},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  let isLoggedIn = localStorage.access_token
  if(to.name == 'loginPage' && isLoggedIn){
    next({name : 'homePage'})
  }

  else if(to.name == "walletPage" && !isLoggedIn){
    next({name : 'loginPage'})
  }

  else {
    next();
  }
})

export default router
