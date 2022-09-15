import { defineStore } from "pinia";
import axios from "axios";
import swal from 'sweetalert2'

export const useProjectStore = defineStore({
  id: "project-store",
  state: () => ({
    imageUrl: "https://image.tmdb.org/t/p/w500/",
    baseUrl: "https://movieq69.herokuapp.com",
    movies: [],
    movie: {},
    page: 1,
    totalPage: 500,
    trans_token: "",
    isLogin: false,
    isPaid: false,
    isLoading: false
  }),
  actions: {
    async login(param) {
      try {
        const { data } = await axios({
          method: "post",
          url: this.baseUrl + "/login",
          data: param,
        });
        localStorage.paid = data.paid;
        localStorage.access_token = data.access_token;
        this.isLogin = true
        this.router.push("/");
      } catch ({response}) {
        swal.fire({
          icon: "error",
          title: "Uh oh...",
          text: response.data.message,
        });
        this.router.push("/login");
      }
    },

    async register(param) {
      try {
        const { data } = await axios({
          method: "post",
          url: this.baseUrl + "/register",
          data: param,
        });
        swal.fire({
          icon: "success",
          title: "Register successfull"
        });
        this.router.push("/login");
      } catch ({ response }) {
        swal.fire({
          icon: "error",
          title: "Uh oh...",
          text: response.data.message,
        });
      }
    },

    async fetchMovies() {
      try {
        this.isLoading = true
        const { data } = await axios({
          method: "get",
          url: this.baseUrl + "/movies",
        });
        this.movies = data.results;
        this.page = data.page;
        
      } catch (error) {
        swal.fire({
          icon: "error",
          title: "Uh Oh...",
          text: "Something went wrong, try again later",
        });
      } finally {
        this.isLoading = false
      }
    },

    async movieById(param) {
      try {
        const { data } = await axios({
          method: "GET",
          url: this.baseUrl + `/movies/${param}`,
        });
        this.movie = data;
      } catch (error) {
        swal.fire({
          icon: "error",
          title: "Uh oh...",
          text: "Something went wrong, try again later",
        });
      }
    },

    logout() {
      localStorage.clear();
      this.fetchMovies();
      this.isLogin = false,
      this.isPaid = false
      swal.fire({
        icon: "success",
        title: "Good Bye",
        text: "Hope you have a great time",
      });
      this.router.push("/");
    },

    async payment() {
      try {
        const { data } = await axios(this.baseUrl + "/payment", {
          method: "get",
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.trans_token = data.trans_token;
        console.log(this.trans_token);
      } catch (error) {
        console.log(error);
      }
    },
    async paid() {
      try {
        const { data } = await axios({
          url: this.baseUrl + "/status",
          method: "patch",
          headers: {
            access_token: localStorage.access_token,
          },
        });
        console.log(data)
        localStorage.paid = data.paid;
        this.isPaid = true
        swal.fire({
          icon: "success",
          title: "You havee subscribed"
        })
        this.router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
  },
});
