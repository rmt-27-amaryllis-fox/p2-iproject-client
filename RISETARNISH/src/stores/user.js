import { defineStore } from 'pinia'
import axios from 'axios'
import Swal from 'sweetalert2'
// import router from '../router/index'
// markrow

export const useUserStore = defineStore('user', {
  state: () => ({
    baseUrl: 'https://h8omoring.herokuapp.com',
    bookmarks: '',
    username: '',
    id: '',
    isLogin: false
  }),


  actions: {
    async getUser() {
      try {
        const { data } = await axios({
          method: 'GET',
          url: `${this.baseUrl}/user`,
          headers: { access_token: localStorage.getItem("access_token") }
        })
        this.username = data.username
        this.id = data.id
      } catch (err) { }
    },

    async login(input) {
      try {
        const { email, password } = input
        const { data } = await axios({
          method: 'POST',
          url: `${this.baseUrl}/login`,
          data: { email, password }
        })
        localStorage.setItem('access_token', data.access_token)
        this.isLogin = true
        await this.getUser()
        this.router.push('/weapon')
      } catch (err) {
        console.log(err)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${err.response.data.message}`
        })
      }
    },
  
    async register(input) {
      try {
        const { username, email, password } = input;
        await axios({
          method: "POST",
          url: `${this.baseUrl}/register`,
          data: { username, email, password },
        })
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'SUCCESS',
          title: 'Your data has been saved',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.push('/login')
      } catch (err) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${err.response.data.message}`
        })
      }
    },

    async getBookmark() {
      try {
        const { data } = await axios({
          method: 'GET',
          url: `${this.baseUrl}/bookmark`,
        })
        this.bookmarks = data
      } catch (err) {
        console.log(err)
      }
    },

    async addBookmark(title, rightHand, leftHand, helmet, chestArmor, gauntlet, legArmor) {
      try {
        await axios({
          method: "POST",
          url: `${this.baseUrl}/bookmark`,
          data: { title, rightHand, leftHand, helmet, chestArmor, gauntlet, legArmor },
          headers: { access_token: localStorage.getItem("access_token") }
        })
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'SUCCESS',
          title: 'Your data has been saved',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.push('/customize')
      } catch (err) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${err.response.data.message}`
        })
      }
    }
  },



  getters: {
  },
})
