import { defineStore } from "pinia";
import axios from "axios";

export const useCartStore = defineStore("cart", {
  state: () => ({
    isLog: false,
    // baseUrl: "http://localhost:3000",
    baseUrl: "https://individual-project-budi.herokuapp.com",
    isLog: false,
    carts: [],
    cartsFormat: {},
    address: "",
    shipping: 0,
    orderId: 800,
  }),
  actions: {
    async getCart() {
      try {
        console.log("hi");
        const { data } = await axios({
          url: this.baseUrl + "/mycart",
          method: "get",
          headers: {
            token: localStorage.getItem("token"),
          },
        });
        this.carts = data;
        console.log(data);
        // this.cartsFormat
      } catch (err) {
        console.log(err);
      }
    },
    async addAddress(value) {
      try {
        const { data } = await axios({
          url: this.baseUrl + "/address",
          method: "post",
          headers: {
            token: localStorage.getItem("token"),
          },
          data: {
            name: value.name,
            street: value.street,
            city: value.city,
          },
        });
        this.address = data;
        this.router.push("/mycart");
        this.getCart();
      } catch (err) {
        console.log(err);
      }
    },
    async getAddress() {
      try {
        const { data } = await axios({
          url: this.baseUrl + "/address",
          method: "get",
          headers: {
            token: localStorage.getItem("token"),
          },
        });
        this.address = data[0].city;
      } catch (err) {
        console.log(err);
      }
    },
    async addToCart(id) {
      try {
        const { data } = await axios({
          url: this.baseUrl + `/cart/${id}`,
          method: "post",
          headers: {
            token: localStorage.getItem("token"),
          },
        });
        this.router.push("/mycart");
      } catch (err) {
        console.log(err);
      }
    },
    async shippingFee(value) {
      try {
        console.log("darishipping");
        console.log(value);
        const data = await axios({
          url: this.baseUrl + "/cartshipping",
          method: "post",
          headers: {
            token: localStorage.getItem("token"),
          },
          data: {
            destination: value,
            weight: 500,
            courier: "jne",
          },
        });
        console.log(data.data[0].value);
        this.shipping = data.data[0].value;
      } catch (err) {
        console.log(err);
      }
    },
    async deleteItem(id) {
      try {
        await axios({
          url: this.baseUrl + `/mycart/${id}`,
          method: "delete",
          headers: {
            token: localStorage.getItem("token"),
          },
        });
        this.getCart();
      } catch (err) {
        console.log(err);
      }
    },
    async checkOut(gross) {
      try {
        const id = new Date().getTime();
        const order = `${id}-${localStorage.getItem("userid")}`;
        console.log(gross);
        const { data } = await axios({
          url: this.baseUrl + "/checkout",
          method: "post",
          headers: {
            token: localStorage.getItem("token"),
          },
          data: {
            order: order,
            gross: gross,
          },
        });

        window.location.href = `${data.redirect_url}`;
      } catch (err) {
        console.log(err);
      }
    },
  },
});
