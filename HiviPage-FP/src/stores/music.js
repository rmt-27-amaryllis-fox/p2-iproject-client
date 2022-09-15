import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";

export const useMusicStore = defineStore("music", {
  state: () => ({
    baseUrl: `https://individual-project-hivi.herokuapp.com`,
    photos: [],
    tweets: {},
  }),
  getters: {},
  actions: {
    async getPhoto() {
      try {
        let { data } = await axios.get(`${this.baseUrl}/photos`);
        console.log(data);
        this.photos = data.data;
      } catch (error) {
        console.log(error);
      }
    },
    async getTweet() {
      try {
        let { data } = await axios.get(`${this.baseUrl}/tweets`);
        this.tweets = data;
      } catch (error) {
        console.log(error);
      }
    },
    async sendEmail(message) {
      try {
        console.log(message, "<<< di pinia");
        let send = await axios.post(`${this.baseUrl}/emails`, {
          message,
        });

        Swal.fire("Thank you!", "Your message means a lot❤️", "success");
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message,
        });
      }
    },
  },
});
