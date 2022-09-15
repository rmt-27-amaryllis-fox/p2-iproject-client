import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useProjectStore = defineStore({
  id: 'project-store',
  state: () => ({
    imageUrl: "https://image.tmdb.org/t/p/w500/",
    baseUrl: "http://localhost:3000",
    movies: [],
    movie: {},
    page: 1,
    totalPage: 500,
    trans_token: ''
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
    },

    async fetchMovies(){
      try {
        const {data} = await axios({
          method: "get",
          url: this.baseUrl + "/movies"
        })
        this.movies = data.results
        this.page = data.page
        console.log(data)
      } catch (error) {
        console.log(error.response)
      }
    },

    async movieById(param){
      try {
        const {data} = await axios({
          method: "GET",
          url: this.baseUrl + `/movies/${param}`
        })
        this.movie = data
      } catch (error) {
        console.log(error)
      }
    },

    logout(){
      localStorage.clear()
      this.fetchMovies()
      this.router.push('/')
    },

    async payment(){
      try {
        const {data} = await axios(this.baseUrl + '/payment', {
          method: "get",
          headers: {
            access_token: localStorage.access_token
          }
        })
        this.trans_token = data.trans_token
        console.log(this.trans_token)
      } catch (error) {
        console.log(error)
      }
    }
  }
})
