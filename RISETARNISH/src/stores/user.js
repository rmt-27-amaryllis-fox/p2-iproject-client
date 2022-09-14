import { defineStore } from 'pinia'
import axios from 'axios'
import Swal from 'sweetalert2'
// import router from '../router/index'
// markrow

export const useUserStore = defineStore('user', {
  state: () => ({
    baseUrl: 'http://localhost:3000',
    username: '',
    qr: {},
    isLogin: false
  }),


  actions: {
    async getUser() {
      try {
        const { data } = await axios({
          method: 'GET',
          url: `${this.baseUrl}/users`,
          headers: { access_token: localStorage.getItem("access_token") }
        })
        this.username = data.username
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
        this.router.push('/weapon')
      } catch (err) {
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
        this.router.push('/login')
      } catch (err) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${err.response.data.message}`
        })
      }
    },

    async getQR(input) {
      try {
        const { data } = await axios({
          method: 'GET',
          url: `https://api.happi.dev/v1/qrcode`,
          headers: {  
            "x-happi-key": '21cb91R6lk1ZYCeYdDJ69416RHdF3A646alLhhAn73EgFDUVanoq6syP'
          },
          params: { data: input }
        })
        this.qr = data
      } catch (err) {
        console.log(err)
      }
    },
  },



  getters: {
  },
})
