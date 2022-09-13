import { defineStore } from "pinia";
import axios from "axios";

export const useLoginStore = defineStore({
  id: "login",
  state: () => ({
    inventories: [],
  }),
  actions: {
    async loginAja(email, password) {
      try {
        let { data } = await axios({
          url: "http://localhost:3000/login",
          method: "post",
          data: {
            email: email,
            password: password,
          },
        });
        localStorage.setItem("access_token", data.access_token);
        this.router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
    async register(username, email, password) {
      try {
        let { data } = await axios({
          url: "http://localhost:3000/register",
          method: "post",
          data: {
            email: email,
            password: password,
            username: username,
          },
        });
        this.router.push("/login");
      } catch (error) {
        console.log(error);
      }
    },
  },
});
