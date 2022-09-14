import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useProjectStore = defineStore({
  id: 'project-store',
  state: () => ({
    baseUrl: "http://localhost:3000"
  }),
  actions: {
    async login(param){
      try {
        const {data} = await axios({
          method: "post",
          url: this.baseUrl + "/login",
          data: param
        })
        localStorage.access_token = data.access_token
        this.router.push('/')
      } catch (error) {
        console.log(error)
      }
    },

    async register(param){
      try {
        const {data} = await axios({
          method: "post",
          url: this.baseUrl + '/register',
          data: param
        })
        this.router.push('/login')
      } catch (error) {
        console.log(error)
      }
    }
  }
})
