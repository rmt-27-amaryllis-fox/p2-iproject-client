import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore("user", {
  state: () => ({
    isLog: false,
    baseUrl: "http://localhost:3000",
    // baseUrl: "https://individual-project-budi.herokuapp.com",
    isLog: false,
    medicine: "",
  }),
  actions: {
    async login(value) {
      try {
        let { data } = await axios({
          url: this.baseUrl + "/login",
          data: {
            email: value.inputEmail,
            password: value.inputPassword,
          },
          method: "post",
        });
        localStorage.setItem("token", data.token);
        localStorage.setItem("userid", data.userid);
        this.isLog = true;
        this.router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
    async register(value) {
      try {
        console.log(value);
        let { data } = await axios({
          url: this.baseUrl + "/register",
          data: {
            email: value.email,
            name: value.name,
            password: value.password,
          },
          method: "post",
        });
        this.router.push("/login");
      } catch (err) {
        console.log(err);
      }
    },
    async logout() {
      try {
        this.router.push("/");
        localStorage.clear();
        this.isLog = false;
      } catch (err) {
        console.log(err);
      }
    },
    async changePage(value) {
      try {
        this.router.push(`/${value}`);
      } catch (err) {
        console.log(err);
      }
    },
  },
});
