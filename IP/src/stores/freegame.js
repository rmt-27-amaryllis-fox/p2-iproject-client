import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import swal from "sweetalert";

const BASE_URL = "https://game-searching-aiq.herokuapp.com";

export const useFreeToGamesStore = defineStore("freeToGames", {
  id: "freeToGames",
  state: () => ({
    game: {},
    filter: {
      category: "",
      platform: "",
    },
    sort: "",
    id: "",
  }),
  actions: {
    fetchAll() {
      return axios({
        method: "get",
        url: BASE_URL + "/games",
        params: {
          category: this.filter.category,
          platform: this.filter.platform,
          "sort-by": this.sort,
        },
      });
    },

    async fetchById(id) {
      try {
        const { data } = await axios({
          method: "get",
          url: BASE_URL + "/games",
          params: {
            id,
          },
        });

        this.game = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
