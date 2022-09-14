import { defineStore } from 'pinia'
import axios from 'axios'
import Swal from 'sweetalert2'
// import router from '../router/index'
// markrow

export const useErapiStore = defineStore('erapi', {
  state: () => ({
    baseUrl: 'https://h8omoring.herokuapp.com',
    weapons: [],
    WeaponsByCategory: [],
    armors: [],
    armorsByCategory: [],
    shields: [],
    shieldsByCategory: [],
    talismans: []
  }),

  actions: {
    async getWeapon(page) {
      try {
        const { data } = await axios({
          method: 'GET',
          url: `${this.baseUrl}/local/weapons`,
          params: { page }
        })
        this.weapons = data
      } catch (err) {
        console.log(err)
      }
    },

    async weaponByCategory(category) {
      try {
        const { data } = await axios({
          method: 'POST',
          url: `${this.baseUrl}/erapi/weapon/${category}`
        })
        this.WeaponsByCategory = data.data.weapon
        this.router.push(`/weapon/${category}`)
      } catch (err) {
        console.log(err)
      }
    },

    async getArmor() {
      try {
        const { data } = await axios({
          method: "GET",
          url: `${this.baseUrl}/local/armors`,
        })
        this.armors = data
      } catch (err) {
        console.log(err)
      }
    },
    
    async armorByCategory(category) {
      try {
        const { data } = await axios({
          method: 'POST',
          url: `${this.baseUrl}/erapi/armor/${category}`
        })
        this.armorsByCategory = data.data.armor
        this.router.push(`/armor/${category}`)
      } catch (err) {
        console.log(err)
      }
    },

    async getShield() {
      try {
        const { data } = await axios({
          method: "GET",
          url: `${this.baseUrl}/local/shields`,
        })
        this.shields = data
      } catch (err) {
        console.log(err)
      }
    },
    
    
    async shieldByCategory(category) {
      try {
        const { data } = await axios({
          method: 'POST',
          url: `${this.baseUrl}/erapi/shield/${category}`
        })
        this.shieldsByCategory = data.data.shield
        this.router.push(`/shield/${category}`)
      } catch (err) {
        console.log(err)
      }
    },

    async getTalisman(page) {
      try {
        if (!page) {
          page = 1
        }
        const { data } = await axios({
          method: 'POST',
          url: `${this.baseUrl}/erapi/talisman`,
          params: { page }
        })
        this.talismans = data.data.talisman
      } catch (err) {
        console.log(err)
      }
    },
  },

  getters: { },
})
