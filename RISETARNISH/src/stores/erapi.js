import { defineStore } from 'pinia'
import axios from 'axios'
// import router from '../router/index'
// markrow

export const useErapiStore = defineStore('erapi', {
  state: () => ({
    baseUrl: 'http://localhost:3000',
    weapons: []
  }),

  actions: {
    async getWeapon(page) {
      try {
        console.log(page)
        const { data } = await axios({
          method: 'GET',
          url: `${this.baseUrl}/local/weapons`,
          params: { page }
        })
        this.weapons = data
      } catch (err) {
        console.log(err)
      }
    }
  },

  getters: { },
})
