import { defineStore } from "pinia";
import axios from "axios";

export const usePostStore = defineStore("post", {
  state: () => ({
    baseUrl: "http://localhost:3000",
    posts: [],
  }),
  getters: {},
  actions: {
    async fetchAllPost() {
      try {
        const result = await axios({
          method: "GET",
          url: `${this.baseUrl}/posts`,
          headers: {
            access_token: localStorage.access_token,
          },
        });

        this.posts = result.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
});
