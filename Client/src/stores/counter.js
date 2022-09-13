import { defineStore } from "pinia";
import axios from "axios";
import router from "../router";

export const useCounterStore = defineStore("Counter", {
  state: () => ({
    isLogin: false,
    baseUrl: `https://phase2-livecode2-2nd.herokuapp.com`,
    apiUrl: `https://api.jikan.moe/v4/anime`,
    dataAnime: [],
  }),
  actions: {
    async loginAction(email, password) {
      try {
        let result = await axios({
          method: "post",
          url: `${this.baseUrl}/login`,
          data: {
            email,
            password,
          },
        });
        if (result) {
          localStorage.setItem("access_token", result.data.access_token);
          this.isLogin = true;
          router.push("/");
        }
      } catch (error) {
        console.log(error, "eror");
      }
    },
    async logoutAction() {
      localStorage.clear();
      this.isLogin = false;
      router.push("/login");
    },
    async getAnime(page) {
      try {
        let result = await axios({
          method: "get",
          url: this.apiUrl + `?page=${page}`,
        });
        console.log(result.data.data, "ini result");
        if (result) {
          this.dataAnime = result.data.data;
        }
        console.log(page, "page");
        // console.log(this.dataAnime[0].data.data, "<<<<");
      } catch (error) {}
    },
  },
});
