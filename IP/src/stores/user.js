import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

const BASE_URL = "http://localhost:3000";
const acces_token = localStorage.getItem("acces_token");

export const useUserStore = defineStore("user", {
  id: "user",
  state: () => ({
    isLogin: localStorage.getItem("acces_token") ? true : false,
    myCart: [],
  }),
  actions: {
    async login(email, password) {
      try {
        const { data } = await axios({
          method: "post",
          url: BASE_URL + "/login",
          data: {
            email,
            password,
          },
        });

        if (data) {
          localStorage.setItem("acces_token", data.acces_token);
          this.isLogin = true;
          swal("You are logged in", "", "success");
          this.router.push("/");
        }
      } catch (error) {
        swal(error.response.data.message, "", "error");
      }
    },

    logout() {
      localStorage.clear();
      swal("You are logged out, Bye!", "", "success");
      this.isLogin = false;
      this.router.push("/login");
    },

    async register(payload) {
      try {
        const { data } = await axios({
          method: "post",
          url: BASE_URL + "/register",
          data: payload,
        });
        swal("You have an account Now", "", "success");
        this.router.push("/login");
      } catch (error) {
        swal(error.response.data.message, "", "error");
      }
    },

    async addToCart(itemName, price) {
      if (!this.isLogin) {
        this.router.push("/login");
        swal("You must be logged in to buy!", "", "info");
        return;
      }

      try {
        const config = {
          method: "post",
          url: BASE_URL + "/mycart",
          headers: {
            acces_token,
          },
          data: {
            itemName,
            price,
          },
        };
        swal("Success add to cart", "", "success");
        const { data } = await axios(config);
      } catch (error) {
        console.log(error);
      }
    },

    async fetchMyCart() {
      try {
        if (!this.isLogin) {
          this.router.push("/login");
          swal("You must be logged in fisrt!", "", "info");
          return;
        }
        const config = {
          method: "get",
          url: BASE_URL + "/mycart",
          headers: {
            acces_token,
          },
        };
        const { data } = await axios(config);

        this.myCart = data;
      } catch (error) {
        console.log(error);
      }
    },

    async deleteFromCart(id) {
      try {
        const config = {
          method: "delete",
          url: BASE_URL + "/mycart",
          headers: {
            acces_token,
          },
          data: {
            id,
          },
        };
        const { data } = await axios(config);
        if (data) {
          swal("Delete item from cart", "", "success");
          this.fetchMyCart();
        }
      } catch (error) {
        console.log(error);
      }
    },

    async checkout(totalPrice, paymentType) {
      try {
        
        const config = {
          method: "post",
          url: BASE_URL + "/transaction",
          headers: {
            acces_token,
          },
          data: {
            totalPrice,
            paymentType,
          },
        };
        const { data } = await axios(config);
        if (data) {
          swal("Thanks for buying!~", "", "success");
          this.router.push("/"); //trans history
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
});
