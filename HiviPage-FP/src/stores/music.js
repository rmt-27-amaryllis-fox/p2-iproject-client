import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useMusicStore = defineStore("music", {
  state: () => ({
    baseUrl: `http://localhost:3000`,
    photos: [],
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
  },
});
