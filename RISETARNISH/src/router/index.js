import { createRouter, createWebHistory } from 'vue-router'
import Landing from '../views/Landing.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Home from '../views/Home.vue'
import Weapons from '../views/Weapons.vue'
import HomeArmor from '../views/HomeArmor.vue'
import Armor from '../views/Armor.vue'
import HomeShield from '../views/HomeShield.vue'
import Shield from '../views/Shield.vue'
import Talisman from '../views/Talisman.vue'
import Customize from '../views/Customize.vue'
import Form from '../views/Form.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      beforeEnter: (to, from) => {
        if (localStorage.getItem('access_token') && to.name == 'login') {
          return { name: 'weapon' }
        }
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      beforeEnter: (to, from) => {
        if (localStorage.getItem('access_token') && to.name == 'register') {
          return { name: 'weapon' }
        }
      }
    },
    {
      path: '/weapon',
      name: 'weapon',
      component: Home
    },
    {
      path: '/armor',
      name: 'armor',
      component: HomeArmor
    },
    {
      path: '/shield',
      name: 'shield',
      component: HomeShield
    },
    {
      path: '/talisman',
      name: 'talisman',
      component: Talisman
    },
    {
      path: '/customize',
      name: 'customize',
      component: Customize
    },
    {
      path: '/add',
      name: 'add',
      component: Form,
      beforeEnter: (to, from) => {
        if (!localStorage.getItem('access_token') && to.name == 'add') {
          return { name: 'weapon' }
        }
      }
    },
    {
      path: '/weapon/:category',
      name: 'weaponC',
      component: Weapons
    },
    {
      path: '/armor/:category',
      name: 'armorC',
      component: Armor
    },
    {
      path: '/shield/:category',
      name: 'shieldC',
      component: Shield
    },
  ]
})

export default router
