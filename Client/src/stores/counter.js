import { defineStore } from "pinia";
import axios from "axios";
import router from "../router";
import Swal from "sweetalert2";
export const useCounterStore = defineStore("Counter", {
  state: () => ({
    isLogin: false,
    baseUrl: `https://anime-doro.herokuapp.com`,
    apiUrl: `https://api.jikan.moe/v4/anime`,
    dataAnime: [],
    isLoading: true,
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
          console.log(result, "<<<");
          localStorage.setItem("access_token", result.data.access_token);
          localStorage.setItem("paid", result.data.paid);
          localStorage.setItem("paymentProof", result.data.paymentProof);
          this.isLogin = true;
          router.push("/");
        }
      } catch (error) {
        console.log(error, "eror");
        Swal.fire("INVALID EMAIL/PASSWORD");
      }
    },
    async logoutAction() {
      localStorage.clear();
      this.isLogin = false;
      router.push("/login");
    },
    async getAnime(page, search) {
      // console.log(search, "<<<");
      try {
        let result = await axios({
          method: "get",
          url: this.apiUrl + `?page=${page}`,
          params: {
            letter: search,
          },
        });
        console.log(result.data.data, "ini result");
        if (result) {
          this.dataAnime = result.data.data;
        }
        console.log(page, "page");
        // console.log(this.dataAnime[0].data.data, "<<<<");
      } catch (error) {}
    },
    async registerAction(email, password, phoneNumber, bank) {
      try {
        let result = await axios({
          method: "post",
          url: this.baseUrl + `/register`,
          data: {
            email,
            password,
            phoneNumber,
            bank,
          },
        });
        Swal.fire("LOADING...");
        if (result) {
          Swal.fire("Virtual Account Number has Been Sent to Your Email!");
          router.push("/login");
        }
      } catch (error) {
        console.log(error.message, "error");
      }
    },
    async checkLogin() {
      if (localStorage.access_token) {
        this.isLogin = true;
      }
    },
    showAddsFalse() {
      this.showAdds = false;
    },
    showAddsTrue() {
      this.showAdds = true;
    },
    isLoadingTrue() {
      this.isLoading = true;
    },
    isLoadingFalse() {
      this.isLoading = false;
    },
  },
});
