import { defineStore } from "pinia";
import Swal from "sweetalert2";
import axios from "axios";

export const useLoginStore = defineStore({
  id: "login",
  state: () => ({
    inventories: [],
    isLogin: false,
  }),
  actions: {
    async loginAja(email, password) {
      try {
        let { data } = await axios({
          url: "https://laksana-baru.herokuapp.com/login",
          method: "post",
          data: {
            email: email,
            password: password,
          },
        });
        localStorage.setItem("access_token", data.access_token);
        this.router.push("/");
        this.isLogin = true;
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Welcome ..",
          showConfirmButton: false,
          timer: 1500,
        });
      } catch (error) {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Invalid Email or Password",
        });
      }
    },
    async register(username, email, password) {
      try {
        let { data } = await axios({
          url: "https://laksana-baru.herokuapp.com/register",
          method: "post",
          data: {
            email: email,
            password: password,
            username: username,
          },
        });
        this.router.push("/login");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Success Register",
          showConfirmButton: false,
          timer: 1500,
        });
      } catch (error) {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message,
        });
      }
    },
  },
});
