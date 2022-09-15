import { defineStore } from "pinia";
import router from "../router/index";
import axios from "axios";

export const useBaseStore = defineStore("base", {
  state: () => ({
    baseUrl: `https://saikel-in-space.herokuapp.com`,
    isLogin: false,
    name: "",
    role: "",
    Services: [],
    Category: [],
    API: [],
    page: 1,
    per_page: 4,
    min_popularity: "",
    disable: false,
    totalCount: 0,
    Query: "",
    access_key: `6c3d3f3651874515bfd114b916167834`,
    location: "Jakarta",
    weather: [],
  }),
  actions: {
    register(value) {
      axios({
        method: "POST",
        url: `${this.baseUrl}/register`,
        data: value,
      })
        .then(() => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Success to register",
            showConfirmButton: false,
            timer: 1500,
          });
          router.push("/login");
        })
        .catch((err) => {
          Swal.fire({
            position: "center",
            icon: "error",
            title: `${err.response.data.message}`,
            showConfirmButton: false,
            timer: 1500,
          });
        });
    },
    login(value) {
      // console.log(value);
      axios({
        method: "POST",
        url: `${this.baseUrl}/login`,
        data: value,
      })
        .then((data) => {
          console.log(data, "dari");
          localStorage.setItem("access_token", data.data.access_token);
          localStorage.setItem("user", data.data.name);
          localStorage.setItem("role", data.data.role);
          this.isLogin = true;
          this.name = data.data.name;
          this.role = data.data.role;
          this.fetchServices();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Success to Login",
            showConfirmButton: false,
            timer: 1500,
          });
          router.push("/");
        })
        .catch((err) => {
          Swal.fire({
            position: "center",
            icon: "error",
            title: `${err.response.data.message}`,
            showConfirmButton: false,
            timer: 1500,
          });
          router.push("/");
        });
    },
    logOut() {
      Swal.fire({
        position: "center",
        icon: "success",
        title: `You're log out now`,
        text: "Good to see you again !",
        showConfirmButton: false,
        timer: 1500,
      });
      localStorage.clear();
      this.isLogin = false;
      router.push("/login");
    },
    fetchServices() {
      axios({
        method: "GET",
        url: `${this.baseUrl}/services/`,
      })
        .then((data) => {
          this.Services = data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchCategories() {
      axios({
        method: "get",
        url: `${this.baseUrl}/category`,
      }).then((data) => {
        this.Category = data.data;
      });
    },
    createService(value) {
      console.log(value, "dari base");
      axios({
        method: "post",
        url: `${this.baseUrl}/services`,
        data: {
          CategoryId: value.selected,
          ServiceDate: value.ServiceDate,
        },
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      })
        .then((response) => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Success to Add Data",
            showConfirmButton: false,
            timer: 1500,
          });
          router.push("/");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchAPI() {
      console.log(this.Query, "QUery");
      if (this.Query == "") {
        this.Query = `per_page=8`;
      }
      axios({
        method: "get",
        url: `https://bikeindex.org:443/api/v3/selections/wheel_sizes?${this.Query}`,
      })
        .then((response) => {
          this.API = response.data.wheel_sizes;
          console.log(this.API, "dari APi");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    popularity(value) {
      console.log(value);
      this.Query = `page=${this.page}&per_page=${this.per_page}&min_popularity=${value.popularity}`;
      this.fetchAPI();
    },
    changePage(value) {
      // console.log(value, "change");
      this.page += value;
      this.Query = `page=${this.page}&per_page=${this.per_page}`;
      this.fetchAPI();
    },
    weatherAPI() {
      axios({
        method: "get",
        url: `http://api.weatherstack.com/current?access_key=${this.access_key}&query=${this.location}`,
      })
        .then((response) => {
          // console.log(response, "dari wether");
          this.weather.push(response.data);
          console.log(this.weather, "dari weathernya base");
          // console.log(this.weather, "dari weathernya base");
        })
        .catch((err) => {
          Swal.fire({
            position: "center",
            icon: "error",
            title: `${err.response.data.message}`,
            showConfirmButton: false,
            timer: 1500,
          });
          console.log(err);
        });
    },
    locWeather(value) {
      this.location = "";
      console.log(this.location);
      this.location = value.location;
      this.weatherAPI();
      // console.log(value);
    },
  },
});
